export default (state = {}, action) => {
    switch (action.type) {
      case 'TEMP':
       return {
         temp: action.payload
       };
      default:
        return state;
    }
}
