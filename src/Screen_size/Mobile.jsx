const MobileOnlyRoute = ({ children }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    return <Navigate to="/explore" replace />;
  }

  return children;
};