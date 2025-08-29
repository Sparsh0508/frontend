import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { Mic, Square, Play, Pause } from "lucide-react-native";

const VoiceRecorder = () => {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Start Recording
  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) return;

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  // Stop Recording
  const stopRecording = async () => {
    if (!recording) return;
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recorded file:", uri);
    setRecording(null);

    const { sound } = await recording.createNewLoadedSoundAsync();
    setSound(sound);
  };

  // Play / Pause
  const togglePlayback = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <View className="p-6 items-center">
      <Text className="text-lg font-bold mb-4">🎤 Voice Recorder</Text>

      {!recording ? (
        <TouchableOpacity onPress={startRecording} className="bg-green-500 p-4 rounded-xl">
          <Mic size={24} color="white" />
          <Text className="text-white">Start Recording</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={stopRecording} className="bg-red-500 p-4 rounded-xl">
          <Square size={24} color="white" />
          <Text className="text-white">Stop Recording</Text>
        </TouchableOpacity>
      )}

      {sound && (
        <TouchableOpacity
          onPress={togglePlayback}
          className="bg-blue-500 p-4 mt-4 rounded-xl"
        >
          {isPlaying ? <Pause size={24} color="white" /> : <Play size={24} color="white" />}
          <Text className="text-white">{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VoiceRecorder;
