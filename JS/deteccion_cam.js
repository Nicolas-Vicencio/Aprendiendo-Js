const d = document,
w= window;

export default function webCam (id){
  const $video = d.getElementById(id)
  // console.log(navigator.mediaDevices.getUserMedia);
  if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(stream => {
      console.log(stream);
      $video.srcObject = stream
      $video.play()
    }).catch(err => {
      $video.insertAdjacentHTML('afterend', `<p>Se ha producido el siguiente error!: <mark>${err}</mark></p>`)
      console.log(`Sucedio el siguiente error: ${err}`);
    })
  }
}