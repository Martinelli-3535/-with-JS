function solution(nums) {
    let newArr = [];
    let count = 0;
    let answer = nums.length / 2;
    
    // 중복 제거하기
    for (let i = 0; i < nums.length; i++) {
        if (newArr.includes(nums[i]))
            continue;
        else
            newArr.push(nums[i]);
    }
    
    // 길이가 짧은게 answer 가 된다.
    if (answer > newArr.length)
        answer =  newArr.length;
     
    return answer;
}