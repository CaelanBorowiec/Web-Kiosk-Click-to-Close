var cooldown = false;
$( document ).ready(function() {
  $( "body" ).mousemove(function( event ) {
    if (!cooldown)
    {
      $("#closearrow").fadeIn().delay(3000).fadeOut();
      cooldown = true;
      setTimeout(resetCooldown, 10000)
    }
  });
});
function resetCooldown() {
    cooldown = false;
}
