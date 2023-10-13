import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { PercentagePipe } from './percentage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Angular Pipes
https://www.youtube.com/watch?v=DOUmCfaYA1w&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=76&pp=iAQB - Pipes in Angular
https://www.youtube.com/watch?v=cJK42g95d6w&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=77&pp=iAQB - Creating Custom Pipes in Angular
https://www.youtube.com/watch?v=0IKsWNhBKNM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=78&pp=iAQB - Creating Filter Pipe in Angular
https://www.youtube.com/watch?v=ik7iPoPZzWA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=79&pp=iAQB - Pure Pipes in Angular
https://www.youtube.com/watch?v=z4isL0m-dWk&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=80&pp=iAQB - Impure Pipes in Angular
https://www.youtube.com/watch?v=lTOQ7Fjhcvk&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=81&pp=iAQB - Data Filtering in Angular Component
https://www.youtube.com/watch?v=ChMEpGhvuJA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=82&pp=iAQB - async pipe in Angular */