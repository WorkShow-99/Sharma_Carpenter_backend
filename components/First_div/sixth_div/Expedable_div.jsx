



const [rect, setRect] = useState(null);

const ExpandedCard = ({ rect, image, onClose }) => {

  const ref = useRef(null);

  useEffect(() => {

    gsap.fromTo(
      ref.current,

      // START POSITION
      {
        top: rect.top,
        left: rect.left,

        width: rect.width,
        height: rect.height,

        borderRadius: "20px",
      },

      // END POSITION
      {
        top: 0,
        left: 0,

        width: "100vw",
        height: "100vh",

        borderRadius: "0px",

        duration: 1,
        ease: "expo.inOut",
      }
    );

  }, []);

  return (
    <div
      ref={ref}
      onClick={onClose}
      style={{
        position: "fixed",

        overflow: "hidden",

        zIndex: 999999999,

        background: "black",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};