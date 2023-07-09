import { useState } from 'react';

export function useFile() {
	const [image, setImage] = useState(null);
	const [status, setStatus] = useState({});
	const [isLoading, setIsLoading] = useState(false);

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
		setIsLoading(true);
		fetch(API_URL, {
			method: 'POST',
			body: uploadData,
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
				setStatus({ message: 'The file was successfully uploaded' });
				setImage(response);
				setIsLoading(!isLoading);
			})
			.catch((err) => {
				setStatus({
					message: 'Ocurrió un error de red, por favor, inténtalo nuevamente',
					codeError: err,
				});
				setIsLoading(!isLoading);
			});
	}

	return { image, status, isLoading, onChange, handleDrag, handleDrop };
}
