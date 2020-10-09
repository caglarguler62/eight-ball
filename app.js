let userName = prompt('please put your user name here')

 userName ? console.log(`hello ${userName}`) : console.log('hello')

let userQuestion = prompt('type your question here')

console.log(`${userName} is asked: ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ''

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'John is a yooung man';
    break;
  case 3:
    eightBall = 'Reply hazy try again';
    break;
  case 4:
    eightBall =  'Cannot predic now';
    break;   
  case 5:
    eightBall = 'Do not count on it';
    break;
  case 6:
    eightBall = 'My sources say no';
    break;
  default:
    eightBall = 'Signs point to yes';
}
// if (randomNumber === 0){
//   eightBall = 'It is decidedly so';
// } else if (randomNumber === 1){
//   eightBall = 'It is decidedly so';
// } else if (randomNumber === 2){
//   eightBall = 'John is a yooung man';
// } else if (randomNumber === 3){
//   eightBall = 'Reply hazy try again';
// } else if (randomNumber === 4){
//   eightBall = 'Cannot predic now';
// } else if (randomNumber === 5){
//   eightBall = 'Do not count on it';
// } else if (randomNumber === 6){
//   eightBall = 'My sources say no';
// } else {
//   eightBall = 'Signs point to yes';
// }

console.log(eightBall);
alert(eightBall);