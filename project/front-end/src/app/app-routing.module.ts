import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { MyBookComponent } from './my-book/my-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { CategoryComponent } from './category/category.component';
import { CategoryBooksComponent } from './category-books/category-books.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'category/books/:id', component: CategoryBooksComponent },
  { path: 'book', component:BookComponent},
  { path: 'book/:id', component:BookDetailComponent},
  { path: 'my-book', component:MyBookComponent},
  { path: 'add-book', component:AddBookComponent},

  { path: '', redirectTo: 'login', pathMatch: 'full' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
