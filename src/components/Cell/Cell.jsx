import styles from './Cell.module.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

export class Cell extends Component {
	render() {
		const { click, value } = this.props

		return (
			<div className={styles.cell} onClick={click}>
				{value}
			</div>
		)
	}
}

Cell.propTypes = {
	click: PropTypes.func,
	value: PropTypes.string
}
