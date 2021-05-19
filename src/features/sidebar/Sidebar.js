import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/userSlice";

function Sidebar() {
	const user = useSelector(selectUser)

	const recentItems = (topic) => (
		<div className={"sidebar-recent-items"}>
			<span className={"sidebar-hash"}>#</span>
			<p>{topic}</p>
		</div>
	)

	return (
		<div className={"sidebar"}>
			<div className={"sidebar-top"}>
				<img src={"https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt={""}/>
				<Avatar className={ "sidebar-avatar" }
						src={user?.photoUrl}>
					{ user?.email[0] }
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className={"sidebar-stats"}>
				<div className={"sidebar-stat"}>
					<p>Who viewed you</p>
					<p className={"sidebar-stat-number"}>2,543</p>
				</div>
				<div className={"sidebar-stat"}>
					<p>Views on post</p>
					<p className={"sidebar-stat-number"}>2,448</p>
				</div>
			</div>

			<div className={"sidebar-bottom"}>
				<p>Recent</p>
				{recentItems('Reactjs')}
				{recentItems('Programming')}
				{recentItems('Software Engineering')}
				{recentItems('Design')}
				{recentItems('Developer')}
			</div>
		</div>
	)
}

export default Sidebar
