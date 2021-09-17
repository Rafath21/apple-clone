import { useReducer } from "react";
import bagContext from "./bagContext";
import bagReducer from "./bagReducer";
import {ADD_TO_BAG,REMOVE_ITEM} from "../types";
import { getBagTotal } from "./bagReducer";
const BagState=({children})=>{
    const initialState={
        bagItems:[],
    };

const [state,dispatch] =useReducer(bagReducer,initialState);

const addToBag=(item)=>{
    dispatch({type:ADD_TO_BAG,payload:item});
}
const removeItem=(id)=>{
    dispatch({type:REMOVE_ITEM,payload:id});
}


  return(
    <bagContext.Provider
    value={{bagItems:state.bagItems,addToBag,removeItem,getBagTotal,dispatch}}>
        {children}
    </bagContext.Provider>
);
};
export default BagState;