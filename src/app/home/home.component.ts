import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getBootstrapListener } from '../../../node_modules/@angular/router/src/router_module';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText;
  public images = [
    'assets/shows/flash.jpg',
    'assets/shows/rick.jpg',
    'assets/shows/super.jpg',
  ];

  public topShows = [
    {
      id: 'arrow',
      url: 'assets/topShows/arrow.jpg',
    },
    {
      id: 'dead',
      url:  'assets/topShows/dead.jpg',
    },
    {
      id: 'dexter',
      url: 'assets/topShows/dexter.jpg',
    },
    {
      id: 'parks',
      url: 'assets/topShows/parks.jpg',
    },
    {
      id: 'gotham',
      url: 'assets/topShows/gotham.jpg',
    },
    {
      id: 'spongebob',
      url:  'assets/topShows/spongebob.jpg',
    }
  ];
  constructor(private router: Router) { }


  ngOnInit() {
  }
// Add this function
// Import Router

  goToList() {
    this.router.navigate(['/result', { search: this.searchText}]);
  }

  navigate(id) {
    this.router.navigate(['search', id]);
  }

}


