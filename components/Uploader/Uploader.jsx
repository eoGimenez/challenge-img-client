import UploadButton from '../UploadButton/UploadButton';
import './Uploader.css';

export default function Uploader() {
	return (
		<section className='section--uploader--img'>
			<div className='uploader--container'>
				<div className='img--container'>aca va el logo de la imagen</div>
				<div className='img--handler'>aca va el boton para seleccionar archivo</div>
				<UploadButton />
			</div>
		</section>
	);
}
