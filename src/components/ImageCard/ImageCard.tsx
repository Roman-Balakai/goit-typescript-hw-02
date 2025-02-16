import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <li>
      <div onClick={onClick}>
        <img className={s.image} src={src} alt={alt} width="300" height="200" />
      </div>
    </li>
  );
};

export default ImageCard;
