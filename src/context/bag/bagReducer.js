import {ADD_TO_BAG,EMPTY_BAG,REMOVE_ITEM} from "../types";

export const getBagTotal=(bagItems)=>{
    let price=0;
    bagItems.map((e)=>{
        price += parseInt(e.price.split("$")[1]);
    })
    console.log(price);
    return price;
}

const bagReducer=(state,action)=>{
    switch(action.type){
        case ADD_TO_BAG:{
            return{
                ...state,
                bagItems:[...state.bagItems,action.payload],
            }
        }
        case REMOVE_ITEM:{
            return{
                ...state,
                bagItems:state.bagItems.filter(
                    (item)=>item.id!=action.payload
                )
            }
        }
        case EMPTY_BAG:{
            return{
                ...state,
                bagItems:[],
            }
        }
        default:
            return state;
    }
}
export default bagReducer;