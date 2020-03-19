import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { answerActions } from "../actions";
import { connect } from "react-redux";

const CreateAnswer = function ({ categories, createAnswer }) {
	const [answer, setAnswer] = useState({})

	const handleCreate = (e) => {
		e.preventDefault();
		createAnswer(answer)
	}

	return <form onSubmit={handleCreate}>
		<input type='text' value={answer.title} onChange={e => setAnswer(Object.assign({}, answer, { title: e.target.value }))} />
		<select id="categories" onChange={e => setAnswer(Object.assign({}, answer, { category: e.target.value }))}>
			<option value=''></option>
			{categories.map((category) => {
				return <option key={category.id} value={category.id}>{category.title}</option>
			})}
		</select>
		<button type='submit'>Create</button>
	</form>
}

const mapStateToProps = state => ({
	categories: state.categories
})

const mapDispatchToProps = dispatch => ({
	createAnswer: bindActionCreators(answerActions.addAnswer, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateAnswer);
