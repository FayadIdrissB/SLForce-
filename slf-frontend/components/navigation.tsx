// import of the different libraries
import { useRouter } from 'expo-router';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import CSS styles
import { styles } from './ui/navigation';

type NavigationProps = {
  activePage: string;
};

const IconWrapper = ({ emoji, size = 22 }: { emoji: string; size?: number }) => (
  <Text style={{ fontSize: size }}>{emoji}</Text>
);


const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      style={[
        styles.nav,
        Platform.OS === 'ios' ? { paddingBottom: insets.bottom } : null,
      ]}
    >
      <View style={styles.nav__container}>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/profile')}
          style={[styles.nav__button, activePage === 'profile' && styles.nav__buttonActive]}
        >
          <View
            style={[
              styles.nav__iconWrapper,
              activePage === 'profile' && styles.nav__iconWrapperActive,
            ]}
          >
            <IconWrapper emoji="🐻" />
          </View>
          <Text
            style={[styles.nav__label, activePage === 'profile' && styles.nav__labelActive]}
          >
            Athlète
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/search')}
          style={[styles.nav__button, activePage === 'search' && styles.nav__buttonActive]}
        >
          <View
            style={[
              styles.nav__iconWrapper,
              activePage === 'search' && styles.nav__iconWrapperActive,
            ]}
          >
            <IconWrapper emoji="🔍" />
          </View>
          <Text
            style={[styles.nav__label, activePage === 'search' && styles.nav__labelActive]}
          >
            Recherche
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/chat')}
          style={[styles.nav__button, activePage === 'messages' && styles.nav__buttonActive]}
        >
          <View
            style={[
              styles.nav__iconWrapper,
              activePage === 'messages' && styles.nav__iconWrapperActive,
            ]}
          >
            <IconWrapper emoji="💬" />
          </View>
          <Text
            style={[styles.nav__label, activePage === 'messages' && styles.nav__labelActive]}
          >
            Messages
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/(tabs)/settings')}
          style={[styles.nav__button, activePage === 'settings' && styles.nav__buttonActive]}
        >
          <View
            style={[
              styles.nav__iconWrapper,
              activePage === 'settings' && styles.nav__iconWrapperActive,
            ]}
          >
            <IconWrapper emoji="⚙️" />
          </View>
          <Text
            style={[styles.nav__label, activePage === 'settings' && styles.nav__labelActive]}
          >
            Réglages
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Navigation;