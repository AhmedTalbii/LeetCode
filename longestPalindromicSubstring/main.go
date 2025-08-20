package main

import "fmt"

func IsPalindrome(s string) bool {
	i, j := 0, len(s)-1
	for i < len(s) && j >= 0 {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}
	return true
}

func longestPalindrome(s string) string {
	longest := ""
	lengh := len(s)
	for i := 0; i < lengh; i++ {
		for j := i + 1; j <= lengh; j++ {
			sub := s[i:j]
			if IsPalindrome(sub) && len(longest) < len(sub) {
				longest = sub
			}
		}
	}
	return longest
}

func main() {
	s := "babad"
	fmt.Println(longestPalindrome(s))
	s = "cbbd"
	fmt.Println(longestPalindrome(s))
}
