(function(){
  $(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.slider').slider({
      full_width: true,
      indicators: false,
      interval: 1500
    });
    GitHubActivity.feed({
        username: "biojs",
        selector: "#feed",
        limit: 20 // optional
    });
  });
})();