var maximumEnergy = function(energy, k) {
    for (let i = energy.length-1-k; i >= 0; i--) energy[i] = energy[i] + energy[i + k]
    return Math.max(...energy)
};

console.log(maximumEnergy([5, 2, -10, -5, 1], 3));
console.log(maximumEnergy([-2,-3,-1], 2));
console.log(maximumEnergy([-8,10,-10], 1));