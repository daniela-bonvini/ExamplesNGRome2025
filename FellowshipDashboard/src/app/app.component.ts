import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompanionComponent } from './companion/companion.component';
import { FellowshipMemberStatusComponent } from './fellowship-member-status/fellowship-member-status.component';
import { RingSearchComponent } from './ring-search/ring-search.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    CompanionComponent,
    RingSearchComponent,
    FellowshipMemberStatusComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
