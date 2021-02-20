using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.DTO;
using WebAPI.Models;

namespace WebAPI.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile ()
        {
            CreateMap<Beverage, BeverageDTO>()
                .ForMember(dest => dest.Type, o => o.MapFrom(src => src.TypeNavigation.Type));
            CreateMap<BeverageDTO, Beverage>()
                .ForPath(dest => dest.TypeNavigation.Type, o => o.MapFrom(src => src.Type));
        }
    }
}
