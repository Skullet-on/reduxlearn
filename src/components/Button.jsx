import React from "react";
import styles from './Button.module.css'

const Button = ({children}) => {
	return <button className={styles.button}>
		<svg width="100" height="100" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24">
			<circle cx="50" cy="50" r="40" stroke="green" fill="yellow" />
		</svg>
		{children}
	</button>
}

export default Button;