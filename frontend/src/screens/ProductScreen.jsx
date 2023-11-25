import { useState } from 'react';
import { useParams, Link ,useNavigate} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import Rating from '../components/Rating';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import products from '../products';

const ProductScreen = () => {
    const { id: productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1);

    const product = products.find((p) => p.id === parseInt(productId));
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        // navigate('/cart');
    };
    const removeItemHandler = (itemId) => {
        dispatch(removeFromCart(itemId));
        navigate('/')
    };

    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={product.imageURL} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>T shirt : {product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>Price : ₹{product.price}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating />
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h5>Total Price: ₹{totalPrice}</h5>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Stock:</Col>
                                    <Col>
                                        <strong>
                                            {product.quantity > 0
                                                ? 'In Stock'
                                                : 'Out Of Stock'}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            {product.quantity > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) =>
                                                    setQty(Number(e.target.value))
                                                }
                                            >
                                                {[...Array(product.quantity).keys()].map(
                                                    (x) => (
                                                        <option
                                                            key={x + 1}
                                                            value={x + 1}
                                                        >
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroupItem>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    disabled={product.quantity === 0}
                                    onClick={addToCartHandler}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col md={6}>
                                        <span>Remove</span>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() => removeItemHandler(product.id)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductScreen;
