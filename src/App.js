import React, { useState } from "react";

const Slider = () => {
  const photos = [
    "./img/photo1.jpg",
    "./img/photo2.jpg",
    "./img/photo3.jpg",
    "./img/photo4.jpg",
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const goToPreviousPhoto = () => {
    if (currentPhotoIndex === 0) {
      setCurrentPhotoIndex(photos.length - 1);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }
  };

  const goToNextPhoto = () => {
    if (currentPhotoIndex === photos.length - 1) {
      setCurrentPhotoIndex(0);
    } else {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  return (
    <div>
      <h2>Слайдер фотографий</h2>
      <button onClick={goToPreviousPhoto}>Назад</button>
      <img
        src={process.env.PUBLIC_URL + photos[currentPhotoIndex]}
        alt="Slider"
      />
      <button onClick={goToNextPhoto}>Далее</button>
    </div>
  );
};

export default Slider;
