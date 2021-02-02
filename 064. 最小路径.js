// https://leetcode-cn.com/problems/minimum-path-sum/
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

// 说明：每次只能向下或者向右移动一步。
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：

// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划：
var minPathSum = function(grid) {
    let lencol=grid.length
    let lenrow=grid[0].length
    for(let i=1;i<lencol;i++) {
        grid[i][0]=grid[i][0]+grid[i-1][0]
    }
    for(let i=1;i<lenrow;i++) {
        grid[0][i]=grid[0][i]+grid[0][i-1]
    }
    for(let i=1;i<lencol;i++) {
        for(let j=1;j<lenrow;j++) {
            grid[i][j]=grid[i-1][j]>grid[i][j-1]?grid[i][j]+grid[i][j-1]:grid[i][j]+grid[i-1][j]
        }
    }
    return grid[lencol-1][lenrow-1]

};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum([[1,2,3],[4,5,6]]))