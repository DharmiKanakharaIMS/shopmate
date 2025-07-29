export const cartReducer = (state,action) =>
{
    const {type,payload} = action

    switch(type)
    {
        case "addToCart":
            return {...state,cartList: payload.products}

        case "removeFromCart":
            return {...state,cartList: payload.products}

        case "updateTotal":
            return{...state,total: payload.total}

        default:
            throw new Error("No case found in reducer")
    }
}