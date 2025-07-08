import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/models/post.model';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  providers: [PostService],
})
export class PostDetailComponent implements OnInit {
  post?: Post;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private toastService: ToastService

  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe({
      next: (data: Post) => {
        this.post = data;
        this.isLoading = false;
      },
      error: (err: unknown) => {
        console.error('Error al cargar el post', err);
        this.isLoading = false;
      },
    });
  }
}
