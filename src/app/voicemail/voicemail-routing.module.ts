import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoicemailCardComponent } from './voicemail-card/voicemail-card.component';
import { VoicemailInfoComponent } from './voicemail-info/voicemail-info.component';
import { VoicemailListComponent } from './voicemail-list/voicemail-list.component';

const routes: Routes = [
  {
    path: "",
    component: VoicemailListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoicemailRoutingModule { }
