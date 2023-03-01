using Luftborn.Entities.Models;
using Luftborn.Services.DTO;
using Luftborn.Services.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Luftborn.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService brandService;

        public BrandController(IBrandService brandService)
        {
            this.brandService = brandService;
        }
        [HttpGet]
        public async Task<ActionResult<ResponseDTO<List<BrandDTO>>>> GetBrands()
        {
            var brands = await this.brandService.GetBrands();
            return Ok(brands);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponseDTO<BrandDTO>>> GetBrand(int id)
        {
            var brand = await this.brandService.GetBrand(id);
            return Ok(brand);
        }

        [HttpPost]
        public async Task<ActionResult<ResponseDTO<BrandDTO>>> AddBrand(AddBrandDTO passedBrand)
        {
            var response = await this.brandService.AddBrand(passedBrand);
            return Ok(response);
        }

        [HttpPut]
        public async Task<ActionResult<ResponseDTO<BrandDTO>>> UpdateBrand(BrandDTO passedBrand)
        {
            var brand = await this.brandService.UpdateBrand(passedBrand);
            return Ok(brand);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<EmptyResponse>> DeleteBrand(int id)
        {
            var brand = await this.brandService.DeleteBrand(id);
            return Ok(brand);
        }
    }
}
