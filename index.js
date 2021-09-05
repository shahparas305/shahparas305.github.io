function myFunction() {
    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
  
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
  
    var myId = getId(document.getElementById("myText").value);
  
  
  
    $('#myCode').html('<iframe width="560" height="315" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');
    
  }