import { Component } from '@angular/core';
import { Database, objectVal, ref, list  } from '@angular/fire/database';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  public readonly testObjectValue$: Observable<any>;
  constructor(private database: Database) {
    const doc = ref(this.database, 'recipes');
    this.testObjectValue$ = list(doc)
    
  }

  title = 'firebase-test';
}
