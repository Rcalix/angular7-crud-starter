import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  visible: any;

  constructor(private data: DataService, private authService: AuthService,
    ) { }

  ngOnInit() {
    this.data.changeTitle("Posts")
  }

  ngValidateRole(...role) {
    return this.authService.getRole(role);

  }

}
