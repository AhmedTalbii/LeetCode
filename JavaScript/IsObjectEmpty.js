var isEmpty = function(obj) {
    return JSON.stringify(obj).length === 2;
};

console.log(isEmpty({}));
console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty([null, false, 0]));