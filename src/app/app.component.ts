import {Component, OnInit} from '@angular/core';
import { AuthStore } from './services/auth.store';
import { CoursesStoreService } from './services/courses.store.ts.service';
import { LoadingService } from './services/loading.service';
import { MessagesService } from './services/messages.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements  OnInit {

    constructor(public auth: AuthStore) {

    }

    ngOnInit() {


    }

  logout() {
    this.auth.logout();
  }

}
