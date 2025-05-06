import React from "react";
import styles from "./Hero.module.css";
import marketing from "../../images/marketing.png";
import { useState } from "react"; // Import useState from React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  // Declare a state variable 'searchTerm' and a function 'setSearchTerm' to update it.
  // Initialize 'searchTerm' to an empty string.
  const [searchTerm, setSearchTerm] = useState("");

  // Event handler for when the input value changes.
  const handleInputChange = (event) => {
    // Update the 'searchTerm' state with the current value of the input field.
    setSearchTerm(event.target.value);
  };

  // You can optionally add another function here to handle the search submission,
  // for example, when the user presses Enter or clicks a search button.
  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission if using a form

    // Do something with the searchTerm, e.g., filter a list, make an API call, etc.
    console.log("Searching for:", searchTerm);

    // You might want to pass the searchTerm up to a parent component
    // via props here if this is part of a larger application.
    // props.onSearch(searchTerm);
  };
  return (
    <div className={styles.heroContainer}>
      <img src={marketing} className={styles.heroImage} />
      <div className={styles.heroContent}>
        <p className={styles.heroSubTitle}>Helping marketers</p>
        <h1 className={styles.heroTitle}>BRILLIANCE</h1>
        <form onSubmit={handleSearchSubmit}>
          {" "}
          {/* Optional: Wrap in a form for easier submission handling */}
          <input
            className={styles.heroInput} // Apply styles from Hero.module.css
            type="text" // Specifies the input type
            placeholder="Search..." // Provides a hint to the user
            value={searchTerm} // Makes the input a controlled component
            onChange={handleInputChange} // Calls handleInputChange whenever the value changes
          />
          <button type="submit" className={styles.FontAwesomeIconButton} ><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.FontAwesomeIcon}  /></button> {/* Optional search button */}
        </form>
      </div>
    </div>
  );
}

export default Hero;
