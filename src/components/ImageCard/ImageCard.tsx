import { Image } from "../../types";


import css from "./ImageCard.module.css";


interface ImageCardProps {
  image: Image;
  openModal: (obj: Image ) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <div className={css.big}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
        onClick={() => openModal(image)}
      />
    </div>
  );
};

export default ImageCard;
