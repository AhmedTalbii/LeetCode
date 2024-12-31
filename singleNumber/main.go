package main

import "fmt"

func singleNumber(nums []int) int {
	seen := make(map[int]int)

	for _, num := range nums {
		seen[num]++
	}

	for num, count := range seen {
		if count == 1 {
			return num
		}
	}
	return 0
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1})) 
	fmt.Println(singleNumber([]int{4, 1, 2, 1, 2}))
	fmt.Println(singleNumber([]int{1}))
}
