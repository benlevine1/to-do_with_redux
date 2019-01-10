import axios from 'axios';
import types from './types';
import config from '../config';

const {API_KEY, BASE_URL} = config.api

export function getAllItems(){
  const response = axios.get(BASE_URL + API_KEY)
  return{
    type: types.GET_ALL_TO_DOS,
    payload: response
  }
}

export function addNewItem(item){
  const response = axios.post(BASE_URL + API_KEY, item);
  return{
    type: types.ADD_NEW_TO_DO,
    payload: response
  }
}