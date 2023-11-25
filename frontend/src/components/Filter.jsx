// Filter.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilter, resetFilter } from '../slices/productSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        color: '',
        type: '',
        price: '',
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const handleApplyFilter = () => {
        dispatch(applyFilter(filters));
    };

    const handleReset = () => {
        setFilters({
            color: '',
            type: '',
            price: '',
        });
        dispatch(resetFilter());
    };

    return (
        <div>
            <h2>Filter</h2>
            <div>
                <label>
                    <input
                        type="radio"
                        name="color"
                        value="Blue"
                        checked={filters.color === ''}
                        onChange={handleFilterChange}
                    />
                    Blue
                </label>

            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="type"
                        value=""
                        checked={filters.type === ''}
                        onChange={handleFilterChange}
                    />
                    All Types
                </label>
                {/* Add radio buttons for types */}
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        name="price"
                        value=""
                        checked={filters.price === ''}
                        onChange={handleFilterChange}
                    />
                    All Prices
                </label>
                {/* Add radio buttons for prices */}
            </div>
            <button onClick={handleApplyFilter}>Apply Filter</button>
            <button onClick={handleReset}>Reset Filter</button>
        </div>
    );
};

export default Filter;
