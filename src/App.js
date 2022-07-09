import {routesAfterLogin, routesBeforeLogin} from "./components/routes/routes";
import {Navbar} from "./components/navbar/Navbar";
import {Footer} from "./components/footer/Footer";
import './app.css'

export const App = () => {
    return (
        <div className={"outer-container"}>
            {
                sessionStorage.getItem("user") === null ?
                    <div className={"background"} >
                        {
                            routesBeforeLogin()
                        }
                    </div>
                    :
                    <div className={"background"}>
                        <Navbar/>
                        {
                            routesAfterLogin()
                        }
                        <Footer/>
                    </div>
            }
        </div>
    )
}
