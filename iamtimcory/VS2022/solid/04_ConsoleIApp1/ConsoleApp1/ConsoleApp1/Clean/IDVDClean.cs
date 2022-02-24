using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public interface IDVDClean: ILibraryItemClean
    {
        public List<string> Actors { get; set; }

        public int RunTimeInMinutes { get; set; }
    }
}
