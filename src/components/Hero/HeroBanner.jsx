import { useState, useEffect } from 'react'
import bgImg1 from '../../assets/bg-img1.jpg'
import bgImg2 from '../../assets/bg-img2.jpg'
import bgImg3 from '../../assets/bg-img3.jpg'
import bgImg4 from '../../assets/bg-img4.jpg'
import bgImg5 from '../../assets/bg-img5.jpg'

function HeroBanner() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
            <div 
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div 
                        key={index}
                        className="w-full h-full flex-shrink-0 flex-grow-0"
                    >
                        <img
                            src={img}
                            className="w-full h-full object-cover"
                            alt={`slide-${index}`}
                        />
                    </div>
                ))}
            </div>
            
            <button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl font-bold bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                onClick={prevSlide}
            >
                ◀
            </button>
            <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white text-3xl font-bold bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-all"
                onClick={nextSlide}
            >
                ▶
            </button>
            
            <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-white to-transparent"></div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
            </div>

        </div>
    )
}

export default HeroBanner;
