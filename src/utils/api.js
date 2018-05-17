import Rx from "rxjs";

export var get = (url) => {
  return Rx.Observable.ajax({
    url: url,
    method: "get",
    crossDomain: true,
    headers: {
      Authorization: "Bearer BQDcY952J1U7RERqHCGUlkMrn45aKRf54uHBzMmcXUXfKud6_DbQHebTeMRpPsg-Kxg14jDSt1I-EBrYBoLqHXAcA7xFyuvKhHiL2nOQEAmm0qG8oXv_HJODNV6DLxhzhsigGtFe9SXNloqQx6OdPuq9RGMzrXp5N0b6yMoj3nPI"
    }
  }).toPromise()
};
