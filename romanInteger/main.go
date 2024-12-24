package main

import "fmt"

func romanToInt(s string) {
    arrR := []string{"I","V","X","L","C","D","M"}
    arrN := []int{1,5,10,50,100,500,1000}
	arrS := make([]string,0)
	res := make([]int,0)
	for _,v := range s {
		arrS= append(arrS ,string(v)) 
	}
	for i := 0 ; i < len(arrS) ; i++ {
		
	}
	fmt.Println(arrR)
	fmt.Println(arrN)
	fmt.Println(arrS)
}

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

func main(){
	romanToInt("III")
}