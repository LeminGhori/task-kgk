const initialState = {
    setCategory: "All"
};

const product = (state = initialState, action) => {
    switch (action.type) {
        case "CATEGORY": return { ...state, setCategory: action.payload };
        default: return state;
    }
}

export default product;