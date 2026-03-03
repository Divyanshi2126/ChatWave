import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen bg-base-100 px-6 py-20 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl font-extrabold text-primary leading-tight">
              About Chat Wave 💬
            </h1>

            <p className="mt-6 text-lg text-base-content opacity-80">
              Chat Wave is a modern messaging platform designed to make
              communication simple, fast and meaningful.
            </p>

            <p className="mt-4 text-lg text-base-content opacity-80">
              Whether you are chatting with friends, family or teammates,
              Chat Wave helps you stay connected without distractions.
            </p>

            <button
              onClick={() => navigate("/register")}
              className="mt-8 btn btn-primary btn-lg"
            >
              🚀 Get Started
            </button>
          </div>

          {/* IMAGE */}
          <div className="bg-base-200 rounded-3xl shadow-xl p-6 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Chat App"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-base-200 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-primary">
            Why Choose Chat Wave?
          </h2>

          <p className="mt-4 text-lg text-base-content opacity-80">
            Built for people who love smooth and secure conversations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-base-100 p-6 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl text-primary">Fast Messaging</h3>
              <p className="mt-2 text-sm opacity-80">
                Real-time delivery with smooth performance.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="font-bold text-xl text-primary">Secure Chats</h3>
              <p className="mt-2 text-sm opacity-80">
                Your conversations stay private and protected.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-2xl shadow hover:scale-105 transition">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-xl text-primary">Clean Design</h3>
              <p className="mt-2 text-sm opacity-80">
                Simple UI focused on comfort and clarity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white">
            Ready to Chat? 🌊
          </h2>

          <p className="text-white opacity-80 mt-4 text-lg">
            Join Chat Wave and experience modern communication.
          </p>

          <button
            onClick={() => navigate("/login")}
            className="mt-8 btn btn-secondary btn-lg"
          >
            💬 Start Chatting
          </button>
        </div>
      </section>
    </>
  );
};

export default About;