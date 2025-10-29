// import of the different libraries
import { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import CSS styles
import Navigation from '@/components/navigation';
import { Stack } from 'expo-router';
import { styles } from '../../styles/chat';

// Simulate icons with emojis
const IconWrapper = ({ emoji, size = 24 }: { emoji: string; size?: number }) => (
  <Text style={{ fontSize: size }}>{emoji}</Text>
);

interface Chat {
  id: number;
  name: string;
  avatar: string;
  lastMsg: string;
  time: string;
  unread: number;
  status: 'online' | 'offline';
}

interface Message {
  id: number;
  sender: 'me' | 'them';
  text: string;
  time: string;
}

const Chat: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('messages');
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const chats: Chat[] = [
    {
      id: 1,
      name: 'Coach Malik',
      avatar: '🦍',
      lastMsg: 'Prêt pour la session ? 🔥',
      time: '14:30',
      unread: 2,
      status: 'online',
    },
    {
      id: 2,
      name: 'Coach Sarah',
      avatar: '🏋️',
      lastMsg: "Super séance aujourd'hui ! 💪",
      time: '12:15',
      unread: 0,
      status: 'online',
    },
    {
      id: 3,
      name: 'Youssef Beast',
      avatar: '💯',
      lastMsg: 'Merci coach !',
      time: '15:00',
      unread: 0,
      status: 'offline',
    },
    {
      id: 4,
      name: 'Amine Warrior',
      avatar: '🎯',
      lastMsg: "J'ai terminé les dips !",
      time: '14:50',
      unread: 3,
      status: 'online',
    },
    {
      id: 5,
      name: 'Coach Karim',
      avatar: '🥇',
      lastMsg: 'Check ton programme',
      time: '11:45',
      unread: 1,
      status: 'offline',
    },
    {
      id: 6,
      name: 'Team Street',
      avatar: '🔥',
      lastMsg: 'RDV demain 18h au park',
      time: '09:20',
      unread: 0,
      status: 'online',
    },
  ];

  const messages: Message[] = selectedChat
    ? [
        { id: 1, sender: 'them', text: 'Salut ! Prêt pour ta session ?', time: '14:25' },
        { id: 2, sender: 'me', text: 'Ouais je suis chaud ! 🔥', time: '14:26' },
        {
          id: 3,
          sender: 'them',
          text: "Parfait ! Aujourd'hui on va bosser les muscle-ups. 3 séries de 8 reps !",
          time: '14:27',
        },
        { id: 4, sender: 'me', text: "Let's go ! 💪", time: '14:28' },
        {
          id: 5,
          sender: 'them',
          text: "N'oublie pas de bien t'échauffer avant. 10min cardio + étirements",
          time: '14:29',
        },
        { id: 6, sender: 'me', text: "C'est noté chef !", time: '14:30' },
        {
          id: 7,
          sender: 'them',
          text: 'Tu peux me filmer pour que je regarde ta technique ?',
          time: '14:31',
        },
        {
          id: 8,
          sender: 'me',
          text: "Ça marche, je t'envoie ça tout à l'heure 📹",
          time: '14:32',
        },
      ]
    : [];

  // CHAT LIST VIEW
  if (!selectedChat) {
    return (
      <SafeAreaView style={styles.app}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.app__container}>
          {/* Header WhatsApp style */}
          <View style={styles.chatHeader}>
            <View style={styles.chatHeader__top}>
              <Text style={styles.chatHeader__title}>SLForce</Text>
              <View style={styles.chatHeader__actions}>
                <TouchableOpacity style={styles.chatHeader__actionButton}>
                  <IconWrapper emoji="📷" size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatHeader__actionButton}>
                  <IconWrapper emoji="🔍" size={22} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.chatHeader__actionButton}>
                  <IconWrapper emoji="⋮" size={22} />
                </TouchableOpacity>
              </View>
            </View>
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
                onPress={() => setSelectedChat(chat)}
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
          <Navigation activePage={activePage}/>
        </View>
      </SafeAreaView>
    );
  }

  // CONVERSATION VIEW
  return (
    <SafeAreaView style={styles.conversation}>
      <View style={styles.conversation__container}>
        {/* Header */}
        <View style={styles.conversationHeader}>
          <TouchableOpacity
            onPress={() => setSelectedChat(null)}
            style={styles.conversationHeader__backButton}
          >
            <IconWrapper emoji="←" size={24} />
          </TouchableOpacity>
          <View style={styles.conversationHeader__avatarWrapper}>
            <View style={styles.conversationHeader__avatar}>
              <Text style={styles.conversationHeader__avatarEmoji}>{selectedChat.avatar}</Text>
            </View>
            {selectedChat.status === 'online' && (
              <View style={styles.conversationHeader__statusOnline} />
            )}
          </View>
          <View style={styles.conversationHeader__info}>
            <Text style={styles.conversationHeader__name}>{selectedChat.name}</Text>
            <Text style={styles.conversationHeader__status}>
              {selectedChat.status === 'online' ? 'en ligne' : 'hors ligne'}
            </Text>
          </View>
          <View style={styles.conversationHeader__actions}>
            <TouchableOpacity style={styles.conversationHeader__actionButton}>
              <IconWrapper emoji="📹" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.conversationHeader__actionButton}>
              <IconWrapper emoji="📞" size={22} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.conversationHeader__actionButton}>
              <IconWrapper emoji="⋮" size={22} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages */}
        <ImageBackground
          source={{
            uri: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4dbd4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
          }}
          style={styles.messagesList}
          resizeMode="repeat"
        >
          <ScrollView
            contentContainerStyle={styles.messagesList__content}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((msg) => (
              <View
                key={msg.id}
                style={[
                  styles.messageItem,
                  msg.sender === 'me'
                    ? styles['messageItem--sent']
                    : styles['messageItem--received'],
                ]}
              >
                <View
                  style={[
                    styles.messageBubble,
                    msg.sender === 'me'
                      ? styles['messageBubble--sent']
                      : styles['messageBubble--received'],
                  ]}
                >
                  <Text style={styles.messageBubble__text}>{msg.text}</Text>
                  <Text style={styles.messageBubble__time}>{msg.time}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </ImageBackground>

        {/* Input */}
        <View style={styles.messageInput}>
          <View style={styles.messageInput__wrapper}>
            <TouchableOpacity style={styles.messageInput__emojiButton}>
              <IconWrapper emoji="😊" size={24} />
            </TouchableOpacity>
            <TextInput
              value={message}
              onChangeText={setMessage}
              placeholder="Message"
              placeholderTextColor="#9CA3AF"
              style={styles.messageInput__field}
            />
            <TouchableOpacity style={styles.messageInput__cameraButton}>
              <IconWrapper emoji="📷" size={20} />
            </TouchableOpacity>
          </View>
          {message.trim() ? (
            <TouchableOpacity
              onPress={() => setMessage('')}
              style={styles.messageInput__sendButton}
              activeOpacity={0.8}
            >
              <IconWrapper emoji="➤" size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.messageInput__sendButton}
              activeOpacity={0.8}
            >
              <IconWrapper emoji="🎤" size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;