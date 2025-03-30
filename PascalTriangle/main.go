package main 

import "fmt"

func generate(numRows int) [][]int {
    res := make([][]int, 0)
    for i := 1 ; i <= numRows ; i++ {
        arr := make([]int, 0)
        for j := 1 ; j <= i ; j++ {
            num := 1
            if j != 1 && j != i {
                num = res[i-2][j-2] + res[i-2][j-1]
            }
            arr = append(arr, num)
        }
        res = append(res, arr)
    }
    return res
}

func main() {
	fmt.Println(generate(5))
}