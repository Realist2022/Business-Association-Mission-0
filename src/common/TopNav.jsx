import React from 'react';
import styles from './TopNav.module.css';
import logo from '../images/MA_logo.webp'; // Assuming you have a logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function TopNav() {
  return (
    <div className={styles.navbar}>

      {/* LOGO */}
      <img src={logo} className={styles.logo} alt="Company Logo" /> {/* Added alt text */}

      {/* TOP NAV MAIN CONTENT - WRAPPED IN A CONTAINER */}
      <div className={styles.mainNavLinks}> {/* New container div */}
        <a href="#home">Home</a>
        <a href="#news">News</a>

        {/* DROPDOWN */}
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Dropdown
          </button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div> {/* End of new container div */}


      {/* LOGIN AND SIGNUP */}
      <div className={styles.loginAndSignupNav}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.FontAwesomeIcon}  />
        <button className={styles.loginAndSignupNavButtons}>Login</button>
        <button className={styles.loginAndSignupNavButtons}>Sign up</button>
      </div>
    </div>
  )
}

export default TopNav;