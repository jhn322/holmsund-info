import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { setDocumentTitle } from "../utils/setDocumentTitle";
import LayoutPageMain from "../layouts/LayoutPageMain";
import { trackMainPagesClick } from "../analytics/pages";
import styles from "../../styles/pages/AllPageMain.module.css";
import header9 from "../../assets/header/header9.jpg";
import header10 from "../../assets/header/header10.jpg";
import header11 from "../../assets/header/header11.jpg";
import header12 from "../../assets/header/header12.jpg";
import galleryPage1 from "../../assets/gallery/galleryPageMain1.jpg";
import galleryPage2 from "../../assets/gallery/galleryPageMain2.jpg";
import galleryPage3 from "../../assets/gallery/galleryPageMain3.jpg";
import galleryPage4 from "../../assets/gallery/galleryPageMain4.jpg";
import galleryPage5 from "../../assets/gallery/galleryPageMain5.jpg";
import galleryPage6 from "../../assets/gallery/galleryPageMain6.jpg";
import galleryPage7 from "../../assets/gallery/galleryPageMain7.jpg";
import galleryPage8 from "../../assets/gallery/galleryPageMain8.jpg";

const GalleryPageMain = () => {
  const headerImages = [header9, header10, header11, header12];

  const gridImages = [
    { src: galleryPage1, title: "Österfjärden", path: "/galleri-1" },
    { src: galleryPage2, title: "Storsjöparken", path: "/galleri-2" },
    { src: galleryPage3, title: "Skärgårdsskolan", path: "/galleri-3" },
    { src: galleryPage4, title: "Holmsunds kyrka", path: "/galleri-4" },
    { src: galleryPage5, title: "Title 5", path: "/galleri-5" },
    { src: galleryPage6, title: "Title 6", path: "/galleri-6" },
    { src: galleryPage7, title: "Title 7", path: "/galleri-7" },
    { src: galleryPage8, title: "Title 8", path: "/galleri-8" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const gridRefs = useRef([]);

  useEffect(() => {
    setDocumentTitle("Galleri");
  }, []);

  // Preload header images
  useEffect(() => {
    const preloadImages = [];
    headerImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      preloadImages.push(img);
    });
    return () => {
      preloadImages.forEach((img) => (img.src = ""));
    };
  }, [headerImages]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [headerImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = gridRefs.current;
    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const gridItems = gridImages.map((image, index) => (
    <NavLink
      to={image.path}
      className={styles.gridItemLink}
      aria-label="Länkar till galleri sidor"
      key={index}
      onClick={() => {
        trackMainPagesClick("Grid Image", image.title, image.path);
      }}
    >
      <div
        className={styles.gridItem}
        ref={(el) => (gridRefs.current[index] = el)}
      >
        <img src={image.src} alt={`Image ${index}`} />
        <h4 className={styles.title}>{image.title}</h4>
      </div>
    </NavLink>
  ));

  return (
    <LayoutPageMain
      headerTitle="Gallery Page"
      headerBackgroundImage={headerImages[currentImageIndex]}
      renderDiscoverAddon1={true}
      renderActivityAddon2={true}
      renderGalleryAddon3={true}
      discoverTitle1="Utforska 1"
      galleryTitle3="Aktiviteter"
    >
      <section className={styles.textContainer}>
        <h2 className={styles.mainTitle}>Gallery Page Title</h2>
        <p className={styles.mainText}>
          Du kan besöka ett imponerande galleri här nere. Galleriet innehåller
          en mängd sevärda platser och intressanta punkter, från historiska
          byggnader till natursköna områden. Det finns mycket att upptäcka och
          utforska i denna samling av fascinerande platser.
        </p>
      </section>
      <div className={styles.gridContainer}>{gridItems}</div>
    </LayoutPageMain>
  );
};

export default GalleryPageMain;
