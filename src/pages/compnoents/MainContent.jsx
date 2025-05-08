// src/components/MainContent/MainContent.js
import React from "react";
import styles from '../compnoents/MainContent.module.css'; 


// Props passed down from home page
function MainContent({ cardData, searchTerm }) {

  // Filter the cardData based on the searchTerm
  const filteredData = cardData.filter(item =>
    // convert all incoming search terms to lowercase and check if input matches title 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    // item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.cardContainer}>
      {/* Map over the filteredData instead of the original data */}
      {filteredData.map((item) => (
        <div key={item.id} className={styles.cardDivs}>
          <img src={item.image} className={styles.cardImage} alt={item.title} /> {/* Added alt text */}
          <h1 className={styles.cardTitle} >{item.title}</h1>
          <p className={styles.cardContent} >{item.description}</p>
        </div>
      ))}

    </div>
  );
}

export default MainContent;