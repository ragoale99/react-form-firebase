import React from 'react';
import ButtonList from './ButtonList';
import './../App.css';

export default function Sidebar(props) {
	return (
		<>
			<ul className='sidebar'>
				<ButtonList
					nameLinks={props.nameLinks}
					setIdContent={props.setIdContent}
				/>
			</ul>
		</>
	);
}
