import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-slate-800 text-slate-200 flex min-h-screen flex-col items-center ">

      <h1 className="text-3xl">Language Adventure</h1>
      <Link href="/notes">TODOS</Link>


      <p>Welcome back user</p>
      <p>Or please login / register modal</p>
      <p>Once logged in show list of available games</p>
      <p>Whats been completed</p>
      <h2>SIMPLE GAME 1</h2>
      <button>Play</button>
      <table className="table-fixed border-separate border-spacing-2 w-full max-w-screen-lg">
        <thead>
          <tr>
     
            <th className="text-start">Descriptions</th>
            <th className="text-start">Commands</th>
            <th className="text-start">Inventory</th>
            <th className="text-start">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td><td>English</td><td>English</td><td>Yes</td>
          </tr>
          <tr>
           <td>English</td><td>English</td><td>Spanish</td><td>No</td>
          </tr>
        </tbody>
      </table>
      <h2>SIMPLE GAME 1</h2>
      <button>Play</button>
      <table className="table-fixed border-separate border-spacing-2 w-full max-w-screen-lg">
        <thead>
          <tr>
      
            <th className="text-start">Descriptions</th>
            <th className="text-start">Commands</th>
            <th className="text-start">Inventory</th>
            <th className="text-start">Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td><td>English</td><td>English</td><td>Yes</td>
          </tr>
          <tr>
           <td>English</td><td>English</td><td>Spanish</td><td>No</td>
          </tr>
        </tbody>
      </table>



    </main>
  );
}
