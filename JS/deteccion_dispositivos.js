const d = document,
  n = navigator,
  ua = navigator.userAgent;

export default function userDeviceInfo(id) {
  console.log(ua);
  const $id = d.getElementById(id),
    isMobile = {
      android: () => navigator.userAgent.match(/android/i),
      ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => navigator.userAgent.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|emobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      },
    };

  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isMobile.any());
  // console.log(isDesktop.linux());
  // console.log(isDesktop.windows());
  // console.log(isBrowser.safari());

  $id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Plataforma: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
    <li>Navegador: <b>${isBrowser.any()}</b></li>
  </ul>
  `;
 
// Contenido exclusivo
    if(isBrowser.chrome()){
      $id.innerHTML += `<p> <mark>Este contenido solo se ve en Chrome</mark></p>`
    }
    if(isBrowser.firefox()){
      $id.innerHTML += `<p> <mark>Este contenido solo se ve en Firefox</mark></p>`
    }
    if(isDesktop.linux()){
      $id.innerHTML = `<p><mark>Descarga nuestro software para Linux</mark></p>`
    }
    if(isDesktop.mac()){
      $id.innerHTML = `<p><mark>Descarga nuestro software para Mac Os</mark></p>`
    }
    if(isDesktop.windows()){
      $id.innerHTML = `<p><mark>Descarga nuestro software para Windows</mark></p>`
    }

// Redirecciones
    if(isMobile.android()){
      window.location.href = 'http://google.com'
    }

}
