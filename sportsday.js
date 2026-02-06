const team=["red","blue","green","yellow"];
const score=[0,0,0,0];

function OpeningCeremony(callback){
    console.log("Let the games begin");
    setTimeout(()=>{
        callback(score,race100M);
    },1000)

}

function race100M(score,callback){
    console.log("Race started");
    setTimeout(()=>{
        for(let i=0;i<score.length;i++){
            score[i]+=Math.floor(Math.random()*10)+1;
        }
        score.sort((a,b)=>b-a);
        score[0]+=100;
        score[1]+=50;
        callback(score,longJump);

    },1000)
}

function longJump(score,callback){
    console.log("Long Jump started");
    setTimeout(()=>{
        let winner=Math.floor(Math.random()*4);
        score[winner]+=150;
        console.log("Long Jump winner is "+team[winner]);
        console.log("Current Score: "+score[winner]);
        callback(score,highJump);


    },2000);
}
function highJump(score,callback){
    console.log("High Jump started");
    setTimeout(()=>{
        let winner=prompt("Enter the winning team for High Jump (red, blue, green, yellow):");
        let index=team.indexOf(winner);
        
        
        
    if (index !== -1) {
      score[index] += 100;
      console.log("Scores:", score);
    } else {
      console.log("Invalid team");
    }
        console.log("Current Score: "+score[index]);
        awardCeremony(score);

    })
}

function awardCeremony(score){
    console.log("Award Ceremony started");
    setTimeout(()=>{
        let maxScore=Math.max(...score);
        let winnerIndex=score.indexOf(maxScore);
        console.log("Winner is "+team[winnerIndex]+" with a score of "+maxScore);
    },1000)
}

OpeningCeremony(race100M);