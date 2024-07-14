import styles from '../styles/components/Header.module.scss';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';

const Header = () => {
    return (
        <header>
            <div className={`container ${styles.headerContainer}`}>
                <nav className={styles.nav}>
                    <a href="" className={styles.logo}>Foodieland<span>.</span></a>
                    <ul className={styles.navList}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">About us</a></li>
                    </ul>
                    <ul className={styles.socialsList}>
                        <li><a href="">
                        <img src={facebook} alt="" /></a></li>
                        <li><a href=""><img src={twitter} alt="" /></a></li>
                        <li><a href=""><img src={instagram} alt="" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;