package main

import "fmt"

func intToBinary(num int) string {
	rev := ""
	for num > 0 {
		rev = rev + string(rune(num%2+'0'))
		num = num / 2
	}
	res := ""
	for i := len(rev) - 1; i >= 0; i-- {
		res = res + string(rev[i])
	}
	// fmt.Println(res)
	return res
}

func convertDateToBinary(date string) string {
	res := ""
	num := 0
	for i := 0; i < len(date); i++ {
		if date[i] >= '0' && date[i] <= '9' {
			num = num*10 + int(date[i]-'0')
		} else if date[i] == '-' {
			res = res + intToBinary(num) + "-"
			num = 0
		}
		if i == len(date)-1 {
			res = res + intToBinary(num)
		}
	}
	return res
}

func main() {
	fmt.Println(convertDateToBinary("2080-02-29"))
	fmt.Println(convertDateToBinary("1900-01-01"))
}
