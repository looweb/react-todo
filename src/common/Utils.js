import { message } from 'antd';

import moment from 'moment';

moment.defaultFormat = 'DD/MM/YYYY hh:mm a';

export default class Utils {
  static updateById = (stack, newItem) => {
    return stack.map((item) => (item.id === newItem.id ? { ...item, ...newItem } : item));
  };

  static deleteById = (stack, itemId) => {
    return stack.filter((item) => item.id !== itemId);
  };

  static findById = (stack, itemId) => {
    return stack.find((item) => item.id === itemId);
  };

  static error = (text = 'Ha ocurrido un error') => {
    message.error(text);
  };

  static simpleDate = (date = new Date()) => {
    moment.locale('es');
    return moment(date).format(moment.defaultFormat);
  };

  static createId = (length = 8) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  static getListFromStorage = () => {
    return localStorage.todoList ? JSON.parse(localStorage.todoList) : [];
  };

  static setListInStorage = (todoList = []) => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };
}
