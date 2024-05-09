/* eslint-disable react/prop-types */


const Shop = ({shop}) => {
  const {name, address,price}= shop

  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Address:{address}</h1>
      <h1>Price:{price}</h1>
    </div>
  );
};

export default Shop;



 