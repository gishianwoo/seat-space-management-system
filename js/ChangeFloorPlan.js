var nowFloor = 1;
var f1 = document.getElementsByClassName("seat-f1");
var f2 = document.getElementsByClassName("seat-f2");
var f3 = document.getElementsByClassName("seat-f3");
var f4 = document.getElementsByClassName("seat-f4");
var f5 = document.getElementsByClassName("seat-f5");
var seats = [,f1,f2,f3,f4,f5]
function ChangeFloorPlan(Floor){
    switch(Floor){
        case 1:
            document.getElementById("floor").src = "../images/1F.jpg";
            nowFloor = 1;
            break
        case 2:
            document.getElementById("floor").src = "../images/2F.jpg";
            nowFloor = 2;
            break
        case 3:
            document.getElementById("floor").src = "../images/3F.jpg";
            nowFloor = 3;
            break
        case 4:
            document.getElementById("floor").src = "../images/4F.jpg";
            nowFloor = 4;
            break
        case 5:
            document.getElementById("floor").src = "../images/5F.jpg";
            nowFloor = 5;
            break
    }
}


function Seats(){
    for(let i=1; i<seats.length; i++){
        if (i != nowFloor){
            for(let j=0; j<seats[i].length; j++){
                seats[i][j].setAttribute("hidden","true");
            }
        }
        else{
            for(let j=0; j<seats[i].length; j++){
                seats[i][j].removeAttribute("hidden");
            }
        }
    }/*
    switch(nowFloor){
        case 1:
            for(let i=2; i<seats.length; i++){
                for(let j=0; j<seats[i].length; j++){
                    seats[i][j].setAttribute("hidden","true");
                }
            }
            for(let i=0; i<seats[1].length; i++){
                seats[1][i].removeAttribute("hidden");
            }
            break
        case 2:
            for(let i=1; i<seats.length; i++){
                if (i != 2){
                    for(let j=0; j<seats[i].length; j++){
                        seats[i][j].setAttribute("hidden","true");
                    }
                }
                else{
                    for(let j=0; j<seats[i].length; j++){
                        seats[i][j].removeAttribute("hidden");
                    }
                }
            }
            break
        case 3:
            for(let i=1; i<seats.length; i++){
                if (i != 3){
                    for(let j=0; j<seats[i].length; j++){
                        seats[i][j].setAttribute("hidden","true");
                    }
                }
                else{
                    for(let j=0; j<seats[i].length; j++){
                        seats[i][j].removeAttribute("hidden");
                    }
                }
            }
            break
    }*/
}