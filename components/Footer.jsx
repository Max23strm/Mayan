import MayanFooterLogo from '../public/img/home/footer/footer-logo.svg'
import AdultsIcon from '../public/img/home/footer/footer-icono-adultos.svg'
import LogoFace from '../public/img/home/footer/redes/footer-redes-fb.svg'
import LogoIg from '../public/img/home/footer/redes/footer-redes-ig.svg'
import LogoLIn from '../public/img/home/footer/redes/footer-redes-linkedin.svg'
import LogoTwitter from '../public/img/home/footer/redes/footer-redes-twitter.svg'
import LogoYouTube from '../public/img/home/footer/redes/footer-redes-youtube.svg'

import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.footerContent}>
            <MayanFooterLogo className={styles.logo}/>
            <section className={styles.footerSection}>
                <a href="">Home</a>
                <a href="">Long Stays</a>
                <a href="">Eat and Drink</a>
            </section>
            <section className={styles.footerSection}>
                <a href="">Amenities</a>
                <a href="">About Us</a>
                <a href="">Groups</a>
                <a href="">Blog</a>
            </section>
            <section className={styles.footerSection}>
                <a href="">Contact</a>
                <a href="">Preventive Measures</a>
                <a href="">Privacy Notice</a>
                <a href="">Terms and Conditions</a>
            </section>
            <AdultsIcon  className={styles.logo}/>
        </section>

        <section className={styles.footerRedes}>
            <span className={styles.footerRedesIcon} target={"_blank"} href='https://www.facebook.com/mayanmonkeyhotels/'
            >
                <LogoFace className={styles.redesIcon}/>
            </span>
            <a target={"_blank"} href='https://www.instagram.com/mayanmonkey_/' className={styles.footerRedesIcon}>
                <LogoIg/>
            </a>
            <a href='https://www.youtube.com/channel/UCVt7dxigmEVKar-A4Ql9d2Q' target={"_blank"} className={styles.footerRedesIcon}>
                <LogoYouTube/>
            </a>
            <a href='https://www.linkedin.com/company/mayan-monkey-hostels/?viewAsMember=true' target={"_blank"} className={styles.footerRedesIcon}>
                <LogoLIn/>
            </a>
        </section>
    </footer>
  )
}

export default Footer