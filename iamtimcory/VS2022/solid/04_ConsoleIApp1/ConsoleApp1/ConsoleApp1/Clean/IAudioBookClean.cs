﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1.Clean
{
    public interface IAudioBookClean : ILibraryItemClean
    {
        public int RuntimeInMinutes { get; set; }
    }
}