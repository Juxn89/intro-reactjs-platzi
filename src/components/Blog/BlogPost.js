import { useParams } from "react-router-dom"
import { blogs } from '../../data'

export const BlogPost = () => {
	const params = useParams()
	const { slug } = params

	const post = blogs.find(blog => blog.slug === slug)

	return(
		<>
			<h2>{ post.title }</h2>
			<p>{ post.content }</p>
			<p>{ post.author }</p>
		</>
	)
}