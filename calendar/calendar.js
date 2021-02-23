document.getElementById('prevBtn').addEventListener('click', prevMonth); // 전 달 버튼
document.getElementById('nextBtn').addEventListener('click', nextMonth); // 다음 달 버튼

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let YM = year + "년 " + (month + 1) + "월"; // 월은 0~11

document.getElementById("YM").innerHTML = YM;

let firstDate = new Date(year, month, 1).getDate();
let lastDate = new Date(year, month + 1, 0).getDate(); // month에 +1을 해 다음달의 0번째날인 이번달의 마지막날을 구함 
let firstDay = new Date(year, month, 1).getDay();

let calendar = document.getElementById("calTable");

// 달력 build 함수
function setCalendar() {
  let row = calendar.insertRow();

  for (i = 0; i < firstDay; i++) {
    cell = row.insertCell();
  }
  // 첫 요일이 나오기 전까지 공백의 cell을 만듦

  for (i = 1; i <= lastDate; i++) { // 마지막날이 오기 전까지 i를 cell에 넣음
    if (firstDay != 7) {
      cell = row.insertCell();
      cell.setAttribute('id', [i]);
      cell.innerHTML = i;
      firstDay += 1;
    } // 첫 날부터 토요일까지 cell을 추가하며 i 날짜 출력
    else {
      row = calendar.insertRow();
      cell = row.insertCell();
      cell.setAttribute('id', [i]);
      cell.innerHTML = i;
      firstDay = firstDay - 6;
    } // firstDay가 7이 되어 다시 일요일이 돌아오면 row와 cell을 추가해 날짜 출력
    // 다시 firstDay를 1로(월요일) 만들어 if문을 다시 실행 
  }
}
setCalendar();

// 오늘 날짜에 색깔을 채워주는 함수
window.onload = function() {
  let todayDate = today.getDate()
  for(i=1; i<=lastDate; i++){
    let setId = document.getElementById([i])
    if(todayDate == setId.getAttribute('id')){
      setId.setAttribute('class','todayColor');
    }
  }
}

// 왼쪽 버튼을 눌렀을 때의 함수
function prevMonth() {
  while (calendar.rows.length > 2) { // YM과 요일을 제외한 row를 지움
    calendar.deleteRow(calendar.rows.length-1);
  }

  month = month-1;
  // 한 달 씩 뒤로
  if(month === -1) {
    year = year - 1;
    month = month + 12;
  }
  YM = year + "년 " + (month + 1) + "월";
  document.getElementById("YM").innerHTML = YM;
  firstDate = new Date(year, month, 1).getDate();
  lastDate = new Date(year, month+1, 0).getDate();
  firstDay = new Date(year, month, 1).getDay();
  setCalendar();
}

// 오른쪽 버튼을 눌렀을 때의 함수
function nextMonth() {
  while (calendar.rows.length > 2) {
    calendar.deleteRow(calendar.rows.length-1);
  }
  
  month = month+1;

  if(month === 12) {
    year = year + 1;
    month = month -12;
  }

  YM = year + "년 " + (month+1) + "월";
  document.getElementById("YM").innerHTML = YM;
  firstDate = new Date(year, month, 1).getDate();
  lastDate = new Date(year, month+1, 0).getDate();
  firstDay = new Date(year, month, 1).getDay();
  setCalendar();
}