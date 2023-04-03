function solution(bin1, bin2) {

    // parseInt(a, 2) = 2진수인 a를 정수로 변환, toString(2) = 이진수인 정수로 변환.

    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}