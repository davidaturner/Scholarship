using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SuperheroesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    // Built from API Controller - Empty

    public class SuperheroesController : ControllerBase
    {
        private static List<Superhero>heroes = new List<Superhero>
            {
                new Superhero
                {
                    Id = 1,
                    Name = "Spider-Man",
                    SecretIdentity = "Peter Parker",
                    AreaOfOperation = "New York City"
                },
                new Superhero
                {
                    Id = 2,
                    Name = "Thor",
                    SecretIdentity = "Donald Blake, MD",
                    AreaOfOperation = "Midgard"
                }
            };

        readonly DataContext _context;
        public SuperheroesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
//        public async Task<IActionResult> Get() //Will not register in swagger. do not use IActionResult.
        public async Task<ActionResult<List<Superhero>>> Get()
        {
            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Superhero>> Get(int id)
        {
            var found = await _context.SuperHeroes.FindAsync(id);
            return (found != null)? Ok(found) : BadRequest("Hero not found");
        }

        /*
        private Superhero? Find(int id)
        {
            return heroes.Find(h => h.Id == id);
        }
        */

        [HttpPost]
        public async Task<ActionResult<List<Superhero>>> Post(Superhero hero)
        {
            _context.SuperHeroes.Add(hero);
            await _context.SaveChangesAsync();


            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Superhero>>> Update(Superhero request)
        {
            var toBeReplaced = await _context.SuperHeroes.FindAsync(request.Id);
            if (toBeReplaced != null)
            {
                toBeReplaced.Id = request.Id;
                toBeReplaced.Name = request.Name;
                toBeReplaced.SecretIdentity = request.SecretIdentity;
                toBeReplaced.AreaOfOperation = request.AreaOfOperation;

                await _context.SaveChangesAsync();
            }
            return Ok(_context.SuperHeroes.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Superhero>>> Remove(int id)
        {
            var toBeRemoved = await _context.SuperHeroes.FindAsync(id);
            if (toBeRemoved != null)
            {
                _context.SuperHeroes.Remove(toBeRemoved);
                await _context.SaveChangesAsync();
            }
            return Ok(await _context.SuperHeroes.ToListAsync());
        }
    }
}
