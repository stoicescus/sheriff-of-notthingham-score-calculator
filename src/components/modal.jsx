import bg from '../assets/sheriff_of_nottingham.png';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
			<div
				className="absolute inset-0 bg-black opacity-40 z-0"
				style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
			></div>
			<div className="relative z-10">
				<div className="relative p-6 max-w-[100vw] max-h-[100vh]">
					<button
						className="absolute -top-5 -right-2 w-7 h-7 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-200 shadow-md text-xl font-bold leading-none cursor-pointer transition-transform duration-200 hover:scale-125"
						onClick={onClose}
					>
						<span className="relative -top-[1px]">&times;</span>
					</button>

					<div className="flex justify-center items-center bg-white p-2">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
