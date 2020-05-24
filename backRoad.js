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
          background: #305F72;
          border-radius: 10px;
          color: white;
        }
        
        .backroad__header {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
        }
        
        .backroad__titles {
            margin-left: 35px;
        }
        
        .backroad__content-title {
            font-size: 28px;
            font-weight: 600;
        }
        .backroad__content-desc {
            font-size: 14px;
        }
        
        .backroad__form {
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        
        .backroad__form-fields {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
        
        .backroad__form-actions {
        }
        
        label.backroad__label {
            margin-bottom: 5px;
            font-size: 12px;
        }
        
        input.backroad__input {
            width: 100%;
            padding: 7px 0;
            margin: 0 0 10px;
            background: transparent;
            color: white;
            border: none;
            border-bottom: 1px solid white;
            font-size: 12px;
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
        
        .backroad__btn-submit {
            padding: 15px 25px;
            margin: 5px 15px;
            border: none;
            background: #F18C8E;
            font-size: 14px;
            cursor: pointer;
        }
        .backroad__btn-close {
            padding: 15px 25px;
            margin: 5px 15px;
            border: none;
            background: #BDBDBD;
            font-size: 14px;
            cursor: pointer
        }
      </style>
    `
  }

  modalScripts() {
    window.closeBackRoadLead = function(el) {
      el.parentNode.parentNode.parentNode.parentNode.style.display = "none";
    }
  }

  modalHTML() {
    return `
      <div id="backroad" class="backroad__overlay">
        <div class="backroad__content">
           <div class="backroad__header">
              <div class="backroad__decor"><svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_ddiiii)"><path d="M104.094 52.8958L57.2188 6.02083C55.3438 4.14583 52.7396 3 49.875 3H13.4167C7.6875 3 3 7.6875 3 13.4167V49.875C3 52.7396 4.14583 55.3438 6.07292 57.2708L52.9479 104.146C54.8229 106.021 57.4271 107.167 60.2917 107.167C63.1563 107.167 65.7604 106.021 67.6354 104.094L104.094 67.6354C106.021 65.7604 107.167 63.1563 107.167 60.2917C107.167 57.4271 105.969 54.7708 104.094 52.8958ZM21.2292 29.0417C16.9063 29.0417 13.4167 25.5521 13.4167 21.2292C13.4167 16.9063 16.9063 13.4167 21.2292 13.4167C25.5521 13.4167 29.0417 16.9063 29.0417 21.2292C29.0417 25.5521 25.5521 29.0417 21.2292 29.0417Z" fill="#F0B7A4"/></g><defs><filter id="filter0_ddiiii" x="0" y="0" width="110.167" height="110.167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-1" dy="-1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.380392 0 0 0 0 0.384314 0 0 0 0.5 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="1" dy="1"/><feGaussianBlur stdDeviation="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.729412 0 0 0 0.3 0"/><feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="2"/><feGaussianBlur stdDeviation="2.5"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.380392 0 0 0 0 0.384314 0 0 0 0.9 0"/><feBlend mode="normal" in2="shape" result="effect3_innerShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="-2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.717647 0 0 0 0 0.729412 0 0 0 0.9 0"/><feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="2" dy="-2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.380392 0 0 0 0 0.384314 0 0 0 0.2 0"/><feBlend mode="normal" in2="effect4_innerShadow" result="effect5_innerShadow"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="-2" dy="2"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.380392 0 0 0 0 0.384314 0 0 0 0.2 0"/><feBlend mode="normal" in2="effect5_innerShadow" result="effect6_innerShadow"/></filter></defs></svg></div>
              <div class="backroad__titles">
                <span class="backroad__content-title">${this.title}</span>
                <p class="backroad__content-desc">${this.desc}</p>        
              </div>
           </div>
            <form action="#" method="POST" id="backroad_form" class="backroad__form">
                <fieldset class="backroad__form-fields">
                    <label class="backroad__label" for="">Ваше имя</label>
                    <input class="backroad__input" type="text" name="backroad-name" required>
                    <label class="backroad__label" for="">Мессенджер или номер телефона</label>
                    <input class="backroad__input" type="tel" name="backroad-tel">
                    <label class="backroad__label" for="">Электропочта</label>
                    <input class="backroad__input" type="email" name="backroad-email">
                </fieldset>
                <fieldset class="backroad__form-actions">
                    <button class="backroad__btn-close" onclick="closeBackRoadLead(this);">Мне не интересно</button>
                    <button type="submit" class="backroad__btn-submit">Отправить</button>
                </fieldset>
            </form>
          </div>
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
