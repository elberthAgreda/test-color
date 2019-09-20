import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsHomeRoutingModule } from './colors-home-routing.module';
import { MaterialModule } from '../shared/modules/material.module';
import { ColorsService } from './colors.service';
import { HttpClientModule } from '@angular/common/http';
import { ColorsHomeomponent } from './colors-home.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClipboardModule } from 'ngx-clipboard';
import {MatRippleModule} from '@angular/material/core';
import { ColorItemComponent } from './color-item/color-item.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ColorsHomeomponent, ColorItemComponent],
  imports: [
    CommonModule,
    ColorsHomeRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatPaginatorModule,
    ClipboardModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  providers: [ColorsService]
})
export class ColorsHomeModule { }
