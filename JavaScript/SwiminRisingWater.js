var swimInWater = function(grid) {
    let len = grid.length;
    let visited = new Map(), path = [];
    let stack = [[0, 0]];

    while(stack.length){
        let [i,j] = stack.pop();
        if(visited.get(`${i}-${j}`)) continue;
        visited.set(`${i}-${j}`, true);
        path.push(grid[i][j]);

        if(i===len-1 && j===len-1) break;

        let neighbors = [];
        if(j-1 >= 0 &&  !visited.get(`${i}-${j-1}`)) neighbors.push([grid[i][j-1],'left']);
        if(i-1 >= 0 &&  !visited.get(`${i-1}-${j}`)) neighbors.push([grid[i-1][j],'top']);
        if(j+1 < len && !visited.get(`${i}-${j+1}`)) neighbors.push([grid[i][j+1],'right']);
        if(i+1 < len && !visited.get(`${i+1}-${j}`)) neighbors.push([grid[i+1][j],'bottom']);

        neighbors.sort((a,b)=> a[0]-b[0]);
        for(let [val,dir] of neighbors){
            if(dir==='left') stack.push([i,j-1]);
            else if(dir==='top') stack.push([i-1,j]);
            else if(dir==='right') stack.push([i,j+1]);
            else if(dir==='bottom') stack.push([i+1,j]);
        }
    }

    return Math.max(...path);
};



console.log(swimInWater([[10,12,4,6],[9,11,3,5],[1,7,13,8],[2,0,15,14]]));

// [10, 12 , 4  , 6 ]
// [9,  11 , 3  , 5 ]
// [1,  7  , 13 , 8 ]
// [2,  0  , 15 , 14]