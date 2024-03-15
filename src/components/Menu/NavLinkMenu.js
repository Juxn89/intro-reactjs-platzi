import { NavLink } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { RoutesList } from '../../data'

export const NavLinkMenu = () => {
	const auth = useAuth()

	return(
		<ul>
			{
				RoutesList.map(route => {
					if(route.publiOnly && auth.user)
						return null
					
					if(route.private && !auth.user) 
						return null

					return (
						<li key={ route.url }>
							<NavLink
								to={ route.url }
								className={ ({ isActive }) => isActive ? '' : '' }
								style={ ({ isActive }) => ({ color: isActive ? 'green' : 'blue' }) }
							>
								{ route.title }
							</NavLink>
						</li>
					)
				})
			}
		</ul>
	)
}