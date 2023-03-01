using Luftborn.Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Luftborn.Entities
{
    public class LuftbornDBContext :DbContext
    {
        public LuftbornDBContext(DbContextOptions<LuftbornDBContext> options) : base(options)
        {

        }

        public DbSet<Brand> Brands { get; set; }

    }
}
