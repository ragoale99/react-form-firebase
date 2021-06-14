import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
	const [idContent, setIdContent] = useState(0);
	const nameLinks = [
		'Home',
		'Sign Up',
		'Login',
		'Modifica profilo',
		'Cancella profilo',
	];
	return (
		<>
			<Header
				idContent={idContent}
				setIdContent={setIdContent}
				nameLinks={nameLinks}
			/>
			<Sidebar
				idContent={idContent}
				setIdContent={setIdContent}
				nameLinks={nameLinks}
			/>
			<Content idContent={idContent} nameLink={nameLinks[idContent]} />
		</>
	);
}

export default App;
