import { Component } from '@angular/core';
import { CompassService } from './services/compass.service';
import { DataService } from './services/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kieskompas';

  constructor(
    protected compassService: CompassService,
    protected dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  copied: boolean = false;
  shareButtonClicked() {
    let dataString = this.dataService.getBase64Data();
    // let url = window.location.href.split('?')[0] + '?d=' + dataString;

    let queryParams: Params = { d: dataString };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      },
    )
      .then(() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href)
            .then(() => {
              console.info('Successful copy');

              this.copied = true;
              setTimeout(() => {
                this.copied = false;
              }, 3000);
            }).catch(error => {
              console.warn('Error copying', error);
            });
        }
        else {
          console.warn('Clipboard not supported');
        }

        if (navigator.share) {
          navigator.share({
            title: document.title,
            text: this.compassService.compass.name,
            url: window.location.href
          })
            .then(() => {
              console.info('Successful share')
            })
            .catch((error) => {
              console.warn('Error sharing', error)
            })
        }
        else {
          console.warn('Share not supported');
        }

      })
      .catch(err => {
        console.warn('error navigating', err)
      });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['d']) {
        this.dataService.loadFromBase64Data(params['d']);
      }
    });
  }
}
