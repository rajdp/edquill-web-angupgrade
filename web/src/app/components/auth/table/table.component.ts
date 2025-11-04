import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, HostListener } from '@angular/core';
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
    @Input() initialPage = 1; // Accept initial page from parent component
    @Input() initialFilters: any = {}; // Accept initial filters from parent component
    @Output() clickValue: EventEmitter<any> = new EventEmitter();
    @Output() pageChange: EventEmitter<number> = new EventEmitter(); // Emit page changes
    @Output() filterChange: EventEmitter<any> = new EventEmitter(); // Emit filter changes
    public commonTableData = CommonTable;
    currentPage = 1;
    pageSize = 10;
    public arrayList = [];
    maxPagesToShow = 5;

    constructor(public searchPipe: TableSearch) {
    }

    ngOnInit(): void {
        // Initialize or restore search values
        this.commonTableData[this.TableType].Header.forEach(items => {
            // Check if initial filter exists for this field
            if (this.initialFilters && this.initialFilters[items.ApiKey]) {
                items.SearchValue = this.initialFilters[items.ApiKey];
            } else {
                items.SearchValue = '';
            }
        });
        // Set current page from input if provided
        if (this.initialPage > 0) {
            this.currentPage = this.initialPage;
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.TableArray, 'change');
        this.arrayList = this.TableArray ?? [];
        
        // If we have initial filters, apply them
        if (this.initialFilters && Object.keys(this.initialFilters).length > 0) {
            this.filterFunction(this.commonTableData[this.TableType].Header);
            // Restore the current page after filtering
            if (this.initialPage > 0) {
                this.currentPage = this.initialPage;
            }
        }
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
        if (type.EmitValue != '') {
            // Save current filter state before emitting action
            this.emitFilterState();
            this.clickValue.emit({emitType: type, emitData: data});
        }
    }

    filterFunction(arrayValue) {
        console.log(this.TableArray, 'table');
        this.currentPage = 1;
        this.arrayList = this.searchPipe.transform(arrayValue, this.TableArray);
        console.log(this.arrayList, 'arrayValue');
        
        // Emit current filter state to parent
        this.emitFilterState();
    }

    emitFilterState() {
        const filters: any = {};
        this.commonTableData[this.TableType].Header.forEach(header => {
            if (header.SearchValue && header.SearchValue !== '') {
                filters[header.ApiKey] = header.SearchValue;
            }
        });
        this.filterChange.emit(filters);
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
        this.pageChange.emit(this.currentPage); // Emit page change
    }

    firstPage() {
        this.currentPage = 1;
        this.pageChange.emit(this.currentPage); // Emit page change
    }

    lastPage() {
        this.currentPage = this.totalPages;
        this.pageChange.emit(this.currentPage); // Emit page change
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChange.emit(this.currentPage); // Emit page change
        }
    }

    nextPage(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.pageChange.emit(this.currentPage); // Emit page change
        }
    }

    toggleDropdown(event: Event, row: any): void {
        event.stopPropagation();
        // Close all other dropdowns
        this.arrayList.forEach(item => {
            if (item !== row) {
                item.showDropdown = false;
            }
        });
        // Toggle current dropdown
        row.showDropdown = !row.showDropdown;
    }

    @HostListener('document:click', ['$event'])
    closeDropdowns(event: Event): void {
        // Close all dropdowns when clicking outside
        this.arrayList.forEach(item => {
            item.showDropdown = false;
        });
    }
}
