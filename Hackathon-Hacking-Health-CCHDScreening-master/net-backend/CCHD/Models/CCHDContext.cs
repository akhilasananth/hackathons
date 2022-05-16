using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace CCHD.Models
{
    public class CCHDContext : DbContext
    {
        public CCHDContext(DbContextOptions<CCHDContext> options)
            : base(options)
        {
            Database.Migrate();
        }

        public DbSet<Patient> Patients { get; set; }
        public DbSet<Screening> Screenings { get; set; }
        public DbSet<CareFacility> CareFacilities { get; set; }
     }

}
