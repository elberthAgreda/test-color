import { Component, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'
import { Colors } from '../colors.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'test-color-color-item',
  templateUrl: './color-item.component.html',
  styleUrls: ['./color-item.component.scss']
})
export class ColorItemComponent {

  @Input() colors: Colors[];

  constructor( private clipboardService: ClipboardService,
               private _snackBar: MatSnackBar ) { }

  clipBoardColor(color: string): void {
    this.clipboardService.copyFromContent(color);
    this._snackBar.open(`Color: ${color} copiado`, 'Undo', { duration: 2000 });
  }

}
