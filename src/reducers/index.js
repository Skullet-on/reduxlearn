import { combineReducers } from 'redux';

import categories from './categories';
import answers from './answers';

export default combineReducers({
	categories,
	answers
});
