import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>BankDash</h1>
            <div className={styles.actions}>
                <input type="text" placeholder="Search for something..." />
                <button className={styles.settings}>⚙️</button>
                <button className={styles.notifications}>🔔</button>
                <div className="profile-pic">👤</div>
            </div>
        </header>
    )
}