/* 정규표현식
str_text.replace(/찾을 문자열/gi, "변경할 문자열")
정해진 규칙을 사용해 모든 문자를 변환할 수도 있고 숫자만 변호나하거나 맨 처음, 맨 뒤만 변환할 수 있음
슬래쉬(/) 표시 안에 넣는 텍스트의 따옴표는 없어야함
gi의 의미
g : 전체 모든 문자열 변경 (global)
i : 영문 대소문자를 무시, 모두 일치하는 패턴 검색 (ignore)
특수 기호를 맨처음 적을 때는 항상 역슬래쉬(\) 부분이 정규식 맨 앞에 존재 해야함
str_text.replace(/\./gi, "-")
[] 안에 특수기호를 넣으면 하나하나 개별적으로 변환
"4asdf/.asdf/.fsdd4df".replace(/[/4.]/gi, "@"); => @asdf@@asdf@@fsdd@df
 : 대괄호 안에 들어 있는 / 과 4와 . 을 개별적으로 하나하나 변환
[] 없이 특수기호 여러개를 작성하면 하나의 묶음으로 인식해서 변환
"asdf/.asdf/.fsdddf".replace(/\/./gi, "@"); => asdf@asdf@fsdddf */

// Solution

function solution(babbling) {
    let sum = 0; // 발음할 수 있는 갯수
    const spell = ["aya", "ye", "woo", "ma"];
    
    const dup =["ayaaya", "yeye", "woowoo", "mama"]; // 발음이 중복되는건 어려워함. 즉 중복된 발음
    
    for (let i = 0; i < babbling.length; i++) {
        if (dup.some(v => babbling[i].includes(v))) continue; // 발음이 중복되는 경우엔 차례를 넘김
        
        let init = babbling[i];
        init = init.replaceAll("aya", "1").replaceAll("ye","2").replaceAll("woo","3").replaceAll("ma", "4"); // 각 발음을 1,2,3,4로 변경하고
        
        init = init.replace(/[1234]/gi, ''); // [] 를 사용하여 각각의 경우를 빈 문자열로 변경
        
        if (init === '') // 문자열이 빈 경우 === 모두 발음할 수 있을 때 sum을 늘려줌
            sum++;
        }
    
    return sum;
}