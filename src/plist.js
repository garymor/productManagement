const Plist = () => {
  function generateRandom() {
    return Math.floor((Math.random() * 50) + 4);
  }

  const products = [
    {
      id: 1,
      name: 'redux product',
      description: 'On-demand redux expertise.',
      price: generateRandom(),
      productImageUrl: './products/daniel.jpg',
      editmode:"unedit"
    },
    {
      id: 2,
      name: 'hooks product',
      description: 'On-demand hooks expertise.',
      price: generateRandom(),
      productImageUrl: './products/elliot.jpg',
      editmode:"unedit"
    },
    {
      id: 3,
      name: 'mobx product',
      description: 'On-demand mobx expertise.',
      price: generateRandom(),
      productImageUrl: './products/helen.jpg',
      editmode:"unedit"
    },
    {
      id: 4,
      name: 'axios product',
      description: 'On-demand immutable expertise.',
      price: generateRandom(),
      productImageUrl: './products/jenny.jpg',
      editmode:"unedit"
    }
    
    
  ];

  return { products: products };
}


export default Plist