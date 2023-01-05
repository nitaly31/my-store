import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() img: string = '';
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);

  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default.png';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //corre antes del render
    // no async -- corre una vez
    console.log('constructor ', 'imgValue =>', this.img);
  }
  // corre antes y durantes del render - se ejecuta muchas veces
  //obj. actualizar cambios en los inputs
  ngOnChanges() {
    console.log('ngOnChange ', 'imgValue => ', this.img);
  }
  // corre antes del render -- corre una sola vez
  //si es async - podemos hacer fetch, api, cualquier promesa
  ngOnInit(): void {
    console.log('ngOnInit ', 'imgValue => ', this.img);

    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }
    //corre despues del render
    //handler hijo
  ngAfterViewInit()  {
    console.log('ngAfterViewInit' );
  }
  // elimina el componente
  ngOnDestroy() {
    console.log('ngOnDestroy' );
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);

  }
}
