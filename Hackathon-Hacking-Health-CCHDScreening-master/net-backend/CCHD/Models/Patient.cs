using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    // Store patents.
    public class Patient
    {
        // Primary key.
        public int PatientId { get; set; } 

        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public int? HealthCard { get; set; }
        public DateTime BirthDateTime { get; set; }
        public DateTime? ScreeningDateTime { get; set; }

    }
}
