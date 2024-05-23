import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  itemId: number;
  onDelete: () => void;
}

const DeleteClothingItem: React.FC<Props> = ({ itemId, onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/clothing_items/${itemId}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleConfirm = () => {
    setConfirmDelete(true);
  };

  const handleCancel = () => {
    setConfirmDelete(false);
  };

  return (
    <div>
      {!confirmDelete && (
        <button onClick={handleConfirm}>Delete</button>
      )}
      {confirmDelete && (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
};

export default DeleteClothingItem;
