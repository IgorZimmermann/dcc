import { Fragment } from "react/jsx-runtime"

import Content from "../../components/content"
import Header from "../../components/header"

export default function About() {
	const aboutData = {
		sections: [
			{
				title: "about",
				background: "/trees.jpg",
				backgroundHover: "/trees.png",
				contents: [
					{
						title: "who we are",
						text: `Our club brings together students from different study backgrounds who share one thing in common: curiosity. Some members are into electronics, some into aerodynamics, some into coding, and some simply want to try something new.
						<br/>We build and test drones from scratch, host lectures about aerodynamics, electronics, and control systems, and organise workshops where we get hands-on and learn by doing.
						<br/>Sometimes that means soldering motors and programming flight controllers. Other times it means grabbing cardboard and designing eco-friendly gliders with other student organisations.`,
					},
					{
						title: "current mission",
						text: "Right now, our big goal is the IMECHe UAS Challenge 2026 — an international student drone competition where we will put our knowledge, skills, and teamwork to the test.",
					},
				],
			},
			{
				title: "join",
				background: "/drone-over-grass.jpg",
				backgroundHover: "/drone-over-grass.png",
				contents: [
					{
						title: "join the club",
						text: `You do not need to know everything before joining.
					If you are interested in drones, engineering, electronics, software, design, 
					project management, marketing, or sponsorships, there is a place for you in the club.`,
						action: {
							link: "/contact",
							text: "contact us",
						},
					},
				],
			},
		],
	}

	return (
		<>
			{aboutData.sections.map((section, i) => (
				<Fragment key={section.title}>
					<Header {...section} index={i + 1} />
					{section.contents.map(content => (
						<Content key={section.title + content.title} {...content} index={i + 1} />
					))}
				</Fragment>
			))}
		</>
	)
}
