using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
using WebAPI.DTO;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeverageTypesController : ControllerBase
    {
        private readonly NeptuneContext _context;

        public BeverageTypesController(NeptuneContext context)
        {
            _context = context;
        }

        // GET: api/BeverageTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BeverageType>>> GetBeverageTypes()
        {
            return await _context.BeverageTypes.ToListAsync();
        }

        // GET: api/BeverageTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BeverageType>> GetBeverageType(int id)
        {
            var beverageType = await _context.BeverageTypes.FindAsync(id);

            if (beverageType == null)
            {
                return NotFound();
            }

            return beverageType;
        }

        // PUT: api/BeverageTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBeverageType(int id, BeverageType beverageType)
        {
            if (id != beverageType.Id)
            {
                return BadRequest();
            }

            _context.Entry(beverageType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BeverageTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BeverageTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BeverageType>> PostBeverageType(BeverageType beverageType)
        {
            _context.BeverageTypes.Add(beverageType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBeverageType", new { id = beverageType.Id }, beverageType);
        }

        // DELETE: api/BeverageTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBeverageType(int id)
        {
            var beverageType = await _context.BeverageTypes.FindAsync(id);
            if (beverageType == null)
            {
                return NotFound();
            }

            _context.BeverageTypes.Remove(beverageType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BeverageTypeExists(int id)
        {
            return _context.BeverageTypes.Any(e => e.Id == id);
        }
    }
}
