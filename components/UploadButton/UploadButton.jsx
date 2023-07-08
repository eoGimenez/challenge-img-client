import './UploadButton.css';
import { useFile } from '../../hooks/useFile';

export default function UploadButton() {
	const { path, onChange, status, handleDrag, handleDrop } = useFile();
	console.log(status, path);

	return (
		<div>
			<label htmlFor='fileInput' className='img--buttom--decoration'>
				Choose a file
			</label>
			<input id='fileInput' type='file' style={{ display: 'none' }} onChange={onChange} />
			<div className='img--handler' onDragOver={handleDrag} onDrop={handleDrop}>
				ARRASTRE UN ARCHIVO AQUI
			</div>
			{status && <h4>{status.message}</h4>}
			{path && (
				<div className='img--container'>
					{' '}
					<img src={path} alt='Image uploaded' />
				</div>
			)}
		</div>
	);
}
