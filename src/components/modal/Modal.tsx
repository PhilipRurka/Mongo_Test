import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  handleCloseModal: () => void;
};

const Modal = ({ children, handleCloseModal }: ModalProps) => {
  const handleTriggerClose = () => {
    handleCloseModal();
  };

  return (
    <div className="fixed inset-0 z-10">
      <div className="absolute inset-0 bg-black opacity-80" />
      <div className="absolute left-1/2 top-1/3 max-w-2xl -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white p-8">
        <button onClick={handleTriggerClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
