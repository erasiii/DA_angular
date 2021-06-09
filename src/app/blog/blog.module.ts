import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const blogRoutes: Routes = [
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/blog-detail', component: BlogDetailComponent },
];


@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ]
})
export class BlogModule { }
