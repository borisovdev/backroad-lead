import CookieUtil from "./utils/CookieUtil";

export default class {

  _cookieOptions() {
    return {
      name: "backroad",
      value: 'true',
      domain: 'test.workplace',
      path: '/',
      expirationTime: 259200, // 3 days
      secure: false
    }
  }

  constructor(title, desc) {
    this.devMode = true;
    this.cookieUtil = new CookieUtil();
    document.addEventListener('mouseleave', cn => this.isOutDocument(cn) )
    this.title = title;
    this.desc = desc;
  }

  get cookieName() {
    return this._cookieOptions().name
  }

  get cookieValue() {
    return this._cookieOptions().value
  }

  get cookieDomain() {
    return this._cookieOptions().domain
  }
  
  get cookiePath() {
    return this._cookieOptions().path
  }

  get cookieExpires() {
    return this._cookieOptions().expirationTime
  }

  get cookieSecure() {
    return this._cookieOptions().secure
  }

  isOutDocument(evt) {
    this.sendWarning();
  }

  modalStyles() {
    return `
      <style>
        .backroad__overlay {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .backroad__content {
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-content: flex-start;
          position: relative;
          overflow: hidden;
          background: white;
          border-radius: 10px;
          color: black;
        }
        
        .backroad__close {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
        }
        .backroad__close svg {
            width: 100%;
            height: 100%;
            fill: black;
            transition: fill 0.35s ease;
        }
        .backroad__close:hover svg {
            fill: blue;
        }
      </style>
    `
  }

  modalScripts() {
    return `
      <script>
          (function() {
            const close = document.querySelector(".backroad__close");
            if (close !== null) {
              close.addEventListener("click", function(evt) {
                  console.log(evt.target);
                  console.log(this);
                  this.parentNode.parentNode.display = "none"; 
              });  
            } else {
                console.log(close);
                return null;
            }              
          })();         
      </script>
    `
  }

  modalHTML() {
    return `
      <div id="backroad" class="backroad__overlay">
        <div class="backroad__content">
          <div class="backroad__close"><svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg></div>
          <span class="backroad__content-title">${this.title}</span>
          <p class="backroad__content-desc">${this.desc}</p>
        </div>
      </div>
    `
  }

  sendWarning() {
    if (this.readBackRoadCookie() === undefined) {
      this.devMode ? console.error('Функция ничего не вернула. Состояние куки: ' + this.readBackRoadCookie()) : false;
    }
    if (!!this.readBackRoadCookie()) {
      this.devMode ? console.log('Окно уже было показано') : false;
      return null;
    } else {
      this.mountBackRoadCookie();
      this.devMode ? console.log('Куки установлены') : false;
      this.openModal();
    }
  }

  openModal() {
    document.head.insertAdjacentHTML("beforeend", this.modalStyles());
    document.head.insertAdjacentHTML("beforeend", this.modalScripts());
    document.body.insertAdjacentHTML("beforeend", this.modalHTML());
  }

  mountBackRoadCookie() {
    this.cookieUtil.setCookie(
      this.cookieName,
      this.cookieValue,
      this.cookieExpires,
      this.cookiePath,
      this.cookieDomain,
      this.cookieSecure
    )
  }

  readBackRoadCookie() {
    return this.cookieUtil.getCookie(this.cookieName)
  }

  unsetBackRoadCookie() {
    this.cookieUtil.unsetCookie(
      this.cookieName,
      this.cookiePath,
      this.cookieDomain,
      this.cookieSecure
    )
  }

}
