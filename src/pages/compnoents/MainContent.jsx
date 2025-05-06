import React from "react";
import styles from '../compnoents/MainContent.module.css'; // Adjust the path as necessary
import buildingBlocks from '../../images/buildingBlocks.png'; // Assuming you have a logo image
import aiMarketing from '../../images/AiMarketing.png'; // Assuming you have a logo image
import digitalStrategy from '../../images/digitalStrategy.png'; // Assuming you have a logo image

function MainContent() {
  return (
    <div className={styles.cardContainer} >
      <div className={styles.cardDivs}> 
        <img src={buildingBlocks} className={styles.cardImage} />
        <h1>Building Blocks of planned strategy </h1>
        <p>Whether you're looking for the tools to build your brand from the ground up or you're having trouble positioning yourself in a saturated market, this workshop gives you the planning tools you need from an industry-leading brand strategist.</p>
      </div>
      <div className={styles.cardDivs}>
        <img src={aiMarketing} className={styles.cardImage}  />
        <h1>Card 1</h1>
        <p>This is the card 1 area.</p>
      </div>
      <div className={styles.cardDivs}>
        <img src={digitalStrategy} className={styles.cardImage}  />
        <h1>Card 2</h1>
        <p>This is the card 2 area.</p>
      </div>
    </div>
  );
}

export default MainContent;
