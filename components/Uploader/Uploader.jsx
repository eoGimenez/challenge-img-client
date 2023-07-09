import UploadButton from '../UploadButton/UploadButton';
import './Uploader.css';

export default function Uploader() {

	return (
		<section className='section--uploader--img'>
			<div className='uploader--container'>
				<h1>Upload your image</h1>
				<p>File should be jpg, jpeg, png or svg</p>
				<div className='img--container'>
					<UploadButton />
				</div>
			</div>
		</section>
	);
}
