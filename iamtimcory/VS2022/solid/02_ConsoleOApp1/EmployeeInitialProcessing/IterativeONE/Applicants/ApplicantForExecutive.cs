using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IterativeONE;
using IterativeONE.Interfaces;

namespace IterativeONE.Applicants
{
    public class ApplicantForExecutive : ApplicantBase
    {
        public ApplicantForExecutive() : base()
        {
            ApplicantType = ApplicantType.Executive;
        }
    }
}
