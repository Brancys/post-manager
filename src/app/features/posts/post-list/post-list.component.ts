import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/models/post.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [PostService],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data.slice(0, 10);
        this.isLoading = false;
      },
      error: (err: unknown) => {
        console.error('Error al cargar publicaciones', err);
        this.isLoading = false;
      },
    });
  }

  deletePost(id: number | undefined): void {
    if (id === undefined) return;

    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar esta publicación?'
    );
    if (!confirmDelete) return;

    this.postService.deletePost(id).subscribe({
      next: () => {
        alert('Publicación eliminada (simulada).');
        this.posts = this.posts.filter((post) => post.id !== id);
      },
      error: (err: unknown) => {
        console.error('Error al eliminar la publicación', err);
        alert('Ocurrió un error al intentar eliminar la publicación.');
      },
    });
  }
}
