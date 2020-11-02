import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { PodcastComponent } from './podcast/podcast.component';
import { BuyComponent } from './buy/buy.component';
import { WazeComponent } from './waze/waze.component';
import { VerskeComponent } from './verske/verske.component';
import { HookedComponent } from './hooked/hooked.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    PodcastComponent,
    BuyComponent,
    WazeComponent,
    VerskeComponent,
    HookedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
