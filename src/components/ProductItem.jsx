import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import classes from "./ProductItem.module.css";
function ProductItem() {
  return (
    <Card className={classes["product-item"]} style={{ width: "18rem", textAlign: "center" }}>
      <Card.Img
        className={classes["product-item__img"]}
        variant="top"
        src="https://salt.tikicdn.com/cache/750x750/ts/product/80/14/8b/61fb657f347d14d9d7bf6fe901001a8e.jpg.webp"
      />
      <Card.Body className={classes["product-item__body"]}>
        <Card.Title className={classes["product-item__title"]}>
          <Link to="shops/1">Card Title</Link>
        </Card.Title>
        <Card.Text className={classes["product-item__desc"]}>
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body classname="d-flex justify-content-between">
        <Link className="" to="#">
          <MdShoppingCartCheckout />
          Thêm vào giỏ
        </Link>
        <Link className="ms-3" to="#">
          Xem nhanh
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
