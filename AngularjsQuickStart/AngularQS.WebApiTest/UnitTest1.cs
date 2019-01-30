
using AngularQS.Services.IService;
using AngularQS.WebApi.Controllers;
using AngularQS.WebApi.Resources;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Localization;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace AngularQS.WebApiTest
{
    [TestClass]
    public class UnitTest1
    {
        
        [TestMethod]
        public void TestMethod1()
        {
//            var xxx = Mock.Of<UserController>();
            
            var mockRepo = new Mock<IUserService>();
            var mockConfiguration = new Mock<IConfiguration>();
            var mockSharedResource = new Mock<IStringLocalizer<SharedResource>>();
//            var mockUserController1 = new Mock<IStringLocalizer<UserController>>();
            var mockUserController = new UserController(mockRepo.Object, mockConfiguration.Object, mockSharedResource.Object);

            var result=mockUserController.GetInfo();
//            var result1= xxx.GetInfo(); 

            Assert.IsNotNull(result.Value);
        }
    }
}
