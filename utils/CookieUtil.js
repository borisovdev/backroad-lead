/**
 * Cookies methods
 */
export default class {

    constructor() {}

    getCookie(name) {
        let cookieName = encodeURIComponent(name) + '=';
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = null;

        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(';', cookieStart);

            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    }

    setCookie(name, value, expires, path, domain, secure) {
        let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toUTCString();
        } else if (expires instanceof Number) {
            cookieText += '; max-age=' + expires;
        }

        if (path) {
            cookieText += '; path=' + path;
        }

        if (domain) {
            cookieText += '; domain=' + domain;
        }

        if (secure) {
            cookieText += '; secure=' + secure;
        }

        document.cookie = cookieText;
    }

    unsetCookie(name, path, domain, secure) {
        this.setCookie(name, "", new Date(0), path, domain, secure)
    }

}