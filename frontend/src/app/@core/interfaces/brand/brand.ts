import { Observable } from "rxjs";
import { ResponseDTO } from "../common/response";

export interface BrandDTO {
    id: number;
    name?: string;
    category?: string;
    isActive: boolean;
}

export abstract class BrandData {
    abstract getBrands(): Observable<ResponseDTO<BrandDTO[]>>;
    abstract getBrand(id:number): Observable<ResponseDTO<BrandDTO>>;
    abstract addBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>;
    abstract updateBrand(brand:BrandDTO): Observable<ResponseDTO<BrandDTO>>;
    abstract deleteBrand(id:number): Observable<ResponseDTO<BrandDTO>>;
}