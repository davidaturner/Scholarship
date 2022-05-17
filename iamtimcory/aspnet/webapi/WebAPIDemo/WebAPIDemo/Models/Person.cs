using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPIDemo.Models
{
    /// <summary>
    /// Represents the data associated with the Person model.
    /// </summary>
    public class Person
    {
        /// <summary>
        /// The Id of the Person.
        /// </summary>
        public int Id { get; set; } = 0;

        /// <summary>
        /// The First Name of the Person.
        /// </summary>
        public string FirstName { get; set; } = "";

        /// <summary>
        /// The Last Name of the Person.
        /// </summary>
        public string LastName { get; set; } = "";
    }
}