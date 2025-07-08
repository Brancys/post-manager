import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/models/post.model';
import { ToastService } from '../../../core/services/toast.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  providers: [PostService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  isEdit = false;
  postId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.postId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEdit = !!this.postId;

    this.postForm = this.fb.group({
      userId: [null, [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required]],
    });

    if (this.isEdit) {
      this.postService.getPost(this.postId).subscribe({
        next: (data: Post) => {
          this.postForm.patchValue(data);
        },
        error: () =>
          this.toastService.show('Error al crear publicación', 'error'),
      });
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    const post: Post = { ...this.postForm.value };

    const request$ = this.isEdit
      ? this.postService.updatePost({ ...post, id: this.postId })
      : this.postService.createPost(post);

    request$.subscribe({
      next: () => {
        this.toastService.show('Publicación guardada con éxito');
        this.router.navigate(['/posts']);
      },
      error: () => {
        this.toastService.show(
          'Ocurrió un error al guardar la publicación',
          'error'
        );
      },
    });
  }
}
