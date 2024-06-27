import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headerComponent } from './header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'essentials-components';

  constructor() {}

  ngOnInit(): void {}
}
