import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <ImageCard
          onClick={() => onClick(image)}
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
