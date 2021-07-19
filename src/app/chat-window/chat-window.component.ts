import {Component, OnInit} from '@angular/core';
import {Message} from '../message';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messages: Message[] = [];

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.addMessage();
    }, 1000);
  }

  private addMessage(): void {
    this.messages.push(new Message('תות תרנגול', new Date(), new Date().getMilliseconds() % 2 === 0));
  }
}
