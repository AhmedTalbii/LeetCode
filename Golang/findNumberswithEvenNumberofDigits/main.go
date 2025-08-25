package main 

import "fmt"


func findNumbers(nums []int) int {
	counter := 0
	for _,num := range nums {
		counterM := 0
		for num > 0 {
			num = num/10
			counterM++
		}
		if counterM%2 == 0 {
			counter++
		}
	}
	return counter
}

// func findNumbers(nums []int) int {
// 	res := make([]int,0)
// 	for i := 0 ; i < len(nums) ; i++ {
// 		counter := 0 
// 		for nums[i] > 0 {
// 			counter = counter + 1
// 			nums[i] = nums[i]/10
// 		}
// 		res = append(res, counter)
// 	}
// 	counter := 0
// 	for i := 0 ; i < len(res) ; i++ {
// 		if res[i]%2 == 0 {
// 			counter = counter + 1
// 		}
// 	}
// 	return counter
// }

func main() {
	arr1 := []int{555,901,482,1771}
	arr2 := []int{12,345,2,6,7896}
	fmt.Println(findNumbers(arr1))
	fmt.Println(findNumbers(arr2))
}