type ConfirmModalProps = {
  isOpen: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ConfirmModal({
  isOpen,
  title = 'Підтвердити дію',
  message = 'Ви впевнені?',
  confirmText = 'Так',
  cancelText = 'Ні',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onCancel}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-[#1f1f1f] p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-gray-300">{message}</p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            className="rounded-full border border-gray-600 bg-transparent px-4 py-2 text-sm text-gray-200 transition hover:border-gray-400 hover:text-white"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-500"
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
