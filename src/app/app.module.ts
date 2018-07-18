import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'result', component: ListComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
