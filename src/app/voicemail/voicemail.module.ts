import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { VoicemailListComponent } from './voicemail-list/voicemail-list.component';
import { VoicemailCardComponent } from './voicemail-card/voicemail-card.component';
import { VoicemailInfoComponent } from './voicemail-info/voicemail-info.component';
import { VoicemailRoutingModule } from './voicemail-routing.module';



@NgModule({
  declarations: [
    VoicemailListComponent,
    VoicemailCardComponent,
    VoicemailInfoComponent
  ],
  imports: [
    CommonModule,
    VoicemailRoutingModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class VoicemailModule { }