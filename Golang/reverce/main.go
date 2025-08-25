package main

import "fmt"

func reverse(x int) int {
	negative := false
	res := 0
	if x < 0 {
		negative = true
		x = -x
	}
	for x != 0 {
		res = res*10 + x%10
		x = x / 10
	}
	if res <= -2147483648 || res >= 2147483648 {
		return 0
	}
	if negative {
		return -res
	}
	return res
}

func main() {
	fmt.Println(reverse(321))
	fmt.Println(reverse(-321))
	fmt.Println(reverse(120))
	fmt.Println(reverse(1534236469))

}
