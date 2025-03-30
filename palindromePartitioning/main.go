package main

import "fmt"

func reverse(arr string) string {
	res := ""
	for i := len(arr)-1 ; i >= 0 ; i-- {
		res += string(arr[i])
	}
	return res
}

func partition(s string) [][]string {
    matrix := make([][]string,0)
    n := 0
    for n <= len(s) {
		minArr := make([]string,0)
		for i := 0 ; i < len(s)-n ; i++ {
			if s[i:i+n] == reverse(s[i:i+n]) {
				minArr = append(minArr, string(s[i:i+n]))
			}
		}
		if len(minArr) != 0 {
			matrix = append(matrix, minArr)
		}
		n++
	}
	return matrix
}

func main() {
	fmt.Println(partition("aab"))
	fmt.Println(partition("a"))
}