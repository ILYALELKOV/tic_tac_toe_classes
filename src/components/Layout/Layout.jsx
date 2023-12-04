import { Scoreboard } from '../ Scoreboard/ Scoreboard.jsx'
import { Board } from '../Board/Board.jsx'
import { calculation } from '../../functions/calculation.js'
import { CURRENT_BOARD, NEW_GAME } from '../../redux/actions/index.js'
import { Component } from 'react'
import { connect } from 'react-redux'

export class LayoutContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			xIsNext: true
		}
	}

	handleClick = (index) => {
		const { xIsNext } = this.state
		const { board, dispatch } = this.props

		const boardCopy = [...board]
		const winner = calculation(boardCopy)

		if (winner || boardCopy[index]) return

		boardCopy[index] = xIsNext ? 'X' : 'O'
		dispatch(CURRENT_BOARD(boardCopy))

		this.setState((prevState) => ({
			xIsNext: !prevState.xIsNext
		}))
	}

	newGame = () => {
		const { dispatch } = this.props
		dispatch(NEW_GAME)
	}

	isDraw = (array) => {
		return array.every((item) => item !== '')
	}

	render() {
		const { xIsNext } = this.state
		const { board } = this.props
		const winner = calculation(board)
		const draw = this.isDraw(board)

		return (
			<>
				<Scoreboard move={xIsNext} winner={winner} draw={draw} />
				<Board board={board} click={this.handleClick} />
				<button
					className="mt-10 bg-lime-400 h-24 text-2xl hover:bg-blue-400"
					onClick={this.newGame}
				>
					Начать игру заново
				</button>
			</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		board: state
	}
}

export const Layout = connect(mapStateToProps)(LayoutContainer)

export const Control = connect()(LayoutContainer)
