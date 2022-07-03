import { HomeWork } from './../../../../Models/HomeWork';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/Services/httpService/http.service';
import { Observable, Observer } from 'rxjs';

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
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
  this.HomeWork.id =Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.GetHomeWorks(this.HomeWork.id).then(data=>{
      this.HomeWork=data as HomeWork
    })
  }

  getFileName(path:string){
    console.warn(path)
    return  path.replace(/^.*[\\\/]/, '');
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
