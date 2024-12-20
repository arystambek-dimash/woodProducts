import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    catalogItems: [
        { title: 'Межкомнатные двери', imageUrl: 'https://via.placeholder.com/400x300?text=Doors' },
        { title: 'Мебель', imageUrl: 'https://via.placeholder.com/400x300?text=Furniture' },
        { title: 'Стеновые панели "Буазери"', imageUrl: 'https://via.placeholder.com/400x300?text=Boiserie' },
        { title: 'Лестницы', imageUrl: 'https://via.placeholder.com/400x300?text=Stairs' },
        { title: 'Мебельные фасады', imageUrl: 'https://via.placeholder.com/400x300?text=Kitchen' },
    ],
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {}
});

export const selectCatalogItems = (state) => state.catalog.catalogItems;

export default catalogSlice.reducer;
