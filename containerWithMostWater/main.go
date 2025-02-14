package main

import "fmt"

func maxArea(height []int) int {
	res := 0
	for i := 0; i < len(height); i++ {
		ver := 0
		for j := i + 1; j < len(height); j++ {
			ver++
			if height[i] > height[j] {
				temp := height[j] * ver
				if temp > res {
					res = temp
				}
			} else if height[j] > height[i] {
				temp := height[i] * ver
				if temp > res {
					res = temp
				}
			} else if height[j] == height[i] {
				temp := height[i] * ver
				if temp > res {
					res = temp
				}
			}
		}
	}
	return res
}

func main() {
	fmt.Println(maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7}))
	fmt.Println(maxArea([]int{1, 1}))
}
