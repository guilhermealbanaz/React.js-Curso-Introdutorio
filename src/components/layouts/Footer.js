import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from './Footer.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <a href="https://www.linkedin.com/in/guilherme-bragato-albanaz-8a22b422b/">
                <li>
                    <FaLinkedin/>
                </li>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-bragato-albanaz-8a22b422b/">
                <li>
                    <FaInstagram/>
                </li>
                </a>
                <a href="https://www.linkedin.com/in/guilherme-bragato-albanaz-8a22b422b/">
                <li>
                    <FaFacebook/>
                </li>
                </a>
            </ul>
            <p className={styles.copy_right}>
                <span>
                    Costs
                </span>
                &copy;2023
            </p>
        </footer>
    )
}
export default Footer