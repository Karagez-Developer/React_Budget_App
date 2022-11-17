export default (state, action) => {
    switch(action.type) {
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter( expense => expense.id !== action.payload )
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        default:
            return state;
    }
}