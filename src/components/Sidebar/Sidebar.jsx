import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';
import home from '../../assets/icons/home.svg';

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    <li><img src={home} alt="" /><Link to="/settings/edit-profile">Dashboard</Link></li>
                    <li><img src={home} alt="" /><Link to="/settings/preferences">Transactions</Link></li>
                    <li><img src={home} alt="" /><Link to="/settings/security">Accounts</Link></li>
                    <li><img src={home} alt="" />Investments</li>
                    <li><img src={home} alt="" />Credit Cards</li>
                    <li><img src={home} alt="" />Loans</li>
                    <li><img src={home} alt="" />Services</li>
                    <li><img src={home} alt="" />My Privileges</li>
                    <li><img src={home} alt="" /><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </aside>
    )
}