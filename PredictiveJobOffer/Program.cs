var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days.
    // You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// HTTPS not needed for this demo
// app.UseHttpsRedirection(); 

app.UseStaticFiles();   // Static files destination which are stored within the project's web root directory.
                        // The default directory is {content root}/wwwroot
app.UseRouting();       // Routing which is responsible for matching incoming HTTP requests and dispatching
                        // those requests to the app's executable endpoints. 

app.MapControllerRoute( // Most apps with controllers and views use a route template similar to the default route
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}"); 

app.MapFallbackToFile("index.html"); // It handles cases where URL path of the request does not contain
                                     // a filename, and no other endpoint has matched

app.Run();  // Run the application if everything is setup correctly 