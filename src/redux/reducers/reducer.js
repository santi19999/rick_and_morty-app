import {
	ADD_FAV,
	FILTER_CARDS,
	ORDER_CARDS,
	REMOVE_FAV,
} from '../actions/action_Types/type';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_FAV: {
			return {
				...state,
				myFavorites: [...state.myFavorites, payload],
				allCharacters: [...state.allCharacters, payload],
			};
		}
		case REMOVE_FAV: {
			let copy = state.myFavorites.filter(
				(character) => parseInt(character.id) != parseInt(payload)
			);
			return {
				...state,
				myFavorites: copy,
				allCharacters: copy,
			};
		}
		case FILTER_CARDS:
			let copy2 = [...state.allCharacters];
			let filterGender = copy2.filter(
				(character) => character.gender === payload
			);
			return {
				...state,
				myFavorites: filterGender,
			};
		case ORDER_CARDS:
			let copy3 = [...state.allCharacters];

			return payload === 'ALL'
				? { copy3 }
				: {
						...state,
						myFavorites: copy3.sort((a, b) => {
							return payload === 'A' ? a.id - b.id : b.id - a.id;
						}),
				  };
		default: {
			return { ...state };
		}
	}
}
//hola
export default reducer;
