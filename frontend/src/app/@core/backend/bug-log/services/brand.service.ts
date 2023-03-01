import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandDTO, BrandData } from 'src/app/@core/interfaces/brand/brand';
import { ResponseDTO } from 'src/app/@core/interfaces/common/response';
import { BrandAPI } from '../api/brand.api';

@Injectable()
export class BrandService extends BrandData {
  constructor(private api: BrandAPI) {
    super();
  }

  getBrands(): Observable<ResponseDTO<BrandDTO[]>>{
    return this.api.getBrands();
    
  }
  getBrand(id:number): Observable<ResponseDTO<BrandDTO>>{
    return this.api.getBrand(id);
    
  }
  addBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>{
    return this.api.addBrand(brand);
    
  }
  updateBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>{
    return this.api.updateBrand(brand);
    
  }
  deleteBrand(id:number): Observable<ResponseDTO<BrandDTO>>{
    return this.api.deleteBrand(id);
    
  }
}
