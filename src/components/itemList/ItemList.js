import React from 'react';
import Items from '../Items/Item';

    export default function itemList ({items}) {

        let itemsForMap = items;
        
    return itemsForMap.map((item) => (<Items id = {item.id} titulo = {item.title} descripcion = {item.description} precio = {item.price} stock = {item.stock} categoria = {item.category} />));
    }