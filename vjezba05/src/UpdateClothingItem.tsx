import React, { useState } from 'react';
import { ClothingItem } from './ClothingDisplay';

interface UpdateClothingItemProps {
  item: ClothingItem;
  onUpdate: (updatedItem: ClothingItem) => void;
  onCancel: () => void; 
}

const UpdateClothingItem: React.FC<UpdateClothingItemProps> = ({ item, onUpdate, onCancel }) => {
  const [updatedItem, setUpdatedItem] = useState<ClothingItem>(item);
  const [date, setDate] = useState<Date>(new Date()); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdatedItem(prevState => ({
      ...prevState,
      size: value
    }));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUpdatedItem(prevState => ({
      ...prevState,
      color: value
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
    setUpdatedItem(prevState => ({
      ...prevState,
      date: newDate
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedItem);
  };

  const handleCancel = () => {
    onCancel(); 
  };

  return (
    <div className = "ml-20">
      <h3 className ="text-5xl text-white font-bold m-4">Update Item</h3>
      <form onSubmit={handleSubmit} className = "flex flex-col jutsify-center">
        <label className = "text-3xl text-white m-6">
          Size:
          <div>
            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={updatedItem.size === size}
                  onChange={handleSizeChange}
                  className = "m-2 ml-10"
                />
                {size}
              </label>
            ))}
          </div>
        </label>
        <label className = "text-3xl text-white m-6">
          Type:
          <input type="text" name="type" value={updatedItem.type} onChange={handleChange} className = "ml-2 rounded-full"/>
        </label>
        <label className = "text-3xl text-white m-6">
          Description:
          <input type="text" name="description" value={updatedItem.description} onChange={handleChange} className = "ml-2 rounded-full"/>
        </label>
        <label className = "text-3xl text-white m-6">
          Color:
          <input type="color" name="color" value={updatedItem.color} onChange={handleColorChange} className = "ml-2 rounded-full"/>
        </label>
        <label className = "text-3xl text-white m-6">
          Date:
          <input type="date" name="date" value={date.toISOString().split('T')[0]} onChange={handleDateChange} className = "ml-2 rounded-full"/>
        </label>
        <div className = "flex justify-around">
          <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" type="submit">Update</button>
          <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" type="button" onClick={handleCancel}>Cancel</button> 
        </div>
      </form>
    </div>
  );
};

export default UpdateClothingItem;
