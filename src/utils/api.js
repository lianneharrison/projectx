import Rx from "rxjs";

export var get = (url) => {
  return Rx.Observable.ajax({
    url: url,
    method: "get",
    crossDomain: true,
    headers: {
      Authorization: "Bearer BQBQICDOJszSSB-1Z1ECc980Yj5OYFMPLYtNGgwegOY2EzEt4kbta0Tj2bTuHgv2h7PQmSEeFpPNu3r81TAlgDyiwSMZCxQ_K8RRglj2Y2q-GlJXfM3Lhn42mZzYVZWH-b18YQGAroOhn0JSMBN5Jxte0QqMDFXWUWhwr5gW1jr2"
    }
  }).toPromise()
};
