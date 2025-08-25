package main

import "fmt"

func isPalindrome(x int) bool{

	arr:= make([]int,0)
	res:=false
	for x > 0 {
        digit := x % 10   
        arr = append(arr , digit) 
        x /= 10    
    }
	for i := 0; i < len(arr)/2; i++ { 
		if arr[i] == arr[len(arr)-i-1] { 
			res=true
			break
		}
	}
	return res
}

func main() {
	fmt.Println(isPalindrome(121))
}