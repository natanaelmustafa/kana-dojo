'use client';

import usePreferencesStore from '../store/usePreferencesStore';

/**
 * Audio Preferences Facade
 *
 * Provides access to audio-related preferences
 */
export function useAudioPreferences() {
  return usePreferencesStore(state => ({
    silentMode: state.silentMode,
    setSilentMode: state.setSilentMode,
    pronunciationEnabled: state.pronunciationEnabled,
    setPronunciationEnabled: state.setPronunciationEnabled,
    pronunciationSpeed: state.pronunciationSpeed,
    setPronunciationSpeed: state.setPronunciationSpeed,
    pronunciationPitch: state.pronunciationPitch,
    setPronunciationPitch: state.setPronunciationPitch,
    pronunciationVoiceName: state.pronunciationVoiceName,
    setPronunciationVoiceName: state.setPronunciationVoiceName
  }));
}
