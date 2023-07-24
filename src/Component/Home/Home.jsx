import React from 'react';
import Banner from './Banner/Banner';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import CollageCard from './CollageCard/CollageCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PhotoGallery></PhotoGallery>
            <CollageCard></CollageCard>
        </div>
    );
};

export default Home;