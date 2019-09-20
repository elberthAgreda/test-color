import { Component, OnInit } from '@angular/core';
import { ColorsService } from './colors.service';
import { Colors } from './colors.model';

@Component({
  selector: 'test-color-home',
  templateUrl: './colors-home.component.html',
  styleUrls: ['./colors-home.component.scss']
})
export class ColorsHomeomponent implements OnInit {

    colors: Colors[] = [];
    length = 0;
    pageSize = 0;

    constructor( private colorService: ColorsService ) { }

    ngOnInit() {
        this.getColors(1);
    }

    // Get array colors
    getColors( page: number ): void {
        this.colorService.getColores(page).subscribe( 
            ( { data, total, per_page } ) => {
                this.colors = data;
                this.length = total;
                this.pageSize = per_page;
            }
        );
    }

    paginatorColors( page: number ): void{
        this.getColors(page + 1);
    }

}
