import React, { useEffect, useState } from 'react';
import './PhotoGallery.css'

const PhotoGallery = () => {
    const photoData= [
        "https://i.ibb.co/j3kc2v2/banner.jpg" ,
        "https://i.ibb.co/RghXB5y/clg-1.jpg",
        "https://i.ibb.co/GkHrrZ7/clg-2.jpg",
        "https://i.ibb.co/Hp3q8nD/clg-3.jpg" ,
        "https://i.ibb.co/DK8yNGR/clg-4.jpg",
        "https://i.ibb.co/pvmLFR9/clg-5.jpg",
        "https://i.ibb.co/9nnSjt3/clg-6.jpg"

    ]
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
     
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoData.length);
    }, 5000); 

    return () => {
   
      clearInterval(slideTimer);
    };
  }, []);

  return (
    <div className="photo-gallery mt-20">
        <h2 className='text-center text-green-500 font-bold text-5xl py-10'>Our Gallery</h2>
      {photoData.map((photoURL, index) => (
        <div
          key={index}
          className={`photo-slide ${index === currentPhotoIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${photoURL})`
         }}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;