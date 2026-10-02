import { Fragment } from "react/jsx-runtime"

import Content from "../components/content"
import Header from "../components/header"
import Navbar from "../components/navbar"

export default function Home() {
	const homeData = {
		sections: [{
			title: "dcc",
			background: "/drone-in-the-sky.jpg",
			backgroundHover: "/drone-in-the-sky.png",
			contents: [
				{
					title: "what we do",
					text: `From hands-on drone builds to lectures where we geek out about aerodynamics, 
					electronics, propulsion, software, and everything in between, we are all about learning by doing.
					<br />
					Right now, our main mission is preparing for the <mark>IMECHE UAS Challenge 2026</mark>,
					where we will put our drone systems to the test.`,
					action: {
						link: "/about",
						text: "read more about us",
					},
				},
			],
		}, {
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
		}],
	}

	const navbarData = {
		links: [
			{
				url: "/",
				text: "home",
			},
			{
				url: "/about",
				text: "about",
			},
			{
				url: "/team",
				text: "team",
			},
			{
				url: "/sponsorships",
				text: "sponsorships",
			},
		],
		socials: [
			{
				url: "https://instagram.com/droneconstructionclub",
				site: "instagram",
			},
			{
				url: "https://www.youtube.com/@DroneConstructionClub",
				site: "youtube",
			},
			{
				url: "https://linkedin.com/company/drone-construction-club",
				site: "linkedin",
			},
		],
		email: "dcc@org.sdu.dk",
	}

	return (
		<>
			<Navbar {...navbarData} />

			<main>
				{homeData.sections.map((section, i) => (
					<Fragment key={section.title}>
						<Header {...section} index={i + 1} />
						{section.contents.map(content => (
							<Content key={section.title} {...content} index={i + 1} />
						))}
					</Fragment>
				))}
			</main>
		</>
	)
}
