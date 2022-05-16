using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    public class CareFacility
    {
        // Primary Key.
        public int CareFacilityId { get; set; }

        [Required]
        public string AddressOne { get; set; }
        public string AddressTwo { get; set; }
        [Required]
        public string PostalCode { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int PhoneNumber { get; set; }

        
    }
}
