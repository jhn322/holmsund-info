import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import styles from "../../styles/common/Footer.module.css";

// Icons
import { FaGithub, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

// Logo
import logo from "../../assets/logo/navLogo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={styles.footerContainer}>
      <article className={styles.footerInner}>
        <aside className={styles.logoSection}>
          {" "}
          <NavLink to="/" className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </NavLink>
        </aside>
        <section className={styles.footerIcons}>
          <a
            href="https://github.com/jhn322"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub website"
          >
            <FaGithub className={styles.github} />
            <div className={styles.iconsText}>
              <p>GitHub</p>
            </div>
          </a>
          <a
            href="https://x.com/search?q=%23holmsund&src=typeahead_click"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter website"
          >
            <FaXTwitter className={styles.twitterX} />
            <div className={styles.iconsText}>
              <p>Twitter/X</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/explore/locations/240089071/holmsund-vasterbottens-lan-sweden/"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram website"
          >
            <FaInstagram className={styles.instagram} />
            <div className={styles.iconsText}>
              <p>Instagram</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/groups/415551751837063/?locale=sv_SE"
            target="_blank"
            rel="noopener noreferrer"
            alt="Facebook website"
          >
            <FaFacebook className={styles.facebook} />
            <div className={styles.iconsText}>
              <p className={styles.text}>Facebook</p>
            </div>
          </a>
        </section>
      </article>
      <aside className={styles.secondFooter}>
        <div className={styles.footerPolicy}>
          <ul>
            <NavLink to="/">
              <li>Hem</li>
            </NavLink>
            <NavLink to="/om-oss">
              <li>Om oss</li>
            </NavLink>
            <NavLink to="/cookiepolicy">
              <li>Cookiepolicy</li>
            </NavLink>
            <NavLink to="/användarvillkor">
              <li>Användarvillkor</li>
            </NavLink>
          </ul>
        </div>
        <div className={styles.footerYear}>
          <p>&copy; {currentYear} Holmsund Information. All rights reserved.</p>
        </div>
      </aside>
    </section>
  );
};

export default Footer;
