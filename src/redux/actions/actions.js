import { ADD_FAV, REMOVE_FAV } from '../actions/action_Types/type';

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
