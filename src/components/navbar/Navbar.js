import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import './navbar.css'
import LockIcon from '@mui/icons-material/Lock';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export const Navbar = () => {
    const handleLogout = () => {
        sessionStorage.removeItem("user")
        window.location.href = '/'
    }

    return <>
        <div className="navbar-ul">
            <span>
                <Link className={"iconItem"} to={"/"}><HomeIcon
                    className={"icon-home"}/></Link>
            </span>
            <ul>
                <li>
                    <AccountCircleIcon
                        className={"iconItem"}/> <Link className={"link-tag"} to={"/profile"}>Mijn profiel</Link>
                </li>
                {JSON.parse(sessionStorage.getItem("user")).role.roleName === 'ADMIN' ? <li>
                    <Link className={"link-tag"}
                          to={"/doctors"}><VaccinesIcon
                        className={'iconItem'}/>Lijst alle doctors</Link>
                </li> : JSON.parse(sessionStorage.getItem("user")).role.roleName === 'PATIENT' ? <>
                    <li>
                        <Link className={"link-tag"} to={"/patient-appointment"}><DateRangeIcon
                            className={'iconItem'}/>Mijn afspraken</Link>
                    </li>
                </> : JSON.parse(sessionStorage.getItem("user")).role.roleName === 'DOCTOR' ? <>
                    <li>
                        <Link className={"link-tag"} to={"/manage-appointments"}><DateRangeIcon
                            className={'iconItem'}/>Afspraken beheren</Link>
                    </li>
                    <li>
                        <Link className={"link-tag"} to={"/patients"}><PersonOutlineIcon
                            className={'iconItem'}/>Mijn patiënten</Link>
                    </li>
                </> : ""}
                {JSON.parse(sessionStorage.getItem("user")).role.roleName === 'ADMIN' && <>
                    <li>
                        <Link className={"link-tag"} to={"/patients"}><PersonOutlineIcon className={"iconItem"}/>Alle
                            patiënten</Link>
                    </li>
                    <li>
                        <Link className={"link-tag"} to={"/appointments"}><DateRangeIcon
                            className={"iconItem"}/>Alle afspraken</Link>
                    </li>
                </>}
            </ul>
            {JSON.parse(sessionStorage.getItem("user")).role.roleName != null &&

                <Link className={"link-tag logoutBtn"} to={"/logout"}>
                    <span className={'signOutBtn link-tag'} onClick={() => handleLogout()}><LockIcon
                        className={"lock-item"}/> Uitloggen</span>
                </Link>}
        </div>

    </>
}
