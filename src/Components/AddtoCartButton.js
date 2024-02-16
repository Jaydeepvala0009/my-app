import React from "react";

const AddToCartButton = ({
  productData,
  selectedColor,
  selectedSize,
  selectedImage,
  selectedTitle,
  selectedPrice
}) => {
  const handleAddToCart = () => {
    // Retrieve existing cart items from local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Construct an object representing the selected product
    const selectedProduct = {
      id: productData.id,
      color: selectedColor,
      size: selectedSize,
      image: selectedImage,
      title: selectedTitle,
      price: selectedPrice
    };

    // Add the selected product to the cart items array
    existingCartItems.push(selectedProduct);

    // Store the updated cart items back to local storage
    localStorage.setItem("cart", JSON.stringify(existingCartItems));

    // Optionally, you can provide feedback to the user that the product was added to the cart
    alert("Product added to cart!");
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
};

export default AddToCartButton;
