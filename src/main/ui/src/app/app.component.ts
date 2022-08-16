import {Component, OnDestroy, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {InputComponent} from "./input/input.component";
import {BuilderState} from "./model-builder/model-builder.component";

export enum AppState {
  WELCOME,
  TRAINING,
  TESTING
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ml-handwriting-ui';
  appState: AppState = AppState.WELCOME;
  session: string = '';
  public boundedNextState = this.nextState.bind(this);

  public startTraining() {
    if (this.appState == AppState.WELCOME) {
      this.nextState();
    }
  }

  public nextState(session: string = '') {
    this.session = session;
    switch (this.appState) {
      case AppState.WELCOME:
        this.appState = AppState.TRAINING;
        break;
      case AppState.TRAINING:
        this.appState = AppState.TESTING;
        break;
      default:
        this.appState = AppState.TESTING;
    }
  }

}
