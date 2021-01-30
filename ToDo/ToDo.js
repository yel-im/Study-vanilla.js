document.getElementById('btnAdd').addEventListener('click', addList); //list 추가
document.getElementById('DeleteSel').addEventListener('click', delSelected); // 선택삭제
document.getElementById('btnDelLast').addEventListener('cilck', delLastEle); // 맨 마지막 항목 삭제
document.getElementById('btnDelAll').addEventListener('cilck', delAllEle); // 전체삭제

// list 추가 (행 추가)
function addList() {
  var contents = document.querySelector('.text-basic'); // html의 text-basic class를 contents에 저장
  if (!contents.value) { // contents에 내용이 없다면 alert 출력
    alert('내용을 입력하세용');
    contents.focus(); // contents에 포커스
    return false; // ??
  }

  var tr = document.createElement('tr'); // tr(테이블의 가로줄)태그를 만듦
  var input = document.createElement('input'); // input태그를 만들음
  input.setAttribute('type','checkbox'); // 새로 만든 input 태그에 속성 부여 (<input type="checkbox" class="btn-chk">)
  input.setAttribute('class', 'btn-chk'); // class는 btn-chk

  var td01 = document.createElement('td'); // td(테이블의 셀)태그를 만들고 td01에 저장
  td01.appendChild(input); // td01에 input을 포함시키고
  tr.appendChild(td01); // 또 tr에 포함

  var td02 = document.createElement('td'); // td를 만들고 td02에 저장
  td02.innerHTML = contents.value; // td02 텍스트를 contents의 value로 변경
  tr.appendChild(td02); // tr에 td02를 포함시킴

  document.getElementById('listBody').appendChild(tr); // html의 listBody Id에 완성 된 가로줄을 자식요소로 넣음
  contents.value=''; // contents의 value를 빈 값으로 초기화 시켜줌
  contents.focus();
}

// 전체삭제
function delAllEle() {
  // var list = document.getElementById('listBody');
  // var listChild = list.children;
  // for(var i=0; i<listChild.length; i++){
  //   list.removeChild(listChild[i])
  //   i--;
  // }
  var list = document.getElementById('listBody');
  while(list.firstChild) {
    list.removeChild(list.firstChild);}
}


// 맨 마지막 항목 삭제
function delLastEle() {
  var body = document.getElementById('listBody');
  var list = document.querySelectorAll('#listBody > tr');
  if(list.length > 0){  
    var liLen = list.length-1;
    body.removeChild(list[liLen]);
  }
  else {
    alert('삭제할 to do가 없어용');
    return false;
  }
}

// 선택삭제
function delSelected() {
  var body = document.getElementById('listBody');
  var chkbox = document.querySelectorAll('#listBody .btn-chk');
  for(var i in chkbox) {
    if(chkbox[i].nodeType == 1 && chkbox[i].checked == true) {
      body.removeChild(chkbox[i].parentNode.parentNode);
    }
  }
}