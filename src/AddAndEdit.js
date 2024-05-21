import React, { useState } from 'react';
import { createItem } from '../apiService';

const AddAndEdit = () => {
    const [title, setTitle] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = { title, descricao };
        try {
            await createItem(newItem);
            setTitle('');
            setDescricao('');
        } catch (error) {
            console.error('Error creating item', error);
        }
    };

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddAndEdit;