package main

func finalValueAfterOperations(operations []string) int {
    x := 0
    for i := 0; i < len(operations); i++ {
        if operations[i][1] == '+' {
            x++
        } else {
            x--
        }
    }
    return x
}