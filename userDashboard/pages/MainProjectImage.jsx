// components/MainProjectImage.jsx

import { useRef } from "react";

export const MainProjectImage = ({
  mainImage,
  setMainImage,
}) => {

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setMainImage(file);
  };

  return (
    <div className="w-full self-center ">

      <div className="flex items-center justify-between mb-3 ">

        <h2 className="text-xl font-bold">
          Project Cover Image
        </h2>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Upload Cover
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </div>

      {mainImage ? (

        <div className="relative w-full h-52 rounded-xl overflow-hidden border mx-auto">

          <img
            src={URL.createObjectURL(mainImage)}
            alt="Project Cover"
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={() => setMainImage(null)}
            className="absolute top-3 right-3 bg-black text-white w-8 h-8 rounded-full"
          >
            ×
          </button>

        </div>

      ) : (

        <div className=" self-center align-middle h-42 border-2 w-1/2 border-dashed rounded-xl flex items-center justify-center text-gray-500">
          No Cover Image Selected
        </div>

      )}

    </div>
  );
};

export default MainProjectImage;