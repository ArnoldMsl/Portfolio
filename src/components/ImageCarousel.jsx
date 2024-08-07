import React, { useState } from 'react'

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div id="projectCarousel" className="flex justify-center mt-2 mb-2 carousel lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <button onClick={prevSlide} className="w-1/12 p-0 carousel-button prev" style={{ display: images.length === 1 ? 'none' : 'block' }}>
                <img className="rotate-90" src="assets\images\general_icons\extend-button.png" alt="image précédente"></img>
            </button>
            <div className="w-10/12 rounded-lg carousel-images">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={`assets/images/Project/${img}`}
                        alt={`Slide ${index}`}
                        className={index === currentIndex ? 'active' : 'inactive'}
                    />
                ))}
            </div>
            <button onClick={nextSlide} className="w-1/12 p-0 carousel-button next" style={{ display: images.length === 1 ? 'none' : 'block' }}>
                <img className="-rotate-90" src="assets\images\general_icons\extend-button.png" alt="image suivante"></img>
            </button>
        </div>
    );
};

export default ImageCarousel
