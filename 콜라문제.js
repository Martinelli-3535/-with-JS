function solution(a, b, n) {
    let sum = 0;
    
    // n이 a이상일때, 즉 바꿔먹을 수 있는 조건.
    while ( n >= a ) {
        sum += b * Math.floor(n / a);
        n = n % a + (b * Math.floor((n / a))); // n값은 바꾸고 남은 콜라 + 바꾼 병 수로 계속 변환됨.
    }
    
    return sum;
}