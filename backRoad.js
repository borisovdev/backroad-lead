import CookieUtil from "./utils/CookieUtil";

export default class {
  constructor(title = "Заголовок по умолчанию", desc = "Описание по умолчанию") {
    this.devMode = true;
    this.cookieUtil = new CookieUtil();
    this.title = title;
    this.desc = desc;
    document.addEventListener('mouseleave', cn => this.isOutDocument(cn) );
    this.modalScripts();
  }

  get _cookieOptions() {
    return {
      name: "backroad",
      value: 'true',
      domain: this.devMode ? 'test.workplace' : 'your-domain.com',
      path: '/',
      expirationTime: 259200, // 3 days
      secure: false
    }
  }

  isOutDocument() {
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
    window.closeBackRoadLead = function(el) {
      el.parentNode.parentNode.style.display = "none";
    }
  }

  modalHTML() {
    return `
      <div id="backroad" class="backroad__overlay">
        <div class="backroad__content">
          <div class="backroad__close" onclick="closeBackRoadLead(this);"><svg height="329pt" viewBox="0 0 329.26933 329" width="329pt" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg></div>
          <span class="backroad__content-title">${this.title}</span>
          <p class="backroad__content-desc">${this.desc}</p>
        </div>
      </div>
    `
  }

  sendWarning() {
    if (this.readLeadCookie === undefined) {
      this.devMode ? console.error('Функция ничего не вернула. Состояние куки: ' + this.readLeadCookie) : false;
    }
    if (!!this.readLeadCookie) {
      this.devMode ? console.log('Окно уже было показано') : null;
      return false;
    } else {
      this.mountLeadCookie();
      this.devMode ? console.log('Куки установлены') : null;
      this.mountModal();
    }
  }

  mountModal() {
    document.head.insertAdjacentHTML("beforeend", this.modalStyles());
    document.body.insertAdjacentHTML("beforeend", this.modalHTML());
  }

  mountLeadCookie() {
    this.cookieUtil.setCookie(
      this._cookieOptions.name,
      this._cookieOptions.value,
      this._cookieOptions.expirationTime,
      this._cookieOptions.path,
      this._cookieOptions.domain,
      this._cookieOptions.secure
    )
  }

  get readLeadCookie() {
    return this.cookieUtil.getCookie(this._cookieOptions.name)
  }

}
