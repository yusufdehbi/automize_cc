var getPathName = window.location.pathname;
if (window.location.host === "www.digiteum.co.uk" && getPathName !== "") {
  location = "https://digiteum.com/" + getPathName;
  document.location.href = "https://digiteum.com" + getPathName;
  location.replace("https://digiteum.com" + getPathName);
  window.location.reload("https://digiteum.com" + getPathName);
  document.location.replace("https://digiteum.com" + getPathName);
}
//  <!-- fix jquery -->
(function (w, d, u) {
  w.readyQ = [];
  w.bindReadyQ = [];

  function p(x, y) {
    if (x == "ready") {
      w.bindReadyQ.push(y);
    } else {
      w.readyQ.push(x);
    }
  }
  var a = { ready: p, bind: p };
  w.$ = w.jQuery = function (f) {
    if (f === d || f === u) {
      return a;
    } else {
      p(f);
    }
  };
})(window, document);
