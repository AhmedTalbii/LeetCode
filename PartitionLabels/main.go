package main

import "fmt"

func partitionLabels(s string) []int {
    hashMap := make(map[rune]int)
    for i, char := range s {
        hashMap[char] = i
    }

	result := []int{}
    start, end := 0, 0

    for i, char := range s {
        if hashMap[char] > end {
            end = hashMap[char]
        }

        if i == end {
            result = append(result, end-start+1) 
            start = end + 1 
        }
    }

    return result
}

func main() {
	fmt.Println(partitionLabels("ababcbacadefegdehijhklij"))
	fmt.Println(partitionLabels("eccbbbbdec"))
}