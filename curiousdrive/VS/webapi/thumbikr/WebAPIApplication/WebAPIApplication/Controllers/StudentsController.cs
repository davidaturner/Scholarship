using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using WebAPIApplication.Models;

namespace WebAPIApplication.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        List<Student> students = new List<Student>
        {
            new Student(){Id=1, Name="Baliff", Roll=1001},
            new Student(){Id=2, Name="Conrad", Roll=1003},
            new Student() { Id = 3, Name = "Bennifer", Roll = 1005},
            new Student() { Id = 4, Name = "Calgary", Roll = 1002},
            new Student() { Id = 5, Name = "Lordan", Roll = 1004}
        };

        [HttpGet]
        public IActionResult GetStudents()
        {
            if (students == null || students.Count == 0)
            {
                return NotFound("No students found!");
            }

            return Ok(students);
        }

        [Route("id")]
        [HttpGet]
        public IActionResult Get(int id)
        {
            var student = students.SingleOrDefault(x => x.Id == id);
            if (student == null)
            {
                return NotFound("No student found!");
            }

            return Ok(student);
        }

        [HttpPost]
        public IActionResult Save(Student ostudent)
        {
            students.Add(ostudent);
            if (students == null || students.Count == 0)
            {
                return NotFound("No students found!");
            }

            return Ok(students);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var student = students.SingleOrDefault(x => x.Id == id);
            if (student == null)
            {
                return NotFound("No student found!");
            }
            students.Remove(student);
            if (students == null || students.Count == 0)
            {
                return NotFound("No students found!");
            }

            return Ok(students);
        }
    }
}
