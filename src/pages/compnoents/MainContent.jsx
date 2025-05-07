// src/components/MainContent/MainContent.js
import React from "react";
import styles from '../compnoents/MainContent.module.css'; // Adjust the path as necessary
// REMOVE direct image imports if they are only used in the data file
// REMOVE direct data import

// Accept cardData (the full list) and searchTerm as props
function MainContent({ cardData, searchTerm }) {

  // Filter the cardData based on the searchTerm
  const filteredData = cardData.filter(item =>
    // Convert both title/description and searchTerm to lowercase for case-insensitive search
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.cardContainer}>
      {/* Map over the filteredData instead of the original data */}
      {filteredData.map((item) => (
        <div key={item.id} className={styles.cardDivs}>
          <img src={item.image} className={styles.cardImage} alt={item.title} /> {/* Added alt text */}
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}

      {/* Optional: Display a message if no results are found and the search term is not empty */}
      {filteredData.length === 0 && searchTerm !== '' && (
          <p>No results found for "{searchTerm}"</p>
      )}
    </div>
  );
}

export default MainContent;