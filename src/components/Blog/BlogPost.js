import { useNavigate, useParams } from "react-router-dom"
import { blogs } from '../../data'

export const BlogPost = () => {
	const params = useParams()
	const navigate = useNavigate()
	const { slug } = params

	const post = blogs.find(blog => blog.slug === slug)

	const returnToBlog = () => {
		// navigate(-1)
		navigate('/blog')
	}

	return(
		<>
			<button type="button" onClick={ returnToBlog }>Return to blog</button>
			<h2>{ post.title }</h2>
			<p>{ post.content }</p>
			<p>{ post.author }</p>
		</>
	)
}