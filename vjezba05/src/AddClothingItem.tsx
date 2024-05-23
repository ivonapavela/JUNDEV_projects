import React, { useState } from 'react';
import axios from 'axios';
import { ClothingItem } from './ClothingDisplay';

interface AddClothingItemProps {
  onAdd: (newItem: ClothingItem) => void;
  onClose: () => void;
}

const AddClothingItem: React.FC<AddClothingItemProps> = ({ onAdd, onClose }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [size, setSize] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('#000000');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');


  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/clothing_items', {
        imageUrl,
        size,
        type,
        color,
        date,
        description,
      });
      onAdd(response.data);
      setImageUrl('');
      setSize('');
      setType('');
      setColor('#000000');
      setDate('');
      setDescription('');
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className = "bg-gray-700 rounded-xl mr-20 w-1/3 h-full">
      <h2 className = "text-3xl text-white font-bold m-4">Add New Clothing Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className = "text-3xl text-white m-6">Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required className = "ml-2 rounded-full"/>
        </div>
        <label className = "text-3xl text-white m-6">
          Size:
          <div>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={handleSizeChange}
                  className = "ml-5"
                />
                {size}
              </label>
            ))}
          </div>
        </label>
        <div>
          <label className = "text-3xl text-white m-6">Type:</label>
          <input type="text" value={type} onChange={(e) => setType(e.target.value)} required className = "ml-2 rounded-full"/>
        </div>
        <div>
          <label className = "text-3xl text-white m-6">Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required className = "ml-2 rounded-full"/>
        </div>
        <div>
          <label className = "text-3xl text-white m-6">Color:</label>
          <input type="color" value={color} onChange={handleColorChange} required className = "ml-2 rounded-full"/>
        </div>
        <div>
          <label className = "text-3xl text-white m-6">Date:</label>
          <input type="date" value={date} onChange={handleDateChange} required className = "ml-2 rounded-full"/>
        </div>
        <div className = "flex justify-around m-10">
            <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" type="submit">Add Item</button>
            <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" onClick={onClose}>Exit</button> 
        </div>
      </form>
    </div>
  );
};

export default AddClothingItem;
