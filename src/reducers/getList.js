const initialState = [
  {
    id: 1,
    name: "Egor"
  },
  {
    id: 2,
    name: "Fedor"
  },
  {
    id: 3,
    name: 'Qwert'
  },
  {
    id: 4,
    name: 'Salo'
  }
];


const getList = () => {
  return dispatch => { 
    setTimeout(() => {
      dispatch({ type: "GET_LIST", payload: initialState });
    }, 2000);
  };
};
export default getList; 