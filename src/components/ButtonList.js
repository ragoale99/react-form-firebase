import React from 'react';

export default function ButtonList(props) {
	const closeMenu = () => {
		return props.setShow ? props.setShow(false) : null;
	};
	return (
		<>
			{props.nameLinks.map((el, index) => {
				return (
					<button
						key={index}
						onClick={() => {
							props.setIdContent(index);
							closeMenu();
						}}
						className='links'>
						{el}
					</button>
				);
			})}
		</>
	);
}
