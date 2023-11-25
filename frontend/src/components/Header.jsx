import { Navbar, Nav, Container, } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import CartItems from './CartItems';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    console.log(cartItems)
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Geekonomy</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <CartItems />
                            <LinkContainer to="/login">
                                <Nav.Link>Login <FaUser /></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header >
    )
}

export default Header