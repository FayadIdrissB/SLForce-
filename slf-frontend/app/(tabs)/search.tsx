// import of the different libraries
import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import of the different components
import Navigation from '../../components/navigation';
import SearchHeader from '../../components/searchHeader';

// import CSS styles
import styles from '../../styles/search';

interface Coach {
  id: number;
  name: string;
  avatar: string;
  speciality: string;
  location: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  experience: string;
  verified: boolean;
  premium: boolean;
  description: string;
  skills: string[];
}

const CATEGORIES = [
  { id: 'all', label: 'Tous', icon: '🔥' },
  { id: 'calisthenics', label: 'Calisthenics', icon: '💪' },
  { id: 'musculation', label: 'Street-Lifting', icon: '🏋️' },
  { id: 'cardio', label: 'Endurence', icon: '🏃' },
  { id: 'nutrition', label: 'Freestyle', icon: '🫣' },
];

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const coaches: Coach[] = [
    {
      id: 1,
      name: 'Coach Malik',
      avatar: '🦍',
      speciality: 'Calisthenics Expert',
      location: 'Lyon, France',
      rating: 4.9,
      reviews: 127,
      students: 45,
      price: 49.99,
      experience: '8 ans',
      verified: true,
      premium: true,
      description: 'Spécialiste en street workout et calisthenics. Je t\'aide à maîtriser les figures avancées !',
      skills: ['Muscle-ups', 'Handstand', 'Planche'],
    },
    {
      id: 2,
      name: 'Coach Sarah',
      avatar: '🏋️',
      speciality: 'Musculation & Force',
      location: 'Paris, France',
      rating: 4.8,
      reviews: 98,
      students: 38,
      price: 39.99,
      experience: '5 ans',
      verified: true,
      premium: false,
      description: 'Coach certifiée en musculation. Programme personnalisé pour atteindre tes objectifs !',
      skills: ['Force', 'Prise de masse', 'Technique'],
    },
    {
      id: 3,
      name: 'Coach Karim',
      avatar: '🥇',
      speciality: 'Street Workout Pro',
      location: 'Marseille, France',
      rating: 5.0,
      reviews: 156,
      students: 62,
      price: 59.99,
      experience: '10 ans',
      verified: true,
      premium: true,
      description: 'Champion national de street workout. Transforme ton physique en 3 mois garanti !',
      skills: ['Front Lever', 'Human Flag', 'One Arm Pull-up'],
    },
    {
      id: 4,
      name: 'Coach Aya',
      avatar: '💃',
      speciality: 'Cardio & Mobilité',
      location: 'Bordeaux, France',
      rating: 4.7,
      reviews: 82,
      students: 29,
      price: 34.99,
      experience: '4 ans',
      verified: true,
      premium: false,
      description: 'Spécialisée en cardio et souplesse. Perte de poids et condition physique optimale !',
      skills: ['HIIT', 'Stretching', 'Endurance'],
    },
    {
      id: 5,
      name: 'Coach Ahmed',
      avatar: '🎯',
      speciality: 'Nutrition Sportive',
      location: 'Lille, France',
      rating: 4.9,
      reviews: 103,
      students: 51,
      price: 44.99,
      experience: '6 ans',
      verified: true,
      premium: true,
      description: 'Nutritionniste diplômé. Plans alimentaires sur mesure pour performers !',
      skills: ['Diététique', 'Perte de poids', 'Prise de masse'],
    },
  ];

  const filteredCoaches = coaches.filter((coach) =>
    coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coach.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coach.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCoach = ({ item }: { item: Coach }) => (
    <TouchableOpacity style={styles['search__coach-card']}>
      <View style={styles['search__coach-header']}>
        <View style={styles['search__coach-avatar']}>
          <Text style={styles['search__coach-avatar-emoji']}>{item.avatar}</Text>
        </View>
        <View style={styles['search__coach-info']}>
          <View style={styles['search__coach-name-wrapper']}>
            <Text style={styles['search__coach-name']}>{item.name}</Text>
            {item.verified && (
              <View style={styles['search__coach-verified']}>
                <Text style={styles['search__coach-verified-icon']}>✓</Text>
              </View>
            )}
            {item.premium && (
              <Text style={styles['search__coach-premium']}>👑</Text>
            )}
          </View>
          <Text style={styles['search__coach-speciality']}>{item.speciality}</Text>
          <View style={styles['search__coach-location-wrapper']}>
            <Text style={styles['search__coach-location-icon']}>📍</Text>
            <Text style={styles['search__coach-location']}>{item.location}</Text>
          </View>
          <View style={styles['search__coach-stats']}>
            <View style={styles['search__coach-stat']}>
              <Text style={styles['search__coach-stat-icon']}>⭐</Text>
              <Text style={styles['search__coach-stat-value']}>{item.rating}</Text>
              <Text style={styles['search__coach-stat-label']}>({item.reviews})</Text>
            </View>
            <View style={styles['search__coach-stat']}>
              <Text style={styles['search__coach-stat-icon']}>👥</Text>
              <Text style={styles['search__coach-stat-label']}>{item.students}</Text>
            </View>
            <View style={styles['search__coach-stat']}>
              <Text style={styles['search__coach-stat-icon']}>🏅</Text>
              <Text style={styles['search__coach-stat-label']}>{item.experience}</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={styles['search__coach-description']}>{item.description}</Text>

      <View style={styles['search__coach-skills']}>
        {item.skills.map((skill, index) => (
          <View key={index} style={styles['search__coach-skill']}>
            <Text style={styles['search__coach-skill-text']}>{skill}</Text>
          </View>
        ))}
      </View>

      <View style={styles['search__coach-footer']}>
        <View>
          <Text style={styles['search__coach-price-label']}>À partir de</Text>
          <View style={styles['search__coach-price-wrapper']}>
            <Text style={styles['search__coach-price']}>{item.price}€</Text>
            <Text style={styles['search__coach-price-period']}>/mois</Text>
          </View>
        </View>
        <TouchableOpacity style={styles['search__coach-contact-btn']}>
          <Text style={styles['search__coach-contact-btn-text']}>Contacter</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EFF6FF' }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.search}
          data={filteredCoaches}
          renderItem={renderCoach}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ ...styles['search__results-list'], paddingBottom: 96 }}
          showsVerticalScrollIndicator={false}
          // ⚠️ IMPORTANT: We pass an ELEMENT and not a function to avoid remounts
          ListHeaderComponent={
            <SearchHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={CATEGORIES}
            />
          }
          keyboardShouldPersistTaps="handled"
        />
        <Navigation activePage="search" />
      </View>
    </SafeAreaView>
  );
};

export default Search;