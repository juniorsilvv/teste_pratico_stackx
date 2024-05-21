// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from './Api';
import './Bootstrap.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      fetchItems(); // Refresh the list
    } catch (error) {
      console.error(`Error deleting item with id ${id}`, error);
    }
  };

  return (
    <div class="container">
      <div class="row mt-5">
        <div class="d-flex justify-content-between">
          <h1 class="text-bold">Item List</h1>
          <button class="btn btn-sm btn-primary">Adicionar</button>
        </div>
        <div class="table-responsive table-card">
          <table class="table table-nowrap table-striped-columns mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Descrição</th>
                <th scope="col">Editar</th>
                <th scope="col">Apagar</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.descricao}</td>
                  <td>
                    <button class="btn btn-sm btn-primary">
                      Editar
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-danger" onClick={() => handleDelete(item.id)} >
                      Apagar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
