// localStorageLib.js
// Simple library for safe localStorage usage with export/import backup

const StorageLib = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('localStorage set error:', e);
      return false;
    }
  },
  get(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      console.error('localStorage get error:', e);
      return fallback;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.error('localStorage remove error:', e);
      return false;
    }
  },
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (e) {
      console.error('localStorage clear error:', e);
      return false;
    }
  },
  exportAll() {
    // Export all localStorage as a JSON string
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    return JSON.stringify(data, null, 2);
  },
  importAll(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      for (const key in data) {
        localStorage.setItem(key, data[key]);
      }
      return true;
    } catch (e) {
      console.error('localStorage import error:', e);
      return false;
    }
  }
};

// For browser global usage
window.StorageLib = StorageLib;
