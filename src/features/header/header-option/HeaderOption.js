import React from "react";
import "./HeaderOption.css"
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/userSlice";

function HeaderOption({isAvatar, Icon, title, onClick}) {
	const user = useSelector(selectUser)

	return (
		<div onClick={onClick} className={"header-option"}>
			{Icon && <Icon className={"header-option-icon"} />}
			{ isAvatar &&
			<Avatar className={ "header-option-icon" }
					src={ user?.photoUrl }>
						{ user?.email[0] }
			</Avatar>
		}
			<h3 className={"header-option-title"}>{title}</h3>
		</div>
	);
}

export default HeaderOption;
