import { SelectedModule } from "../../types/module.types"

export default function SaveTemplateBtn({ isSaving, selectedModules, handleSaveTemplate }: {
  isSaving: boolean
  handleSaveTemplate: () => void
  selectedModules: SelectedModule[]
}) {
  return (
    <div className="fixed top-2 md:top-4 right-2 md:right-4 z-[100]">
      <button
        type="button"
        onClick={handleSaveTemplate}
        disabled={isSaving || selectedModules.length === 0}
        className="rounded-sm md:rounded-lg bg-[#7c3aed] px-3 md:px-4 py-1 md:py-2 text-sm font-medium text-white transition hover:bg-[#6d28d9] disabled:cursor-not-allowed disabled:bg-[#4c4c4c] disabled:text-[#a3a3a3]"
      >
        {isSaving ? 'Збереження...' : 'Зберегти шаблон'}
      </button>
    </div>
  )
}