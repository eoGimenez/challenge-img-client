import { useState } from 'react';

export function useFile() {
	const [path, setPath] = useState('');
	const [status, setStatus] = useState({});

	const API_URL = `${import.meta.env.VITE_API_URL}upload`;

	const onChange = (e) => {
		handleImage(e.target.files[0]);
	};

	const handleDrag = (e) => {
		e.preventDefault();
	};

	const handleDrop = (e) => {
		e.preventDefault();

		handleImage(e.dataTransfer.files[0]);
	};

	function handleImage(file) {
		const uploadData = new FormData();
		uploadData.append('image', file);
		fetch(API_URL, {
			method: 'POST',
			body: uploadData,
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setStatus({ message: 'The file was successfully uploaded' });
				setPath(response);
			})
			.catch((err) => {
				setStatus({
					message: 'Ocurrió un error de red, por favor, inténtalo nuevamente',
					codeError: err,
				});
			});
	}

	return { path, status, onChange, handleDrag, handleDrop };
}
