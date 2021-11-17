using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    public class PersonsContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder builder)

        {
            builder.UseSqlite("Data Source=ContactsEntityFramework.db");
        }
    }

    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
