// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. autofocus 구현
const $id = document.getElementById('id');
window.addEventListener('load', () => $id.focus());

//2. 유효성 검사 로직
const $pw = document.getElementById('pw');
const $pwCheck = document.getElementById('pwcheck');
const $submit = document.getElementById('submit');

var ID_REGEX = new RegExp(/^[a-z0-9]{5,20}$/);
var PW_REGEX = new RegExp(/^[a-zA-Z0-9]{8,16}$/);

const checkIdValidation = (value) => {
  const isValidID = ID_REGEX.test(value);
  console.log(isValidID);
};

const checkPwValidation = (value) => {
  const isValidPw = PW_REGEX.test(value);
  console.log(isValidPw);
};

const checkPwCheckValidation = (value) => {
  const isValidPwCheck = $pw.value === value;
  console.log(isValidPwCheck);
};

$id.addEventListener('focusout', () => checkIdValidation($id.value));
$pw.addEventListener('focusout', () => checkPwValidation($pw.value));
$pwCheck.addEventListener('focusout', () => checkPwCheckValidation($pwCheck.value));
$submit.addEventListener('click', () => {
  e.preventDefault();
  checkIdValidation($id.value);
  checkPwValidation($pw.value);
  checkPwCheckValidation($pwCheck.value);
});