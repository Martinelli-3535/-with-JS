// 일반적인 등수 매기기 알고리즘임.
// rank 배열을 만들고 각 순서마다 더 높은 점수가 있다면 등수를 낮추는 방향으로 설정.

function solution(score) {
    
    const rank = new Array(score.length).fill(1);
    const average = score.map(e => (e[0]+e[1]) / 2);
    
    for (let i = 0; i < average.length; i++) {
        for (let j = 0; j<average.length; j++) {
            if (average[i] < average[j]) 
                rank[i]++;
        }
    }
    
    return rank;
}