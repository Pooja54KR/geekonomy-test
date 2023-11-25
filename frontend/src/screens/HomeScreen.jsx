import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import Product from '../components/Product';
import products from '../products';
import SearchBox from '../components/SearchBox';

const HomeScreen = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (keyword) => {
        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(keyword.toLowerCase()) ||
                product.color.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <Row className="justify-content-center">
                <Col xs={12} md={6} lg={4} xl={3}>
                    <SearchBox onSearch={handleSearch} />
                </Col>
            </Row>
            <Row>
                {filteredProducts.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
