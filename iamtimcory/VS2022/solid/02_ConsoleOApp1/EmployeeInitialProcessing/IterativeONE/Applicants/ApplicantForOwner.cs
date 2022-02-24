using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IterativeONE.Interfaces;

namespace IterativeONE.Applicants
{
    public class ApplicantForOwner : ApplicantBase
    {
        public ApplicantForOwner() : base()
        {
            ApplicantType = ApplicantType.Owner;
        }
    }
}
