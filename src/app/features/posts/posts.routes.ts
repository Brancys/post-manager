import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostFormComponent } from './post-form/post-form.component';

export const POSTS_ROUTES: Routes = [
  { path: '', component: PostListComponent },
  { path: 'view/:id', component: PostDetailComponent },
  { path: 'create', component: PostFormComponent },
  { path: 'edit/:id', component: PostFormComponent },
];
