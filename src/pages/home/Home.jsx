import Hero from "../compnoents/Hero.jsx";
import TopNav from "../../common/TopNav.jsx";
import MainContent from "../compnoents/MainContent.jsx";
import { useState } from "react";
import data from "../../data.jsx"; 
import Footer from "../../common/Footer.jsx";

function Home() {
  // State to hold the search term
  const [searchTerm, setSearchTerm] = useState("");

  // The function to update the searchTerm state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* TOPNAV */}
      <TopNav />

      {/* HERO */}
      <Hero searchTerm={searchTerm} handleSearchChange={handleSearchChange} /> {/* Passed searchTerm and input change handler */}

      {/* MAIN CONTENT */}
      <MainContent
        cardData={data.cardData} // Pass the complete list
        searchTerm={searchTerm} // Pass the current search term
      />

      <Footer />
    </div>
  );
}

export default Home;
