// 평행의 조건은 기울기가 같아야한다. 이 문제의 경우엔 경우의 수가 3개이기 때문에 로직을 짜기보다 하드코딩이 나음.

function solution(dots) {
    let answer = 0;
    function calculate(a,b,c,d) {
       let abdiff = (b[1]-a[1]) / (b[0]-a[0]);
       let cddiff = (d[1]-c[1]) / (d[0]-c[0]);
        
        if (abdiff === cddiff)
            answer++;
    }
    
    calculate(dots[1],dots[0],dots[3],dots[2]);
    calculate(dots[2],dots[0],dots[3],dots[1]);
    calculate(dots[3],dots[0],dots[2],dots[1]);
    
   return answer > 0 ? 1 : 0;
}