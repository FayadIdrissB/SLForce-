// import of the different libraries
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import CSS styles
import { styles } from '../../styles/chat';

// Simulate icons with emojis
const IconWrapper = ({ emoji, size = 24 }: { emoji: string; size?: number }) => (
  <Text style={{ fontSize: size }}>{emoji}</Text>
);

interface ChatItem {
  id: number;
  name: string;
  avatar: string;
  lastMsg: string;
  time: string;
  unread: number;
  status: 'online' | 'offline';
}

const Chat: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const chats: ChatItem[] = [
    { id: 1, name: 'Coach Malik', avatar: '🦍', lastMsg: 'Prêt pour la session ? 🔥', time: '14:30', unread: 2, status: 'online' },
    { id: 2, name: 'Coach Sarah', avatar: '🏋️', lastMsg: "Super séance aujourd'hui ! 💪", time: '12:15', unread: 0, status: 'online' },
    { id: 3, name: 'Youssef Beast', avatar: '💯', lastMsg: 'Merci coach !', time: '15:00', unread: 0, status: 'offline' },
    { id: 4, name: 'Amine Warrior', avatar: '🎯', lastMsg: "J'ai terminé les dips !", time: '14:50', unread: 3, status: 'online' },
    { id: 5, name: 'Coach Karim', avatar: '🥇', lastMsg: 'Check ton programme', time: '11:45', unread: 1, status: 'offline' },
    { id: 6, name: 'Team Street', avatar: '🔥', lastMsg: 'RDV demain 18h au park', time: '09:20', unread: 0, status: 'online' },
  ];

  return (
    <SafeAreaView style={styles.app}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.app__container}>
        {/* Header WhatsApp style */}
        <View style={styles.chatHeader}>
          <View style={styles.searchBar}>
            <IconWrapper emoji="🔍" size={18} />
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Rechercher..."
              placeholderTextColor="#80CBC4"
              style={styles.searchBar__input}
            />
          </View>
        </View>

        {/* Chat List */}
        <ScrollView style={styles.chatList} contentContainerStyle={styles.chatList__content}>
          {chats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              onPress={() => router.push(`/chat/${chat.id}`)}
              style={styles.chatItem}
              activeOpacity={0.7}
            >
              <View style={styles.chatItem__avatarWrapper}>
                <View style={styles.chatItem__avatar}>
                  <Text style={styles.chatItem__avatarEmoji}>{chat.avatar}</Text>
                </View>
                {chat.status === 'online' && <View style={styles.chatItem__statusOnline} />}
              </View>
              <View style={styles.chatItem__content}>
                <View style={styles.chatItem__header}>
                  <Text style={styles.chatItem__name}>{chat.name}</Text>
                  <Text style={styles.chatItem__time}>{chat.time}</Text>
                </View>
                <View style={styles.chatItem__footer}>
                  <Text style={styles.chatItem__lastMsg} numberOfLines={1}>
                    {chat.lastMsg}
                  </Text>
                  {chat.unread > 0 && (
                    <View style={styles.chatItem__unreadBadge}>
                      <Text style={styles.chatItem__unreadText}>{chat.unread}</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
