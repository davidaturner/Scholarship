using Microsoft.EntityFrameworkCore;

namespace ConsoleApp1
{
    public class PersonContext : DbContext
    {
        public DbSet<Person> Persons { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {
            dbContextOptionsBuilder.UseSqlite("Data Source=TestDatabaseEnglish.db");
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}