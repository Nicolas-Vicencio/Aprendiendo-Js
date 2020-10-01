const d = document;

export default function countdown(id, limitDate, finalMsj){
 const $countdown = d.getElementById('countdown'),
 countdownDate = new Date(limitDate).getTime();
 
let countdownTempo = setInterval(() => {
  let now = new Date().getTime(),
  limitTime = countdownDate - now,
  days = Math.floor(limitTime / (1000 * 60 * 60 * 24 )),
  hours =  ('0' +  Math.floor((limitTime % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60)))).slice(-2),
  minutes = ('0' + Math.round((limitTime % (1000 * 60 * 60) / (1000 * 60)))).slice(-2),
  seconds = ('0' + (Math.floor(limitTime % (1000 * 60) / (1000)))).slice(-2)

  $countdown.innerHTML = `<h3> Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos para el nacimiento de dios en la tierra.</h3> `

  // console.log(countdownDate, now, limitTime);
  if(limitTime < 0){
    clearInterval(countdownTempo)
    $countdown.innerHTML = `<h3>${finalMsj}</h3>`
  }
},1000)


}

