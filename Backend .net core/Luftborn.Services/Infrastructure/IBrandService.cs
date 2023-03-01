using AutoMapper;
using Luftborn.Entities.Models;
using Luftborn.Services.DTO;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Luftborn.Services.Infrastructure
{
    public interface IBrandService
    {
        Task<ResponseDTO<List<BrandDTO>>> GetBrands();
        Task<ResponseDTO<BrandDTO>> GetBrand(int BrandId);
        Task<ResponseDTO<BrandDTO>> AddBrand(AddBrandDTO brand);
        Task<ResponseDTO<BrandDTO>> UpdateBrand(BrandDTO brand);
        Task<EmptyResponse> DeleteBrand(int brandId);
    }
}
