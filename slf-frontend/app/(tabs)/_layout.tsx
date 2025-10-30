// Import of the different libraries
import { Slot, usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

// Import of the different components 
import Navigation from "../../components/navigation";

// Logical order of pages in the NavBar
const PAGE_ORDER = ["profile", "search", "chat", "settings"];


export default function TabLayout() {
  const pathname = usePathname();
  const translateX = useRef(new Animated.Value(0)).current;
  const previousPage = useRef<string | null>(null);
  const currentPage = PAGE_ORDER.find((p) => pathname.includes(p)) || "profile";
  const isHomePage = pathname === "/" || pathname.includes("/index");
  
  // List of subpages that should not display the NavBar
  const isSubPage = pathname.includes("/privacy") || 
                    pathname.includes("/payment") ||
                    pathname.includes("/register") ||
                    pathname.includes("/gpu");

  useEffect(() => {
    const previous = previousPage.current;

    if (previous && currentPage && previous !== currentPage) {
      const currentIndex = PAGE_ORDER.indexOf(currentPage);
      const previousIndex = PAGE_ORDER.indexOf(previous);

      // Determines the direction of the transition
      const direction = currentIndex > previousIndex ? 1 : -1;

      // Starting position (off-screen)
      translateX.setValue(direction * 400);

      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }

    previousPage.current = currentPage || null;
  }, [pathname]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateX }],
        }}
      >
        <Slot />
      </Animated.View>

      {/* Displays the NavBar only on main pages (not Home or subpages) */}
      {!isHomePage && !isSubPage && <Navigation activePage={currentPage} />}
    </View>
  );
}
