import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "savedModulesList";

interface SavedModulesContextType {
  savedModules: string[];
  saveModule: (id: string) => void;
  removeModule: (id: string) => void;
  toggleModule: (id: string) => void;
  isSaved: (id: string) => boolean;
  clearSavedModules: () => void;
}

const SavedModulesContext =
  createContext<SavedModulesContextType | null>(null);

export default function SavedModulesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [savedModules, setSavedModules] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    try {
      return JSON.parse(saved);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(savedModules)
    );
  }, [savedModules]);

  const saveModule = (id: string) => {
    setSavedModules(prev => {
      if (prev.includes(id)) return prev;

      return [...prev, id];
    });
  };

  const removeModule = (id: string) => {
    setSavedModules(prev =>
      prev.filter(moduleId => moduleId !== id)
    );
  };

  const toggleModule = (id: string) => {
    setSavedModules(prev =>
      prev.includes(id)
        ? prev.filter(moduleId => moduleId !== id)
        : [...prev, id]
    );
  };

  const isSaved = (id: string) => {
    return savedModules.includes(id);
  };

  const clearSavedModules = () => {
    setSavedModules([]);
  };

  return (
    <SavedModulesContext.Provider
      value={{
        savedModules,
        saveModule,
        removeModule,
        toggleModule,
        isSaved,
        clearSavedModules,
      }}
    >
      {children}
    </SavedModulesContext.Provider>
  );
}

export function useSavedModules() {
  const context = useContext(SavedModulesContext);

  if (!context) {
    throw new Error(
      "useSavedModules must be used inside SavedModulesProvider"
    );
  }

  return context;
}