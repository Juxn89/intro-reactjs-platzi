import { blogs } from '../../data'
import { BlogLink } from './BlogLink'
export const Blog = () => {
	return(
		<>
			<h1>Blog</h1>
			{
				blogs.map(blog => (
					<BlogLink key={ blog.slug } post={ blog } />
				))
			}
		</>
	)
}