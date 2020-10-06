const d = document;

export default function digitalDraw(list, btn){
  const getWinner = (selector) =>{
    const $list = d.querySelectorAll(list),
    random = Math.floor(Math.random() * $list.length),
    winner = $list[random]
    // console.log($list, random, winner);
    return `El ganador es: ${winner.textContent}!!!!`;
  }
  
  d.addEventListener('click', e=>{
    if(e.target.matches(btn)){
      let result = getWinner(list)
      alert(result)
      // console.log(getWinner(result))

    }
  })
}

// const getWinner = (selector) =>{
//   const $list = d.querySelectorAll(list),
//   random = Math.floor(Math.random() * $list.length),
//   winner = $list[random]
//   // console.log($list, random, winner);
//   return `El ganador es: ${winner.textContent}!!!!`;
// }
