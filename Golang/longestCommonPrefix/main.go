package main

import "fmt"

func longestCommonPrefixstrs(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	prefix := strs[0]

	for _, str := range strs[1:] {
		for len(prefix) > 0 {

			if len(str) >= len(prefix) && str[:len(prefix)] == prefix {
				break
			}

			prefix = prefix[:len(prefix)-1]
		}

		if prefix == "" {
			return ""
		}
	}

	return prefix
}

func main() {
	strs := []string{"flower", "flow", "flight"}
	result := longestCommonPrefixstrs(strs)
	fmt.Println(result)
}