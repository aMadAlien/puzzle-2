import { useSavedModules } from "../context/SavedModulesContext";

export default function BasketBtn() {
  const { savedModules } = useSavedModules();
  const modulesCount = savedModules.length;

  return (
    <button
      type="button"
      className="fixed bottom-10 right-10 bg-gray-300 w-[60px] flex items-center justify-center aspect-square rounded-full shadow-lg z-50 hover:scale-110 transition-all duration-300"
    >
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12.5 22H10c-3.3 0-4.95 0-5.975-1.025S3 18.3 3 15v-4c0-1.886 0-2.828.586-3.414S5.114 7 7 7h8c1.886 0 2.828 0 3.414.586S19 9.114 19 11v2"></path><path d="M15 9.5C15 5.634 13.21 2 11 2S7 5.634 7 9.5M17.5 22S14 19.882 14 17.833c0-1.012.737-1.833 1.75-1.833c.525 0 1.05.177 1.75.882c.7-.706 1.225-.882 1.75-.882c1.013 0 1.75.82 1.75 1.833C21 19.883 17.5 22 17.5 22"></path></g></svg>

      <span className="absolute top-0 right-0 bg-yellow-400 rounded-full w-[17px] h-[17px] flex items-center justify-center text-xs font-semibold">
        {modulesCount}
      </span>
    </button>
  )
}