using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;
using Castle.Windsor.Installer;
using Repository;

namespace Service
{
    public class ServiceInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            container.Install(FromAssembly.Containing<RepositoryInstaller>());
            container.Register(Component.For<IHeroService>().ImplementedBy<IHeroService>().LifeStyle.Singleton);
            
        }
    }
}
