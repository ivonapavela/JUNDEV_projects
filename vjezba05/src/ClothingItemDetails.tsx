import React, { useState } from 'react';
import axios from 'axios';
import { ClothingItem } from './ClothingDisplay';
import UpdateClothingItem from './UpdateClothingItem';

interface ClothingItemDetailsProps {
  item: ClothingItem;
  onClose: () => void;
  onDelete: (id: number) => void;
  onUpdate: (updatedItem: ClothingItem) => void; 
}

const DeleteConfirmationBox: React.FC<{ onConfirm: () => void, onCancel: () => void }> = ({ onConfirm, onCancel }) => (
  <div className = "flex flex-col justify-center items-center bg-white rounded-full text-xl font-bold text-gray-700 p-2">
    <div>Are you sure you want to delete this item?</div>
    <div className = "flex justify-between">
    <button className = "rounded-full p-1 text-2xl text-white bg-gray-600 font-bold mr-4" onClick={onConfirm}>Yes</button>
    <button className = "rounded-full p-1 text-2xl text-white bg-gray-600 font-bold ml-4" onClick={onCancel}>No</button>
    </div>
  </div>
);

const ClothingItemDetails: React.FC<ClothingItemDetailsProps> = ({ item, onClose, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showConfirmationBox, setShowConfirmationBox] = useState(false);

  const handleDelete = async () => {
    setShowConfirmationBox(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/clothing_items/${item.id}`);
      onDelete(item.id);
      onClose();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdate = async (updatedItem: ClothingItem) => {
    try {
      const response = await axios.put(`http://localhost:3001/clothing_items/${updatedItem.id}`, updatedItem);
      const updatedItemData = response.data;
      onUpdate(updatedItemData); 
      setIsEditing(false); 
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div>
      <div>
          {isEditing ? (
            <UpdateClothingItem item={item} onUpdate={handleUpdate} onCancel={() => setIsEditing(false)} />
          ) : (
            <div>
            <p className = "text-5xl text-white font-bold m-4">{item.type}</p>
            <div className = "flex justify-around">
              <div className = "w-[300px] h-1/2 m-4">
                <img className = "rounded-xl" src={item.imageUrl} alt={item.type} />
              </div>
              <div className = "mt-10 w-1/2">
                <p className = "text-3xl text-white m-6"><strong>Size:</strong> {item.size}</p>
                <p className = "text-3xl text-white m-6"><strong>Description:</strong> {item.description}</p>
                <div className = "text-3xl text-white m-6 flex"><strong>Color:</strong><p style={{ backgroundColor: item.color, width: '50px', height: '50px', borderRadius: '50%', marginLeft: '10px' }}></p></div>
                <p className = "text-3xl text-white m-6"><strong>Date:</strong>  {new Date(item.date).toLocaleDateString()}</p>
                <div className ="flex justify-around">
                  <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" onClick={() => setIsEditing(true)}>Edit</button>
                  <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" onClick={handleDelete}>Delete</button>
                  <button className = "rounded-full p-2 text-2xl bg-white text-gray-600 font-bold" onClick={onClose}>Close</button>
                </div>
              </div>
            </div>
            
            </div>
          )}
        </div>
        
      {showConfirmationBox && (
        <DeleteConfirmationBox
          onConfirm={() => {
            confirmDelete();
            setShowConfirmationBox(false);
          }}
          onCancel={() => setShowConfirmationBox(false)}
        />
      )} 
      </div>
  );
};

export default ClothingItemDetails;
