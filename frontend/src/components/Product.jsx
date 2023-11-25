import { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { id, imageURL, name, price } = product;
    const [qty, setQty] = useState(1);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
    };

    return (
        <Card className="my-3 p-3 rounded" style={{ height: "90%" }}>
            <Link to={`/cart/${id}`}>
                <Card.Img src={imageURL} variant="top" />
            </Link>
            <Card.Body>
                <Link to={`cart/${id}`}>
                    <Card.Title as='h4'>
                        <strong>{name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="h6">
                    <Row className="align-items-center">
                        <Col xs={5} className="d-flex align-items-center p-0">
                            <span className="d-inline-block text-truncate">
                                Price: ₹{price}
                            </span>
                        </Col>
                        <Col xs={7} className="text-right">
                            <Button onClick={addToCartHandler}>Add to Cart</Button>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
