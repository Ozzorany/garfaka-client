import {Component, HostListener, OnInit} from '@angular/core';
import {Message} from '../message';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messages: Message[] = [];
  text = '';

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  private scrollDown(): void {
    const scroll = document.getElementById('chat-window');
    setTimeout(() => {
      if (scroll) {
        scroll.scrollTop = scroll.scrollHeight;
      }
    }, 10);
  }

  sendMessage(): void {
    if (this.text.trim().length) {
      this.messages.push(new Message(this.text, new Date(), false));
      this.scrollDown();
      this.sendMessageToModel();
      this.text = '';

    }
  }

  sendMessageToModel(): void {
    this.messageService.sendMessage(this.text).subscribe(response => {
      this.messages.push(new Message(response, new Date(), true));
      this.scrollDown();
    });
  }


  @HostListener('document:keydown.enter', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    this.sendMessage();
  }
}
