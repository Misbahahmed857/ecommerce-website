import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as Array<{ id: number; qty: number; color: string; size: string; uuid: number }>,
  reducers: {
    // add to cart functionalty
    add(state, action) {
      const uuid = Math.floor(1000+Math.random()*9000)
      const newObj = {...action.payload, uuid, qty:1};
      state.push(newObj);
    },


     // delete from cart
     remove(state,{payload}){
       return  state.filter((val)=> val.uuid !== payload)
     } ,
     //  addition of item
    addition(state:unknown,action){
      const obj = (state as Array<{ id: number; qty: number; color: string; size: string; uuid: number }>).find(
        (val: {id:number; color:string; size:string; uuid:number})=>
          val.id == action.payload.id && 
          val.color == action.payload.color && 
          val.size == action.payload.size 
      );
      if(obj){
        ++obj.qty;
        const newState = (state as Array<{ id: number; qty: number; color: string; size: string; uuid: number }>).filter((val: {id:number; color:string; size:string; uuid:number})=> val.uuid !== obj.uuid);
        return [...newState, obj];
      }
    },
     //   subraction of item
     subraction(state:Array<{ id: number; qty: number; color: string; size: string; uuid: number }>,action){
      const obj = state.find(
        (val: {id:number; color:string; size:string; uuid:number})=>
          val.id == action.payload.id && 
          val.color == action.payload.color && 
          val.size == action.payload.size 
      )
      if(obj !== undefined){
        obj.qty = obj.qty -1;
        const newState = state.filter((val: {id:number; color:string; size:string; uuid:number})=> val.uuid !== obj.uuid);
        state = [...newState, obj];
        return state
      }
      
      // end
  }}
})

export const {add, remove,subraction,addition} = cartSlice.actions

export default cartSlice.reducer
