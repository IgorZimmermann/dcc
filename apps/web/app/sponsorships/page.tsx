import { Fragment } from "react/jsx-runtime"

import Content from "../../components/content"
import SponsorsHeader from "../../components/sponsors-header"

export default function Sponsorships() {
	const sponsorsData = {
		sections: [
			{
				title: "our sponsors",
				background: "/drone-over-pines.jpg",
				backgroundHover: "/drone-over-pines.png",
				sponsors: [
					{
						image: "/sponsors/tuborg-fondet.png",
						url: "https://tuborgfondet.dk/",
						name: "Tuborg Fondet",
					},
					{
						image: "/sponsors/ida.png",
						url: "https://ida.dk",
						name: "IDA",
					},
					{
						image: "/sponsors/linak.png",
						url: "https://linak.dk",
						name: "LINAK",
					},
				],
				contents: [
					{
						title: "become a sponsor",
						text: `We are open to sponsorships, material support, technical mentoring, equipment access,
						workshops, and collaboration with companies or organisations interested in student engineering.`,
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
			{sponsorsData.sections.map((section, i) => (
				<Fragment key={section.title}>
					<SponsorsHeader {...section} index={i + 1} />
					{section.contents.map(content => (
						<Content key={section.title} {...content} index={i + 1} />
					))}
				</Fragment>
			))}
		</>
	)
}
