import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { VoicemailListComponent } from './voicemail-list/voicemail-list.component';
import { VoicemailCardComponent } from './voicemail-card/voicemail-card.component';
import { VoicemailRoutingModule } from './voicemail-routing.module';
import { SimpleDropdownComponent } from '../simple-dropdown/simple-dropdown.component';
import { DisplayRatingComponent } from '../display-rating/display-rating.component';

@NgModule({
  declarations: [
    VoicemailListComponent,
    VoicemailCardComponent,
    SimpleDropdownComponent,
    DisplayRatingComponent
  ],
  imports: [
    CommonModule,
    VoicemailRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class VoicemailModule { }
