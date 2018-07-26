import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public anime = [
    {
      name: 'Bleach',
      url: 'assets/anime/bleach.jpg',
      des: 'The series ran for a total of 366 episodes. Bleach was produced by Studio Pierrot and directed by Noriyuki Abe.'
    },
    {
      name: 'Boondocks',
      url: 'assets/anime/boondocks.jpg',
      des: 'Now whether or not its an anime as in made in Japan, no; It\s a cartoon made by Americans and South Koreans.'
    },
    {
      name: 'Naruto',
      url: 'assets/anime/naruto.jpg',
      des: 'It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becomming the Hokage.'
    },
    {
      name: 'Dragon Ball Super',
      url: 'assets/anime/dragonball.jpg',
      des: 'Along his journey, Goku makes several friends and battles a wide variety of villians, many of whom also seek the Dragon Balls.'
    }
  ];
  public selectedShow;
  constructor(public route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe((params) => {
       this.selectedShow = params;
       console.log(this.selectedShow);
    });
   }

  ngOnInit() {
  }

  navigate(id) {
    this.router.navigate(['description', id]);
  }

}
