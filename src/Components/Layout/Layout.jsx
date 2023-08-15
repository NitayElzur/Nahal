import { Outlet, Link } from 'react-router-dom';
import './Layout.css';
import Button from '../Button/Button'
function Layout() {
    return (
        <div id="layout-container">
            <div id="header">
                <Link to={'/'}>
                    <div id='logo-div'>
                        <img id='logo' src="src\pictures\Amoutat-Nahal-Logo.png" alt="" />
                    </div>
                </Link>
                <Button text={'צרו קשר'} />
            </div>
            <div id="main-content-container">
                <Outlet />
                <div id="footer">
                    <a target='_blank' href="https://www.linkedin.com/in/nitay-elzur/">
                        נוצר ע"י ניתאי אלצור
                    </a>
                </div>
            </div>
        </div >
    )
}
export default Layout;