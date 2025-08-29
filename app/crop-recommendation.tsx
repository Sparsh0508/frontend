import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text, ActivityIndicator } from "react-native";
import ImageUpload from "./components/ImageUpload";
import VoiceRecorder from "./components/VoiceRecorder";
import DiagnosisResults from "./components/DiagnosisResults";

const CropRecommendationScreen: React.FC = () => {
  const [diagnosisResults, setDiagnosisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  // Mock image analysis for crop recommendations
  const handleImageSelect = async (file: any) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setDiagnosisResults({
        disease: "Crop Recommendation Analysis",
        confidence: 0.92,
        severity: "informational",
        description:
          "Based on your soil and environmental conditions, here are the best crop recommendations for your area.",
        recommendations: [
          "Plant nitrogen-fixing legumes like beans or peas",
          "Consider drought-resistant varieties for this season",
          "Rotate with leafy greens to improve soil health",
          "Apply organic compost before planting",
          "Test soil pH and adjust if necessary",
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  // Mock audio analysis for crop recommendations
  const handleAudioRecorded = async (audioBlob: any) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setDiagnosisResults({
        disease: "Personalized Crop Recommendations",
        confidence: 0.88,
        severity: "informational",
        description: "Based on your voice query about crop selection, here are tailored recommendations for your farming needs.",
        recommendations: [
          "Choose high-yielding varieties suited to your climate",
          "Consider market demand for selected crops",
          "Plan crop rotation to maintain soil fertility",
          "Invest in quality seeds from certified suppliers",
          "Monitor weather patterns for optimal planting time",
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.headerTitle}>Crop Recommendations</Text>
        <Text style={styles.headerSubtitle}>
          Get personalized crop recommendations based on your soil, climate, and farming conditions
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.sectionTitle}>Analyze Your Farming Conditions</Text>
        <View style={styles.cardsRow}>
          <ImageUpload onImageSelect={handleImageSelect} isLoading={isAnalyzing} />
          <VoiceRecorder onAudioRecorded={handleAudioRecorded} isLoading={isAnalyzing} />
        </View>
        {isAnalyzing && <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 16 }} />}
      </View>

      {/* Results Section */}
      {diagnosisResults && (
        <View style={styles.resultsSection}>
          <Text style={styles.sectionTitle}>Crop Recommendations</Text>
          <DiagnosisResults
            results={diagnosisResults}
            isLoading={isAnalyzing}
            onPlayAudio={() => console.log("Playing audio response")}
          />
        </View>
      )}

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Farming Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>🌱 Soil Preparation</Text>
          <Text style={styles.tipDescription}>
            Prepare your soil 2-3 weeks before planting by adding organic matter and testing pH levels.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💧 Water Management</Text>
          <Text style={styles.tipDescription}>
            Implement efficient irrigation systems to conserve water and ensure optimal plant growth.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>🔄 Crop Rotation</Text>
          <Text style={styles.tipDescription}>
            Rotate crops seasonally to maintain soil health and prevent pest buildup.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  headerSection: {
    backgroundColor: "#4CAF50",
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#e8f5e8",
    textAlign: "center",
    lineHeight: 22,
  },
  inputSection: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardsRow: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  resultsSection: {
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  tipsSection: {
    margin: 16,
    marginBottom: 32,
  },
  tipCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});

export default CropRecommendationScreen;
