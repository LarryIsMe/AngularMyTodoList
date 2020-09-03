import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.css']
})
export class GuestBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = '';
  content = '';
 /**
 * 所有留言都放在這裡
 *
 * @type {Message[]}
 */
  messages: Message[] = [];

 /**
 * 新增留言
 *
 */
  addMessage(): void {

    // 防呆，避免名稱或內容是空值時也可以留言
    if (!this.name.trim() || !this.content.trim()) {
      return;
    }

    // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name, this.content);

    // 將留言的資料物件放進容器裡
    this.messages.push(message);

    // 清空內容
    this.content = '';
  }
}
