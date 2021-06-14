import React from 'react';
import SignUpContent from './contenuti/SignUpContent';
import LoginContent from './contenuti/LoginContent';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Content(props) {
	/* 	const addUser = async (user) => {
		const response = await fetch(
			'https://http-request-e9207-default-rtdb.europe-west1.firebasedatabase.app/users.json',
			{
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		await response.json();
	}; */

	//usando firebase
	const addUser = async (user) => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password);
	};

	const handleContent = () => {
		switch (props.idContent) {
			case 0:
				return <h1>{props.nameLink}</h1>;
			case 1:
				return <SignUpContent addUser={addUser} />;
			case 2:
				return <LoginContent />;
			case 3:
				return <h1>{props.nameLink}</h1>;
			case 4:
				return <h1>{props.nameLink}</h1>;
			default:
				break;
		}
	};

	return <div className='content'>{handleContent()}</div>;
}
