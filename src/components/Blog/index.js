import { Outlet } from 'react-router-dom'
import { blogs } from '../../data'
import { BlogLink } from './BlogLink'
export const Blog = () => {
	return(
		<>
			<h1>Blog</h1>

			<Outlet />
			
			{
				blogs.map(blog => (
					<BlogLink key={ blog.slug } post={ blog } />
				))
			}
		</>
	)
}