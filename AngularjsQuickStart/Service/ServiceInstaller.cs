using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Repository;
using Service.Implement;

namespace Service
{
    public class ServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Install(FromAssembly.Containing<RepositoryInstaller>());
            container.Register(Component.For<IHeroService>().ImplementedBy<HeroService>().LifeStyle.Singleton);
            container.Register(Component.For<IAuthService>().ImplementedBy<AuthService>().LifeStyle.Singleton);
            
        }
    }
}
