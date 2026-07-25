struct Solution;
use std::collections::BinaryHeap;

impl Solution {
    pub fn max_product(n: i32) -> i32 {
        let s = n.to_string();
        if s.len() <= 1 {
            return n;
        }
        let ari: Vec<i32> = s.chars().map(|c| c as i32 - '0' as i32).collect();
        let mut f = 0;
        let mut s = 0;

        let mut heap = BinaryHeap::from(ari);
        if let Some(max) = heap.pop() {
            f = max;
        }
        if let Some(max) = heap.pop() {
            s = max;
        }
        f * s
    }
}

fn main() {
    println!("{}", Solution::max_product(124));
}
