JS:
var scoreList = [0,1,2,3,4,6,'w'];
var toss = Math.ceil(Math.random()*2);
updateStrike();
function updateStrike()
{
    if(toss==1){
        document.getElementById("strike").value = "AUSTRALIA BATTING";
        document.getElementById("strike").style.backgroundColor="yellow"
    }
    else{
        document.getElementById("strike").value = "INDIA BATTING";
        document.getElementById("strike").style.backgroundColor="blue"
    }
}
var count1=0;
var count2=0;
var w1count=0;
var w2count=0;
var team1score = 0;
var team2score = 0;
var team1 = [];
var team2 = [];
function handleStrike()
{
    if(toss==1)
    {
        if(count1!=6 && w1count!=2)
        {
            var s = scoreList[Math.floor(Math.random()*7)];
            console.log(s);
            team1.push(s);
            if(s=='w')
            {
                w1count++;
            }
            else
            {
                team1score = team1score + parseInt(s);
                document.getElementById("team1score").textContent = team1score;
            }
            count1++;
            updateScores();
        }
        else
        {
            if(team2score==0)
            {
                toss = 2;
                updateStrike();
            }
            else
            {
                if(team1score>team2score){
                    document.getElementById("result").textContent = "AUSTRALIA WON THE MATCH!!!";
                    document.getElementById("result").style.backgroundColor="yelloW";
                }
                else if(team2score>team1score){
                    document.getElementById("result").textContent = "INDIA WON THE MATCH!!!";
                    document.getElementById("result").style.backgroundColor="blue";
                }
                else{
                    document.getElementById("result").textContent = "Match Draw!!!";
                }
            }
        }
    }
    else
    {
        if(count2!=6 && w2count!=2)
        {
            var s = scoreList[Math.floor(Math.random()*6)];
            console.log(s);
            team2.push(s);
            if(s=='w')
            {
                w2count++;
            }
            else
            {
                team2score = team2score + parseInt(s);
                document.getElementById("team2score").textContent = team2score;
            }
            count2++;
            updateScores();
        }
        else
        {
            if(team1score==0)
            {
                toss = 1;
                updateStrike();
            }
            else
            {
                if(team1score>team2score){
                    document.getElementById("result").textContent = "AUSTRALIA WON THE MATCH!!!";
                    document.getElementById("result").style.backgroundColor="yellow";
                }
                else if(team2score>team1score){
                    document.getElementById("result").textContent = "INDIA WON THE MATCH!!!";
                    document.getElementById("result").style.backgroundColor="blue";
                }
                else{
                    document.getElementById("result").textContent = "Match Draw!!!";
            }
            }
        }
    }
}


function updateScores()
{
    var team1Value = document.getElementById("team1scores").children;
    for(let i=0;i<team1.length;i++)
    {
        team1Value[i].textContent = team1[i];
    }


    var team2Value = document.getElementById("team2scores").children;
    for(let i=0;i<team2.length;i++)
    {
        team2Value[i].textContent = team2[i];
    }
}
