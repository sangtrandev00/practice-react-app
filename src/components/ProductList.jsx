import Slider from "react-slick";
import classes from "./ProductList.module.css";
import ProductItem from "./ProductItem";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function ProductList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow className="" style="" onClick="" />,
    prevArrow: <SamplePrevArrow className="" style="" onClick="" />,
  };

  return (
    <Slider {...settings} className={classes.slickSlider}>
      <div className={`${classes["slick-slider__item"]} mt-2`}>
        <ProductItem />
      </div>
      <div className={`${classes["slick-slider__item"]} mt-2`}>
        <ProductItem />
      </div>
      <div className={`${classes["slick-slider__item"]} mt-2`}>
        <ProductItem />
      </div>
      <div className={`${classes["slick-slider__item"]} mt-2`}>
        <ProductItem />
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
      </div>
      <div>
        <h3>9</h3>
      </div>
    </Slider>
  );
}
