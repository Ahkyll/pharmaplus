import React, { useState, useEffect } from 'react';

function ProductsPage() {
  const [inventory, setInventory] = useState([
    // Inventory data...
    { 
      id: 1, 
      name: 'RiteMED Ascorbic Acid 500mg (Vitamin C)', 
      category: 'Tablet', 
      price: 225.50, 
      stock: 10, 
      expirationDate: '2025-01-01',
      manufacturer: 'RiteMED',
      imageUrl: 'images/ascorbicA.jpg',  // Example image URL
      priceType: 'per tablet' // Price is per tablet
    },
    { 
      id: 2, 
      name: 'ASCOF® Forte 600mg / 5ml Syrup', 
      category: 'Syrup', 
      price: 271, 
      stock: 5, 
      expirationDate: '2024-05-01',
      manufacturer: 'ASCOF',
      imageUrl: 'images/forte.jfif',  // Example image URL
      priceType: 'for 120ml' // Price is per box
    },
    { 
      id: 3, 
      name: 'Strepsils Dry Cough Lozenge', 
      category: 'Lozenge', 
      price: 100, 
      stock: 0, 
      expirationDate: '2025-06-01',
      manufacturer: 'Strepsils',
      imageUrl: 'images/strepsils.jpg',  // Example image URL
      priceType: 'per pack' // Price is per bottle
    },
    { 
      id: 4, 
      name: 'Dulcolax Tablet 5mg', 
      category: 'Tablet', 
      price: 101, 
      stock: 50, 
      expirationDate: '2025-06-01',
      manufacturer: 'Dulcolax',
      imageUrl: 'images/dulcolax.jpg',  // Example image URL
      priceType: 'for 4 tablet' // Price is per bottle
    },
    { 
      id: 5, 
      name: 'Dermatrix Ultra Gel 15g', 
      category: 'Gel (external use)', 
      price: 415, 
      stock: 50, 
      expirationDate: '2025-06-01',
      manufacturer: 'Dermatix',
      imageUrl: 'images/dermatrix.jpg',  // Example image URL
      priceType: 'for 15g' // Price is per bottle
    },
  ]);
  const [filter, setFilter] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [orderMessage, setOrderMessage] = useState(null); // State for confirmation message

  const handleQuantityChange = (id, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [id]: quantity
    }));
  };

  const handleOrder = (medicine) => {
    const quantity = quantities[medicine.id] || 0;
    if (quantity > 0) {
      setOrderMessage(`Added ${quantity} of ${medicine.name} to your cart!`);
      setTimeout(() => setOrderMessage(null), 3000); // Hide after 3 seconds
    } else {
      alert('Please select a quantity');
    }
  };

  const filteredInventory = inventory.filter(item => 
    (filter === 'all' || item.category === filter) && 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isExpired = (expirationDate) => {
    const today = new Date();
    const expiration = new Date(expirationDate);
    return expiration < today;
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 relative">
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>

      {/* Filter Section */}
      <div className="mb-6">
        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('Tablet')}
        >
          Tablets
        </button>
        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('Capsule')}
        >
          Capsules
        </button>
        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('Syrup')}
        >
          Syrups
        </button>
        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('Lozenge')}
        >
          Lozenge
        </button>

        <button 
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2"
          onClick={() => setFilter('Gel (external use)')}
        >
          Gel
        </button>
      </div>

      {/* Inventory Items */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredInventory.map((medicine) => (
          <div key={medicine.id} className="p-4 bg-[#5B6EB7] shadow-md rounded-lg relative">
            <img src={medicine.imageUrl} alt={medicine.name} className="w-full h-45 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {medicine.name} (<span className="text-white">₱{medicine.price} {medicine.priceType}</span>)
            </h3>
            <p className="text-white text-lg">{medicine.category}</p>
            <p className="text-white text-lg">Manufacturer: {medicine.manufacturer}</p>
            <p className="text-white text-lg">Expiration Date: {medicine.expirationDate}</p>
            <p className="text-white text-lg">Stock: {medicine.stock}</p>
            <div 
              className={`absolute top-2 right-2 text-white text-sm py-2 px-4 rounded ${
                isExpired(medicine.expirationDate) ? 'bg-red-500' : (medicine.stock === 0 ? 'bg-red-500' : 'bg-green-500')
              }`}
            >
              {isExpired(medicine.expirationDate) ? 'Expired' : (medicine.stock === 0 ? 'Out of Stock' : 'In Stock')}
            </div>
            {medicine.stock > 0 && !isExpired(medicine.expirationDate) && (
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max={medicine.stock}
                  value={quantities[medicine.id]}
                  onChange={(e) => handleQuantityChange(medicine.id, e.target.value)}
                  className="border rounded-md p-2 w-20"
                />
                <button
                  onClick={() => handleOrder(medicine)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  Order
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Order Confirmation */}
      {orderMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-2 rounded-lg shadow-md flex items-center gap-2">
          <span className="text-s">✔</span> {/* Check icon */}
          <span>{orderMessage}</span>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
