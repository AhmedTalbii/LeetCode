package main 

import "fmt"

func fizzBuzz(n int) []string {
    res := make([]string, 0)

    for i := 1; i <= n; i++ {
        if i%5 == 0 && i%3 == 0 {
            res = append(res, "FizzBuzz")
        } else if i%3 == 0 {
            res = append(res, "Fizz")
        } else if i%5 == 0 {
            res = append(res, "Buzz")
        } else {
            if i < 10 {
                for j := 49; j <= 57; j++ {
                    if j-48 == i {
                        res = append(res, string(rune(j)))
                        break
                    }
                }
            } else {
                arrP := make([]int, 0)
                temp := i 

                for temp > 0 {
                    arrP = append(arrP, temp%10)
                    temp = temp / 10
                }

                resultesArrPo := 0
                for j := len(arrP) - 1; j >= 0; j-- {
                    resultesArrPo = resultesArrPo*10 + arrP[j]
                }

                if resultesArrPo%5 == 0 && resultesArrPo%3 == 0 {
                    res = append(res, "FizzBuzz")
                } else if resultesArrPo%3 == 0 {
                    res = append(res, "Fizz")
                } else if resultesArrPo%5 == 0 {
                    res = append(res, "Buzz")
                } else {
                    resP := make([]rune, 0)
                    for j := len(arrP) - 1; j >= 0; j-- {
                        resP = append(resP, rune(arrP[j]+48))
                    }
                    res = append(res, string(resP))
                }
            }
        }
    }
    return res
}

func main() {
	fmt.Println(fizzBuzz(3))
	fmt.Println(fizzBuzz(5))
	fmt.Println(fizzBuzz(15))
}