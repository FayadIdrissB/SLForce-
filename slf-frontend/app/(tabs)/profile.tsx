// import of the different libraries
import { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import of the different components 
import Navigation from '../../components/navigation';

// import CSS styles
import { Stack } from 'expo-router';
import { styles } from '../../styles/profile';


const IconWrapper = ({ emoji, size = 24 }: { emoji: string; size?: number }) => (
  <Text style={{ fontSize: size }}>{emoji}</Text>
);

const BearLiftAthlete = () => {
  const [activePage, setActivePage] = useState('profile');
  const [isEditingRecords, setIsEditingRecords] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [records, setRecords] = useState({
    muscleUp: '16.25',
    traction: '50',
    dips: '70',
    squat: '120',
  });

  const [profile, setProfile] = useState({
    name: 'Youssef',
    photo: null as string | null,
    gender: 'male' as 'male' | 'female',
    weightCategory: '-80',
    weight: '78',
    height: '175',
  });

  const handleRecordChange = (field: keyof typeof records, value: string) => {
    setRecords({ ...records, [field]: value });
  };

  const handleProfileChange = (field: keyof typeof profile, value: any) => {
    setProfile({ ...profile, [field]: value });
  };

  const calculateTotal = () => {
    const total =
      parseFloat(records.muscleUp || '0') +
      parseFloat(records.traction || '0') +
      parseFloat(records.dips || '0') +
      parseFloat(records.squat || '0');
    return total.toFixed(2);
  };

  const maleCategories = ['-66', '-73', '-80', '-87', '-94', '-104', '+104'];
  const femaleCategories = ['-52', '-63', '-70', '+70'];
  const categories = profile.gender === 'male' ? maleCategories : femaleCategories;

  return (
    <SafeAreaView style={styles.app}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.app__container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.header__content}>
            <View>
              <Text style={styles.header__title}>Ma Fiche Athlète</Text>
              <Text style={styles.header__subtitle}>Street Lifting Records 🏆</Text>
            </View>
            <IconWrapper emoji="🏆" size={40} />
          </View>
        </View>

        <ScrollView style={styles.main} contentContainerStyle={styles.main__content} showsVerticalScrollIndicator={false}>
          {/* Profile Card */}
          <View style={styles.card}>
            <View style={styles.card__header}>
              <View style={styles.card__titleWrapper}>
                <IconWrapper emoji="👤" size={24} />
                <Text style={styles.card__title}>Profil Athlète</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsEditingProfile(!isEditingProfile)}
                style={[
                  styles.button,
                  styles['button--icon'],
                  isEditingProfile ? styles['button--danger'] : styles['button--primary'],
                ]}
              >
                <IconWrapper emoji={isEditingProfile ? '✖️' : '✏️'} size={15} />
              </TouchableOpacity>
            </View>

            {/* Photo */}
            <View style={styles.profile}>
              <View style={styles.profile__photoWrapper}>
                {profile.photo ? (
                  <Image source={{ uri: profile.photo }} style={styles.profile__photo} />
                ) : (
                  <View style={styles.profile__photoPlaceholder}>
                    <Text style={styles.profile__photoEmoji}>💪</Text>
                  </View>
                )}
                {isEditingProfile && (
                  <TouchableOpacity style={styles.profile__cameraButton}>
                    <IconWrapper emoji="📷" size={18} />
                  </TouchableOpacity>
                )}
              </View>

              {/* Name */}
              {isEditingProfile ? (
                <TextInput
                  value={profile.name}
                  onChangeText={(text) => handleProfileChange('name', text)}
                  style={styles.profile__nameInput}
                />
              ) : (
                <Text style={styles.profile__name}>{profile.name}</Text>
              )}
              <Text style={styles.profile__username}>@{profile.name.toLowerCase()}_beast</Text>
            </View>

            {/* Gender Selection */}
            <View style={styles.field}>
              <Text style={styles.field__label}>GENRE</Text>
              <View style={styles.genderSelector}>
                <TouchableOpacity
                  onPress={() => isEditingProfile && handleProfileChange('gender', 'male')}
                  disabled={!isEditingProfile}
                  style={[
                    styles.genderSelector__button,
                    profile.gender === 'male' && styles['genderSelector__button--active'],
                    !isEditingProfile && styles['genderSelector__button--disabled'],
                  ]}
                >
                  <Text style={styles.genderSelector__emoji}>👨</Text>
                  <Text style={styles.genderSelector__text}>HOMME</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => isEditingProfile && handleProfileChange('gender', 'female')}
                  disabled={!isEditingProfile}
                  style={[
                    styles.genderSelector__button,
                    profile.gender === 'female' && styles['genderSelector__button--active'],
                    !isEditingProfile && styles['genderSelector__button--disabled'],
                  ]}
                >
                  <Text style={styles.genderSelector__emoji}>👩</Text>
                  <Text style={styles.genderSelector__text}>FEMME</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Weight Category */}
            <View style={styles.field}>
              <Text style={styles.field__label}>CATÉGORIE DE POIDS</Text>
              <View style={styles.categoryGrid}>
                {categories.map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    onPress={() => isEditingProfile && handleProfileChange('weightCategory', cat)}
                    disabled={!isEditingProfile}
                    style={[
                      styles.categoryGrid__button,
                      profile.weightCategory === cat && styles['categoryGrid__button--active'],
                      !isEditingProfile && styles['categoryGrid__button--disabled'],
                    ]}
                  >
                    <Text
                      style={[
                        styles.categoryGrid__text,
                        profile.weightCategory === cat && styles['categoryGrid__text--active'],
                      ]}
                    >
                      {cat} kg
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Weight and Height */}
            <View style={styles.statsRow}>
              <View style={styles.statsRow__item}>
                <View style={styles.field__labelWrapper}>
                  <IconWrapper emoji="⚖️" size={16} />
                  <Text style={styles.field__label}>POIDS (kg)</Text>
                </View>
                <TextInput
                  value={profile.weight}
                  onChangeText={(text) => handleProfileChange('weight', text)}
                  editable={isEditingProfile}
                  keyboardType="numeric"
                  style={[
                    styles.input,
                    isEditingProfile ? styles['input--active'] : styles['input--disabled'],
                  ]}
                />
              </View>

              <View style={styles.statsRow__item}>
                <View style={styles.field__labelWrapper}>
                  <IconWrapper emoji="📏" size={16} />
                  <Text style={styles.field__label}>TAILLE (cm)</Text>
                </View>
                <TextInput
                  value={profile.height}
                  onChangeText={(text) => handleProfileChange('height', text)}
                  editable={isEditingProfile}
                  keyboardType="numeric"
                  style={[
                    styles.input,
                    isEditingProfile ? styles['input--active'] : styles['input--disabled'],
                  ]}
                />
              </View>
            </View>

            {isEditingProfile && (
              <TouchableOpacity
                onPress={() => setIsEditingProfile(false)}
                style={[styles.button, styles['button--full'], styles['button--save']]}
              >
                <IconWrapper emoji="💾" size={20} />
                <Text style={styles.button__text}>Enregistrer le profil</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Records Card */}
          <View style={styles.card}>
            <View style={styles.card__header}>
              <View style={styles.card__titleWrapper}>
                <IconWrapper emoji="🥇" size={24} />
                <Text style={styles.card__title}>Records Personnels</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsEditingRecords(!isEditingRecords)}
                style={[
                  styles.button,
                  styles['button--icon'],
                  isEditingRecords ? styles['button--danger'] : styles['button--warning'],
                ]}
              >
                <IconWrapper emoji={isEditingRecords ? '✖️' : '✏️'} size={15} />
              </TouchableOpacity>
            </View>

            {/* Records */}
            <View style={styles.recordsList}>
              {/* Muscle-up */}
              <View style={[styles.recordItem, styles['recordItem--red']]}>
                <View style={styles.recordItem__header}>
                  <IconWrapper emoji="🔥" size={30} />
                  <Text style={styles.recordItem__label}>MUSCLE-UP</Text>
                  {!isEditingRecords && <IconWrapper emoji="📈" size={16} />}
                </View>
                <View style={styles.recordItem__inputWrapper}>
                  <TextInput
                    value={records.muscleUp}
                    onChangeText={(text) => handleRecordChange('muscleUp', text)}
                    editable={isEditingRecords}
                    keyboardType="numeric"
                    style={[
                      styles.recordItem__input,
                      isEditingRecords
                        ? styles['recordItem__input--active']
                        : styles['recordItem__input--disabled'],
                    ]}
                  />
                  <Text style={styles.recordItem__unit}>kg</Text>
                </View>
              </View>

              {/* Traction */}
              <View style={[styles.recordItem, styles['recordItem--blue']]}>
                <View style={styles.recordItem__header}>
                  <IconWrapper emoji="🦾" size={30} />
                  <Text style={styles.recordItem__label}>TRACTION</Text>
                  {!isEditingRecords && <IconWrapper emoji="📈" size={16} />}
                </View>
                <View style={styles.recordItem__inputWrapper}>
                  <TextInput
                    value={records.traction}
                    onChangeText={(text) => handleRecordChange('traction', text)}
                    editable={isEditingRecords}
                    keyboardType="numeric"
                    style={[
                      styles.recordItem__input,
                      isEditingRecords
                        ? styles['recordItem__input--active']
                        : styles['recordItem__input--disabled'],
                    ]}
                  />
                  <Text style={styles.recordItem__unit}>kg</Text>
                </View>
              </View>

              {/* Dips */}
              <View style={[styles.recordItem, styles['recordItem--green']]}>
                <View style={styles.recordItem__header}>
                  <IconWrapper emoji="💪" size={30} />
                  <Text style={styles.recordItem__label}>DIPS</Text>
                  {!isEditingRecords && <IconWrapper emoji="📈" size={16} />}
                </View>
                <View style={styles.recordItem__inputWrapper}>
                  <TextInput
                    value={records.dips}
                    onChangeText={(text) => handleRecordChange('dips', text)}
                    editable={isEditingRecords}
                    keyboardType="numeric"
                    style={[
                      styles.recordItem__input,
                      isEditingRecords
                        ? styles['recordItem__input--active']
                        : styles['recordItem__input--disabled'],
                    ]}
                  />
                  <Text style={styles.recordItem__unit}>kg</Text>
                </View>
              </View>

              {/* Squat */}
              <View style={[styles.recordItem, styles['recordItem--yellow']]}>
                <View style={styles.recordItem__header}>
                  <IconWrapper emoji="🦵" size={30} />
                  <Text style={styles.recordItem__label}>SQUAT</Text>
                  {!isEditingRecords && <IconWrapper emoji="📈" size={16} />}
                </View>
                <View style={styles.recordItem__inputWrapper}>
                  <TextInput
                    value={records.squat}
                    onChangeText={(text) => handleRecordChange('squat', text)}
                    editable={isEditingRecords}
                    keyboardType="numeric"
                    style={[
                      styles.recordItem__input,
                      isEditingRecords
                        ? styles['recordItem__input--active']
                        : styles['recordItem__input--disabled'],
                    ]}
                  />
                  <Text style={styles.recordItem__unit}>kg</Text>
                </View>
              </View>
            </View>

            {isEditingRecords && (
              <TouchableOpacity
                onPress={() => setIsEditingRecords(false)}
                style={[styles.button, styles['button--full'], styles['button--saveRecords']]}
              >
                <IconWrapper emoji="💾" size={20} />
                <Text style={styles.button__text}>Enregistrer les records</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Total Score */}
          <View style={styles.totalCard}>
            <View style={styles.totalCard__content}>
              <View>
                <Text style={styles.totalCard__subtitle}>TOTAL STREET LIFTING</Text>
                <Text style={styles.totalCard__total}>{calculateTotal()}</Text>
                <Text style={styles.totalCard__unit}>kg combinés</Text>
              </View>
              <IconWrapper emoji="🎯" size={64} />
            </View>
          </View>

          {/* Info Box */}
          <View style={styles.infoBox}>
            <IconWrapper emoji="💡" size={24} />
            <View style={styles.infoBox__content}>
              <Text style={styles.infoBox__title}>Comment améliorer ton score ?</Text>
              <Text style={styles.infoBox__text}>
                Ton total Street Lifting est la somme de tes 4 records. Continue à t'entraîner
                régulièrement avec ton coach pour battre tes records ! 🔥
              </Text>
            </View>
          </View>
        </ScrollView>

        <Navigation activePage={activePage} onNavigate={setActivePage} />
      </View>
    </SafeAreaView>
  );
};

export default BearLiftAthlete;