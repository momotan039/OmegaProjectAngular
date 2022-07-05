import { HomeWork } from './../../../../Models/HomeWork';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { Observable, Observer } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-work-details',
  templateUrl: './home-work-details.component.html',
  styleUrls: ['./home-work-details.component.css'],
})
export class HomeWorkDetailsComponent implements OnInit {
  HomeWork=new HomeWork()
  base64Image: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService,
    private sanitizer:DomSanitizer
  ) {}

  ngOnInit(): void {
  this.HomeWork.id =Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.GetHomeWorks(this.HomeWork.id).then(data=>{
      this.HomeWork=data as HomeWork
    })
  }

  getFileName(path:string){
    return  path.replace(/^.*[\\\/]/, '');
  }
  convertPathsToArray(path:string){
    const last=path.charAt(path.length - 1);
    if(last=='\n')
    path=path.slice(0,-1)
  return path.split('\n')
  }
  sanitize(url:string){
    return  this.sanitizer.bypassSecurityTrustUrl(url);
}

  downloadImage() {
    let imageUrl =this.HomeWork.filesPath

    this.getBase64ImageFromURL(imageUrl).subscribe((base64data: string) => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // save image to disk
      var link = document.createElement('a');

      document.body.appendChild(link); // for Firefox

      link.setAttribute('href', this.base64Image);
      link.setAttribute('download', 'mrHankey.jpg');
      link.click();
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }
}
