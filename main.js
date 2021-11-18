x=0;
y=0;
drawCircle="";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "Please speak";
    recognition.start();
    
   
}
recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "You said " + content;
        if(content == "circle")
        {
            console.log("test");
            x = Math.floor(Math.random * 800);
            y = Math.floor(Math.random * 600);
            document.getElementById("status").innerHTML = "Drawing";
            drawCircle = "drawn";
        }

        if(content == "rectangle")
        {
            console.log("test");
            x = Math.floor(Math.random * 800);
            y = Math.floor(Math.random * 600);
            document.getElementById("status").innerHTML = "Drawing";
            drawRect = "drawn";
        }



}

function setup()
{
    canvas = createCanvas(800,600);
}

function draw()
{
if(drawCircle == "drawn")
{
radius = Math.floor(Math.random()*100);
circle(x,y,radius);
document.getElementById("status").innerHTML = "A circle has been drawn";
drawCircle = "";
}
if(drawRect == "drawn")
{

rect(x,y,70,50);
document.getElementById("status").innerHTML = "A rectangle has been drawn";
drawRect = "";
}
}
