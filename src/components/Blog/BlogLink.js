import { Link } from "react-router-dom"

export const BlogLink = (props) => {
	const { post } = props
	return(
		<li>
			<Link to={ `/blog/${post.slug}` }>
				{ post.title }
			</Link>
		</li>
	)
}