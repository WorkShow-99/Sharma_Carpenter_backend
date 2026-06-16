


import { useRef } from 'react';

export const Adding_image = ({ files = [], setFiles }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (!selectedFiles.length) return;

    setFiles?.([...(files || []), ...selectedFiles]);
    event.target.value = '';
  };

  const removeImage = (indexToRemove) => {
    setFiles?.(files.filter((_, index) => index !== indexToRemove));
  };

  return (
<div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-xl sm:text-2xl font-bold">Adding Image</h1>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white sm:text-base"
        >
          Add Images
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

<div
  className="
    grid
    w-full
    grid-cols-4
    sm:grid-cols-5
    md:grid-cols-6
    lg:grid-cols-7
    gap-1.5
  "
>        {files.length > 0 ? (
          files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="relative overflow-hidden rounded border bg-white shadow-sm"
            >
              <button 
                type="button"
                aria-label="Remove image"
                onClick={() => removeImage(index)}
                className="absolute right-1 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-black/70 text-xs leading-none text-white"
              >
                ×
              </button>

<div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="
  h-full
  w-full
  object-cover
  object-center
  transition-transform
  duration-300
  hover:scale-105
"
                />
              </div>

              <div className="truncate px-1.5 py-1 text-[10px] text-gray-700">
                {file.name}
              </div>
            </div>
          ))
        ) : (
<div
  className="
    col-span-full
    rounded-xl
    border-2
    border-dashed
    border-gray-300
    p-4
    sm:p-6
    text-center
    text-xs
    text-gray-500
  "
>
                No images selected. Click <span className="font-medium">Add Images</span> to upload.
          </div>
        )}
      </div>
    </div>
  );
};

export default Adding_image;
