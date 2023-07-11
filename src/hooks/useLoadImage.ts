import { useEffect, useState } from "react";
import { useLoadImageType } from "../types";

const useLoadImage: useLoadImageType = ({ images }) => {
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const processImages = () => {
    for (const image of images) {
      const imageToLoad = new Image();
      imageToLoad.src = image;
      imageToLoad.onload = () => {
        setLoadedImages((prev) => [...prev, image]);
      };
    }
  };

  useEffect(() => {
    processImages();
  }, []);

  useEffect(() => {
    if (loadedImages.length === images.length) {
      setLoading(false);
    }
  }, [loadedImages]);

  return { loading };
};

export default useLoadImage;
