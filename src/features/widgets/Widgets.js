import React from "react";
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className={"widgets-article"}>
			<div className={"widgets-article-left"}>
				<FiberManualRecordIcon/>
			</div>

			<div className={"widgets-article-right"}>
				<h4>{ heading }</h4>
				<p>{ subtitle }</p>
			</div>
		</div>
	)

	return (
		<div className={"widgets"}>
			<div className={"widgets-header"}>
				<h2>LinkedIn News</h2>
				<InfoIcon/>
			</div>

			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
			{newsArticle("Maria is back", "Top news - 9099 readers")}
		</div>
	)
}

export default Widgets
