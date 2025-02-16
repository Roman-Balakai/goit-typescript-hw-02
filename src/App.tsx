import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import toast from "react-hot-toast";
import "modern-normalize";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuerry] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (!query.trim()) return;
    const getImagesData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchImages({ query, page });
        setImages((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [page, query]);
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      toast.error("Please enter query text!");
      return;
    }
    if (newQuery === query) {
      toast.error("Please change query");
      return;
    }
    setQuerry(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    document.body.classList.add("modalOpen");
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
    setSelectedImage(null);
    setIsOpen(false);
    document.body.classList.remove("modalOpen");
  };
  return (
    <>
      <SearchBar onSearchChange={handleChangeQuery} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={handleOpenModal} />
          <LoadMoreBtn changePage={handleChangePage} />
        </>
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {isOpen && (
        <ImageModal image={selectedImage} closeModal={handleCloseModal} />
      )}
    </>
  );
}

export default App;
