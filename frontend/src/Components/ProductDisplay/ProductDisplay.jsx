import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  console.log(product);

  const [addedToCart, setAddedToCart] = useState(false);

  // Function to handle adding the product to cart
  const handleAddToCart = (productId) => {
    addToCart(productId);
    setAddedToCart(true);
  };

  // Effect to display toast when product is added to cart
  useEffect(() => {
    if (addedToCart) {
      // Replace this with your toast library or implementation
      // alert('Product added to cart successfully!');
      toast.success("Added to Cart Successfully");
      setAddedToCart(false); // Reset addedToCart state
    }
  }, [addedToCart]);

  

  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(
    product && product.image ? product.image : ''
  );

  // Handle click on img-list images
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Check if product is not available
  if (!product) {
    return <div>Loading...</div>; // or handle loading state in a different way
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.relatedImages.map((element, index) => (
            <img
              key={index}
              src={element}
              alt=""
              onClick={() => handleImageClick(element)}
              className={element === selectedImage ? 'selected' : ''}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={selectedImage} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <p>Price :</p>
          <div className="productdisplay-right-price-old">
            £{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            £{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <p>About product :</p>
          {product.description}
        </div>
        <button onClick={() => handleAddToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
