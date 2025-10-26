using AutoMapper;               
using slf_backend.Models;       
using slf_backend.Controllers;   

namespace slf_backend.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<PaypalPaymentDto, SubscriptionPaypal>()
                .ForMember(dest => dest.IdUserAthlete, opt => opt.MapFrom(src => src.AthleteId))
                .ForMember(dest => dest.Price, opt => opt.MapFrom(src => src.Amount))
                .ForAllOtherMembers(opt => opt.Ignore());


            CreateMap<StripePaymentDto, SubscriptionStripe>()
                .ForMember(dest => dest.IdUserCoach, opt => opt.MapFrom(src => src.CoachId))
                .ForMember(dest => dest.Price, opt => opt.MapFrom(src => src.Amount))
                .ForAllOtherMembers(opt => opt.Ignore());
        }
    }
}