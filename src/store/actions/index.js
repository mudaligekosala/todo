import axios from 'axios';
import {
  getTodos,
  postTodos
} from '../type';
//get main url
import { baseUrl } from "../../utils/url";


export function addTodos(data) {
  const request = axios({
    method: 'POST',
    url: `${baseUrl}/todo.json`,
    data: data
  }).then(
    response => response.data
  )
  return {
    type: postTodos,
    payload: request
  }
}