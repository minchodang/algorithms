/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
   // 간선을 저장할 배열 생성
    const edges = [];

    // 모든 점 사이의 거리를 계산하여 edges 배열에 저장
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([i, j, distance]); // [시작점, 끝점, 거리] 형태로 저장
        }
    }

     // 간선을 거리순으로 정렬
    edges.sort((a, b) => a[2] - b[2]);

    // Union-Find 자료구조를 사용하여 사이클을 검사하면서 최소 스패닝 트리를 구성
    const parent = new Array(points.length).fill(-1);



    function find(x) {
        if (parent[x] === -1) return x;
        return find(parent[x]);
    }

    let cost = 0;
    let edgeCount = 0;

    for (const [start, end, distance] of edges) {
        const rootStart = find(start);
        const rootEnd = find(end);
        if (rootStart !== rootEnd) {
            parent[rootStart] = rootEnd;
            cost += distance;
            edgeCount++;
        }
        if (edgeCount === points.length - 1) break; // 모든 점을 연결한 경우 종료
    }

    return cost;
};