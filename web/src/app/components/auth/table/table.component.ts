import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import {CommonTable} from '../../../shared/tables/list';
import {TableSearch} from '../../../shared/pipes/table-search/table-search';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    providers: [TableSearch]
})

export class TableComponent implements OnInit, OnChanges {

    @Input() TableType = '';
    @Input() TableArray = [];
    @Output() clickValue: EventEmitter<any> = new EventEmitter();
    public commonTableData = CommonTable;
    currentPage = 1;
    pageSize = 10;
    public arrayList = [];
    maxPagesToShow = 5;

    constructor(public searchPipe: TableSearch) {
    }

    ngOnInit(): void {
        this.commonTableData[this.TableType].Header.forEach(items => items.SearchValue = '');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.TableArray, 'change');
        this.arrayList = this.TableArray ?? [];
    }

    showMobileNumber(value) {
        let returnValue = '-';
        value.every((items) => {
            if (items != '') {
                returnValue = items;
                return false;
            }
            return true;
        });
        return returnValue;
    }

    showDescription(value) {
        return value.length > 20 ? value.substring(0, 20 - 1).concat('…') : value != '' ? value : '-';
    }

    emitValue(type, data) {
        type.EmitValue != '' ? this.clickValue.emit({emitType: type, emitData: data}) : '';
    }

    filterFunction(arrayValue) {
        console.log(this.TableArray, 'table');
        this.currentPage = 1;
        this.arrayList = this.searchPipe.transform(arrayValue, this.TableArray);
        console.log(this.arrayList, 'arrayValue');
    }

    get totalPages(): number {
        return Math.ceil(this.arrayList.length / this.pageSize);
    }

    get paginatedItems(): string[] {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, this.arrayList.length);
        return this.arrayList.slice(startIndex, endIndex);
    }

    get pages(): number[] {
        const totalPages = this.totalPages;
        const currentPage = this.currentPage;
        const maxPagesToShow = this.maxPagesToShow;

        if (totalPages <= maxPagesToShow) {
            return Array.from({length: totalPages}, (_, i) => i + 1);
        } else {
            let startPage: number;
            let endPage: number;
            if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
                startPage = totalPages - maxPagesToShow + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - Math.floor(maxPagesToShow / 2);
                endPage = currentPage + Math.floor(maxPagesToShow / 2);
            }
            return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
        }
    }

    setCurrentPage(page: number): void {
        this.currentPage = page;
    }

    firstPage() {
        this.currentPage = 1;
    }

    lastPage() {
        this.currentPage = this.totalPages;
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
}
