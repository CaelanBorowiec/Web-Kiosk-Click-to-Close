var cooldown = false;
$( "body" ).mousemove(function( event ) {
  if (!cooldown)
  {
    alert("You can close things by clicking the X button, d'oh!");
    cooldown = true;
    setTimeout(resetCooldown, 15000)
  }
});

function resetCooldown() {
    cooldown = false;
}
