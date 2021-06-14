import React from 'react';
import useInput from './../../hooks/use-input';

export default function SignUpContent(props) {
	const checkUsername = (username) => {
		if (username.trim() === '') {
			return [false, 'Username cannot be empty'];
		} else if (username.length < 4) {
			return [false, 'Username must be at least 3 chars'];
		}
		return [true, 'Valid username'];
	};

	const checkAge = (age) => {
		if (age.trim() === '') {
			return [false, 'Age cannot be empty'];
		} else if (age < 18) {
			return [false, 'You are too young for this site'];
		} else if (age > 100) {
			return [false, 'You are too old for this site'];
		}
		return [true, 'Valid age'];
	};

	const checkEmail = (email) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email.trim() === '') {
			return [false, 'Email cannot be empty'];
		} else if (!re.test(String(email).toLowerCase())) {
			return [false, 'Not valid email address'];
		}
		return [true, 'Valid email'];
	};

	const checkPassword = (password) => {
		const reLower = /[a-z]/;
		const reUpper = /[A-Z]/;
		const reNumber = /\d/;
		if (password.trim() === '') {
			return [false, 'Password cannot be empty'];
		} else if (password.length < 6) {
			return [false, 'Password must be at least 5 chars'];
		} else if (password.length > 15) {
			return [false, 'Password must be shorter then 15 chars'];
		} else if (password.indexOf(' ') >= 0) {
			return [false, 'Password cannot contain spaces'];
		} else if (!reLower.test(String(password))) {
			return [false, 'Password must contain at least 1 lowercase char'];
		} else if (!reUpper.test(String(password))) {
			return [false, 'Password must contain at least 1 uppercase char'];
		} else if (!reNumber.test(String(password))) {
			return [false, 'Password must contain at least 1 number'];
		}
		return [true, 'Valid password'];
	};

	const {
		setIsTouched: setTouchedUsername,
		isTouched: touchedUsername,
		enteredValue: enteredUsername,
		enteredValueIsValid: usernameIsValid,
		message: usernameMessage,
		valueInputIsInvalid: usernameIsInvalid,
		changeValueHandler: changeUsernameHandler,
		blurValueHandler: blurUsernameHandler,
		reset: resetUsername,
	} = useInput(checkUsername);

	const {
		setIsTouched: setTouchedAge,
		isTouched: touchedAge,
		enteredValue: enteredAge,
		enteredValueIsValid: ageIsValid,
		message: ageMessage,
		valueInputIsInvalid: ageIsInvalid,
		changeValueHandler: changeAgeHandler,
		blurValueHandler: blurAgeHandler,
		reset: resetAge,
	} = useInput(checkAge);

	const {
		setIsTouched: setTouchedEmail,
		isTouched: touchedEmail,
		enteredValue: enteredEmail,
		enteredValueIsValid: emailIsValid,
		message: emailMessage,
		valueInputIsInvalid: emailIsInvalid,
		changeValueHandler: changeEmailHandler,
		blurValueHandler: blurEmailHandler,
		reset: resetEmail,
	} = useInput(checkEmail);

	const {
		setIsTouched: setTouchedPassword,
		isTouched: touchedPassword,
		enteredValue: enteredPassword,
		enteredValueIsValid: passwordIsValid,
		message: passwordMessage,
		valueInputIsInvalid: passwordIsInvalid,
		changeValueHandler: changePasswordHandler,
		blurValueHandler: blurPasswordHandler,
		reset: resetPassword,
	} = useInput(checkPassword);

	let formIsValid = false;
	const submitHandler = (event) => {
		event.preventDefault();
		if (usernameIsValid && ageIsValid && emailIsValid && passwordIsValid) {
			formIsValid = true;
		}

		if (formIsValid) {
			const user = {
				email: enteredEmail,
				password: enteredPassword,
			};

			props.addUser(user);
			window.alert('You have registered successfully!');
		} else {
			return;
		}

		resetUsername();
		resetAge();
		resetEmail();
		resetPassword();
	};

	const idUsername = () => {
		return touchedUsername
			? usernameIsInvalid
				? 'border-red'
				: 'border-green'
			: null;
	};

	const idAge = () => {
		return touchedAge ? (ageIsInvalid ? 'border-red' : 'border-green') : null;
	};

	const idEmail = () => {
		return touchedEmail
			? emailIsInvalid
				? 'border-red'
				: 'border-green'
			: null;
	};

	const idPassword = () => {
		return touchedPassword
			? passwordIsInvalid
				? 'border-red'
				: 'border-green'
			: null;
	};

	const touchAll = () => {
		setTouchedUsername(true);
		setTouchedPassword(true);
		setTouchedEmail(true);
		setTouchedAge(true);
	};

	return (
		<>
			<h2 style={{ textAlign: 'center', marginTop: '1em' }}>SignUp</h2>
			<form className='sign-up' onSubmit={submitHandler}>
				<div className='input-block'>
					<label htmlFor=''>Username</label>
					<input
						id={idUsername()}
						type='text'
						onChange={changeUsernameHandler}
						onBlur={blurUsernameHandler}
						value={enteredUsername}
					/>
					{touchedUsername && (
						<p className={usernameIsInvalid ? 'err-txt' : 'succ-txt'}>
							{usernameMessage}
						</p>
					)}
				</div>
				<div className='input-block'>
					<label htmlFor=''>Età</label>
					<input
						type='number'
						id={idAge()}
						onChange={changeAgeHandler}
						onBlur={blurAgeHandler}
						value={enteredAge}
					/>
					{touchedAge && (
						<p className={ageIsInvalid ? 'err-txt' : 'succ-txt'}>
							{ageMessage}
						</p>
					)}
				</div>
				<div className='input-block'>
					<label htmlFor=''>Email</label>
					<input
						type='email'
						id={idEmail()}
						onChange={changeEmailHandler}
						onBlur={blurEmailHandler}
						value={enteredEmail}
					/>
					{touchedEmail && (
						<p className={emailIsInvalid ? 'err-txt' : 'succ-txt'}>
							{emailMessage}
						</p>
					)}
				</div>
				<div className='input-block'>
					<label htmlFor=''>Password</label>
					<input
						type='password'
						id={idPassword()}
						onChange={changePasswordHandler}
						onBlur={blurPasswordHandler}
						value={enteredPassword}
					/>
					{touchedPassword && (
						<p className={passwordIsInvalid ? 'err-txt' : 'succ-txt'}>
							{passwordMessage}
						</p>
					)}
				</div>
				<div className='submit-block'>
					<button onClick={touchAll}>Submit</button>
				</div>
			</form>
		</>
	);
}
