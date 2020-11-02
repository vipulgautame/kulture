import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { HookedComponent } from './hooked/hooked.component';
import { PodcastComponent } from './podcast/podcast.component';
import { VerskeComponent } from './verske/verske.component';
import { VoteComponent } from './vote/vote.component';
import { WazeComponent } from './waze/waze.component';

const routes: Routes = [
  { path: 'buy', component: BuyComponent },
  { path: 'hooked', component: HookedComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'verske', component: VerskeComponent },
  { path: 'vote', component: VoteComponent },
  { path: 'waze', component: WazeComponent },
  { path: '', component: AppComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
