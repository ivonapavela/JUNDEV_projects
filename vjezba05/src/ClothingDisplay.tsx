import { useState, useEffect } from 'react';
import axios from 'axios';
import ClothingItemDetails from './ClothingItemDetails';
import AddClothingItem from './AddClothingItem';

export interface ClothingItem {
  id: number;
  imageUrl: string;
  size: string;
  date: Date;
  type: string;
  color: string;
  description: string;
}

const ClothingDisplay = () => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clothing_items');
      setClothingItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleItemClick = (item: ClothingItem) => {
    setSelectedItem(item);
  };

  const handleAddItem = (newItem: ClothingItem) => {
    setClothingItems([...clothingItems, newItem]);
    setShowAddItem(false);
  };

  const handleDeleteItem = (id: number) => {
    setClothingItems(clothingItems.filter(item => item.id !== id));
  };

  const handleUpdateItem = (updatedItem: ClothingItem) => {
    setSelectedItem(updatedItem);
  };

  return (
    <div>
      <h1 className="text-7xl text-gray-600 font-bold flex justify-center m-10">CLOTHING ITEMS</h1>
      <div className="flex justify-around m-20">
        {!showAddItem && <button className="rounded-full bg-gray-600 p-4 text-xl text-white font-bold h-full" onClick={() => setShowAddItem(true)}>Add Item</button>}
        {showAddItem && <AddClothingItem onAdd={handleAddItem} onClose={() => setShowAddItem(false)} />}
        <div className="grid grid-cols-3 gap-4 justify-items-center w-2/3 h-full">
          {clothingItems.map((item: ClothingItem) => (
            <div className = "w-[250px] h-[350px]" key={item.id} onClick={() => handleItemClick(item)}>
              <img src={item.imageUrl} alt={item.type} className="w-full h-full fit-cover rounded-xl cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center backdrop-blur-md z-50">
          <ClothingItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} onUpdate={handleUpdateItem} onDelete={handleDeleteItem} />
        </div>
      )}
    </div>
  );
};

export default ClothingDisplay;
