package main

import (
	"fmt"
	"time"
)

func twoSum(nums []int, target int) []int {
    hashMap := make(map[int]int) 

    for i, num := range nums {
        complement := target - num 
        if index, exists := hashMap[complement]; exists {
            return []int{index, i}
        }
        hashMap[num] = i 
    }

    return nil
}

func main() {
    nums := []int{2,7,11,15}
    target := 9

    start := time.Now() // Start timing

    result := twoSum(nums, target)

    elapsed := time.Since(start) // Calculate elapsed time
    fmt.Println("Result:", result)
    fmt.Printf("Execution time: %d ms\n", elapsed.Microseconds()) // Print in microseconds
    fmt.Printf("Execution time: %d ns\n", elapsed.Nanoseconds())  // Print in nanoseconds
}
