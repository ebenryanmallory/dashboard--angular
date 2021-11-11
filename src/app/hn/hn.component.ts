import { Component, OnInit } from '@angular/core';
import { HNService } from '../services/hn.service';
import { HN } from '../interfaces/hn'

@Component({
  selector: 'app-hn',
  templateUrl: './hn.component.html',
  styleUrls: ['./hn.component.css']
})

export class HNComponent implements OnInit {

  stories: HN[] = [];

  constructor(private hnService: HNService) { }
 
  ngOnInit() {
    this.hnService.getList()
    .subscribe(hn_results => {
      Promise.all(
        hn_results.map( async (articleID:number) => {
          this.hnService.getArticle(articleID)
          .subscribe(article_results => {
            this.stories.push(article_results) || [];
          })
        })
      )
    })
  }

}
