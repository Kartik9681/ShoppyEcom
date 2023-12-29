const FilterReducer = (state,action) => {

    switch(action.type){
        case "LOAD_FILTER_PRODUCTS": {
            return{
                ...state,
                filterProduct: [...action.payload],
                allProduct: [...action.payload],
            }
        }

        case "SORT_PRODUCTS": {
            return{
                ...state,
                sorting_value: action.payload,
            }
        }
        
        case "SORTING_PRODUCTS": {
            let newdata;
            let temp = [...action.payload];

            if(state.sorting_value === "lowest"){
                newdata = temp.sort((a,b) =>{return a.price-b.price});
            }
            if(state.sorting_value === "a-z"){
                newdata = temp.sort((a,b) => a.name.localeCompare(b.name));
            }
            if(state.sorting_value === "z-a"){
                newdata = temp.sort((a,b) => b.name.localeCompare(a.name));
            }
            if(state.sorting_value === "highest"){
                newdata = temp.sort((a,b) =>{return b.price-a.price});
            }
            return{
                ...state,
                filterProduct: newdata,
            }
        }

        case "UPDATE_FILTER_VALUE": {
            const {name,value} = action.payload;
            return{
                ...state,
                filters : {
                    ...state.filters,
                    [name] : value,
                }
            }
        }

        case "FILTER_PRODUCTS":{
            let{filterProduct} = state;
            let tempp = [...filterProduct];

            const {text} = state.filters;

            if(text){
                tempp = tempp.filter((curElem) =>{
                    return curElem.name.toLowerCase().includes(text);
                });
            }
            return{
                ...state,
                filterProduct: tempp,
            }
        }
    }
}

export default FilterReducer;