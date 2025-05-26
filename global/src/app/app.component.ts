import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Companion } from './models/companion.model';
import { Store } from '@ngrx/store';
import { selectCompanions } from './store/companion.selectors';
import { assignQuest } from './store/companion.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanionComponent } from './companion/companion.component';
import { RingSearchComponent } from './ring-search/ring-search.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CompanionComponent, RingSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // corretto da styleUrl a styleUrls
})
export class AppComponent {}
