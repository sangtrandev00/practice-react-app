import Container from "react-bootstrap/Container";
import BannerCarousel from "../../components/BannerCarousel";
import SlickSlider from "../../components/SlickSlider";
import classes from "./HomePage.module.css";
import ProductList from "../../components/ProductList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <Container className={classes.homepage}>
      {/* Banner Carousel */}
      <BannerCarousel />
      {/* Brands items */}
      <div className="categories mt-5">
        <h2> Multiple items </h2>
        <SlickSlider />
      </div>
      {/* Featured Products */}
      <div className="mt-5">
        <h2>Feature Product</h2>
        <p>There many feature products out there!</p>
        <ProductList />
      </div>
      {/* Banner Promotion  */}
      <div className="mt-5">
        <h2>Promotion Product</h2>
        <p>Discount product.....</p>
        <div className={classes["promotion-banner"]}>
          <Row>
            <Col md={8}>
              <Row>
                <Col>
                  <img
                    className={classes["promotion-banner__thumb"]}
                    src="https://www.thephoner.online/uploads/thumb-IphonePromotion.png"
                    alt="Iphone"
                  />
                </Col>
                <Col>
                  <h3>I phone 14 pro max</h3>
                  <p className={classes["promotion-banner__desc"]}>
                    Sản phẩm khuyến mãi trong tháng 3, giá mềm ưu đãi cho các khách hàng mới nhất.
                    Nhấn vào hình ảnh và đặt mua ngay!
                  </p>
                  <div className={classes["prommotion-banner__countdown-timer"]}></div>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <h4>I phone 14 Pro max</h4>
              <ul className={classes["promotion-banner__info"]}>
                <li>Màn hình</li>
                <li>Hệ điều hành</li>
                <li>Camera sau</li>
                <li>Camera trước</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      {/* Full products at shop */}
      <div className="show-full__product-list">
        <Row>
          <Col>
            <h2>Các sản phẩm tại cửa hàng</h2>
            <p>
              Rất nhiều điện thoại khác nhau đến từ các thương hiệu nổi tiếng (Oppo, Iphone,
              Samsung, Xiaomi )
            </p>
          </Col>
          <Col className={classes[""]}>
            <Link to="popular-products ml-3">Các sản phẩm phổ biến</Link>
            <Link to="ml-3">Sản phẩm mới về</Link>
            <Link to="ml-3">Sản phẩm bán chạy</Link>
            <Link to="ml-3">Ưu đãi đặc biệt</Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
