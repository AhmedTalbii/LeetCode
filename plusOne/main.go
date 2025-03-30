package main 

import "fmt"

// func arrToInt(arr []int) int {
// 	num := 0
// 	for i := 0 ; i < len(arr) ; i++ {
// 		num = num*10 + arr[i]
// 	}
// 	return num
// }

// func intToArr(num int) []int {
// 	rev := make([]int,0)
// 	for num > 0 {
// 		rev = append(rev,num%10)
// 		num = num/10
// 	}
// 	// fmt.Println(rev)
// 	res := make([]int,0)
// 	for i := len(rev)-1 ; i >=0 ; i-- {
// 		res = append(res, rev[i])
// 	}
// 	return res
// }

// func plusOne(digits []int) []int {
//     num := arrToInt(digits)
// 	// fmt.Println("num :",num)
// 	num++
// 	res := intToArr(num)
// 	return res
// }

func plusOne(digits []int) []int {
	lengh := len(digits)-1
    if digits[lengh] != 9 {
		digits[lengh]++
		return digits
	}
	pointer := lengh
	for pointer >= 0 {
		if digits[pointer] == 9 {
			pointer--
		} else {
			digits[pointer]++
			for i := pointer+1 ; i <= lengh ; i++ {
				digits[i] = 0
			}
			return digits
		}
	}
	res := make([]int,0)
	res = append(res ,1)
	for i := 0 ; i <= lengh ; i++ {
		res = append(res ,0)
	}
	return res
}

func main() {
	fmt.Println(plusOne([]int{4,3,2,1}))
	fmt.Println(plusOne([]int{9}))
	fmt.Println(plusOne([]int{8,9,9,9}))
	fmt.Println(plusOne([]int{1,2,3}))
	fmt.Println(plusOne([]int{7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6}))
}