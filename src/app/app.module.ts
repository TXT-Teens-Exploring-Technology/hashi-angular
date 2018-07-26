import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DescriptionComponent } from './description/description.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { ResultsComponent } from './results/results.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:id', component: ResultsComponent},
  { path: 'description/:id', component: DescriptionComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterPipe,
    DescriptionComponent,
    CategoriesComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {  useHash: true } // <-- debugging purposes only
    ),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
