import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  providers: [DatePipe],
})
export class EditPostComponent implements OnInit {
  constructor(public datePipe: DatePipe) {}
  @Input() postDetails: any;
  @Output() editPost = new EventEmitter<void>();
  @Output() deletePost = new EventEmitter<void>();

  editPostCall(callType: string) {
    if (callType === 'edit') {
      console.log("came into edit");
      this.editPost.emit();
    } else if (callType === 'delete') {
      console.log("came into delete");
      this.deletePost.emit();
    }
  }

  currentDate = new Date();
  date = this.datePipe.transform(this.currentDate, 'yyyy/MM/dd HH:mm');
  ngOnInit(): void {}
}
