import { NavLink } from 'react-router-dom'
import { RoutesList } from '../../data'

export const NavLinkMenu = () => {
	return(
		<ul>
			{
				RoutesList.map(route => (
				<li key={ route.url }>
					<NavLink
						to={ route.url }
						className={ ({ isActive }) => '' }
						style={ ({ isActive }) => ({ color: isActive ? 'green' : 'blue' }) }
					>
						{ route.title }
					</NavLink>
				</li>					
				))
			}
		</ul>
	)
}