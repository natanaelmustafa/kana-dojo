'use client';

import usePreferencesStore from '../store/usePreferencesStore';

/**
 * Input Preferences Facade
 *
 * Provides access to input-related preferences (hotkeys, etc.)
 */
export function useInputPreferences() {
  return usePreferencesStore(state => ({
    hotkeysOn: state.hotkeysOn,
    setHotkeys: state.setHotkeys
  }));
}
