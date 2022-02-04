let outputScreen = document.getElementById("output-screen");

function display (num) {
    outputScreen.value += num;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}

let rootProp=document.documentElement.style;
        var mode=true;

        function  changeMode(){
            if(mode)
            {
                darkMode();
                document.getElementById("toggle").innerHTML="<i class='fa fa-moon-o fa-2x'></i>";
            }
            else 
            {
                lightMde();
                document.getElementById("toggle").innerHTML="<i class='fa fa-sun-o fa-2x'></i>";
            }
            mode=!mode;
        }
        function lightMde()
        {
            rootProp.setProperty("--background1","rgba(230,230,230)");
            rootProp.setProperty("--shadow1","rgba(119,119,119,0.5)");
            rootProp.setProperty("--shadow2","rgba(255,255,255,.85)");
            rootProp.setProperty("--labelColor","black");
            rootProp.setProperty("--background2","rgb(236, 240, 243)");
        }
        function darkMode()
        {
            rootProp.setProperty("--background1","rgb(9 25 33)");
            rootProp.setProperty("--background2","rgb(9 25 33)")
            rootProp.setProperty("--shadow1","rgb(0 0 0 / 45%)");
            rootProp.setProperty("--shadow2","rgb(255 255 255 /12%)");
            rootProp.setProperty("--labelColor","rgb(255 255 255 /59%");
        }