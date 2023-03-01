using AutoMapper;
using AutoMapper.QueryableExtensions;
using Azure;
using Luftborn.Entities;
using Luftborn.Entities.Models;
using Luftborn.Services.DTO;
using Luftborn.Services.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Luftborn.Services.Services
{
    public class BrandService : IBrandService
    {
        private readonly LuftbornDBContext context;
        private readonly IMapper mapper;

        public BrandService(LuftbornDBContext _context, IMapper mapper)
        {
            context = _context;
            this.mapper = mapper;
        }

        public async Task<ResponseDTO<List<BrandDTO>>> GetBrands()
        {
            var result = await context.Brands.ProjectTo<BrandDTO>(mapper.ConfigurationProvider).ToListAsync();
            return ResponseDTO<List<BrandDTO>>.Success(result, "Brands Fetched Successfully");
        }

        public async Task<ResponseDTO<BrandDTO>> GetBrand(int BrandId)
        {
            var brand = await this.context.Brands.FindAsync(BrandId);
            var brandDTO = mapper.Map<BrandDTO>(brand);
            return ResponseDTO<BrandDTO>.Success(brandDTO, "Brand Fetched Successfully");
        }

        public async Task<ResponseDTO<BrandDTO>> AddBrand(AddBrandDTO brand)
        {
            var addedBrand = mapper.Map<Brand>(brand);
            this.context.Brands.Add(addedBrand);
            try
            {
                int result = await this.context.SaveChangesAsync();
                var brandDTO = mapper.Map<BrandDTO>(addedBrand);
                return ResponseDTO<BrandDTO>.Success(brandDTO, "Brand Added Successfully");
            }
            catch (Exception e)
            {
                return ResponseDTO<BrandDTO>.Fail("Cannot Add Brand");
            }
        }
        public async Task<ResponseDTO<BrandDTO>> UpdateBrand(BrandDTO brand)
        {
            var brandFromDB = mapper.Map<Brand>(brand);
            try
            {
                this.context.Brands.Update(brandFromDB);
                int res = await context.SaveChangesAsync();

                return ResponseDTO<BrandDTO>.Success(brand, "Brand updated successfully");
            }
            catch (Exception e)
            {
                return ResponseDTO<BrandDTO>.Fail("Cannot update brand");

            }
        }



        public async Task<EmptyResponse> DeleteBrand(int brandId)
        {
            try
            {
                var brand = await context.Brands.FindAsync(brandId);
                if (brand == null) return EmptyResponse.Fail("Brand not found");
                this.context.Remove(brand);
                int res = await context.SaveChangesAsync();
                return EmptyResponse.Success("Brand Deleted successfully");
            }
            catch (Exception e)
            {
                return EmptyResponse.Fail("Cannot Delete Brand");

            }
        }

    }
}
