import { useFile } from '../../hooks/useFile';
import UploadButton from '../UploadButton/UploadButton';
import './Uploader.css';

export default function Uploader() {
	// const { handleDrag, handleDrop } = useFile();

	return (
		<section className='section--uploader--img'>
			<div className='uploader--container'>
				<div className='img--container'>aca va el logo de la imagen</div>

				<UploadButton />
			</div>
		</section>
	);
}
