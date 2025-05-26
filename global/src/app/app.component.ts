import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Companion } from './companion/models/companion.model';
import { Store } from '@ngrx/store';
import { selectCompanions } from './companion/store/companion.selectors';
import { assignQuest } from './companion/store/companion.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanionComponent } from './companion/companion.component';
import { RingSearchComponent } from './ring-search/ring-search.component';
import { FellowshipMemberStatusComponent } from './fellowship-member-status/fellowship-member-status.component';

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
