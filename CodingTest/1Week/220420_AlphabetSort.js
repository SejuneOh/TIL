console.log('알파벳을 이렵해주세요');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.on('line', (txt) => {
  // console.log(txt);
  console.log(sortAlphabet(txt));
  rl.close();
});

rl.on('close', () => {
  process.exit();
})


function sortAlphabet(txt) {

  let result = txt.split('').sort().reverse().join('');

  return result;
}