import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string;

  constructor(private data: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.autoAuthUser();
    this.data.currentTitle.subscribe(title => this.title = title)
  }
}
