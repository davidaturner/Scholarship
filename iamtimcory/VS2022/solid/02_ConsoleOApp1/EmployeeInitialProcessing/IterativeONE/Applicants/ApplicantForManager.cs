using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IterativeONE.Interfaces;

namespace IterativeONE.Applicants
{
    public class ApplicantForManager : ApplicantBase
    {
        public ApplicantForManager() : base()
        {
            ApplicantType = ApplicantType.Manager;
        }
    }
}
