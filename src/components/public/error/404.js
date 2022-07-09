import {Link} from "react-router-dom";
import PageNotFoundImage from '../../../assets/img/404.gif'
import './404.css'
export const ErrorPage = () => {
    return (
        <>
            <div className={"footer-main"}>
                <Link  className="home-link" to={"/"}>
                <img  className="error-image" src={PageNotFoundImage} alt="404"/>
                </Link>
                <div>
                    <h1 className={"description"}>Pagina niet gevonden</h1>
                </div>
            </div>
        </>
    )
}
