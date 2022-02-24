using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public interface IManaged : IEmployeeClean
    {
        public IEmployeeClean Manager { get; set; }

        public virtual void AssignManager(IEmployeeClean manager)
        {
            // Stimulating other tasks.
            // Otherwise this would just be a Set.
            Manager = manager;
        }

    }
}
