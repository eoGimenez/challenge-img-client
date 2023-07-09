import './Successfull.css';

export default function Successfull({ image }) {
	return (
		<div className='successfull--container'>
			<h3>Upload successfully</h3>
			<div className='img--container'>
				{' '}
				<img src={image.path} alt='Image uploaded' />
			</div>
			<p>{image.path} Ruta para copiar</p>
		</div>
	);
}
