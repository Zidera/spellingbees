function fadingMessage(selector : string){
  const message = document.querySelector(selector)
  message?.classList.toggle("visible")
  blankField()
  setTimeout(()=> message?.classList.toggle("visible"),1000)
}
function blankField(){
  const field =  (document.querySelector('.word-input')as HTMLInputElement);
  field.value = ""
}

//tried a more clean solution with useEffect but I couldn't figure out how to work around the if statements
export default fadingMessage;