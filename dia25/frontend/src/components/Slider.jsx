import { useState, useEffect } from 'react'

function Slider({ images }) {
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ stopAutoplay, setStopAutoplay ]= useState(false)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }



    useEffect(() => {
        const interval = setInterval(() => {
            if (stopAutoplay) {
                nextSlide()
            }
        }, 3000)
        return () => clearInterval(interval)
    })



    return(
        <>
            <div className='relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-lg'>
                <div className='flex transition-transform duration-500 ease-in-out max-h-200'
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Slide ${index + 1}`} className='w-full flex-shrink-0' />
                    ))}
                </div>

                <button onClick={prevSlide}
                        className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full'>
                            ◄
                </button>

                <button onClick={nextSlide}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full'>
                            ►
                </button>

                <button onClick={() => setStopAutoplay(!stopAutoplay)}
                        className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full'>
                            Stop Autoplay
                </button>

                <div className='absolute bottom-4 left-1/2 transform -translate-y-1/2 flex space-x-2'> 
                    {images.map((_, index) => (
                        <div
                            key={index} 
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider