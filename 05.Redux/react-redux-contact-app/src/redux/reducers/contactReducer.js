const initialState = [
    { id: 0, name: "Name Test", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [ ...state, action.payload ];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(con => con.id === action.payload.id ? action.payload : con);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filterContacts = state.filter(con => con.id !== action.payload && con);
            state = filterContacts;
            return state;
        default:
            return state;

    }
};
export default contactReducer;
