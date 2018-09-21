module.exports = function check(str, bracketsConfig) {
  // your solution
  //i'm not that smart. but i googled https://www.martinkysel.com/codility-brackets-solution/
  //it doesn't pass all tests. i'll come back later. hope so
  if(str.length%2 !=0){
    return false;
  };
  if(str.length==0){
    return false;      
  }
  const stack = [];
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < bracketsConfig.length; j++){
      if(str[i]==bracketsConfig[j][0] && stack[i-1]!=bracketsConfig[j][1]){
        stack.push(str[i]);
      }
      else if (str[i] == bracketsConfig[j][1] || stack.indexOf(str[i], stack[i-1])==1){
        stack.pop();
      }
    }
  } 
  return stack.length ? false : true;
}
