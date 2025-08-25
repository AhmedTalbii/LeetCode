package main

import "fmt"

func majorityElement(nums []int) int {
	count := 0     // = 1 ; = 0 ; = 1
	candidate := 0 //= 3 ; = 3

	for _, num := range nums {
		if count == 0 {
			candidate = num
			fmt.Println("condidate : ", num, "condidate : ", num)
		}
		if num == candidate {
			count++
		} else {
			count--
		}
	}

	return candidate
}

func main() {
	arr1 := []int{3, 2, 3}
	fmt.Println(majorityElement(arr1))
	arr2 := []int{2, 4, 5, 1, 1, 2}
	fmt.Println(majorityElement(arr2))
}
