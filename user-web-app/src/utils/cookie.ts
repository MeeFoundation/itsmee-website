import config from "@config";
export function setCookie(name: string, value: string, exDays?: number) {
  if (exDays) {
    const d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${name}=${value};${expires};domain=${config.cookieDomain};path=/`;
  } else {
    document.cookie = `${name}=${value};domain=${config.cookieDomain};path=/`;
  }
}

export function deleteCookie(name: string) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function getCookie(name: string) {
  const cName = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(cName) == 0) {
      return c.substring(cName.length, c.length);
    }
  }
  return "";
}
