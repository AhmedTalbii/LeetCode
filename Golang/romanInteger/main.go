package main

import "fmt"

func romanToInt(s string) int {
    romanMap := map[byte]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    total := 0
    prevValue := 0

    for i := len(s) - 1; i >= 0; i-- {
        currentValue := romanMap[s[i]]
        if currentValue < prevValue {
            total -= currentValue
        } else {
            total += currentValue
        }
        prevValue = currentValue
    }

    return total
}

// func romanToInt(s string) int {

//     arrR := []string{"I","V","X","L","C","D","M"}
//     arrN := []int{1,5,10,50,100,500,1000}
// 	arrS := make([]string,0)
// 	res := make([]int,0)

// 	for _,v := range s {
// 		arrS= append(arrS ,string(v)) 
// 	}

// 	for i := 0 ; i < len(arrS) ; i++ {
// 		for j := 0 ; j < len(arrR) ; j++ {
// 			if arrS[i] == arrR[j] {
// 				res = append(res,arrN[j])
// 			}
// 		}
// 	}

// 	lres := 0

// 	for i := 0 ; i < len(res) ; i++ {
// 		if i < len(res)-1 && res[i] < res[i+1] {
//             lres = lres - res[i]
//         } else {
//             lres = lres + res[i]
//         }
// 	}

// 	return lres
// }

func main(){
	fmt.Println(romanToInt("III"))
    fmt.Println(romanToInt("LVIII"))  
    fmt.Println(romanToInt("MCMXCIV"))
}