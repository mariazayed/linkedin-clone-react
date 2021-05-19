import React, { useState } from "react";
import "./Login.css"
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../app/userSlice";

function Login() {
	const dispatch = useDispatch()

	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [password, setPassword] = useState("")
	const [profilePic, setProfilePic] = useState("")

	const loginToSystem = (e) => {
		e.preventDefault()

		auth.signInWithEmailAndPassword(email,password)
			.then(userAuth => {
				dispatch(login({
	               email: userAuth.user.email,
	               uid: userAuth.user.uid,
	               displayName: userAuth.user.displayName,
					profileUrl: userAuth.user.photoURL
               }))
			})
			.catch(error => {
				alert(error)
			})
	}

	const register = () => {
		if (!name) {
			return alert("Please enter a full name!")
		}

		auth.createUserWithEmailAndPassword(email,password)
			.then((userAuth) => {
				userAuth.user.updateProfile({
					displayName: name,
					photoURL: profilePic
				}).then(() => {
				dispatch(
					login({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
						displayName: name,
						photoUrl: profilePic
					}))
				})
			})
			.catch(error => {
				alert(error)
			})
	}

	return (
		<div className={"login"}>
			<img src={"https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"}
			alt={""}/>

			<form>
				<input placeholder={"Full name (required if registered)"}
				       type={"text"}
				       value={name}
				       onChange={e => setName(e.target.value)}/>
				<input placeholder={"Profile pic URL (optional)"}
				       type={"text"}
				       value={profilePic}
				       onChange={e => setProfilePic(e.target.value)}/>
				<input placeholder={"Email"}
				       type={"email"}
				       value={email}
				       onChange={e => setEmail(e.target.value)}/>
				<input placeholder={"Password"}
				       type={"password"}
				       value={password}
				       onChange={e => setPassword(e.target.value)}/>

				<button onClick={loginToSystem}>Sign In</button>
			</form>

			<p>Not a member? { " " }
			<span className={"register"} onClick={register}>Register Now</span>
			</p>
		</div>
	)
}

export default Login
