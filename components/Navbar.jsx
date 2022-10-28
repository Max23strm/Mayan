import { useState } from 'react'
import Image from 'next/image'
import DesktopHamburguer from '../public/img/desktopHamburguer.svg'
import HamburguerMenu from '../public/img/hamburguerMenu.svg'
import MayanLogo from '../public/img/logo-svg-mobile.svg'
import ChevronDown from '../public/img/chevronDown.svg'
import MayanDeskLogo from '../public/img/home/header/header-logo.svg'
import CerrarMenu from '../public/img/menu-cerrar.svg'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const [showNavDesk, setShowNavDesk] = useState(false)

  const handleExpandedNav=()=>{
    setShowNav(!showNav)
  }
  const handleExpandedNavDesk=()=>{
    setShowNavDesk(!showNavDesk)
  }

  return (
    <>
      <nav className={styles.navbar}>
        <a href="">
          <MayanLogo/>
        </a>
        <div className={styles.navbarLanguages}>
          <a href="#">EN</a>
          |
          <a href="#">ES</a>
        </div>
        <button onClick={handleExpandedNav} className={styles.expandableButton}>
          <HamburguerMenu/>
        </button>

        <div className={`${styles.expandedMenu} ${showNav&&styles.expandedShow}`}>
          <section className={styles.expandedMenuLocations}>
            <h3 className={styles.expandedMenuTitle}>Locations</h3>
            <section className={styles.expandedMenuSubmenu}>
              <a href="">Cancun</a>
              <span>|</span>
              <a href="">Tulum</a>
              <span>|</span>
              <a href="">Los Cabos</a>
            </section>
          </section>
          <section className={styles.expandedMenuTours}>
            <h3 className={styles.expandedMenuTitle}>Tours & Shuttle</h3>
            <section className={styles.expandedMenuSubmenu}>
              <a href="">Cancun</a>
              <span>|</span>
              <a href="">Tulum</a>
              <span>|</span>
              <a href="">Los Cabos</a>
            </section>
          </section>
          <section className={styles.expandedMenuAmenities}>
            <a className={styles.expandedMenuTitle}>Amenities</a>
          </section>
          <section className={styles.expandedMenuEat}>
            <a className={styles.expandedMenuTitle}>Eat & drink</a>
          </section>
          <section className={styles.expandedMenuLong}>
            <a className={styles.expandedMenuTitle}>Long stays</a>
          </section>
          <section className={styles.expandedMenuGroup}>
            <a className={styles.expandedMenuTitle}>Groups</a>
          </section>
          <section className={styles.expandedMenuAbout}>
            <a className={styles.expandedMenuTitle}>About us</a>
          </section>
          <section className={styles.expandedMenuPreventive}>
            <a className={styles.expandedMenuTitle}>Preventive measures</a>
          </section>
          <section className={styles.expandedMenuContact}>
            <a className={styles.expandedMenuTitle}>Contact</a>
          </section>
          <section className={styles.expandedMenuBlog}>
            <a className={styles.expandedMenuTitle}>Blog</a>
          </section>
        </div>
      </nav>

      <nav className={styles.navbarDesktop}>
        <section className={styles.navbarDesktopNavigation}>
          <button className={styles.navbarDesktopButton} onClick={handleExpandedNavDesk}>

            <DesktopHamburguer/>
            </button>
          <button className={`${styles.navbarDesktopButton} ${styles.navbarDesktopList}`}>
            <p>Locations</p>
            <ChevronDown/>
          </button>
          <button className={`${styles.navbarDesktopButton} ${styles.navbarDesktopList}`}>
            <p>Shuttle & Tours</p>
            <ChevronDown/>
          </button>
          <a>Long Stays</a>
        </section>
        
        <a href="" className={styles.mainDeskLogo}>
          <MayanDeskLogo/>
        </a>

        <section className={styles.navbarDesktopLang}>
          <div>
            <a href="#">EN</a>
            <span>|</span>
            <a href="#">ES</a>
          </div>
          <a href=""><Image
            src="/../public/img/whatsapp.webp"
            width={"32"}
            height="32"
            /></a>
        </section>
      </nav>
      <nav className={`${styles.navbarFullscreen} ${showNavDesk&&styles.navbarFullscreenShow}`}>
        <section className={styles.navbarFullscreenContent}>
          <MayanDeskLogo className={styles.navbarFullscreenContentLogo}/>
        
        <section className={styles.navbarFullscreenContentSubcontainer}>
          <div className={styles.navbarFullscreenContentColumn}>
            <section className={styles.navbarFullscreenContentLocations}>
                <h3 className={styles.navbarFullscreenContentTitle}>Locations</h3>
                <section className={styles.navbarFullscreenContentSubmenu}>
                  <a href="">Cancun</a>
                  <span>|</span>
                  <a href="">Tulum</a>
                  <span>|</span>
                  <a href="">Los Cabos</a>
                </section>
              </section>
              <section className={styles.navbarFullscreenContentTours}>
                <h3 className={styles.navbarFullscreenContentTitle}>Tours & Shuttle</h3>
                <section className={styles.navbarFullscreenContentSubmenu}>
                  <a href="">Cancun</a>
                  <span>|</span>
                  <a href="">Tulum</a>
                  <span>|</span>
                  <a href="">Los Cabos</a>
                </section>
              </section>
              <section className={styles.navbarFullscreenContentAmenities}>
                <a className={styles.navbarFullscreenContentTitle}>Amenities</a>
              </section>
              <section className={styles.navbarFullscreenContentEat}>
                <a className={styles.navbarFullscreenContentTitle}>Eat & drink</a>
              </section>
              <section className={styles.navbarFullscreenContentLong}>
                <a className={styles.navbarFullscreenContentTitle}>Long stays</a>
              </section>
            </div>
            <div className={styles.navbarFullscreenContentColumn}>
              <section className={styles.navbarFullscreenContentGroup}>
                <a className={styles.navbarFullscreenContentTitle}>Groups</a>
              </section>
              <section className={styles.navbarFullscreenContentAbout}>
                <a className={styles.navbarFullscreenContentTitle}>About us</a>
              </section>
              <section className={styles.navbarFullscreenContentPreventive}>
                <a className={styles.navbarFullscreenContentTitle}>Preventive measures</a>
              </section>
              <section className={styles.navbarFullscreenContentContent}>
                <a className={styles.navbarFullscreenContentTitle}>Contact</a>
              </section>
              <section className={styles.navbarFullscreenContentBlog}>
                <a className={styles.navbarFullscreenContentTitle}>Blog</a>
              </section>
            </div>
            </section>
        </section>
        <section className={styles.navbarFullscreenImage}>
          
        <CerrarMenu className={styles.navbarFullscreenImageClose}
            onClick={handleExpandedNavDesk}
            />
        </section>
      </nav>
    </>
  )
}

export default Navbar