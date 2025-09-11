import React, { useState } from 'react';
import { dummyTrailers } from '../assets/assets';
import BlurCircle from './BlurCircle';

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  // Function to extract YouTube video ID from URL
  const getVideoId = (url) => {
    const params = new URLSearchParams(new URL(url).search);
    return params.get('v');
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">Trailers</p>

      <div className="relative mt-6">
        <BlurCircle top='-100px' right='-100px' />

        {/* YouTube iframe */}
        <div className="relative mx-auto w-full max-w-[960px] pt-[40%] rounded-lg overflow-hidden">
  <iframe
    src={`https://www.youtube.com/embed/${getVideoId(currentTrailer.videoUrl)}`}
    title="Trailer Video"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute top-0 left-0 w-full h-full"
  />
</div>

      </div>

      {/* Optional: Thumbnails to switch trailers */}
      <div className="group grid grid-cols-4 md:gap-8 mt-8 max-w-3xl mx-auto" >
        {dummyTrailers.map((trailer, idx) => (
          <img
            key={idx}
            src={trailer.image}
            alt={`Trailer ${idx + 1}`}
            className={`w-32 h-20 object-cover rounded cursor-pointer border-2 ${
              trailer === currentTrailer ? 'border-red-500' : 'border-transparent'
            }`}
            onClick={() => setCurrentTrailer(trailer)}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
