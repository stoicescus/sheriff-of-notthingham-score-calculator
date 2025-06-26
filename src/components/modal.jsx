const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
			<div className="relative bg-white p-6 max-w-[100vw] max-h-[100vh]">
				<button
					className="absolute -top-4 -right-2 text-gray-500 hover:text-gray-800 font-bold text-2xl cursor-pointer transition-transform duration-200 hover:scale-150"
					onClick={onClose}
				>
					&times;
				</button>
				<div className="flex justify-center items-center">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
