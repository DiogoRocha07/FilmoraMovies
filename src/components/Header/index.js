import './header.css'
import { Link } from 'react-router-dom'

function header(){
    return(
        <header>
            <Link className="logo" to="/">Filmora</Link>
            <Link className="fav" to="/fav"> My movies</Link>
        </header>
    )
}

export default header;