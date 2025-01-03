package main 

import "fmt"

func mostWordsFound(sentences []string) int {
	res := 0
    for _,str := range sentences {
		counter := 1
		for _,strM := range str {
			if strM == rune(' ') {
				counter++
			}
		}
		if counter > res {
			res = counter
		}
	}
	return res+1
}

func main() {
	arr1 := []string{"alice and bob love leetcode", "i think so too", "this is great thanks very much"}
	arr2 := []string{"please wait", "continue to fight", "continue to win"}
	fmt.Println(mostWordsFound(arr1))
	fmt.Println(mostWordsFound(arr2))
}