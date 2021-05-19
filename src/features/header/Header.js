import React from "react";
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcons from "@material-ui/icons/Notifications"
import HeaderOption from "./header-option/HeaderOption";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../app/userSlice";
import { auth } from "../../firebase";

function Header() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	const logoutOfApp = () => {
		dispatch(logout())
		auth.signOut()
	}

	return (
		<div className="header">
			<div className="header-left">
				<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

				<div className="header-search">
					<SearchIcon/>
					<input placeholder={"Search"} type={"text"}/>
				</div>
			</div>

			<div className="header-right">
				<HeaderOption Icon={ HomeIcon } title={ "Home" }/>
				<HeaderOption Icon={ SupervisorAccountIcon } title={ "My Network" }/>
				<HeaderOption Icon={ BusinessCenterIcon } title={ "Jobs" }/>
				<HeaderOption Icon={ ChatIcon } title={ "Messaging" }/>
				<HeaderOption Icon={ NotificationsIcons } title={ "Notifications" }/>
				<HeaderOption isAvatar={ true }
				              title={ user?.displayName  || "Me"}
				              onClick={logoutOfApp}/>
			</div>
		</div>
	)
}

export default Header
