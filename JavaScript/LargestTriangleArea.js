function area(a, b, c) {
    return Math.abs(
        (a[0]*(b[1]-c[1]) +
         b[0]*(c[1]-a[1]) +
         c[0]*(a[1]-b[1])) / 2
    );
}

var largestTriangleArea = function(points) {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            for (let k = j+1; k < points.length; k++) {
                max = Math.max(max, area(points[i], points[j], points[k]));
            }
        }
    }
    return max;
};

console.log(largestTriangleArea([[1, 0], [2, 3]]));