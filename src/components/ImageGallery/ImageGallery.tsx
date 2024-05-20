import ImageCard from "../ImageCard/ImageCard";

import { Image } from "../../types";


import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  image: Image[];
  openModal: (obj: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.li}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
