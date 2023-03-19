function solution(polynomial) {
    const poly = polynomial.split(" + ");
    let xNum = 0;
    let num = 0;
    let result = "";
    
    poly.forEach(e => {
        if (e.includes("x")) {
            const xnum = e.replace("x", "") || 1;
            
            xNum += parseInt(xnum);
        }      
        else {
            num += parseInt(e);
        }
    })
    
     let answer = [];
  // "계수 1은 생략합니다." 제한사항을 참고하여
  // 구해둔 xNum이 1을 경우 공백으로 아니면 그대로 입력하고 뒤에 x를 붙여준다.
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
  if (num) answer.push(num);

  // 배열을 join() 메서드를 이용해 +를 넣어 문자열로 만들고 반환한다.
  return answer.join(" + ");
    
}