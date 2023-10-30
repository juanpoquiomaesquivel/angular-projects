import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* Reactive Form
https://www.youtube.com/watch?v=qOZOeu6YcJc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=89&pp=iAQB - Creating and Using Reactive Forms
https://www.youtube.com/watch?v=jdsSIKgJ6ZM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=90&pp=iAQB - Form Validation of Reactive Forms
https://www.youtube.com/watch?v=nc8FBBShlYo&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=91&pp=iAQB - Grouping of Form Controls
https://www.youtube.com/watch?v=_By0TTKuxWI&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=92&pp=iAQB - What is Form Array
https://www.youtube.com/watch?v=VmdSmeDpW0k&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=93&pp=iAQB - Custom Validator and Error Code
https://www.youtube.com/watch?v=xbk2-z8gY4M&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=94&pp=iAQB - Custom async validator
https://www.youtube.com/watch?v=vhifD4o1nUE&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=95&pp=iAQB - Value & Statuc Change events
https://www.youtube.com/watch?v=Hw8OV4kcKgM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=96&pp=iAQB - setValue() & patchValue() methods */