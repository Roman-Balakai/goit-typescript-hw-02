import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ changePage }) => {
  return (
    <div className={s.btnContainer}>
      <button onClick={changePage} className={s.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
