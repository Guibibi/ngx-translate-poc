import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-translate';
  private toastMessage = '';
  constructor(
    private translate: TranslateService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getTranslation();
  }

  private getTranslation() {
    this.translate.get('toast').subscribe((res) => (this.toastMessage = res));
  }

  public change(language) {
    this.translate.use(language);
    this.getTranslation();
    this.toastr.success(this.toastMessage);
  }
}
