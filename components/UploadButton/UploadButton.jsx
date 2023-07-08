import './UploadButton.css';
import { useFile } from '../../hooks/useFile';

const UploadButton = () => {
	const { path, onChange, status } = useFile({ type: 'file' });
	console.log(status, path);
	return (
		<div>
			<label htmlFor='fileInput' className='custom-file-input'>
				Choose a file
			</label>
			<input id='fileInput' type='file' style={{ display: 'none' }} onChange={onChange} />
			{status && <h4>{status.message}</h4>}
			{path && (
				<div className='img--container'>
					{' '}
					<img src={path} />
				</div>
			)}
		</div>
	);
};

export default UploadButton;
