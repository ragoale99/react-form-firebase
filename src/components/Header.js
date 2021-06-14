import React, { useState } from 'react';
import './../App.css';
import ButtonList from './ButtonList';
import { FaReact } from 'react-icons/fa';
import { GrMenu, GrClose } from 'react-icons/gr';

export default function Header(props) {
	const [showMenuMobile, setShowMenuMobile] = useState(false);
	const showMenu = () => {
		setShowMenuMobile(!showMenuMobile);
	};

	return (
		<>
			<header className='header'>
				<div className='menu'>
					{!showMenuMobile ? (
						<GrMenu size={28} className='menu-icon' onClick={showMenu} />
					) : (
						<GrClose size={28} className='menu-icon' onClick={showMenu} />
					)}
				</div>
				<div className='title'>
					<FaReact size={42} className='App-logo' />
					<h1>Ripasso React.js</h1>
				</div>
				<div className='right'></div>
			</header>
			{showMenuMobile && (
				<ul className='menu-mobile'>
					<ButtonList
						nameLinks={props.nameLinks}
						setIdContent={props.setIdContent}
						setShow={setShowMenuMobile}
					/>
				</ul>
			)}
		</>
	);
}
