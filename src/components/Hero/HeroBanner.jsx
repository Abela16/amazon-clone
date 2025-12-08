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
        const interval = setInterval(() =>{
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
        <div className="w-full h-[500px] object-cover md:h-[600px] flex-shrink-0">
            <div className='flex transition-transform duration-700'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className='w-full flex-shrink-o'
                        alt={`slide-${index}`}
                    />
                ))}
            </div>
            <button className="absolute left-0 top-1/3 z-10 text-3xl font-bold" onClick={ prevSlide }>◀</button>
            <button className="absolute right-0 top-1/3 z-10 text-3xl font-bold " onClick={ nextSlide }>▶</button>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
    )
}

export default HeroBanner;
