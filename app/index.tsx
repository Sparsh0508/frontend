import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Alert
} from "react-native";
import {
  Leaf,
  Brain,
  Mic,
  Camera,
  Globe,
  Zap,
} from "lucide-react-native";
import { router } from "expo-router";

import SimpleCard from "./components/SimpleCard";
import ImageUpload from "./components/ImageUpload";
import VoiceRecorder from "./components/VoiceRecorder";
import DiagnosisResults from "./components/DiagnosisResults";
import LanguageSelector from "./components/LanguageSelector";

// Import the hero image
const heroImage = require("../assets/images/farmImage.jpg");

const Index: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [diagnosisResults, setDiagnosisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleImageSelect = async (file: any) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setDiagnosisResults({
        disease: "Tomato Late Blight",
        confidence: 0.89,
        severity: "medium",
        description:
          "Late blight is a serious fungal disease that affects tomato plants, especially in humid conditions.",
        recommendations: [
          "Apply copper-based fungicide immediately",
          "Remove affected leaves",
          "Improve air circulation",
          "Avoid overhead watering",
          "Monitor humidity levels",
        ],
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleAudioRecorded = async (audioBlob: any) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setDiagnosisResults({
        disease: "General Crop Health Advice",
        confidence: 0.95,
        severity: "low",
        description:
          "Based on your voice query about crop nutrition, here are some recommendations.",
        recommendations: [
          "Test soil pH regularly",
          "Apply balanced fertilizer",
          "Ensure water drainage",
          "Monitor for pests",
          "Rotate crops yearly",
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image source={heroImage} style={styles.heroImage} resizeMode="cover" />
        <View style={styles.heroOverlay} />
        <View style={styles.heroContent}>
          <View style={styles.heroTitleRow}>
            <Leaf size={32} color="#fff" />
            <Text style={styles.heroTitle}>CropAI Doctor</Text>
          </View>
          <Text style={styles.heroSubtitle}>
            AI-powered crop disease diagnosis in your native language.
          </Text>
          <View style={styles.featuresRow}>
            <FeatureItem icon={<Camera size={18} color="#fff" />} text="Image Detection" />
            <FeatureItem icon={<Mic size={18} color="#fff" />} text="Voice Queries" />
            <FeatureItem icon={<Globe size={18} color="#fff" />} text="Multi-language" />
            <FeatureItem icon={<Zap size={18} color="#fff" />} text="Instant Results" />
          </View>
        </View>
      </View>

      {/* Language Selector */}
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />

      {/* Input Methods */}
      {/* <View>
        <ImageUpload onImageSelect={handleImageSelect} isLoading={isAnalyzing} />
        <VoiceRecorder onAudioRecorded={handleAudioRecorded} isLoading={isAnalyzing} />
      </View> */}

      {/*  cards components */}

       <View style={{ flex: 1, justifyContent: "center" }}>
        <SimpleCard
          text="Crop Recommendations"
          buttonText="Get Tips"
          imageSource={require("../assets/images/farmimage3.jpg")}
          onPress={() =>  Alert.alert("Button Pressed!")}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <SimpleCard
          text="Crop Diagnosis"
          buttonText="Go"
          imageSource={require("../assets/images/farmimage3.jpg")}
          onPress={() => router.push("/crop-recommendation")}
        />
      </View>

      {/* Results */}
      {/* <DiagnosisResults
        results={diagnosisResults}
        isLoading={isAnalyzing}
        onPlayAudio={() => console.log("Playing audio response")}
      /> */}

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>How CropAI Doctor Works</Text>
        <Text style={styles.sectionSubtitle}>
          Advanced AI technology made simple for farmers worldwide
        </Text>

        <View style={styles.cardsRow}>
          <FeatureCard
            icon={<Camera size={32} color="#fff" />}
            title="Upload & Analyze"
            description="Take a photo of your crop and our AI instantly identifies diseases."
          />
          <FeatureCard
            icon={<Brain size={32} color="#fff" />}
            title="AI Diagnosis"
            description="Our AI provides detailed analysis and localized recommendations."
          />
          <FeatureCard
            icon={<Mic size={32} color="#fff" />}
            title="Voice & Text"
            description="Get advice in your native language via text & audio."
          />
        </View>
      </View>
    </ScrollView>

  );
};

const FeatureItem: React.FC<{ icon: React.ReactElement; text: string }> = ({ icon, text }) => (
  <View style={styles.featureItem}>
    {icon}
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <View style={styles.card}>
    <View style={styles.cardIcon}>{icon}</View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  heroSection: { position: "relative", height: 300 },
  heroImage: { width: "100%", height: "100%", position: "absolute" },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  heroContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  heroTitleRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  heroTitle: { fontSize: 28, fontWeight: "bold", color: "#fff", marginLeft: 8 },
  heroSubtitle: { fontSize: 16, color: "#eee", textAlign: "center", marginVertical: 12 },
  featuresRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  featureItem: { flexDirection: "row", alignItems: "center", margin: 6 },
  featureText: { color: "#fff", marginLeft: 6 },
  section: { padding: 16 },
  row: { flexDirection: "row", justifyContent: "space-around", margin: 16 },
  featuresSection: { backgroundColor: "#f4f4f4", padding: 20 },
  sectionTitle: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 8 },
  sectionSubtitle: { fontSize: 14, color: "#555", textAlign: "center", marginBottom: 20 },
  cardsRow: { flexDirection: "row", justifyContent: "space-between" },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 6,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardIcon: {
    backgroundColor: "#4CAF50",
    borderRadius: 50,
    padding: 12,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 18, fontWeight: "600", marginBottom: 6 },
  cardDescription: { fontSize: 14, color: "#555", textAlign: "center" },
});
export default Index;
