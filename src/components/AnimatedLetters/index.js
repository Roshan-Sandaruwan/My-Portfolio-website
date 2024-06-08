import './index.scss'

const AnimatedLetters = ({letterClass, strArray, idx}) =>{

  // const modiFdiedStrArray = [...strArray];

  // if (modiFdiedStrArray.length>= 25){
  //   modiFdiedStrArray.splice(25,0,' ');
  // }

  return (
    <span>
      {
        strArray.map((char, i)=>(
          <span key={char+i} className={`${letterClass} _${i+idx}`}>
            {char}

          </span>
        ))
      }
    </span>
  )
};

export default AnimatedLetters;