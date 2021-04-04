player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");
player1_score= 0;
player2_score= 0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn"+player2_name;







function send() {
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word lowercase"+word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    length_divide_2=Math.floor(word.length/2);
    charat2=word.charAt(length_divide_2);
    console.log(charat2);
    last_index=word.length-1;
    charat3=word.charAt(last_index);
    console.log(charat3);
    remove_charat1=word.replace(charAt1,"_");
    remove_charat2=remove_charat1.replace(charAt2,"_");
    remove_charat3=remove.remove_charat2.replace(charAt3,"_");
    console.log(remove_charat3);


    

    question_word="<h4>Q."+remove_charat3+"</h4>";
    input_box="<br>answer:<input id='answer_input' type='text'>";
check_btn="<br><br><button class='btn btn-info' onclick='check()'>CHECK<button>";
row=question_word+input_box+check_btn;
document.getElementById("output").innerHTML=row;
document.getElementById("word").innerHTML="";
}
question_turn="player_1";
answer_turn="player_2";
function check() {
    get_answer=document.getElementById("answer_input").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player_1"){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
}
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player_1"){
question_turn="player_2";
document.getElementById("player_question").innerHTML="question turn :"+player2_name;
    }
    else{
        question_turn="player_1";
document.getElementById("player_question").innerHTML="question turn :"+player1_name;
    }
    if(answer_turn=="player_1"){
        answer_turn="player_2";
        document.getElementById("player_answer").innerHTML="answer turn :"+player2_name;
            }
            else{
                answer_turn="player_1";
        document.getElementById("player_answer").innerHTML="answer turn :"+player1_name;
            }
            document.getElementById("output").innerHTML="";
}