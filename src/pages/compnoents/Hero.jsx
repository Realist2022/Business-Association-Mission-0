import React from "react";
import styles from "./Hero.module.css";
import marketing from "../../images/marketing.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


// Import searchTerm and handleSearchChange as props
function Hero({ searchTerm, handleSearchChange }) {

  // Function to handle form submission
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Search button clicked for:", searchTerm);
  };

  return (
    // HERO CONTAINER
    <div className={styles.heroContainer}>
      <img src={marketing} className={styles.heroImage} alt="Marketing Hero" />

      {/* HERO CONTENT */}
      <div className={styles.heroContent}>
        <p className={styles.heroSubTitle}><i>Helping marketers be</i></p>
        <h1 className={styles.heroTitle}>BRILLIANT</h1>
        {/* SEARCH INPUT FIELD */}
        <form onSubmit={handleSearchSubmit}>
          <input
            className={styles.heroInput}
            type="text"
            placeholder="Search..."
            // Use the searchTerm prop for the value
            value={searchTerm}
            // Use the handleSearchChange prop for the onChange event
            onChange={handleSearchChange}
          />
          <button type="submit" className={styles.FontAwesomeIconButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.FontAwesomeIcon} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;