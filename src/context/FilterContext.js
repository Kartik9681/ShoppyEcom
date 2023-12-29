import React, { createContext, useContext, useEffect } from 'react'
import {useProductContext} from './ProductContext'
import { useReducer } from 'react';
import reducer from '../reducer/FilterReducer'

const FilterContext = createContext();

const initialState = {
    filterProduct: [],
    allProduct : [],
    sorting_value: "lowest",
    filters:{
        text: "" ,
    },
}
export const FilterContextProvider = ({children}) =>{
    const {products} = useProductContext();

    const[state, dispatch] = useReducer(reducer, initialState);

    const sorting = (event) =>{
        const val = event.target.value;
        dispatch({type: "SORT_PRODUCTS", payload: val});
    }

    useEffect(() => {
        dispatch({type: "SORTING_PRODUCTS", payload: products});
        dispatch({type: "FILTER_PRODUCTS" })
    }, [state.sorting_value, state.filters]);

    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});
    }, [products]);

    const updateFilter = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        dispatch({type:"UPDATE_FILTER_VALUE", payload: {name, value}});
    }   
    return(
    <FilterContext.Provider value = {{...state, sorting, updateFilter}}>
        {children}
    </FilterContext.Provider>)
}

export const useFilterContext = () =>{
    return useContext(FilterContext);
}