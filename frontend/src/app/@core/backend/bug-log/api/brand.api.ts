import { Injectable } from "@angular/core";
import { map, Observable, shareReplay } from "rxjs";
import { BrandDTO } from "src/app/@core/interfaces/brand/brand";
import { ResponseDTO } from "src/app/@core/interfaces/common/response";
import { HttpService } from "../../common/api/http.service";

@Injectable()
export class BrandAPI {
  private readonly apiController: string = 'brand';
  constructor(private api: HttpService) { }

  getBrands(): Observable<ResponseDTO<BrandDTO[]>>{
    return this.api.get(`${this.apiController}`);
    
  }
  getBrand(id:number): Observable<ResponseDTO<BrandDTO>>{
    return this.api.get(`${this.apiController}/${id}`);
    
  }
  addBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>{
    return this.api.post(`${this.apiController}`,brand);
    
  }
  updateBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>{
    return this.api.put(`${this.apiController}`,brand);
    
  }
  deleteBrand(id:number): Observable<ResponseDTO<BrandDTO>>{
    return this.api.delete(`${this.apiController}/${id}`);
    
  }
}