import { useState,useEffect } from "react"
import ReactMarkdown from 'react-markdown'

const AboutMD = () => {
	let [content, setContent] = useState({ md: '' })
    const README = 'https://raw.githubusercontent.com/NY1105/present/main/README.md'
	useEffect(() => {
		fetch(README)
			.then((res) => res.text())
			.then((md) => {
				setContent({ md })
			})
	}, [])

	return (
		<div className="read-me">
			<ReactMarkdown children={content.md} />
		</div>
	)
}
export default AboutMD