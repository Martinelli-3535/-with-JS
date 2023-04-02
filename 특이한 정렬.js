function solution(numlist, n) {
    const diffArr = numlist.map((num)=>{
       return  num - n >= 0 ? Math.abs(num-n) : Math.abs(num-n) + 0.1
    })

    // n과의 차이가 양수인지 음수인지를 파악하기 위해 0.1을 더해준다.
    diffArr.sort((a,b)=>a-b)
    const answer = diffArr.map(k=>{
       return k  === parseInt(k) ? n + k : n - Math.round(k)
    })

    // 만일 0.1이 더해져있다면 반올림해서 없애줌.
    return answer;
}