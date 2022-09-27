import Head from 'next/head';
import { useState } from 'react';
import { ArrowLeftRight } from 'react-bootstrap-icons';
import Nav from '../components/Nav';

import { Button, Spacer, Textarea } from '@nextui-org/react';

import Footer from '../components/Footer';

const Home = () => {
	const [message, setMessage] = useState('');
	const [firstValue, setFirstValue] = useState('libra');
	const [secondValue, setSecondValue] = useState('kilogramo');
	const [dataConverted, setDataConverted] = useState('');

	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const commify = (n) => {
		let parts = n.toString().split('.');
		const numberPart = parts[0];
		const decimalPart = parts[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return (
			numberPart.replace(thousands, '.') +
			(decimalPart ? `,${decimalPart}` : '')
		);
	};

	const libraToKg = (num) => {
		const value = num / 2.205;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Kg`;
		setDataConverted(message);
	};

	const kgToLibra = (num) => {
		const value = num * 2.205;
		const valueConvertedToInt = commify(value);
		const message = `${valueConvertedToInt} Lb`;
		setDataConverted(message);
	};

	const convert = () => {
		if (firstValue === 'libra' && secondValue === 'kilogramo') {
			libraToKg(message);
		} else if (
			(firstValue === 'kilogramo' && secondValue === 'kilogramo') ||
			(firstValue === 'libra' && secondValue === 'libra')
		) {
			return;
		} else {
			kgToLibra(message);
		}
	};

	const invert = () => {
		setFirstValue(secondValue);
		setSecondValue(firstValue);
	};

	return (
		<>
			<Nav />

			<Head>
				<title>Conversor de Masas</title>
				<meta name='description' content='Conversor de Masas' />
				<meta name='keywords' content='Convertir Masas' />
				<link rel='icon' href='/balance.png' />
			</Head>

			<div className='container'>
				<main>
					<div className='grid'>
						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setFirstValue(e.target.value)}
									value={firstValue}
								>
									<option value='libra'>Libra</option>
									<option value='kilogramo'>Kilogramo</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								color='warning'
								label='Masa a convertir'
								placeholder='Por ejemplo: 1'
								cols='30'
								rows='10'
								value={message}
								onChange={handleMessageChange}
							></Textarea>
						</div>

						<div id='invert-options-btn-container'>
							<Button
								id='invert-options-btn'
								title='Invertir'
								color='warning'
								onPress={() => invert()}
								auto
							>
								<ArrowLeftRight />
							</Button>
						</div>

						<div>
							<div id='select-container'>
								<select
									onChange={(e) => setSecondValue(e.target.value)}
									value={secondValue}
								>
									<option value='kilogramo'>Kilogramo</option>
									<option value='libra'>Libra</option>
								</select>
							</div>
							<Spacer y={0.5} />
							<Textarea
								bordered
								color='warning'
								label='Resultado'
								cols='30'
								rows='10'
								readOnly
								value={dataConverted}
							></Textarea>
						</div>
					</div>
					<Spacer y={0.5} />
					<Button
						id='translate-btn'
						auto
						color='warning'
						onPress={() => convert()}
					>
						Convertir
					</Button>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Home;
