export const JuegoReducer = (state = [], action) => {
  switch (action.type) {
    case 'crear':
      return [...state, action.payload];
    case 'delete':
      return state.filter(juego => juego.id !== action.payload);
    case 'editar': 
        let index = state.findIndex(element => element.id === action.payload.id);
        state[index] = action.payload;
        return [...state]

    default:
      return state;
  }
};
