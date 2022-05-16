using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CCHD.Models
{
    // Test result, for use only after the screening is fully concluded. 
    // A value of Fail or Pass will imply the test is completed.
    public enum ScreeningResultEnum
    {
        Pending = 0, // Default value.
        Failed,
        Passed,
        Error // Safety net if logic tree fails to capture result.
    }

    // Test result for a single check. 
    public enum ScreeningCheckEnum
    {
        Positive, // Test identified CCHD. Must undergo further treatment.
        Inconclusive,
        Negative,
        Error
    }
}
