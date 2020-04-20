using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TiBarPost.Startup))]
namespace TiBarPost
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
