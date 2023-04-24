import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('modal') modal: ElementRef;

  constructor() {}
  titleFromPost: string;
  idFromPost: number;
  imageLinkFromPost: string;
  descriptionFromPost: string;
  addPost = {
    postTitle: '',
    postId: 0,
    imageLink: '',
    postDescription: '',
    showPost:false
  };
  // callOpenEditPost() {
  //   console.log('came into call Open Edit');
  //   // this.editPostComponent);
  // }
  saveModalForPosts() {
    console.log('Value Entered - ', this.titleFromPost);
    this.addPost.postTitle = this.titleFromPost;
    this.addPost.postId = this.idFromPost;
    this.addPost.imageLink = this.imageLinkFromPost;
    this.addPost.postDescription = this.descriptionFromPost;
    this.addPost.showPost = true;
    this.closeModal();
  }

  ngOnInit(): void {}
  openModal() {
    console.log('Came into open modal');
    const modalEl = this.modal.nativeElement;
    modalEl.classList.add('show');
    modalEl.style.display = 'block';
    document.body.classList.add('modal-open');
  }
  closeModal() {
    const modalEl = this.modal.nativeElement;
    modalEl.classList.remove('show');
    modalEl.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
