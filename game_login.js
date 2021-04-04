function adduser(){
player1_name=document.getElementById("p1_input").value;
player2_name=document.getElementById("p2_input").value;
localStorage.setItem("p1",player1_name );
localStorage.setItem("p2",player2_name );
window.location="game_page.html";
}