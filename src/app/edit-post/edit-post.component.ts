import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [DatePipe],
})
export class EditPostComponent implements OnInit {
  constructor(public datePipe: DatePipe) {}
  @Input() postDetails:any;

  currentDate = new Date();
  date = this.datePipe.transform(this.currentDate, 'yyyy/MM/dd HH:mm');
  ngOnInit(): void {}
}
