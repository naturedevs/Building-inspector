import  {FC, useState, useEffect } from 'react';

interface BacktotopProps {

}

const TabToTop: FC<BacktotopProps> = () => {
  const [BacktoTop, setBacktopTop] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBacktopTop("d-flex");
      } else setBacktopTop("");
    });
  }, []);
  const screenup = () => {
    window.scrollTo({
      top: 10,
      behavior: "auto",
      //   smooth
    });
  };
  return (
    <>
      <div
        id="back-to-top"
        onClick={screenup}
        className={`scrollToTop ${BacktoTop}`}
      >
        <span className="arrow">
          <i className="fa fa-angle-double-up fs-lg"></i>
        </span>
      </div>
    </>
  );
};

TabToTop.propTypes = {};
TabToTop.defaultProps = {};

export default TabToTop;
