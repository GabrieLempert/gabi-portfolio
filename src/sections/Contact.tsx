export function Contact() {
  return (
    <section className="py-16 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-4">
        Want to work together or have a question? Let's connect!
      </p>
      <a
        href="mailto:gabriel@example.com"
        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
}
