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
            document.getElementById("floor").src = "images/1F.jpg";
            nowFloor = 1;
            break
        case 2:
            document.getElementById("floor").src = "images/2F.jpg";
            nowFloor = 2;
            break
        case 3:
            document.getElementById("floor").src = "images/3F.jpg";
            nowFloor = 3;
            break
        case 4:
            document.getElementById("floor").src = "images/4F.jpg";
            nowFloor = 4;
            break
        case 5:
            document.getElementById("floor").src = "images/5F.jpg";
            nowFloor = 5;
            break
    }
}


function Seats(){
    for(let i=1; i<seats.length; i++){
        //隱藏非該樓層的座位
        if (i != nowFloor){
            for(let j=0; j<seats[i].length; j++){
                seats[i][j].setAttribute("hidden","true");
            }
        }
        //顯示該樓層的座位
        else{
            for(let j=0; j<seats[i].length; j++){
                seats[i][j].removeAttribute("hidden");
            }
        }
    }
}

var DateRange = document.getElementById("date");
NowDate = new Date();
var Months = ["01","02","03","04","05","06","07","08","09",10,11,12]
var Dates = [,"01","02","03","04","05","06","07","08","09",10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31]
function CurrentTime(){
    var NowDate = new Date();
    var year = NowDate.getFullYear();
    var mon = NowDate.getMonth();
    var date = NowDate.getDate();
    SetRange(year,mon,date)
    /**/setTimeout('CurrentTime()',1000);
}/**/
function SetRange(year,mon,date){
    DateRange.setAttribute("min", year+"-"+Months[mon]+"-"+Dates[date])
    range = 56;
    date = date + range;
    mon = mon + 1; //把從getDate()獲得的index轉成實際月份
    d = calculate(year,mon,date)
    
    //document.getElementById("direction").innerHTML = mon+"/"+date+"/";
    //DateRange.setAttribute("max", year+"-"+Months[mon]+"-"+Dates[date]);
    DateRange.setAttribute("max", d[0]+"-"+Months[d[1]-1]+"-"+Dates[d[2]])
}
function calculate(year,mon,date){
    for(let i=1; i<4; i++){
        switch(mon){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                    if((date/31) >= 1){
                        date = date - 31;
                        if(date != 0){mon = mon + 1;}
                        else{date=31;}
                    }
                    break
                case 12:
                    if((date/31) >= 1){
                        date = date - 31;
                        if(date != 0){
                            mon = mon - 11;
                            year += 1;
                        }
                        else{date=31;}
                    }
                    break
                case 4:
                case 6:
                case 9:
                case 11:
                    if((date/30) >= 1){
                        date = date - 30;
                        if(date != 0){mon = mon + 1;}
                        else{date=30;}
                    }
                    break
                case 2:
                    if((year/4) != 0){
                        if((date/28) >= 1){
                            date = date - 28
                            if(date != 0){mon = mon + 1;}
                            else{date=28;}
                        }
                    }
                    else{
                        if((date/29) >= 1){
                            date = date - 29;
                            if(date != 0){mon = mon + 1;}
                            else{date=29;}
                        }
                    }
                    break
        }
    }
    return [year,mon,date]
}

var StartTimes = document.getElementsByClassName("start-times");
var EndTimes = document.getElementsByClassName("end-times");
var times = [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5,14, 14.5, 15, 15.5, 
            16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22]
document.getElementById("seat-selected").onchange = function() {
    //alert(this.value);//9:22
    var NowTime = new Date();
    var h = NowTime.getHours();
    var m = NowTime.getMinutes();
    var s = NowTime.getSeconds();
    var use;
    t = h + m/60;
    ResetSelected()
    /*for (let j=0; j<StartTimes.length; j++){
            StartTimes[j].removeAttribute("selected");
            EndTimes[j].removeAttribute("selected");
    }*/
    use = Reservation_Start(t,use)
    /*for (let i=0; i<times.length; i++){
        
        if (times[i] <= t){
            StartTimes[i].setAttribute("hidden","true");
            //StartTimes[i+1].setAttribute("selected","true");
            EndTimes[i].setAttribute("hidden","true");
            //EndTimes[i+1].setAttribute("selected","true");
        }
        else{
            use = i;
            break
        }
    }*/
    //查看時狀態為使用中
    if ((this.value)=="1-03"){
        StartTimes[use].setAttribute("hidden","true");
        EndTimes[use].setAttribute("hidden","true");
        StartTimes[use+1].setAttribute("selected","true");
        EndTimes[use+1].setAttribute("selected","true");
    }
    //查看時狀態為預約
    else if ((this.value)=="4-14"){
        for(let j=use; j<(use+3); j++){
            StartTimes[j].setAttribute("hidden","true");
            EndTimes[j].setAttribute("hidden","true");
        }
        StartTimes[use+3].setAttribute("selected","true");
        EndTimes[use+3].setAttribute("selected","true");
    }
    else{
        StartTimes[use].setAttribute("selected","true");
        EndTimes[use].setAttribute("selected","true");
    }
}

function ResetSelected(){
    for (let j=0; j<StartTimes.length; j++){
        StartTimes[j].removeAttribute("selected");
        EndTimes[j].removeAttribute("selected");
    }
}
function Reservation_Start(t,use){
    for (let i=0; i<times.length; i++){
        /**/
        if (times[i] <= t){
            StartTimes[i].setAttribute("hidden","true");
            //StartTimes[i+1].setAttribute("selected","true");
            EndTimes[i].setAttribute("hidden","true");
            //EndTimes[i+1].setAttribute("selected","true");
        }
        else{
            use = i;
            break
        }
    }
    return use
}