import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component ({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})
export class FilterTextboxComponent implements OnInit {

    private _filter: string = ''; // 2

    @Input() get filter() {
        return this._filter;
    }

    // 3
    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event
    }
    
    // 4
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    constructor(
    ) {}
    
    ngOnInit(): void {
        
    }
} 