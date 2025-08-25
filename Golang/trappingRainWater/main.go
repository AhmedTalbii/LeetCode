package main

import "fmt"

func trap(height []int) int {
	res := 0
	wB := 0
	hB := 0
	maxV := 0
	maxI := 0
	for i := 0; i < len(height); i++ {
		if maxV <= height[i] {
			maxV = height[i]
			maxI = i
		}
	}
	for i := 0; i <= maxI; i++ {
		for j := i + 1; j <= maxI; j++ {
			// fmt.Println(i, j)
			if height[i] <= height[j] && height[i] != 0 {
				//fmt.Printf("wB = %v ; height[i] = %v ; hB = %v\n", wB, height[i], hB)
				res = res + wB*height[i] - hB
				i = j
				hB = 0
				wB = 0
			} else {
				hB = hB + height[j]
				wB++
			}
		}
		wB = 0
		hB = 0
	}

	//fmt.Println(res)

	// fmt.Println("maxV : ", maxV)
	// fmt.Println("maxI : ", maxI)
	if maxI != len(height)-1 {
		arr := []int{}
		for i := len(height) - 1; i >= maxI; i-- {
			arr = append(arr, height[i])
		}
		// fmt.Println(arr)
		wB = 0
		hB = 0
		for i := 0; i < len(arr); i++ {
			for j := i + 1; j < len(arr); j++ {
				if arr[i] <= arr[j] && arr[i] != 0 {
					// fmt.Printf("wB = %v ; arr[i] = %v ; hB = %v\n", wB, arr[i], hB)
					res = res + wB*arr[i] - hB
					i = j
					hB = 0
					wB = 0
				} else {
					hB = hB + arr[j]
					wB++
				}
			}
			wB = 0
			hB = 0
		}
	}
	return res
}

func main() {
	arr := []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
	fmt.Println(trap(arr))

	arr = []int{4, 2, 0, 3, 2, 5}
	fmt.Println(trap(arr))

	arr = []int{1, 0, 2}
	fmt.Println(trap(arr)) // 1

	arr = []int{2, 0, 2}
	fmt.Println(trap(arr)) // 2

	arr = []int{3, 0, 0, 2, 0, 4}
	fmt.Println(trap(arr)) // 10

	arr = []int{0, 7, 1, 4, 6}
	fmt.Println(trap(arr)) // 7

	arr = []int{6, 5, 4, 3, 2, 1}
	fmt.Println(trap(arr)) // 0

	arr = []int{1, 2, 3, 4, 5, 6}
	fmt.Println(trap(arr)) // 0

	arr = []int{2, 1, 4, 5}
	fmt.Println(trap(arr)) // 1

	arr = []int{4, 2, 0, 3, 2, 4, 3, 4}
	fmt.Println(trap(arr)) // 4

	arr = []int{5, 4, 1, 2}
	fmt.Println(trap(arr)) // 1

	arr = []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
	fmt.Println(trap(arr)) // 6

}
