package main

func maximumEnergy(energy []int, k int) int {
    for i := len(energy) - 1 - k; i >= 0; i-- {
        energy[i] += energy[i+k]
    }
    max := energy[0]
    for _, v := range energy {
        if v > max {
            max = v
        }
    }
    return max
}