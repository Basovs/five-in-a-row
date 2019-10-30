let choosenSize
let mainArr
let subArr
let player = 1
let count = 0
const chooseSizeArticle = document.querySelector('#choose-size')
const turn = document.querySelector('#turn')
const countText = document.querySelector('#count-text')

//Choose character
const player1 = document.createElement('p')
const player2 = document.createElement('p')

function chooseCharacter() {
	const avatars = document.querySelectorAll('.avatar')
	for (let i = 0; i < avatars.length; i++) {
		avatars[i].addEventListener('click', function() {
			if (player === 1) {
				player1.textContent = avatars[i].textContent
				document.querySelector('p').textContent = 'Player 2 chooses avatar:'
				this.classList.add('hide')
				player = 2
			} else {
				player2.textContent = avatars[i].textContent
				player = 1
				document.querySelector('.avatar-container').classList.add('hide')
				chooseSizeArticle.classList.remove('hide')
				document.querySelector('p').classList.add('hide')
				turn.textContent = `It´s ${player1.textContent} turn now`
			}
		})
	}
}
chooseCharacter()

//Get value from 'range' input.
const input = document.querySelector('#input')
input.addEventListener('input', drawBoard)

// Do everything necessary to draw the board
function drawBoard() {
	choosenSize = parseInt(input.value)
	autoRowLength()
	autoArrSize()
	autoPrintBtns()
	chooseSizeArticle.firstElementChild.textContent = `Choose size: ${input.value}`
	startTheGame()
}
//Running once to render the board at at the begining  <--------
drawBoard()

//Auto adjust row length for board - function
function autoRowLength() {
	const board = document.querySelector('#board')
	board.innerHTML = ''
	board.style.gridTemplateColumns = `repeat(${choosenSize}, 20px)`
}

//Empty array for all clicked btn:s later on
function autoArrSize() {
	mainArr = new Array(choosenSize)
	for (let i = 0; i < mainArr.length; i++) {
		subArr = new Array(choosenSize)
		mainArr[i] = subArr
	}
}

function activateBoard() {
	for (let y = 0; y < choosenSize; y++) {
		for (let x = 0; x < choosenSize; x++) {
			mainArr[y][x] = ''
		}
	}
}
function deactivateBoard() {
	for (let y = 0; y < choosenSize; y++) {
		for (let x = 0; x < choosenSize; x++) {
			mainArr[y][x] = undefined
		}
	}
}

function startTheGame() {
	document.querySelector('#start-btn').addEventListener('click', function() {
		chooseSizeArticle.classList.add('hide')
		turn.classList.remove('hide')
		countText.classList.remove('hide')
		activateBoard()
	})
}

function autoPrintBtns() {
	for (let y = 0; y < choosenSize; y++) {
		for (let x = 0; x < choosenSize; x++) {
			const btn = document.createElement('button').cloneNode(true)
			btn.classList.add('board-btn')
			btn.addEventListener('click', function() {
				//Checks if mainArr is unset = if btn not-clicked.
				if (mainArr[y][x] === '') {
					if (player === 1) {
						mainArr[y][x] = '1'
						btn.textContent = player1.textContent
						count += 1
						turn.textContent = `It´s ${player2.textContent} turn now`
						countText.textContent = `Times: ${count}`
						//Här ska win-cehck in
						winCheckHorizontal()
						winCheckVertical()
						winCheckDiognalDown()
						winCheckDiognalUp()
						player = 2
					} else {
						mainArr[y][x] = '2'
						btn.textContent = player2.textContent
						count += 1
						turn.textContent = `It´s ${player1.textContent} turn now`
						countText.textContent = `Times: ${count}`
						//Här ska win-cehck in
						winCheckHorizontal()
						winCheckVertical()
						winCheckDiognalDown()
						winCheckDiognalUp()
						player = 1
					}
				}
			})
			board.appendChild(btn)
		}
	}
}
function winCheckHorizontal() {
	for (let y = 0; y < choosenSize; y++) {
		for (let x = 0; x < choosenSize - 4; x++) {
			if (
				mainArr[y][x + 0] === '1' &&
				mainArr[y][x + 1] === '1' &&
				mainArr[y][x + 2] === '1' &&
				mainArr[y][x + 3] === '1' &&
				mainArr[y][x + 4] === '1'
			) {
				alert('111111 WINNER!!!')
				deactivateBoard()
			} else if (
				mainArr[y][x + 0] === '2' &&
				mainArr[y][x + 1] === '2' &&
				mainArr[y][x + 2] === '2' &&
				mainArr[y][x + 3] === '2' &&
				mainArr[y][x + 4] === '2'
			) {
				alert('222222 WINNER!!!')
				deactivateBoard()
			}
		}
	}
}

function winCheckVertical() {
	for (let y = 0; y < choosenSize - 4; y++) {
		for (let x = 0; x < choosenSize; x++) {
			if (
				mainArr[y + 0][x] === '1' &&
				mainArr[y + 1][x] === '1' &&
				mainArr[y + 2][x] === '1' &&
				mainArr[y + 3][x] === '1' &&
				mainArr[y + 4][x] === '1'
			) {
				alert('111111 WINNER!!!')
				deactivateBoard()
			} else if (
				mainArr[y + 0][x] === '2' &&
				mainArr[y + 1][x] === '2' &&
				mainArr[y + 2][x] === '2' &&
				mainArr[y + 3][x] === '2' &&
				mainArr[y + 4][x] === '2'
			) {
				alert('222222 WINNER!!!')
				deactivateBoard()
			}
		}
	}
}

function winCheckDiognalDown() {
	for (let y = 0; y < choosenSize - 4; y++) {
		for (let x = 0; x < choosenSize - 4; x++) {
			if (
				mainArr[y + 0][x + 0] === '1' &&
				mainArr[y + 1][x + 1] === '1' &&
				mainArr[y + 2][x + 2] === '1' &&
				mainArr[y + 3][x + 3] === '1' &&
				mainArr[y + 4][x + 4] === '1'
			) {
				alert('111111 WINNER!!!')
				deactivateBoard()
			} else if (
				mainArr[y + 0][x + 0] === '2' &&
				mainArr[y + 1][x + 1] === '2' &&
				mainArr[y + 2][x + 2] === '2' &&
				mainArr[y + 3][x + 3] === '2' &&
				mainArr[y + 4][x + 4] === '2'
			) {
				alert('222222 WINNER!!!')
				deactivateBoard()
			}
		}
	}
}

function winCheckDiognalUp() {
	for (let y = 4; y < choosenSize; y++) {
		for (let x = 0; x < choosenSize - 4; x++) {
			if (
				mainArr[y - 0][x + 0] === '1' &&
				mainArr[y - 1][x + 1] === '1' &&
				mainArr[y - 2][x + 2] === '1' &&
				mainArr[y - 3][x + 3] === '1' &&
				mainArr[y - 4][x + 4] === '1'
			) {
				alert('111111 WINNER!!!')
				deactivateBoard()
			} else if (
				mainArr[y - 0][x + 0] === '2' &&
				mainArr[y - 1][x + 1] === '2' &&
				mainArr[y - 2][x + 2] === '2' &&
				mainArr[y - 3][x + 3] === '2' &&
				mainArr[y - 4][x + 4] === '2'
			) {
				alert('222222 WINNER!!!')
				deactivateBoard()
			}
		}
	}
}
