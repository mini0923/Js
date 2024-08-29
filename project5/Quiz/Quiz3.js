function createSentence(one, ...rest){
  return (`${rest}`.replaceAll(",", " "));
}

console.log(createSentence("Hello", "this", "is", "JavaScript"));
