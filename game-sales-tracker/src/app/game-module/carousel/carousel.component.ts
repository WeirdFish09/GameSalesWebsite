import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { IGame } from "../interfaces/IGame";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { CurrencySymbol } from "../interfaces/IPlatformGamePrice";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  animations: [
    trigger("onHover", [
      state(
        "initial",
        style({
          height: "20%",
        })
      ),
      state(
        "hover",
        style({
          height: "60%",
        })
      ),
      transition("* => *", animate("0.5s ease-in-out")),
    ]),
    trigger("gameDetails", [
      state(
        "initial",
        style({
          opacity: "0",
        })
      ),
      state(
        "hover",
        style({
          opacity: "1",
        })
      ),
      transition("initial <=> hover", animate("1s")),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  allGames: IGame[];
  gamesToDisplay: IGame[];
  blockOnHover: boolean[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getBestGames(10).subscribe(
      (data) => {
        this.allGames = data;
        this.gamesToDisplay = this.allGames.slice(0, 4);
      },
      (error) => console.log(error)
    );
  }

  prevSlide() {
    const indexOfFirstGame = this.allGames.findIndex(
      (x) => x == this.gamesToDisplay[0]
    );
    if (indexOfFirstGame == 0)
      this.gamesToDisplay.unshift(this.allGames[this.allGames.length - 1]);
    else this.gamesToDisplay.unshift(this.allGames[indexOfFirstGame - 1]);

    this.gamesToDisplay.pop();
  }

  nextSlide() {
    const indexOfLastGame = this.allGames.findIndex(
      (x) => x == this.gamesToDisplay[this.gamesToDisplay.length - 1]
    );

    this.gamesToDisplay.shift();

    if (indexOfLastGame == this.allGames.length - 1)
      this.gamesToDisplay.push(this.allGames[0]);
    else this.gamesToDisplay.push(this.allGames[indexOfLastGame + 1]);
  }

  getConvertedPrice(game: IGame): string {
    return `${(game.BestPrice / 100).toFixed(2)} ${
      CurrencySymbol[game.CurrencyId]
    }`;
  }
}
