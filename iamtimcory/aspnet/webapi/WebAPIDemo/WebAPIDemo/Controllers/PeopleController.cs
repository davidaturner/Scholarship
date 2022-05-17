using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPIDemo.Models;

namespace WebAPIDemo.Controllers
{
    /// <summary>
    ///     Dbl-click Properties - Build - Replace Xml with App_Data/Documentation.xml, Save.
    ///     This sets up the Areas HelpPage.
    /// </summary>

    public class PeopleController : ApiController
    {
        Person[] people = new Person[]
        {
            new Person {FirstName = "Tim", LastName = "Corey", Id = 1 },
            new Person {FirstName = "Sue", LastName = "Storm", Id = 2 },
            new Person {FirstName = "Bilbo", LastName = "Baggins", Id = 3 }
        };

        // GET api/<controller>
        // NOTE: people is re-insubstantiated with every call.
        // That is why you need a Database for store data change/state change.
        public IEnumerable<Person> Get()
        {
            return people;
        }

        // GET api/<controller>/5
        public Person Get(int id)
        {
            return people.Where(x => x.Id == id).FirstOrDefault();
        }

        /// <summary>
        /// Returns the first names in the people list.
        /// </summary>
        /// <returns>a list of firstnames</returns>
         [Route("api/people/GetFirstNames")]
         [HttpGet, HttpPost] // Allow only from Get and Post
         public IEnumerable<string> GetFirstNames()
        {
            List<string> result = new List<string>();
            foreach(Person person in people)
            {
                result.Add(person.FirstName);
            }
            return result;
        }

        /// <summary>
        /// Returns the list of the first name of only 1 person.
        /// Ignore HttpPost. Used for exercise purposes only.
        /// Use HttpGet.
        /// </summary>
        /// <param name="id"></param>
        /// <returns>the list of the one First Name associated with id</returns>
        [Route("api/people/GetFirstNames/{id:int}")]
        [HttpGet, HttpPost] // Allow only from Get and Post
        public IEnumerable<string> GetFirstNames(int id)
        {
            List<string> result = new List<string>();
            foreach (Person person in people)
            {
                if (person.Id == id)
                {
                    result.Add(person.FirstName);
                    break;
                }
            }
            return result;
        }
        // POST api/<controller>
        /* Commented out. No database to post to.
        public void Post([FromBody] Person value)
        {
            people.ToList().Add(
                new Person() { FirstName = value.FirstName, LastName = value.LastName, Id = value.Id }
                );

        }
        */
        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}