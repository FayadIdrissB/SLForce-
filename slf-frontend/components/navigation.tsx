// import of the different libraries
import { useRouter } from 'expo-router';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './ui/navigation';

// import images JPG (une seule par icône)
import athlete from '../assets/images/athlete.jpg';
import search from '../assets/images/loupe.png';
import chat from '../assets/images/message.png';
import settings from '../assets/images/reglage.png';

type NavigationProps = {
  activePage: string;
};

// ordre des pages dans la barre de navigation
const pages = ['profile', 'search', 'chat', 'settings'];

const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // Fonction de navigation simple
  const handleNavigate = (page: string) => {
    if (page === activePage) return;
    router.push(`/(tabs)/${page}` as any);
  };

  // Configuration des boutons
  const navItems = [
    { key: 'profile', label: 'Athlète', image: athlete },
    { key: 'search', label: 'Recherche', image: search },
    { key: 'chat', label: 'Messages', image: chat },
    { key: 'settings', label: 'Réglages', image: settings },
  ];

  return (
    <View
      style={[
        styles.nav,
        Platform.OS === 'ios' ? { paddingBottom: insets.bottom } : null,
      ]}
    >
      <View style={styles.nav__container}>
        {navItems.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => handleNavigate(item.key)}
            style={[
              styles.nav__button,
              activePage === item.key && styles.nav__buttonActive,
            ]}
          >
            <View
              style={[
                styles.nav__iconWrapper,
                activePage === item.key && styles.nav__iconWrapperActive,
              ]}
            >
              <Image
                source={item.image}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  opacity: activePage === item.key ? 1 : 0.6, // léger effet visuel actif/inactif
                }}
                resizeMode="cover"
              />
            </View>
            <Text
              style={[
                styles.nav__label,
                activePage === item.key && styles.nav__labelActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Navigation;