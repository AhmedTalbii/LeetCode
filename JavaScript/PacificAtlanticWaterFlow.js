var pacificAtlantic = function(heights) {
    const m = heights.length
    const n = heights[0].length
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]]

    const pacific = Array.from({length: m}, () => Array(n).fill(false))
    const atlantic = Array.from({length: m}, () => Array(n).fill(false))

    function dfs(i, j, visited, prevHeight) {
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || heights[i][j] < prevHeight) {
            return
        }
        visited[i][j] = true
        for (const [dx, dy] of dirs) {
            dfs(i + dx, j + dy, visited, heights[i][j])
        }
    }

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific, -1)
        dfs(i, n - 1, atlantic, -1)
    }

    for (let j = 0; j < n; j++) {
        dfs(0, j, pacific, -1)
        dfs(m - 1, j, atlantic, -1)
    }

    const res = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                res.push([i, j])
            }
        }
    }
    return res
}


console.log(pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]));