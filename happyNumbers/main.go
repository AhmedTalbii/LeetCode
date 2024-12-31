package main 
import "fmt"

func sumOfSquare(num int) int {
	res := 0 
	for num > 0	{
		digit := num % 10
		res = res + (digit * digit)
		num = num / 10
	}
	return res
}

func isHappy(n int) bool {
	hashMap := make(map[int]bool)
	for n != 1 {
		if hashMap[n] {
			return false
		}
		hashMap[n] = true
		n = sumOfSquare(n)
	}
	return true
}

func main() {
	fmt.Println(isHappy(19))  // Should print true
	fmt.Println(isHappy(2))   // Should print false
	fmt.Println(isHappy(7))   // Should print true
	fmt.Println(isHappy(4))   // S
}