import { categoryActionTypes } from './types';
import { createAction } from "redux-actions";

const addCategory = createAction(categoryActionTypes.ADD_CATEGORY);
const deleteCategory = createAction(categoryActionTypes.DElETE_CATEGORY);

export default {
	addCategory,
	deleteCategory
}
