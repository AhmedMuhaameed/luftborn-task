using AutoMapper;
using Luftborn.Entities.Models;
using Luftborn.Services.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Luftborn.Services.Profiles.BrandProfile
{
    public class BarndProfile : Profile
    {
        public BarndProfile()
        {
            CreateMap<BrandDTO, Brand>().ReverseMap();
            CreateMap<AddBrandDTO, Brand>().ReverseMap();
        }
    }
}
