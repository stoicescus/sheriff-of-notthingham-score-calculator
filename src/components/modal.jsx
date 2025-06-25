const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="w-full h-full bg-white p-6 relative overflow-auto">
				<button
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-2xl"
					onClick={onClose}
				>
					&times;
				</button>
				<div className="mt-5">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
