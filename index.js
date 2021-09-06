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
  
  
  
    
    if(myId.length === 11) {
        $('#myCode').html('<iframe class="video_sizer" src="//www.youtube.com/embed/' + myId + '" frameborder="0" allowfullscreen></iframe>');
    } else {
        $('#myCode').html('<div>Sorry not a valid youtube link</div>');
    }
    
    


  }

  