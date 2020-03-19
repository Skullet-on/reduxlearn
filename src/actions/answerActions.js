import answerActionTypes from "./types/answerActionTypes";
import {createAction} from "redux-actions";

const addAnswer = createAction(answerActionTypes.ADD_ANSWER);
const deleteAnswer = createAction(answerActionTypes.DELETE_ANSWER);

export default {
	addAnswer,
	deleteAnswer,
}
