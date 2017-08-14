using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace ThreadingExample
{
    class MutexProgram
    {
        static Thread[] threads = new Thread[10];
        static Mutex _m = new Mutex();

        static void ThreadProcess()
        {
            Console.WriteLine("{0} is standing in line...", Thread.CurrentThread.Name);
            _m.WaitOne(); // Waiting until it is safe to enter
            Console.WriteLine("{0} is entering the mutex", Thread.CurrentThread.Name);
            Thread.Sleep(1000);
            _m.ReleaseMutex(); // Giving up the mutex space
            Console.WriteLine("{0} has exited the mutex...", Thread.CurrentThread.Name);
        }

        public void RunIt()
        {
            for (int i = 0; i < 10; i++)
            {
                threads[i] = new Thread(ThreadProcess);
                threads[i].Name = "Thread_" + i;
                threads[i].Start();
            }
            Console.Read();
        }
    }
}
