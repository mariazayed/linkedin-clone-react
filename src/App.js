import React, { useEffect } from 'react';
import './App.css';
import Header from "./features/header/Header";
import Sidebar from "./features/sidebar/Sidebar";
import Feed from "./features/feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./app/userSlice";
import Login from "./features/login/Login";
import { auth } from "./firebase";
import Widgets from "./features/widgets/Widgets";

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// User is logged in
				dispatch(login({
			               email: userAuth.email,
			               uid: userAuth.uid,
			               displayName: userAuth.displayName,
			               photoUrl: userAuth.photoURL
				}))
			} else {
				dispatch(logout())
			}
		})
	}, [])

  return (
    <div className="app">
	    {!user
		    ? (<Login/>)
	    : (
	    	<div>
			    <Header/>
		        <div className={"app-body"}>
				    <Sidebar/>
				    <Feed/>
				    <Widgets/>
			    </div>
		    </div>
		    )}
    </div>
  );
}

export default App;
