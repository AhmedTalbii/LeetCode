package main

import "fmt"

func isValid(s string) bool {
	ouStr := []string{"(", ")", "{", "}", "[", "]"}
	res := true
	stack := []string{}

	for i := 0; i < len(s); i++ {
		char := string(s[i])
		matchFound := false

		for j := 0; j < len(ouStr); j += 2 {
			if char == ouStr[j] {
				stack = append(stack, char)
				matchFound = true
				break
			}
		}

		for j := 1; j < len(ouStr); j += 2 {
			if char == ouStr[j] {
				if len(stack) > 0 && stack[len(stack)-1] == ouStr[j-1] {
					stack = stack[:len(stack)-1]
					matchFound = true
				} else {
					res = false
					return res
				}
				break
			}
		}

		if !matchFound {
			res = false
			break
		}
	}

	if len(stack) > 0 {
		res = false
	}

	return res
}

func main() {
	fmt.Println(isValid("()[]{}"))
	fmt.Println(isValid(")("))
	fmt.Println(isValid("{()}"))
}