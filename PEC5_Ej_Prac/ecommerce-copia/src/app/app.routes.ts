import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';




export const appRoutes: Routes = [
    { path: '', component: ArticleListComponent },
    { path: 'articles', component: ArticleListComponent },

    { path: '**', redirectTo: '' },
  ];