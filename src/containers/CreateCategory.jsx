import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoryActions } from '../actions';

const CreateCategory = function ({ addCategory }) {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addCategory(title);
	}

	return <form onSubmit={e => handleSubmit(e)}>
		<input type={'text'} value={title} onChange={e => setTitle(e.target.value)} />
		<button type={'submit'}>Add</button>
	</form>
}

const mapDispatchToProps = dispatch => ({
	addCategory: bindActionCreators(categoryActions.addCategory, dispatch)
})

export default connect(null, mapDispatchToProps)(CreateCategory);