import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyIndexedDb } from './services/indexeddb';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  protected readonly title = signal('aim_reflex_game');

  private db: MyIndexedDb;

  constructor() {
    this.db = new MyIndexedDb();
    this.db.open();
  }
}
