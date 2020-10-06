import hamburgerMenu from"./menu_hambuguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {shortcuts, moveBall} from './teclado.js';
import countdown from './countdown.js'
import btnScroll from './button_scroll.js'
import darkTheme from './dark_mode.js'
import responsiveMedia from './objeto_responsive.js'
import responsiveTester from './responsive_test.js'
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_cam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilter from "./filtro_busquedas.js";
import digitalDraw from "./sorteo_digital.js";


const d = document;

d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn','.panel', ".menu a");
  digitalClock('#reloj', '#reloj-on', '#reloj-off' );
  alarm('Assets/alarma_5.mp3', '#alarm-on', '#alarm-off');
  countdown('countdown','Mar 25 2021', 'Feliz cumpleaños maquinola');
  btnScroll('.scroll-top-btn' );
  responsiveMedia(
    'video-youtube',
    '(min-width:1024px)',
    '<a href="https://www.youtube.com/embed/nYh-n7EOtMA" target="_blank" rel="noopener">Ver video</a>', 
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/nYh-n7EOtMA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    )
 responsiveMedia(
   'g-maps',
   '(min-width:1024px)',
   '<a href="https://www.google.com/maps/place/Fabiola+%C3%93rdenes+Decotortas/@-33.767817,-70.704527,17z/data=!4m5!3m4!1s0x0:0x264f78462c61330b!8m2!3d-33.7678173!4d-70.7045267?hl=es-419" rel="noopener" target="_blank">Ver Mapa </a>', 
   '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.2844524749353!2d-70.70472215817506!3d-33.76756271958373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663250f426ca007%3A0x264f78462c61330b!2sFabiola%20%C3%93rdenes%20Decotortas!5e0!3m2!1ses-419!2scl!4v1601402145584!5m2!1ses-419!2scl" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
 )
  responsiveTester('responsive-tester')
  userDeviceInfo('user-device')
  webCam('webcam')
  getGeolocation('geolocation')
  searchFilter(".card-filter", ".card")
  digitalDraw('.list', '.draw-btn')

})

d.addEventListener('keydown', e => {
  shortcuts(e)
  moveBall(e, '.ball','.stage')
  
})


// Esta funcion la enviamos fuera de la ejecucion para que el evento del DOMCOntentLoaded de dark-mode.js funcione, ya que no puede haber un evento dentro otro evento del mismo tipo
darkTheme('.dark-mode-btn', 'dark-theme')
networkStatus()
  