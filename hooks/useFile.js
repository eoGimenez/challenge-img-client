import { useState } from 'react';

export function useFile({ type }) {
	const [path, setPath] = useState('');
	const [status, setStatus] = useState({});

	const API_URL = `${import.meta.env.VITE_API_URL}upload`;
	const onChange = function handleImage(e) {
		const uploadData = new FormData();
		uploadData.append('image', e.target.files[0]);
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
	};
	return { type, path, status, onChange };
}
