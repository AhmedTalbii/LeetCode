Array.prototype.last = function() {
    if (this.length===0) {
        console.log(-1);
    } else {
        console.log(this[this.length-1]);
    }
};
// Array.prototype.last = function() {
//     return (this.length===0) ? -1 : this[this.length-1];
// };

const arr = [1, 2, 3];
arr.last(); // 3