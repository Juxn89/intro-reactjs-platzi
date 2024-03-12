import { Link } from 'react-router-dom'

export const LinkMenu = () => {
	return(
		<ul>
			<li>
				<Link to={'/'}>Home</Link>
			</li>
			<li>
				<Link to={'/blog'}>Blog</Link>
			</li>
			<li>
				<Link to={'/profile'}>Profile</Link>
			</li>
		</ul>
	)
}