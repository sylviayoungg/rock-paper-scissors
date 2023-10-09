import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from '../prediction-event';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  handIcons = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
  score = 0;
  games = 0;
  computerScore = 0;
  gobutton = false;
  constructor() { }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){ 
    this.gesture = event.getPrediction();
    if(this.gesture === "Two Open Hands"){
      this.countdown();
    }
    if(this.gesture === "One Open Hand and One Closed Hand"){
      document.getElementById("score")!.innerHTML = "User Score: " + this.score.toString();
    }
    if(this.gesture === "Two Closed Hands") {
        this.restartGame();
    }
    if(this.gesture === "One Open Hand and One Hand Pointing") {
        this.displayStats();
    }
  }

  countdown(){
    document.getElementById('userWin')!.innerHTML = "";
    document.getElementById('computerWin')!.innerHTML = "";
    let timeleft = 3;
    let self = this;
    let downloadTimer = setInterval(function(){
      if(timeleft === 0){
        clearInterval(downloadTimer);
        document.getElementById("countDown")!.innerText = "Go!";
        self.gameResult();
        return;
      }
      else{
        document.getElementById("countDown")!.innerHTML = timeleft.toString();
      }
      timeleft-=1;
    }, 1000);
  }

  gameResult(){
    let userInput = this.gesture;
    const userIcon = document.querySelector('.show i');
    const computerIcon = document.querySelector('.showComputer i');
    const rndInt = Math.floor(Math.random() * 2) + 0;
    //0 == rock == Closed Hand
    //1 == paper == Open Hand
    //2 == scissors == Hand pointing
    if(userInput === 'Open Hand'){
      userIcon!.className = this.handIcons[1];
      computerIcon!.className = this.handIcons[rndInt];
      if(rndInt === 0){
        document.getElementById('userWin')!.innerHTML = "You Win!";
        this.score++;
      }
      else if(rndInt === 2){
        document.getElementById('computerWin')!.innerHTML = "Computer Win!";
        this.computerScore++;
      }
      else if(rndInt === 1){
        document.getElementById('userWin')!.innerHTML = "Tie";
        document.getElementById('computerWin')!.innerHTML = "Tie";
      }
      this.games++;
      return;
    }

    if(userInput === 'Closed Hand'){
      userIcon!.className = this.handIcons[0];
      computerIcon!.className = this.handIcons[rndInt];
      if(rndInt === 2){
        document.getElementById('userWin')!.innerHTML = "You Win!";
        this.score++;
      }
      else if(rndInt === 1){
        document.getElementById('computerWin')!.innerHTML = "Computer Win!";
        this.computerScore++;
      }
      else if(rndInt === 0){
        document.getElementById('userWin')!.innerHTML = "Tie";
        document.getElementById('computerWin')!.innerHTML = "Tie";
      }
      this.games++;
      return;
    }

    if(userInput === "Hand Pointing"){
      userIcon!.className = this.handIcons[2];
      computerIcon!.className = this.handIcons[rndInt];
      if(rndInt === 1){
        document.getElementById('userWin')!.innerHTML = "You Win!";
        this.score++;
      }
      else if(rndInt === 0){
        document.getElementById('computerWin')!.innerHTML = "Computer Win!";
        this.computerScore++;
      }
      else if(rndInt === 2){
        document.getElementById('userWin')!.innerHTML = "Tie";
        document.getElementById('computerWin')!.innerHTML = "Tie";
      }
      this.games++;
      return;
    }

  }


  restartGame() {
    document.getElementById('userWin')!.innerHTML = "";
    document.getElementById('computerWin')!.innerHTML = "";
    document.getElementById("score")!.innerHTML = "User Score: ";
    document.getElementById("games")!.innerHTML = "";
    document.getElementById("computerScore")!.innerHTML = "";
    this.score = 0;
    this.games = 0;
    this.computerScore = 0;
  }


  displayStats() {
    document.getElementById("score")!.innerHTML = "User Score: " + this.score.toString();
    document.getElementById("games")!.innerHTML = "Games: " + this.games.toString();
    document.getElementById("computerScore")!.innerHTML = "Computer Score: " + this.computerScore.toString();
  }


}