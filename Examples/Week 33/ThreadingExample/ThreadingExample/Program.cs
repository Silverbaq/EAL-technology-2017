using System;
using System.Collections.Generic;
using System.Text;

namespace ThreadingExample
{
    class Program
    {
        static MutexProgram m = new MutexProgram();
        static SemaphoreProgram s = new SemaphoreProgram();

        static void Main(string[] args)
        {
            m.RunIt();
        }
    }
}
