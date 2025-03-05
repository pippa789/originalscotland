import { useState } from "react";

export default function Gallery() {
  const images = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Artwork ${index + 1}`}
          className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform"
          onClick={() => setSelectedImage(image)}
        />
      ))}

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img src={selectedImage} alt="Selected Artwork" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
