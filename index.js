function popYouTubeId(buttonid) {
    var youTubeUrl = $(buttonid).attr('data-url');
    var youTubeId;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = youTubeUrl.match(regExp);
    if (match && match[2].length == 11) {
        youTubeId = match[2];
    } else {
        youTubeId = 'no video found';
    }
    $('#ytvideo').html('<div class="youtubepopup"><a class="closex">x</a><iframe width="560" height="315" src="//www.youtube.com/embed/'+youTubeId+'" frameborder="0" allowfullscreen></iframe></div>');
    $('a.closex').click( function(){
        $('.youtubepopup').remove();
    });
}

var buttonid;

$('.videobutton').click( function(){
	buttonid = '#'+$(this).attr('id');
    popYouTubeId(buttonid);
});    