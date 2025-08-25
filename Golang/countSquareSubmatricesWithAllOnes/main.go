package main

import "fmt"

func countSquares(matrix [][]int) int {
	res := 0
	if len(matrix) == 0 {
		return 0
	}
	for i := 0; i < len(matrix); i++ {
		for j := 0; j < len(matrix[0]); j++ {
			if matrix[i][j] == 1 {
				res++
			}
		}
	}

	for {
		
	}
	return res
}

func main() {
	mx1 := [][]int{
		{0, 1, 1, 1},
		{1, 1, 1, 1},
		{0, 1, 1, 1},
	}
	fmt.Println(countSquares(mx1))
	mx1 = [][]int{
		{1, 0, 1},
		{1, 1, 0},
		{1, 1, 0},
	}
	fmt.Println(countSquares(mx1))
}
