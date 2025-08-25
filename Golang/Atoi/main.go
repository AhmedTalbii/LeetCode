package main

import (
	"fmt"
	"math"
)

func myAtoi(s string) int {
	res := 0
	neg := false
	start := false
	symb := false
	for i := 0; i < len(s); i++ {
		if s[i] == '-' && !start && !symb {
			neg = true
			symb = true
			continue
		} else if s[i] == '+' && !start && !symb {
			start = true
			symb = true
			continue
		} else if s[i] == ' ' && !start {
			continue
		} else if int(s[i]-'0') < 0 || int(s[i]-'0') > 9 {
			break
		}

		if !neg && (res > math.MaxInt32/10 || (res == math.MaxInt32/10 && int(s[i]-'0') > 7)) {
			return math.MaxInt32
		} else if neg && (res > math.MaxInt32/10 || (res == math.MaxInt32/10 && int(s[i]-'0') > 8)) {
			return math.MinInt32
		}

		res = res*10 + int(s[i]-'0')
		start = true
	}
	if neg {
		res = -res
	}
	return res
}

func main() {
	fmt.Println(myAtoi("42"))                   // 42
	fmt.Println(myAtoi("   -042"))              // -42
	fmt.Println(myAtoi("1337c0d3"))             // 1337
	fmt.Println(myAtoi("0-1"))                  // 0
	fmt.Println(myAtoi("words and 987"))        // 0
	fmt.Println(myAtoi("2147483648"))           // 2147483647 (clamped)
	fmt.Println(myAtoi("-2147483649"))          // -2147483648 (clamped)
	fmt.Println(myAtoi("3.14159"))              // 3
	fmt.Println(myAtoi("+1"))                   // 1
	fmt.Println(myAtoi("-0000000012"))          // -12
	fmt.Println(myAtoi("+-12"))                 // 0
	fmt.Println(myAtoi(" +0 123"))              // 0
	fmt.Println(myAtoi("9223372036854775808"))  // 0
	fmt.Println(myAtoi("-9223372036854775808")) // 0
	fmt.Println(myAtoi("  +  413"))             // 0
	fmt.Println(myAtoi("-2147483648"))          // 0
}
