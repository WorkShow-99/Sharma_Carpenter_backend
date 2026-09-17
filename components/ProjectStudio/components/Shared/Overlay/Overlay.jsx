import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./Overlay.css";

const ANIMATION_DURATION = 300;

export default function Overlay({
    isOpen,
    onClose,
    title = "",
    children,
    width = "420px",
    mobileHeight = "90vh",
    closeOnBackdrop = true,
    closeOnEscape = true,
    showCloseButton = true,
}) {
    const [mounted, setMounted] = useState(isOpen);
    const [closing, setClosing] = useState(false);

    // Mount / Unmount with animation
    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            setClosing(false);
            return;
        }

        if (mounted) {
            setClosing(true);

            const timer = setTimeout(() => {
                setMounted(false);
                setClosing(false);
            }, ANIMATION_DURATION);

            return () => clearTimeout(timer);
        }
    }, [isOpen, mounted]);

    // Lock body scroll
    useEffect(() => {
        if (!mounted) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [mounted]);

    // Escape key
    useEffect(() => {
        if (!mounted || !closeOnEscape) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [mounted, closeOnEscape]);

    const handleClose = () => {
        if (closing) return;
        onClose?.();
    };

    if (!mounted) return null;

    return createPortal(
        <div
            className={`overlay-backdrop ${
                closing ? "overlay-backdrop-closing" : ""
            }`}
            onClick={() => {
                if (closeOnBackdrop) {
                    handleClose();
                }
            }}
        >
            <div
                className={`overlay-panel ${
                    closing ? "overlay-panel-closing" : ""
                }`}
                style={{
                    "--overlay-width": width,
                    "--overlay-mobile-height": mobileHeight,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Mobile Handle */}
                <div className="overlay-handle" />

                {/* Header */}
                <div className="overlay-header">
                    <h2>{title}</h2>

                    {showCloseButton && (
                        <button
                            className="overlay-close-button"
                            onClick={handleClose}
                            aria-label="Close Overlay"
                        >
                            <X size={22} />
                        </button>
                    )}
                </div>

                {/* Body */}
                <div className="overlay-body">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}