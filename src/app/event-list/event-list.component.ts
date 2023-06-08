import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  constructor(private router: Router) {}

  goCreate(): void {
    this.router.navigate(['/create-event']);
  }
}
