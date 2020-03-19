import { answerActionTypes } from "../actions/types";
import { generateId } from "../utils";

const initialState = [];

function answers(state = initialState, action) {
	switch (action.type) {
		case answerActionTypes.ADD_ANSWER: {
			return [...state, {
					id: generateId(),
					title: action.payload.title,
					category: action.payload.category
			}];
		}
		case answerActionTypes.DELETE_ANSWER: {
			return state.filter(answer => answer.id !== action.payload);
		}
		default:
			return state;
	}
}

export default answers;
