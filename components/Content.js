import { Box } from './Box.js';
import { ArrowDown } from 'react-bootstrap-icons';

export const Content = () => (
	<Box css={{ px: '$12', mt: '$8', '@xsMax': { px: '$10' } }}>
		<div id='contain'>
			<h1 className='title'>Conversor de Masas</h1>

			<p className='description'>
				Convierte de Libras a Kilogramo y viceversa{' '}
				<br />
				<ArrowDown />
			</p>
		</div>
	</Box>
);
