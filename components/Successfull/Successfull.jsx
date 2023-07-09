import './Successfull.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Successfull({ image }) {
	return (
		<div className='successfull--container'>
			<span class='material-symbols-outlined'>check_circle</span>
			<h3>Upload successfully</h3>
			<div className='img--container'>
				{' '}
				<img src={image.path} alt='Image uploaded' />
			</div>
			<div className='copy--path--container'>
				<p className='path--parraf'>{image.path}</p>
				<CopyToClipboard text={image.path}>
					<button className='btn--copy--path'>Copy Url</button>
				</CopyToClipboard>
			</div>
		</div>
	);
}
