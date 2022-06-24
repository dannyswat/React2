namespace React2.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddCors();

            builder.Services.AddControllers();

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseCors(configurePolicy =>
            {
                configurePolicy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            });

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}