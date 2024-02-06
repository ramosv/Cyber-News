// to store the global state to be used across the application
// Getting and setting state

// for Favorite functionality
function createStore(reducer) {
    //first time that the function runs we are just going to get the initialState
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action)
        }
    }
}

const initalState = {
    favorites: []
}

function favoritesReducer(state = initalState, action) {
    //takes the prev state and an action to determine what to do with the state
    //const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } }    
    switch (action.type) {
        case "ADD_FAVORITE": {
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite];
            return { favorites };
        }
        case "REMOVE_FAVORITE": {
            const removedFavorite = action.payload.favorite;
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id);
            return { favorites };
        }
        //In case none of the cases apply
        default:
            return state;
    }

}
//const action = { type: "ADD_FAVORITE", payload: { favorite: { title: "story1", id: 1 } } }

const store = createStore(favoritesReducer);

//store.dispatch(action);
//console.log(store.getState());

export default store;

