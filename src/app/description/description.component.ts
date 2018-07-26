import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  public anime = [
    {
      name: 'Bleach',
      url: 'assets/anime/bleach.jpg',
      des: 'The series ran for a total of 366 episodes. Bleach was produced by Studio Pierrot and directed by Noriyuki Abe.',
      rating: [1, 2, 3],
      ratingL: [1, 2],
      sub: 'http://www.crunchyroll.com/bleach',
      dub: 'http://www.crunchyroll.com/bleach'
    },
    {
      name: 'Boondocks',
      url: 'assets/anime/boondocks.jpg',
      des: 'Now whether or not its an anime as in made in Japan, no; It\s a cartoon made by Americans and South Koreans.',
      rating: [1, 2, 3, 4],
      ratingL: [1],
      sub: 'http://www.adultswim.com/videos/the-boondocks/',
      dub: 'http://www.adultswim.com/videos/the-boondocks/'
    },
    {
      name: 'Naruto',
      url: 'assets/anime/naruto.jpg',
      des: 'It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becomming the Hokage.',
      rating: [1, 2, 3, 4, 5],
      ratingL: [],
      sub: 'http://www.crunchyroll.com/naruto-shippuden',
      dub: 'http://www.crunchyroll.com/naruto-shippuden'
    },
    {
      name: 'Dragon Ball Super',
      url: 'assets/anime/dragonball.jpg',
      des: 'Along his journey, Goku makes several friends and battles a wide variety of villians, many of whom also seek the Dragon Balls.',
      rating: [1, 2, 3, 4],
      ratingL: [1],
      sub: 'http://www.crunchyroll.com/dragon-ball-super',
      dub: 'http://www.crunchyroll.com/dragon-ball-super'
    }
  ];
  public selectedShow;
  constructor(public route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
       this.selectedShow = this.anime.filter((data) => {
         if (params.id === data.name) {
           return data;
         }
       });

       this.selectedShow = this.selectedShow[0];
    });
   }


}
