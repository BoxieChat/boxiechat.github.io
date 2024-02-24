

var chat = document.getElementById("chat");
var boxie = document.getElementById("boxie");
var message;

var BoxieDialog = [
    [
        ["Начать", 1],
        ["Привет! Я Боксик, нажми \"Начать\" чтобы я начать диалог."]
    ],
    [
        ["На главную", 0, "Как узнать...?", 2],
        ["Думаю, можем начать с этого. Я пока что мало с чем знаком, учусь и набираюсь знаний."]
    ],
    [
        ["На главную", 0],
        ["Я еще учусь, скоро я узнаю много нового о нашем предприятии и смогу помогать нашим ребятам."]
    ],
];

setTimeout(function(){
    document.getElementById("app").style.display = "block";
    appStart();
}, 400);

function appStart(){
    setTimeout(function(){
        sendMessage(0);
    }, 500);
}

function playBoxie(){
    var frame = 0;
    var e = setInterval(function(){
        if (frame == 0){
            boxie.setAttribute("src", "res/logo.png");
            frame = 1;
        } else {
            boxie.setAttribute("src", "res/logo1.png");
            frame = 0;
        }
    }, 100);
    setTimeout(function(){
        clearInterval(e);
    }, 800);
}

function sendMessage(dialogId)
{
    message = document.getElementById("message");
    message.id = "message";
    message.className = "textb";
    message.innerText = BoxieDialog[dialogId][1][0];
    document.getElementById("t").appendChild(message);

    

    for (var i = 0; i < BoxieDialog[dialogId][0].length; i += 2)
    {
        var button = document.createElement("div");
        button.className = "button";
        button.innerText = BoxieDialog[dialogId][0][i];
        button.setAttribute("key", BoxieDialog[dialogId][0][i + 1]);

        button.addEventListener("click", function(){
            chat.innerHTML = "";
            sendMessage(this.getAttribute("key"));
            
        }, false);

        chat.appendChild(button);
    }
    playBoxie();
}