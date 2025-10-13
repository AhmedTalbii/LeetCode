package main

func removeAnagrams(words []string) []string {
    result := []string{}
    word1 := ""

    for _, w := range words {
        word2 := sortString(w)
        if word1 != word2 {
            result = append(result, w)
            word1 = word2
        }
    }

    return result
}

func sortString(s string) string {
    chars := []rune(s)
    for i := 1; i < len(chars); i++ {
        key := chars[i]
        j := i - 1
        for j >= 0 && chars[j] > key {
            chars[j+1] = chars[j]
            j--
        }
        chars[j+1] = key
    }
    return string(chars)
}
