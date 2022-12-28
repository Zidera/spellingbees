import listWord from "../../Features/checkingWord";
 
const WordList: React.FC = () => {

   
  return (
    <ul>
      {listWord.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
    </ul>
  )
}

export default WordList
