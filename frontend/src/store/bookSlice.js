import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const STATUSES = Object.freeze({
    LOADING : "loading",
    SUCCESS : "success",
    ERROR : 'error'
})

const bookSlice = createSlice({
    name : "book",
    initialState : {
        data : [],
        singleBook : {},
        status : STATUSES.LOADING
    },
    reducers : {
        setData(state,action){
            state.data = action.payload
        },
        setStatus(state,action) {
            state.status = action.payload
        },
        setSingleBook(state,action) {
            state.singleBook = action.payload
        }
    }
})

export const {setData , setStatus , setSingleBook} = bookSlice.actions;
export default bookSlice.reducer;

export function getBooks() {
    return async function getBooksThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get("http://localhost:3000/getBooks");
            if(response.status == 200) {
                dispatch(setData(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function getSingleBook(id){
    return async function getSingleBookThunk(dispatch) {
        try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.get(`http://localhost:3000/getBook/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
                dispatch(setSingleBook(response.data.data))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteBook(id) {
    return async function deleteBookThunk(dispatch) {
         try {
            dispatch(setStatus(STATUSES.LOADING));
            const response = await axios.delete(`http://localhost:3000/deleteBook/${id}`);
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
         } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
         }
    }
}