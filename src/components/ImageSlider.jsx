import React, { useState, useEffect } from 'react';
import products from '../assets/file.json';
import {
    BrowserRouter as Router,
    Route,
    useParams,
} from 'react-router-dom';
import ims from '../assets/200w.webp'
function ImageSlider() {
    let { id } = useParams();

    const getObjectById = (id1) => {
        const product = products.find((item) => item.id === parseInt(id1));
        return product || null;
    };

    const product = getObjectById(id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Function to change the image at regular intervals (every 3 seconds)
        const interval = setInterval(() => {
            if (product && product.images.length > 0) {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % product.images.length
                );
            }
        }, 1000);

        return () => {
            clearInterval(interval); // Clear interval on component unmount
        };
    }, [product]);

    let imagesy = null;

    if (product) {
        imagesy = product.images.map((imgUrl, index) => (
            <img
                src={imgUrl}
                alt={`Image ${index + 1}`}
                key={index}
                style={{
                    display: index === currentImageIndex ? 'block' : 'none',
                }}
                className='w-full h-full object-cover rounded'
            />
        ));
    }

    return (
        <div className="h-full w-full" >
            {product ? (
                <div>
                    
                    <div className="mx-auto  w-[80%] h-[700px] rounded-xl shadow-2xl">
                        {imagesy}
                    </div>
                    <div className='flex flex-row justify-center my-20 w-full px-10'>
                        <div className="w-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-xl flex">
                            <div className="w-3/4 p-8">
                                <h1 className="text-4xl font-semibold mb-4">{product.title}</h1>
                                <p className="text-lg mb-4">{product.description}</p>
                                <p className="text-gray-700 mb-4">Price: ${product.price}</p>
                                <p className="text-gray-700 mb-4">Rating: {product.rating}</p>
                                <p className="text-gray-700 mb-4">Stock: {product.stock}</p>
                                <p className="text-gray-700 mb-4">Brand: {product.brand}</p>
                                <p className="text-gray-700 mb-4">Category: {product.category}</p>
                            </div>
                            <div className="w-1/4">
                                {/* Additional image on the right */}
                                <img
                                    src={ims} // Change this to the appropriate image source
                                    alt="Additional Image"
                                    className="w-60 h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
        </div>
                
            ) : (
                <p>No product found for ID: {id}</p>
            )}
        </div>
    );
}

export default ImageSlider;
