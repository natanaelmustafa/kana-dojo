'use client';

import usePreferencesStore from '../store/usePreferencesStore';

/**
 * Theme Preferences Facade
 *
 * Provides access to theme and display preferences
 */
export function useThemePreferences() {
  return usePreferencesStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme,
    font: state.font,
    setFont: state.setFont,
    themePreview: state.themePreview,
    setThemePreview: state.setThemePreview,
    displayKana: state.displayKana,
    setDisplayKana: state.setDisplayKana,
    furiganaEnabled: state.furiganaEnabled,
    setFuriganaEnabled: state.setFuriganaEnabled
  }));
}
