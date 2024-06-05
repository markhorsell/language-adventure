import Image from "next/image";

export default function Notes() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       <h1>Language Adventure</h1>
      
      </div>
      <ul>
        <li className="font-extrabold">THIS APP IS PLAYER ONLY</li>
        <li>This is the url a user would open</li>
        <li>There is no editing functionality here. That will be another project. Probably doesnt need hosting.</li>
        <li>TODO</li>

        <li>Add shadcn</li>
        <li>Add react query</li>
        <li className="text-decoration-line: line-through">Add Auth? next auth? auth0 or clerk?</li>
        <li>Load game file from mongoDB</li>
        <li>Open a channel so games local storage can be manipulated by editor</li>
        <li className="text-decoration-line: line-through">Add a stripe account</li>
        <li>For now all content is free, but in future users with stripe subscriptions can access higher level games</li>
        
      </ul>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      
    </main>
  );
}
