package main

import "fmt"

func intToBinary(num int) []int {
	rev := make([]int, 0)
	for num > 0 {
		rev = append(rev, num%2)
		num = num / 2
	}
	return rev
}

func power(a, b int) int {
	res := 1
	for i := 0; i < b; i++ {
		res = res * a
	}
	return res
}

func binaryToInt(arr []int) int {
	res := 0
	counter := 0
	for i := len(arr) - 1; i >= 0; i-- {
		res = res + arr[i]*power(2, counter)
		counter++
	}
	return res
}

func compare(arr1 []int, arr2 []int) []int {
	rev := make([]int, 0)
	if len(arr1) > len(arr2) {
		for i := 0; i < len(arr2); i++ {
			if arr1[i] == arr2[i] {
				rev = append(rev, 0)
			} else {
				rev = append(rev, 1)
			}
		}
		for i := len(arr2); i < len(arr1); i++ {
			rev = append(rev, 1)
		}
	} else if len(arr1) < len(arr2) {
		for i := 0; i < len(arr1); i++ {
			if arr1[i] == arr2[i] {
				rev = append(rev, 0)
			} else {
				rev = append(rev, 1)
			}
		}
		for i := len(arr1); i < len(arr2); i++ {
			rev = append(rev, 1)
		}
	} else {
		for i := 0; i < len(arr2); i++ {
			if arr1[i] == arr2[i] {
				rev = append(rev, 0)
			} else {
				rev = append(rev, 1)
			}
		}
	}
	res := make([]int, 0)
	for i := len(rev) - 1; i >= 0; i-- {
		res = append(res, rev[i])
	}
	return res
}

func xor(a, b int) int {
	arr1 := intToBinary(a)
	// fmt.Println(arr1)
	if len(arr1) == 0 {
		arr1 = append(arr1, 0)
	}
	arr2 := intToBinary(b)
	if len(arr2) == 0 {
		arr2 = append(arr2, 0)
	}

	// fmt.Println(arr2)
	res := compare(arr1, arr2)
	// fmt.Println(res)
	return binaryToInt(res)
}

func singleNumber(nums []int) int {
	res := 0
	for i := 0; i < len(nums); i++ {
		res = xor(res, nums[i])
	}
	return res
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1}))
	fmt.Println(singleNumber([]int{4, 1, 2, 1, 2}))
	fmt.Println(singleNumber([]int{1}))
}
