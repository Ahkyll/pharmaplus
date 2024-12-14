import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function ProductsPage() {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: 'RiteMED Ascorbic Acid 500mg (Vitamin C)',
      category: 'Tablet',
      price: 225.50,
      stock: 10,
      expirationDate: '2025-01-01',
      manufacturer: 'RiteMED',
      imageUrl: 'images/ascorbicA.jpg',
      priceType: 'per tablet'
    },
    {
      id: 2,
      name: 'ASCOF® Forte / 120ml Syrup',
      category: 'Syrup',
      price: 271,
      stock: 5,
      expirationDate: '2024-05-01',
      manufacturer: 'ASCOF',
      imageUrl: 'images/forte.jfif',
      priceType: 'for 120ml'
    },
    {
      id: 3,
      name: 'Strepsils Dry Cough Lozenge',
      category: 'Lozenge',
      price: 100,
      stock: 0,
      expirationDate: '2025-06-01',
      manufacturer: 'Strepsils',
      imageUrl: 'images/strepsils.jpg',
      priceType: 'per pack'
    },
    {
      id: 4,
      name: 'Dulcolax Tablet 5mg',
      category: 'Tablet',
      price: 101,
      stock: 50,
      expirationDate: '2025-06-01',
      manufacturer: 'Dulcolax',
      imageUrl: 'images/dulcolax.jpg',
      priceType: 'for 4 tablet'
    },
    {
      id: 5,
      name: 'Dermatrix Ultra Gel 15g',
      category: 'Gel (external use)',
      price: 415,
      stock: 50,
      expirationDate: '2025-06-01',
      manufacturer: 'Dermatix',
      imageUrl: 'images/dermatrix.jpg',
      priceType: 'for 15g'
    },
  ]);
  const [filter, setFilter] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [orderMessage, setOrderMessage] = useState(null);
  const [cartCount, setCartCount] = useState(0); 

  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: quantity
    }));
  };

  const handleOrder = (medicine) => {
    const quantity = parseInt(quantities[medicine.id], 10) || 0;
    if (quantity > 0) {
      setCartCount((prevCount) => prevCount + quantity);
      setOrderMessage(`Added ${quantity} of ${medicine.name} to your cart!`);
      setTimeout(() => setOrderMessage(null), 3000);
    } else {
      alert('Please select a quantity');
    }
  };

  const handleFinishOrdering = () => {
    navigate('/orders', { state: { cartCount, orderedItems: quantities } });
  };

  const filteredInventory = inventory.filter((item) =>
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
      <div className="flex justify-between items-center mb-4 pt-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <button
          onClick={handleFinishOrdering}
          className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md shadow-md"
        >
          Finish Ordering
          {cartCount > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartCount}
            </span>
          )}
        </button>
      </div>

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
        <button className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2" onClick={() => setFilter('all')}>All</button>
        <button className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2" onClick={() => setFilter('Tablet')}>Tablets</button>
        <button className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2" onClick={() => setFilter('Syrup')}>Syrups</button>
        <button className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2" onClick={() => setFilter('Lozenge')}>Lozenge</button>
        <button className="px-4 py-2 bg-[#5B6EB7] text-white rounded-md mr-4 mt-2" onClick={() => setFilter('Gel (external use)')}>Gel</button>
      </div>

      {/* Inventory Items */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredInventory.map((medicine) => (
          <div key={medicine.id} className="p-4 bg-[#5B6EB7] shadow-md rounded-lg relative">
            <img src={medicine.imageUrl} alt={medicine.name} className="w-full h-45 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold mb-2">
              {medicine.name} (<span className="text-white">₱ {medicine.price} {medicine.priceType}</span>)
            </h3>
            <p className="text-white text-m">{medicine.category}</p>
            <p className="text-white text-m">Manufacturer: {medicine.manufacturer}</p>
            <p className="text-white text-m">Expiration Date: {medicine.expirationDate}</p>
            <p className="text-white text-m">Stock: {medicine.stock}</p>
            <div
              className={`absolute top-2 right-2 text-white text-sm py-2 px-4 rounded ${isExpired(medicine.expirationDate)
                  ? 'bg-red-500'
                  : medicine.stock === 0
                    ? 'bg-red-500'
                    : 'bg-green-500'
                }`}
            >
              {isExpired(medicine.expirationDate)
                ? 'Expired'
                : medicine.stock === 0
                  ? 'Out of Stock'
                  : 'In Stock'}
            </div>
            {medicine.stock > 0 && !isExpired(medicine.expirationDate) && (
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max={medicine.stock}
                  value={quantities[medicine.id] || ''}
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
        <div className="fixed bottom-4 right-4 bg-green-500 text-white rounded-lg shadow-md flex items-center p-2">
          <span>✔</span>
          <span>{orderMessage}</span>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
