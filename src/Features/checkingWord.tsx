import fadingMessage from "../Utils/fading-message"

let listWord : string[] = ["abububle"]
export const checkingWord = (event: React.KeyboardEvent<HTMLInputElement>, value: string) => {
  if (event.key === 'Enter') {
   checkingRequeriments(event,value)
   return listWord
  } 
}

function checkingRequeriments(event: React.KeyboardEvent<HTMLInputElement>, value: string){
  const mainLetter =  document.querySelector('.honeycomb .hexagon:nth-child(2) span')?.textContent!

  if(value.length < 4){
    fadingMessage("#short");
  } else if (!value.includes(mainLetter)) {
    console.log(mainLetter)
    fadingMessage("#missing")
  } else{
    apiRequest(event,value)
  }

}

async function apiRequest(_event: React.KeyboardEvent<HTMLInputElement>, value: string){
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
  const data = await response.json();
  
  //tried compare data[0].word but got more problems to solve in case of inexistent word than using response.status
    if(response.status === 200){
      fadingMessage("#nice")
      listWord.push(data[0].word)
      
    } else{
      fadingMessage("#dexist")
    };
     
  }

export default listWord;

 

