

( function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var i=0;i<names.length;i++) {
    
    var firstAlpha = names[i].charAt(0).toLowerCase();
    if(firstAlpha=='j')
    {
      byeSpeaker.speak(names[i]);
    }
    else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);




