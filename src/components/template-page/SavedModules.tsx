import { useMemo } from "react";
import { moduleRegistry } from "../../config/moduleRegistry";
import { useSavedModules } from "../../context/SavedModulesContext";
import { ModuleSlug } from "../../types/module.types";
import ModulesGrid from "./ModulesGrid";

export default function SavedModules({
  onAdd, hideLayers
}: {
  hideLayers: boolean,
  onAdd: (slug: ModuleSlug) => void;
}) {
  const { savedModules, toggleModule } = useSavedModules();

  function isSavedModule(id: string) {
    return savedModules.includes(id);
  }

  const modulesList = useMemo(() => {
    return Object.fromEntries(
      Object.entries(moduleRegistry).filter(([_, module]) =>
        isSavedModule(module.id)
      )
    );
  }, [savedModules, moduleRegistry]);

  return (
    <ModulesGrid
      onAdd={onAdd}
      hideLayers={hideLayers}
      modulesList={modulesList}
    />
  );
}