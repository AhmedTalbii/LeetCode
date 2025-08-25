package main 

import "fmt"

func isThree(n int) bool {
	counter:=0
    for i := 1 ; i <= n ; i++ {
		if n%i == 0 {
			counter++
		}
	}
	if counter >= 3 {
		return true
	}else {
		return false
	}
}

func main() {
	fmt.Println(isThree(2))
	fmt.Println(isThree(4))
	fmt.Println(isThree(12))
}