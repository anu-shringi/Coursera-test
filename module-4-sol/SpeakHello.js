

(function (window) {
  var speakWord = "hello";
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);



