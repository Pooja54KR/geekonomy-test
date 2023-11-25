import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ onSearch }) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleChange = (e) => {
        const keyword = e.target.value;
        setSearchKeyword(keyword);
        onSearch(keyword);
    };

    return (
        
        <InputGroup>
           
            <Form.Control
                type="text"
                placeholder="Search by product name or color"
                value={searchKeyword}
                onChange={handleChange}
            />
             <InputGroup.Text>
                <FaSearch />
            </InputGroup.Text>
        </InputGroup>
    );
};

export default SearchBox;
