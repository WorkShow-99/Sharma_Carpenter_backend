import { useCallback } from "react";

const useMediaUpload = ({ onFilesSelected }) => {
    const selectFiles = useCallback(
        (files) => {
            if (!files) return;

            const selectedFiles = Array.from(files);

            onFilesSelected?.(selectedFiles);
        },
        [onFilesSelected]
    );

    return {
        selectFiles,
    };
};

export default useMediaUpload;