/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let answer = [];
    let map = new Map();
    for(let i = 0; i<strs.length; i++){
        const newItem = strs[i].split("").sort().join("");
             // 해당 키가 이미 맵에 있는지 확인합니다.
        if(map.has(newItem)){
            map.get(newItem).push(strs[i]);
        } else {
            map.set(newItem, [strs[i]]);
        }
    }
    // Map의 항목들을 배열로 변환합니다.
    let arrayFromMap = Array.from(map.values());

    // 배열의 길이에 따라 오름차순으로 정렬합니다.
    arrayFromMap.sort((a, b) => a.length - b.length);
   // 각 그룹을 알파벳 순서로 정렬합니다.
    arrayFromMap.forEach(group => group.sort());

    return arrayFromMap;
};