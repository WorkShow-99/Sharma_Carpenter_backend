export { default } from "./Overlay";
import { useEffect, useState } from "react";


const [shouldRender, setShouldRender] = useState(isOpen);
const [isClosing, setIsClosing] = useState(false);