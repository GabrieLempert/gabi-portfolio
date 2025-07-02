import { About } from "./About";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Gabriel Lempert</h1>
      <p className="text-xl mb-6">Junior Full-Stack Developer</p>
      <a
        href="#skills"
        className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-blue-200 transition"
      >
        View My Work
      </a>
         <About />
    </section>
  );
}
