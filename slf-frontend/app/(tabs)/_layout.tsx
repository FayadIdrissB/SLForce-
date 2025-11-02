// Import of the different libraries
import { Slot, usePathname } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

// Import of the different components 
import Navigation from "../../components/navigation";
import { navState } from "../../utils/navigationState";

// Logical order of pages in the NavBar
const PAGE_ORDER = ["profile", "search", "chat", "settings"];

export default function TabLayout() {
  const pathname = usePathname();
  const translateX = useRef(new Animated.Value(0)).current;
  const previousPage = useRef<string | null>(null);
  const currentPage = PAGE_ORDER.find((p) => pathname.includes(p)) || "profile";
  const isHomePage = pathname === "/" || pathname.includes("/index");
  
  // List of subpages that should not display the NavBar
  const isSubPage = 
    pathname.includes("/gpu") ||
    pathname.includes("/privacy") || 
    pathname.includes("/payment") ||
    pathname.includes("/support") ||
    pathname.includes("/register") ||
    pathname.includes("/settingProfil");

  useEffect(() => {
    const previous = previousPage.current;
    const wasOnSubPage = previousPage.current === 'subpage';

    // Si on revient d'une sous-page vers une page principale
    if (wasOnSubPage && !isSubPage) {
      if (navState.gestureBack) {
        // Retour par gesture: pas d'animation d'entrée pour éviter l'écran intermédiaire
        translateX.setValue(0);
        navState.gestureBack = false;
      } else {
        // Animation de gauche à droite (retour)
        translateX.setValue(-400);
        Animated.timing(translateX, {
          toValue: 0,
          duration: 250,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }).start();
      }
    }
    // Si on va vers une sous-page
    else if (!wasOnSubPage && isSubPage) {
      // Animation de droite à gauche (navigation vers sous-page)
      translateX.setValue(400);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
    }
    // Navigation entre pages principales
    else if (previous && currentPage && previous !== currentPage && !isSubPage) {
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

    // Met à jour la page précédente
    previousPage.current = isSubPage ? 'subpage' : currentPage || null;
  }, [pathname, isSubPage]);

  return (
    <View style={{ flex: 1, backgroundColor: '#EFF6FF' }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#EFF6FF',
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
