﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using WebAPI.Models;
using WebAPI.DTO;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeveragesController : ControllerBase
    {
        private readonly NeptuneContext _context;
        private readonly IMapper _mapper;
        private IConfiguration _configuration;
        private string _imageDir;

        public BeveragesController(NeptuneContext context, IConfiguration configuration, IMapper mapper)
        {
            _context = context;
            _configuration = configuration;
            _mapper = mapper;

            _imageDir = _configuration.GetValue<string>("ImageDir");
        }

        // GET: api/Beverages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BeverageDTO>>> GetBeverages()
        {
            return await _context.Beverages
                .ProjectTo<BeverageDTO>(_mapper.ConfigurationProvider)
                .ToListAsync();
        }

        // GET: api/Beverages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BeverageDTO>> GetBeverage(long id)
        {
            var beverage = await _context.Beverages
                .ProjectTo<BeverageDTO>(_mapper.ConfigurationProvider)
                .Where(bt => bt.Id == id)
                .FirstAsync();

            //var beverage = await _context.Beverages.FindAsync(id);

            if (beverage == null)
            {
                return NotFound();
            }

            var dto = _mapper.Map<BeverageDTO>(beverage);

            return dto;
        }

        // PUT: api/Beverages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBeverage(long id, Beverage beverage)
        {
            beverage.Dateadded = System.DateTime.Now;

            if (id != beverage.Id)
            {
                return BadRequest();
            }

            _context.Entry(beverage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BeverageExists(id))
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

        // POST: api/Beverages
        [HttpPost]
        public async Task<ActionResult<Beverage>> PostBeverage(Beverage beverage)
        {
            Beverage newBeverage = beverage;

            newBeverage.Dateadded = System.DateTime.Now;

            _context.Beverages.Add(newBeverage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("PostBeverage", new { id = newBeverage.Id }, newBeverage);
        }

        // DELETE: api/Beverages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBeverage(long id)
        {
            var beverage = await _context.Beverages.FindAsync(id);
            if (beverage == null)
            {
                return NotFound();
            }

            _context.Beverages.Remove(beverage);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BeverageExists(long id)
        {
            return _context.Beverages.Any(e => e.Id == id);
        }

        [HttpPost("upload", Name = "upload")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UploadFile(
              IFormFile file,
              CancellationToken cancellationToken)
        {
            if (CheckValidFileExtension(file))
            {
                await WriteFile(file);
            }
            else
            {
                return BadRequest(new { message = "Invalid file extension" });
            }

            return Ok();
        }

        private bool CheckValidFileExtension(IFormFile file)
        {
            var extension = Path.GetExtension(file.FileName);
            return (extension == ".png" || extension == ".jpg" || extension == ".jpeg"); // Change the extension based on your need
        }

        private async Task<bool> WriteFile(IFormFile file)
        {
            bool isSaveSuccess = false;
            string fileName;
            try
            {
                var extension = Path.GetExtension(file.FileName);
                fileName = DateTime.Now.Ticks + extension; //Create a new Name for the file due to security reasons.

                
                var pathBuilt = Path.Combine(Directory.GetCurrentDirectory(), _imageDir);

                if (!Directory.Exists(pathBuilt))
                {
                    Directory.CreateDirectory(pathBuilt);
                }

                var path = Path.Combine(Directory.GetCurrentDirectory(), _imageDir,
                   fileName);

                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                isSaveSuccess = true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

            return isSaveSuccess;
        }
    }
}
