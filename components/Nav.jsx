import React, { useState, useEffect } from 'react';
import { Navbar, Button, Link, Text, Badge } from '@nextui-org/react';
import { Layout } from './Layout.js';
import Image from 'next/image.js';

const Nav = () => {
	return (
		<>
			<div id='nav-desktop'>
				<Layout>
					<Navbar shouldHideOnScroll isBordered variant='sticky'>
						<Navbar.Brand>
							<Image src='/balance.png' width='35px' height='35' alt='Balance Icon' />
							<Text b color='inherit' hideIn='xs'>
								Conversor de Masas
							</Text>
						</Navbar.Brand>
					</Navbar>
				</Layout>
			</div>
		</>
	);
};

export default Nav;
