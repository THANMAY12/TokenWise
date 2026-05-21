import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        
        <p className="text-sm uppercase tracking-widest text-neutral-400 mb-6">
          AI Spend Optimization Platform
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Stop Overpaying <br />
          for AI Tools
        </h1>

        <p className="text-neutral-400 text-lg max-w-2xl mt-8 leading-relaxed">
          Analyze your ChatGPT, Claude, Cursor, and AI API spending
          in under 60 seconds. Discover hidden savings instantly.
        </p>

        <div className="flex gap-4 mt-10">
          <Link
            to="/audit"
            className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-neutral-200 transition"
          >
            Start Free Audit
          </Link>

          <button className="border border-neutral-700 px-8 py-4 rounded-xl hover:border-neutral-500 transition">
            View Example
          </button>
        </div>

      </section>
    </div>
  );
}

export default Home;