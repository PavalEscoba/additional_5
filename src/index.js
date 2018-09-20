module.exports = function check(str, bracketsConfig) {
  // your solution
  //i'm not that smart. but i googled https://www.martinkysel.com/codility-brackets-solution/
  var string = '|()|(||)||';
  var bracketsCon= [['(', ')'], ['|', '|']];
  check('|()|(||)||', [['(', ')'], ['|', '|']]);
  function check(str, bracketsConfig){
    if(str.length%2 !=0){
      return false;
    }
    const stack = [];
    for(let i = 0; i < str.length; i++){
      for(let j = 0; j<bracketsConfig.length; j++){
        if(str[i]==bracketsConfig[j][0]){
          console.log("пушіцца номер: " + i +" а именно "+ str[i]);
          stack.push(str[i]);
          if(str[i] == '|' || str[i]=='7' || str[i]=='8'){
            if(stack.indexOf(str[i]) != -1 ){
              stack.pop()
            }
            else if(stack.indexOf(str[i]) != -1 ) // проверить на совпадение предыдущей дужки из стека. если не совпадает вернуть false
          }
        }
        else if(str[i] == bracketsConfig[j][1]){
          console.log("удаляется номер: " + i +" а именно "+ str[i]);
          stack.pop();
        }
      }
    }
    console.log(stack);
  }
}
