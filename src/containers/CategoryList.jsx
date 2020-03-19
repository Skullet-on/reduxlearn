import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { categoryActions } from "../actions";

const CategoryList = function ({ categories, deleteCategory }) {
	return <ul>
		{categories.map(category => {
			return <li key={category.id}>
				{category.title}
				<button type={"button"} onClick={() => deleteCategory(category.id)}>Delete</button>
			</li>
		})}
	</ul>
}

const mapStateToProps = state => ({
	categories: state.categories
})

const mapDispatchToProps = dispatch => ({
	deleteCategory: bindActionCreators(categoryActions.deleteCategory, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);