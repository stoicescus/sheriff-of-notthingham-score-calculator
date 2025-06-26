import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';

const Notification = forwardRef((props, ref) => {
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');

	useImperativeHandle(ref, () => ({
		showNotification(msg) {
			setMessage(msg);
			setShow(true);
		},
	}));

	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => setShow(false), 3000);
			return () => clearTimeout(timer);
		}
	}, [show]);

	return (
		<div
			className={`fixed bottom-4 right-4 w-64 p-4 rounded shadow-lg bg-red-500 text-white transition-all duration-500 ease-in-out transform ${
				show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
			}`}
		>
			{message}
		</div>
	);
});

export default Notification;
