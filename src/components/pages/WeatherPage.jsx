import { useState, useEffect } from "react";

// Components
import LayoutMainPage from "../layouts/LayoutPageMain";

// CSS
import styles from "../../styles/pages/WeatherPage.module.css";

// Images
import headerBackgroundImage1 from "../../assets/header/header13.jpg";
import headerBackgroundImage2 from "../../assets/header/header14.jpg";
import headerBackgroundImage3 from "../../assets/header/header15.jpg";
import headerBackgroundImage4 from "../../assets/header/header16.jpg";

const WeatherPage = () => {
  const headerImages = [
    headerBackgroundImage1,
    headerBackgroundImage2,
    headerBackgroundImage3,
    headerBackgroundImage4,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [headerImages.length]);

  return (
    <LayoutMainPage
      headerTitle="Weather Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon4={true}
      renderActivityAddon3={true}
      renderGalleryAddon2={true}
      discoverTitle4="Galleri"
      galleryTitle1="Upptäck 2"
    >
      <div className={styles.container}>
        <h2>UNDER CONSTRUCTION</h2>
      </div>
    </LayoutMainPage>
  );
};

export default WeatherPage;
