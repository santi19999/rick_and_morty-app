import {
	ADD_FAV,
	FILTER_CARDS,
	ORDER_CARDS,
	REMOVE_FAV,
} from '../actions/action_Types/type';

export const addFav = (character) => {
	return {
		type: ADD_FAV,
		payload: character,
	};
};

export const removeFav = (id) => {
	return {
		type: REMOVE_FAV,
		payload: id,
	};
};
export const filterCards = (gender) => {
	return {
		type: FILTER_CARDS,
		payload: gender,
	};
};
export const orderCards = (orden) => {
	return { type: ORDER_CARDS, payload: orden };
};
