import PropTypes from 'prop-types'
import { Component } from 'react'

export class Scoreboard extends Component {
	render() {
		const { move, winner, draw } = this.props
		return (
			<div className="text-center mb-10 bg-orange-400 h-24 items-center rounded-md">
				<p className="text-3xl pt-5 text-indigo-500">
					{draw && !winner ? 'Ничья!' : ''}
					<span>
						{winner ?? draw ? '' : move ? 'Ходят крестики' : 'Ходят нолики'}
					</span>
				</p>
				<p className="text-center text-4xl text-red-950">
					{winner === 'X'
						? 'Победили крестики!'
						: winner === 'O'
						? 'Победили нолики!'
						: ''}
				</p>
			</div>
		)
	}
}

Scoreboard.propTypes = {
	move: PropTypes.bool,
	winner: PropTypes.string,
	draw: PropTypes.bool
}
