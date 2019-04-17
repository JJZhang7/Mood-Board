var sickP="https://cdn4.vectorstock.com/i/1000x1000/75/43/sick-person-vector-737543.jpg";
var angryP="http://www.pngall.com/wp-content/uploads/2/Angry-Person-PNG-Free-Image.png";
var jealousP="https://awarenessact.com/wp-content/uploads/2017/10/frase-do-dia-16.05.2015.jpg";
var scaredP="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B3mqp6o/scared-guy-dressed-with-an-elegant-fashion-suit_suomc7uie_thumbnail-full03.png";

function angryMood(){
     changeBackground("https://www.thelocal.es/userdata/images/article/64139ce4a1a8d84316a1fc4d261fe7b4595cd44de917d4e0a6916316657e1253.jpg");
    changeTextColor("red");
    displayImage(angryP);
}

function sickMood(){
    changeBackground("http://beta.ems.ladbiblegroup.com/s3/content/808x455/b169b3a35ad7581aa09591dd263a6605.png");
    changeTextColor("green");
    displayImage(sickP);
}

function scaredMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1ITpnM6RMGj_urvUuD09FI-8k4ujkpj_UJWyzdlNmfdi_foX");
    changeTextColor("blue");
    displayImage(scaredP);
}

function jealousMood(){
    changeBackground("https://www.proprofs.com/quiz-school/topic_images/p1auffq2ca1dqf1sae13h480ud2f3.jpg");
    changeTextColor("purple");
    displayImage(jealousP);
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "sick"){
            sickMood();
    } else if(input==="angry"){
        angryMood();
    }else if(input==="scared"){
        scaredMood();
    }else if(input==="jealous"){
        jealousMood();
    }else{
     alert("Please enter sick, angry, jealous or scared!"); 
    }
});
