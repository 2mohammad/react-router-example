import { NavLink } from "react-router-dom";

function NavBar({dogs}) {

return (
    <nav className="Nav">
        {dogs.map(dog => (<NavLink exact to={`/dogs/${dog.name}`}>
            {dog.name}
        </NavLink>))}
    </nav>
)
}

export default NavBar;