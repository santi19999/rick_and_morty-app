import { ADD_FAV, REMOVE_FAV } from '../actions/action_Types/type';

const initialState = {
	myFavorites: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_FAV: {
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
			};
		}
		case REMOVE_FAV: {
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(item) => item.id != action.payload
				),
			};
		}
		default: {
			return { ...state };
		}
	}
}

export default reducer;
