import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BookDetailComponent} from "./book-detail/book-detail.component";

const routes: Routes = [
  { path:'booklist', component: BooklistComponent },
  { path:'dashboard', component: DashboardComponent},
  { path: 'bookdetail/:id', component: BookDetailComponent},
  { path:'', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {

}
