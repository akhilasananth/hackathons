using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.ViewFeatures.Internal;

namespace CCHD.Models
{
    // Model of a single screening iteration.
    public class Screening
    {
        public int ScreeningId { get; set; }

        // Can be 1, 2, or 3 Depending on which iteration. 
        // TODO add data validation.
        [Required]
        public int Iteration { get; set; }

        // DateTime of screening.
        [Required]
        public DateTime ScreeningDateTime { get; set; }

        // Sp02 Foot
        [Required]
        public int SpFoot { get; set; }
        
        // Sp02 Hand
        [Required]
        public int SpHand { get; set; }

        // TODO Algorithm is flawed, does not meet requirements!
        // A positive result means positive for CCHD, which means the patient needs further treatment.
        /****++++ POSITIVE IS POSITIVE FOR CCHD! ++++******/
        public ScreeningCheckEnum ScreeningCheck()
        {
            /*******************************************
             * First we create and set boolean values.*
             *******************************************/

            // Check if this is final check. When on final check an inconclusive result is treated as a positive one.
            bool isFinalCheck = Iteration < 3;

            // Check if % difference between SpFoot and SpHand < 3.
            bool isResultDifferenceTooHigh = Math.Abs(SpFoot - SpHand) < 3;

            // Check if SpFoot and SpHand are in normal ranges.
            bool isSpFootAndSpHandNormal = SpFoot >= 95 && SpHand >= 95;

            // Check of SpFoot or SpHand are too low.
            bool isSpFootOrSpHandTooLow = SpFoot < 90 || SpHand < 90;

            /***********************
           * Then we perform logic.*
           *************************/
            // Postive result (meaning positive for CCHD).

            // Negative (meaning test does not identify patient as postive for CCHD)
            if (isSpFootAndSpHandNormal && !isResultDifferenceTooHigh)
            {
                return ScreeningCheckEnum.Negative;
            }

            // Inconclusive (meaning not on final iteration and results inconclusive).

            if (!isFinalCheck && isResultDifferenceTooHigh)
            {
                return ScreeningCheckEnum.Inconclusive;
            }
            if (!isSpFootAndSpHandNormal && !isSpFootOrSpHandTooLow)
            {
                return ScreeningCheckEnum.Inconclusive;
            }

            return ScreeningCheckEnum.Positive;
        }

    }

}
