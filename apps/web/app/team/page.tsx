import { group } from "node:console"
import { Fragment } from "react/jsx-runtime"

import Content from "../../components/content"
import Header from "../../components/header"
import TeamGroup from "../../components/team-group"

export default function Team() {
	const teamData = {
		sections: [
			{
				title: "team",
				background: "/alsion-backdrop.jpg",
				backgroundHover: null,
				groups: [
					{
						title: "the board",
						members: [
							{
								name: "Eliza",
								source: "/team/eliza.png",
								title: "head of operations / treasurer",
							},
							{
								name: "Gustavs",
								source: "/team/gustavs.png",
								title: "president",
							},
						],
					},
					{
						title: "members",
						members: [
							{
								name: "Vojtech",
								source: "/team/vojtech.png",
							},
							{
								name: "Stephan",
								source: "/team/stephan.png",
							},
						],
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
							link: "mailto:dcc@org.sdu.dk",
							text: "contact us",
						},
					},
				],
			},
		],
	}

	return (
		<>
			{teamData.sections.map((section, i) => (
				<Fragment key={section.title}>
					<Header {...section} index={i + 1} />
					{section.contents && section.contents.map(content => (
						<Content key={section.title + content.title} {...content} index={i + 1} />
					))}
					{section.groups && section.groups.map(group => (
						<TeamGroup key={group.title + section.title} {...group} index={i + 1} />
					))}
				</Fragment>
			))}
		</>
	)
}
