import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// selector— 组件的选择器（CSS 元素选择器）
// templateUrl— 组件模板文件的位置。
// styleUrls— 组件私有 CSS 样式表文件的位置。
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})

// ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
// 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // 获取英雄们
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
