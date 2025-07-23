package main

import "fmt"

func removeElement(r []rune, j int) []rune {
	arr := append(r[:j], r[j+1:]...)
	return arr
}

func maximumGain(s string, x int, y int) int {
	r := []rune(s)
	res := 0
	if x > y {
		for {
			used := false
			for i := len(r) - 2; i >= 0; i-- {
				s = string(r)
				if i+2 > len(s) {
					continue
				}
				switch s[i : i+2] {
				case "ab":
					r = removeElement(r, i)
					r = removeElement(r, i)
					res += x
					used = true
				case "ba":
					r = removeElement(r, i)
					r = removeElement(r, i)
					res += y
					used = true
				}
			}
			if !used {
				break
			}
		}
	} else {
		for {
			used := false
			for i := len(r) - 2; i >= 0; i-- {
				s = string(r)
				if i+2 > len(s) {
					continue
				}
				switch s[i : i+2] {
				case "ab":
					r = removeElement(r, i)
					r = removeElement(r, i)
					res += x
					used = true
				case "ba":
					r = removeElement(r, i)
					r = removeElement(r, i)
					res += y
					used = true
				}
			}
			if !used {
				break
			}
		}
	}

	fmt.Println(s)
	return res
}

func main() {
	fmt.Println(maximumGain("cdbcbbaaabab", 4, 5))
	fmt.Println(maximumGain("aabbaaxybbaabb", 5, 4))

	// cdbc
	// +5+4+5+5
	// aabbaaxybbaabb
}
