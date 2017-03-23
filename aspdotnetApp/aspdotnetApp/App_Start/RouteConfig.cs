using System.Web.Mvc;
using System.Web.Routing;

namespace aspdotnetApp
{
	public static class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

			// /help
			routes.MapRoute(
				name: "Help",
				url: "Help",
				defaults: new { controller = "Home", action = "Help", id = UrlParameter.Optional }
			);

			// /thing
			routes.MapRoute(
				name: "Things",
				url: "Thing",
				defaults: new { Controller = "Thing", action = "Index", id = UrlParameter.Optional }
			);

			// /thing/num
			routes.MapRoute(
				name: "Thing",
				url: "Thing/{id}",
				defaults: new { Controller = "Thing", action = "Show" }
			);

			// /
			// /home
			routes.MapRoute(
				name: "Default",
				url: "{controller}/{action}/{id}",
				defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
			);
		}
	}
}
