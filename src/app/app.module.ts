import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonsModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatBoxComponent,
    ChatWindowComponent,
    ChatBubbleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
