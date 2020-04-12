import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/game';
import { baseURL } from '../../shared/baseURL';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-game-into',
  templateUrl: './game-into.component.html',
  styleUrls: ['./game-into.component.css'],
  animations: [
    trigger('onHover', [
      state(
        'initial',
        style({
          padding: '10px',
          height: '30%',
        })
      ),
      state(
        'hover',
        style({
          padding: '40px 10px',
          height: '100%',
        })
      ),
      transition('* => *', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class GameIntoComponent implements OnInit {
  @Input() game: Game;
  blockOnHover = false;

  constructor() {}

  ngOnInit(): void {}
}
