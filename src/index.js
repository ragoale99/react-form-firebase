import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

firebase.initializeApp({
	apiKey: 'AIzaSyClgygM1rjocG3N23YFmOQlmyFoy1ia1KA',
	authDomain: 'http-request-e9207.firebaseapp.com',
	databaseURL:
		'https://http-request-e9207-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'http-request-e9207',
	storageBucket: 'http-request-e9207.appspot.com',
	messagingSenderId: '956608909108',
	appId: '1:956608909108:web:a3dfccf28711a795c45f61',
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
