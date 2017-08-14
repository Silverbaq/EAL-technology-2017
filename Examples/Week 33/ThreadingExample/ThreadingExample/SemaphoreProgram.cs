using System;
using System.Threading;

namespace ThreadingExample
{
    class SemaphoreProgram
    {
        static Thread[] threads = new Thread[10];
        static Semaphore sem = new Semaphore(3, 3);
       
        static void DoSomething()
        {
            Console.WriteLine("{0} is waiting in line...", Thread.CurrentThread.Name);
            sem.WaitOne();
            Console.WriteLine("{0} enters the the club!", Thread.CurrentThread.Name);
            Thread.Sleep(300);
            Console.WriteLine("{0} is leaving the club", Thread.CurrentThread.Name);
            sem.Release();
        }

        public void RunIt()
        {
            for (int i = 0; i < 10; i++)
            {
                threads[i] = new Thread(DoSomething);
                threads[i].Name = "thread_" + i;
                threads[i].Start();
            }
            Console.Read();
        }
    }
}