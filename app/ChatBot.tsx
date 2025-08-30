import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useI18n } from "../lib/i18n";

interface Message {
  text: string;
  sender: "bot" | "user";
}

export default function ChatScreen() {
  const { translations } = useI18n();
  const [messages, setMessages] = useState<Message[]>([
    { text: translations.initialBotMessage, sender: "bot" }
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  // Mock response function
  const getMockResponse = (question: string): string => {
    const lowerQ = question.toLowerCase();
    
    if (lowerQ.includes('crop') || lowerQ.includes('plant')) {
      return "For crop recommendations, consider your soil type, climate, and water availability. Popular crops include tomatoes, corn, wheat, and soybeans. Each requires specific care and growing conditions.";
    }
    
    if (lowerQ.includes('soil')) {
      return "Soil health is crucial for good crops. Test your soil pH (6.0-7.0 is ideal for most crops), add organic matter like compost, and ensure proper drainage. Crop rotation also helps maintain soil fertility.";
    }
    
    if (lowerQ.includes('water') || lowerQ.includes('irrigation')) {
      return "Water management is key to successful farming. Use drip irrigation for efficiency, water early morning or evening to reduce evaporation, and monitor soil moisture regularly.";
    }
    
    if (lowerQ.includes('pest') || lowerQ.includes('disease')) {
      return "For pest and disease management, practice integrated pest management (IPM). Use beneficial insects, rotate crops, remove infected plants promptly, and apply organic or chemical treatments as needed.";
    }
    
    return "That's a great farming question! For the best results, I recommend consulting with local agricultural extension services, as farming practices vary by region, climate, and soil conditions.";
  };

  const sendQuestion = async () => {
    if (!question.trim()) return;

    // Add user message
    const userMessage = { text: question, sender: "user" as const };
    setMessages(prev => [...prev, userMessage]);
    
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const botResponse = getMockResponse(question);
      const botMessage = { text: botResponse, sender: "bot" as const };
      setMessages(prev => [...prev, botMessage]);
      setLoading(false);
    }, 1000);
    
    setQuestion("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{translations.cropChatAssistant}</Text>
        <Text style={styles.headerSubtitle}>{translations.intelligentFarmingCompanion}</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item, idx) => `${item.sender}-${idx}`}
        style={styles.messagesList}
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isBot = item.sender === "bot";

          return (
            <View style={[styles.messageContainer, isBot ? styles.botMessage : styles.userMessage]}>
              <View style={[styles.messageBubble, isBot ? styles.botBubble : styles.userBubble]}>
                <Text style={styles.messageSender}>
                  {isBot ? translations.aiAssistant : translations.you}
                </Text>
                <Text style={styles.messageText}>{item.text}</Text>
              </View>
            </View>
          );
        }}
      />

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingBubble}>
            <ActivityIndicator size="small" color="#16a34a" />
            <Text style={styles.loadingText}>{translations.aiThinking}</Text>
          </View>
        </View>
      )}

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={question}
            onChangeText={setQuestion}
            placeholder={translations.askAnythingFarming}
            placeholderTextColor="#6b7280"
            multiline
            editable={!loading}
            style={styles.textInput}
          />

          <TouchableOpacity
            style={[styles.sendButton, (!question.trim() || loading) && styles.disabledSendButton]}
            onPress={sendQuestion}
            disabled={loading || !question.trim()}
          >
            <Text style={styles.sendButtonText}>
              {loading ? "⏳" : "🚀"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#16a34a',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#f0fdf4',
    textAlign: 'center',
    opacity: 0.9,
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  messagesContainer: {
    paddingVertical: 8,
  },
  messageContainer: {
    marginVertical: 6,
    maxWidth: '85%',
  },
  botMessage: {
    alignSelf: 'flex-start',
  },
  userMessage: {
    alignSelf: 'flex-end',
  },
  messageBubble: {
    padding: 16,
    borderRadius: 20,
  },
  botBubble: {
    backgroundColor: '#16a34a',
  },
  userBubble: {
    backgroundColor: '#047857',
  },
  messageSender: {
    fontSize: 12,
    fontWeight: '600',
    color: '#d1d5db',
    opacity: 0.8,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    fontWeight: '400',
  },
  loadingContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loadingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
    maxWidth: '60%',
    backgroundColor: '#dcfce7',
  },
  loadingText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#16a34a',
    fontStyle: 'italic',
    fontWeight: '500',
  },
  inputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 32,
  },
  inputWrapper: {
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#dcfce7',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
    maxHeight: 120,
    minHeight: 24,
    marginRight: 12,
    fontWeight: '500',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#16a34a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledSendButton: {
    backgroundColor: '#9ca3af',
    opacity: 0.6,
  },
  sendButtonText: {
    fontSize: 18,
  },
});
