package main 

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	countS := make(map[rune]int)
	countT := make(map[rune]int)
	for _,ch := range s {
		countS[ch]++
	}
	for _,ch := range t {
		countT[ch]++
	}
	for ch, count := range countS {
		// fmt.Println(countT[ch],count)
		if countT[ch] != count {
			return false
		}
	}
	return true 
}

func main() {
	fmt.Println(isAnagram("anagram","nagaram"))
	fmt.Println(isAnagram("rat","car"))
	fmt.Println(isAnagram("abdc","dbac"))
}