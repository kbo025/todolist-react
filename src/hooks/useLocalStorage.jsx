import { useState } from 'react';

export function useLocalStorage(itemName, initialValue) {
    const lsItem = localStorage.getItem(itemName);
    let parsedItem= initialValue;
    if (lsItem) {
        parsedItem = JSON.parse(lsItem);
    }
    localStorage.setItem(itemName, JSON.stringify(parsedItem));
    const [item, setItem] = useState(parsedItem);
    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    return [item, saveItem];
}