import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Dropdown, Image } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartItems = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.qty, 0);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="link" id="cart-dropdown">
                <FaShoppingCart />Cart
                {totalItems > 0 && (
                    <Badge pill bg='warning' style={{ marginLeft: '10px' }}>
                        {totalItems}
                    </Badge>
                )}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: '20rem', border: 'none', boxShadow: 'none' }}>
                {totalItems > 0 ? (
                    <>
                        {cartItems.map(item => (
                            <Dropdown.Item key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                                <Link to={`/cart/${item.id}`}>
                                    <Image
                                        src={item.imageURL}
                                        style={{ marginRight: '10px', cursor: 'pointer' }}
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                                <div>
                                    <div>{item.name}</div>
                                    <div>Qty: {item.qty}</div>
                                </div>
                            </Dropdown.Item>
                        ))}
                        <Dropdown.Item>Total Price: ₹{totalPrice}</Dropdown.Item>
                    </>
                ) : (
                    <Dropdown.Item disabled>Cart is empty</Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CartItems;
