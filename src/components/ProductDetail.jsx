import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../appwrite/product';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/features/cartSlice';
// import './ProductDetail.css';
import Button from './Button';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await productService.getProduct(productId);
            setProduct(product);
        };
        fetchProduct();
    }, [productId]);

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
}

export default ProductDetail;
