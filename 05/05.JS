/*
1. DOM에서 제어할 노드를 가져오기
2. 버튼이 눌러지면
 [확인버튼일때]
   -랜덤수를 생성 => 랜덤수(1~100)는 다시 하기 전까지 변경되면 안됨
   -input 박스 값이 없으면 '값을 입력하세요' 메시지 출력
   -input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메시지 출력
   -input 박스 값이 랜덤수보다 작으면 up이미지
   -input 박스 값이 랜덤수보다 크면 down이미지
   -input 박스 값이 랜덤수와 같으면 good이미지
    -input 보이지 않아야함
    -버튼의 캡션을 '숫자를 생성해 주세요' 변경
 [숫자를 생성해주세요 버튼일때]
  -초기화 : 랜덤수 새로 생성, input 박스 보이기 ...
*/

document.addEventListener('DOMContentLoaded', ()=>{

    const updownimg = document.querySelector('#updownimg');
    const input = document.querySelector('#txt1');
    const bt = document.querySelector('#bt');

    //랜덤수 생성 : flag가 true일때만 생성
    let n ;
    let flag = false;

    bt.addEventListener('click', (e)=>{
        e.preventDefault();
        //html에서 form태그 사용 시, 다시 호출되지 않도록 하게 
        if (!flag) {
            flag = true
            n = Math.floor(Math.random()*100) + 1 ;
            console.log('n=', n);
        }

// 입력값 체크
  if(input.value == '') {
    alert('값을 입력하세요.')
    input.focus();
    return ;
  }

  if(input.value > 100) {
    alert('1에서 100사이의 값을 입력하세요.')
    input.focus();
    return ;
  }

  console.log(n);
 

    });
});
