import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterMatchMode, MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { BrandDTO, BrandData } from 'src/app/@core/interfaces/brand/brand';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  providers: [MessageService],
})
export class BrandComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  brandList!: BrandDTO[];
  brandToView!: BrandDTO;
  brandForm: FormGroup = this.fb.group({});
  showBrandDialog: boolean = false;
  brandLoading: boolean = false;
  addBrandLoading: boolean = false;
  updateBrandLoading: boolean = false;
  addFlag: boolean = true;
  constructor(
    private brandService: BrandData,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this._initForms();
    this.loadBrands();
  }
  private _initForms() {
    this.brandForm = this.fb.group({
      id: this.fb.control(null),
      name: this.fb.control('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      category: this.fb.control('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      isActive: this.fb.control(null, [Validators.required]),
    });
  }

  loadBrands() {
    this.brandLoading = true;
    this.brandService
      .getBrands()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          this.brandLoading = false;
          if(result.isSuccess){
            this.brandList = result.data;
          }
        },
        error: (err) => {
          this.brandLoading = false;
        },
      });
  }

  updateBrand() {
    this.updateBrandLoading = true;
    this.brandService
      .updateBrand(this.brandForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          this.updateBrandLoading = false;
          if (result.isSuccess) {
            this.showBrandDialog = false;
            this.messageService.add({
              life: 10000,
              severity: 'success',
              summary: 'success',
              detail: `${result.message}`,
            });
            let foundIndex = this.brandList.findIndex(
              (i) => i.id == this.brandForm.value.id
            );
            this.brandList[foundIndex] = { ...this.brandForm.value };
          }
        },
        error: (err) => {
          this.updateBrandLoading = false;
        },
      });
  }

  deleteBrand(brandId: number) {
    this.brandService
      .deleteBrand(brandId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          if (result.isSuccess) {
            this.messageService.add({
              life: 10000,
              severity: 'success',
              summary: 'success',
              detail: `${result.message}`,
            });
            this.brandList = this.brandList.filter((i) => i.id != brandId);
          }
        },
      });
  }
  addBrand() {
    this.addBrandLoading = true;
    this.brandService
      .addBrand(this.brandForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          this.addBrandLoading = false;
          if (result.isSuccess) {
            this.showBrandDialog = false;
            this.messageService.add({
              life: 10000,
              severity: 'success',
              summary: 'success',
              detail: `${result.message}`,
            });
            this.brandList.push(result.data);
          }
        },
        error: (err) => {
          this.addBrandLoading = false;
        },
      });
  }

  viewBrand(brandId: number) {
    this.brandService
      .getBrand(brandId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (result) => {
          if (result.isSuccess) {
            this.brandToView = result.data;
            this.brandForm.patchValue({ ...result.data });
            this.brandForm.disable();
            this.showBrandDialog = true;
          }
        },
      });
  }
  viewBrandToUpdate(brand: BrandDTO) {
    this.addFlag = false;
    this.brandForm.enable();
    this.brandForm.patchValue(brand);
    this.showBrandDialog = true;
  }
  viewAddBrand() {
    this.addFlag = true;
    this.brandForm.patchValue({
      name: '',
      category: '',
      isActive: true,
    });
    this.brandForm.enable();
    this.showBrandDialog = true;
  }
}
