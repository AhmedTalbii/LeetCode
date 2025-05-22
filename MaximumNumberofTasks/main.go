package main

import (
	"fmt"
)

func accedingOrder(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		if arr[i-1] > arr[i] {
			temp := arr[i-1]
			arr[i-1] = arr[i]
			arr[i] = temp
			i = 1
		}
	}
	fmt.Println(arr)
	return arr
}

func maxTaskAssign(tasks []int, workers []int, pills int, strength int) int {
	tasks = accedingOrder(tasks)
	workers = accedingOrder(workers)
	res := 0
	for i := len(workers) - 1; i >= 0; i-- {
		for j := len(tasks) - 1; j >= 0; j-- {
			if workers[i] >= tasks[j] {
				res++
				tasks = append(tasks[:j], tasks[j+1:]...)
				if len(workers) == 1 {
					break
				}
			} else if pills > 0 && workers[i]+strength >= tasks[j] {
				pills--
				res++
				tasks = append(tasks[:j], tasks[j+1:]...)
				if len(workers) == 1 {
					break
				}
			}
		}
	}
	return res
}

func main() {
	fmt.Println(maxTaskAssign([]int{3, 2, 1}, []int{0, 3, 3}, 1, 1))
	fmt.Println(maxTaskAssign([]int{5, 4}, []int{0, 0, 0}, 1, 5))
	fmt.Println(maxTaskAssign([]int{10, 15, 30}, []int{0, 10, 10, 10, 10}, 3, 11))
	fmt.Println(maxTaskAssign([]int{5, 9, 8, 5, 9}, []int{1, 6, 4, 2, 6}, 1, 5))
	fmt.Println(maxTaskAssign([]int{74, 41, 64, 20, 28, 52, 30, 4, 4, 63}, []int{38}, 0, 60))
}
