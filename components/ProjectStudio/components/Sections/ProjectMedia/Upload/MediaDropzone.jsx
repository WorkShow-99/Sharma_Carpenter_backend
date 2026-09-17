import { useRef, useState } from "react";
import "./MediaDropzone.css";

import useMediaUpload from "../../../../../../hooks/useMediaUpload";

const MediaDropzone = ({ onFilesSelected }) => {
    const inputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const { selectFiles } = useMediaUpload({
        onFilesSelected,
    });

    const openFilePicker = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (event) => {
        selectFiles(event.target.files);

        // Allow selecting the same file again
        event.target.value = "";
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();

        setIsDragging(false);

        selectFiles(event.dataTransfer.files);
    };

    return (
        <div
            className={`media-dropzone ${isDragging ? "dragging" : ""}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input
                ref={inputRef}
                type="file"
                multiple
                hidden
                accept="image/*,video/*"
                onChange={handleFileChange}
            />

            <h3>Upload Photos & Videos</h3>

            <p>
                Drag & drop your files here or
                <button
                    type="button"
                    onClick={openFilePicker}
                >
                    Browse
                </button>
            </p>
        </div>
    );
};

export default MediaDropzone;