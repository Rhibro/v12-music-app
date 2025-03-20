import React from "react";

interface LogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

// Modal-komponent för utloggningsbekräftelse
const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  // Visa inte modalen om den inte är öppen
  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-20 flex items-center justify-center z-50">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-2">
          <button
            onClick={onConfirm}
            className="font-semibold border-4 border-black bg-red-500 hover:bg-red-900 text-black hover:text-white py-1.5 px-3 rounded-md transition-opacity duration-200 ease-in-out"
          >
            Logout
          </button>
          <button
            onClick={onCancel}
            className="font-semibold border-4 border-black bg-white hover:bg-black text-black hover:text-white py-1.5 px-3 rounded-md transition-opacity duration-200 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
