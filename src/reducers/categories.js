import { categoryActionTypes } from '../actions/types';
import { generateId } from "../utils";

const initialState = [];

function categories(state = initialState, action) {
	switch (action.type) {
		case categoryActionTypes.ADD_CATEGORY: {
			return [...state, {
					id: generateId(),
					title: action.payload
				}]
		}
		case categoryActionTypes.DElETE_CATEGORY: {
			return state.filter((category) => category.id !== action.payload)
		}
		default:
			return state;
	}
}

export default categories;
