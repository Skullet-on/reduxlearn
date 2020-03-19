import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { answerActions } from "../actions";


const AnswerList = function({ answers, deleteAnswer }) {
	return <ul>
		{answers.map(answer => {
				return <li key={answer.id}>
					{answer.title}
					<button type='button' onClick={() => deleteAnswer(answer.id)}>Delete</button>
				</li>
			})}
	</ul>
}

const mapStateToProps = state => ({
	answers: state.answers
})

const mapDispatchToProps = dispatch => ({
	deleteAnswer: bindActionCreators(answerActions.deleteAnswer, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);
