import { useEffect, useState } from "react";

const Router = ({
  path,
  component,
}: {
  path: string;
  component: JSX.Element;
}) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "/");
  console.log(currentPath);
  useEffect(() => {
    const onLocationChange = () => {
      const hash = window.location.hash || "/";
      setCurrentPath(hash);
    };
    window.addEventListener("navigate", onLocationChange);
    return () => window.removeEventListener("navigate", onLocationChange);
  }, []);
  console.log(currentPath, path);
  return currentPath === path ? component : null;
};

export default Router;
