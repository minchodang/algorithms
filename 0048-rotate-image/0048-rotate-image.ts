/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): number[][] {
      const n = matrix.length;
    
    // Step 1: 배열 요소 교환
    function swap(i: number, j: number, x: number,  y: number): void {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[x][y];
        matrix[x][y] = temp;
    }
    // Step 2: 대각선 기준으로 뒤집기
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            swap(i, j, j, i);
        }
    }

    // Step 3: 중심을 기준으로 뒤집기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            swap(i, j, i, n - 1 - j);
        }
    }

   return matrix;
};