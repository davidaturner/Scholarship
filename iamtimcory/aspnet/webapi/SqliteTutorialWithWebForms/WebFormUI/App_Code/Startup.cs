using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebFormUI.Startup))]
namespace WebFormUI
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
