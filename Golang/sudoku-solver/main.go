package main

import (
	"fmt"
)

func checkCol(matrix [][]int, i int, num int) bool {
	for ind := 0; ind < 9; ind++ {
		// col , Row
		// fmt.Println(matrix[ind][i])
		if matrix[ind][i] == num {
			return false
		}
	}
	return true
}

func checkRow(matrix [][]int, i int, num int) bool {
	for ind := 0; ind < 9; ind++ {
		// fmt.Print(matrix[i][ind])
		if matrix[i][ind] == num {
			return false
		}
	}
	return true
}

func checkSquare(matrix [][]int, i int, j int, num int) bool {
	// Top-left square
	if i >= 0 && i <= 2 && j >= 0 && j <= 2 {
		for row := 0; row <= 2; row++ {
			for col := 0; col <= 2; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// Top-midle square
	if i >= 0 && i <= 2 && j >= 3 && j <= 5 {
		for row := 0; row <= 2; row++ {
			for col := 3; col <= 5; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// Top-right square
	if i >= 0 && i <= 2 && j >= 6 && j <= 8 {
		for row := 0; row <= 2; row++ {
			for col := 6; col <= 8; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// ------------------
	// midle-left square
	if i >= 3 && i <= 5 && j >= 0 && j <= 2 {
		for row := 3; row <= 5; row++ {
			for col := 0; col <= 2; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// midle-midle square
	if i >= 3 && i <= 5 && j >= 3 && j <= 5 {
		for row := 3; row <= 5; row++ {
			for col := 3; col <= 5; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// midle-right square
	if i >= 3 && i <= 5 && j >= 6 && j <= 8 {
		for row := 3; row <= 5; row++ {
			for col := 6; col <= 8; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// ------------------
	// bottom-left square
	if i >= 6 && i <= 8 && j >= 0 && j <= 2 {
		for row := 6; row <= 8; row++ {
			for col := 0; col <= 2; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// bottom-midle square
	if i >= 6 && i <= 8 && j >= 3 && j <= 5 {
		for row := 6; row <= 8; row++ {
			for col := 3; col <= 5; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	// buttom-right square
	if i >= 6 && i <= 8 && j >= 6 && j <= 8 {
		for row := 6; row <= 8; row++ {
			for col := 6; col <= 8; col++ {
				if num == matrix[row][col] {
					return false
				}
			}
		}
	}
	return true
}

func isValid(matrix [][]int, i int, j int, num int) bool {
	// check Col
	c := checkCol(matrix, j, num)
	// fmt.Println("Col :",c)
	// check Row
	r := checkRow(matrix, i, num)
	// fmt.Println("Row :",r)
	// check Square
	s := checkSquare(matrix, i, j, num)
	// fmt.Println("Square :",s)
	// if valid return true else false
	if r && c && s {
		return true
	}
	return false
}

func solve(matrix *[][]int, r, c int) bool {
	if r == 9 {
		return true
	} else if c == 9 {
		return solve(matrix, r+1, 0)
	} else if (*matrix)[r][c] != 0 {
		return solve(matrix, r, c+1)
	} else {
		for i := 1; i <= 9; i++ {
			if isValid(*matrix, r, c, i) {
				(*matrix)[r][c] = i
				if solve(matrix, r, c+1) {
					return true
				}
				(*matrix)[r][c] = 0
			}
		}
		return false
	}
}

func toByte(board [][]string) [][]byte {
	boardInBytes := make([][]byte, len(board))
	for i := 0; i < len(board); i++ {
		row := make([]byte, len(board[i]))
		for j := 0; j < len(board[i]); j++ {
			row[j] = board[i][j][0]
		}
		boardInBytes[i] = row
	}
	return boardInBytes
}

func toInt(board [][]byte) [][]int {
	boardInInts := make([][]int, len(board))
	for i := 0; i < len(board); i++ {
		row := make([]int, len(board[i]))
		for j := 0; j < len(board[i]); j++ {
			if board[i][j] == '.' {
				row[j] = 0 // or any placeholder for empty
			} else {
				row[j] = int(board[i][j] - '0') // convert byte to int
			}
		}
		boardInInts[i] = row
	}
	return boardInInts
}

func SudokuSolver2(matrix [][]int) [][]int {
	copied := make([][]int, len(matrix))
	for i := range matrix {
		copied[i] = make([]int, len(matrix[i]))
		for j := range matrix[i] {
			copied[i][j] = matrix[i][j]
		}
	}

	solve(&copied, 0, 0)
	return copied
}

func solveSudoku(board [][]byte) {
	boardInt := toInt(board)
	solved := SudokuSolver2(boardInt)
	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			board[i][j] = byte(solved[i][j] + '0')
		}
	}
}

func main() {
	input := [][]string{{"5", "3", ".", ".", "7", ".", ".", ".", "."},
		{"6", ".", ".", "1", "9", "5", ".", ".", "."},
		{".", "9", "8", ".", ".", ".", ".", "6", "."},
		{"8", ".", ".", ".", "6", ".", ".", ".", "3"},
		{"4", ".", ".", "8", ".", "3", ".", ".", "1"},
		{"7", ".", ".", ".", "2", ".", ".", ".", "6"},
		{".", "6", ".", ".", ".", ".", "2", "8", "."},
		{".", ".", ".", "4", "1", "9", ".", ".", "5"},
		{".", ".", ".", ".", "8", ".", ".", "7", "9"}}
	boardByte := toByte(input)
	solveSudoku(boardByte)
	solved := toInt(boardByte)
	fmt.Println(solved)
}
