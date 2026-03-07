"use client";
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";
import { useRouter } from "next/navigation";
// ************

export default function Home() {
  const handleTryDemo = () => {
    const router = useRouter();
    router.push("dashboard/_components");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Wireframe to Code</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">
            How It Works
          </a>
          <a href="#" className="hover:text-blue-600">
            Features
          </a>
          <a href="#" className="hover:text-blue-600">
            Live Demo
          </a>
          <a href="#" className="hover:text-blue-600">
            Sign Up
          </a>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Turn Your Wireframes into Code Instantly
          </h2>
          <p className="text-gray-600 mb-6">
            Transform hand-drawn or digital wireframes into production-ready
            HTML, Tailwind, or React code. Accelerate your UI development. Just
            upload your wireframe, and let our AI do the rest.
          </p>
          <div className="flex space-x-4">
            <Link
              href="./dashboard"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
            >
              Try Live Demo
            </Link>

            {/* <button
              onClick={handleTryDemo}
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
            >
              <Link></Link>
            </button> */}
            <button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white border rounded-xl shadow p-6 flex justify-center">
            <img
              src="/Snipaste_2025-05-25_18-09-22.png"
              alt="Wireframe to code"
              className="rounded"
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-10">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">✏️</div>
            <h4 className="font-semibold mb-1">Upload Wireframe</h4>
            <p className="text-sm text-gray-600">
              Upload a sketch or design screenshot.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🤖</div>
            <h4 className="font-semibold mb-1">AI Analyzes the Layout</h4>
            <p className="text-sm text-gray-600">
              Our model understands your layout and components.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🎨</div>
            <h4 className="font-semibold mb-1">Generates Clean Code</h4>
            <p className="text-sm text-gray-600">
              Get responsive code instantly, HTML, Tailwind, or React.
            </p>
          </div>
          <div>
            <div className="text-4xl mb-2">🛠️</div>
            <h4 className="font-semibold mb-1">Edit & Export</h4>
            <p className="text-sm text-gray-600">
              Customize output in our editor and export with one click.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-10">
          Features That Make Development Easier
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-3">📝</div>
            <h4 className="font-semibold mb-1">Sketch to Code</h4>
            <p className="text-sm text-gray-600">
              Upload e-sketch or design-screenshot.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold mb-1">Fast & Accurate</h4>
            <p className="text-sm text-gray-600">
              Output code in seconds, ready for production.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-3">⚛️</div>
            <h4 className="font-semibold mb-1">Tailwind & React Ready</h4>
            <p className="text-sm text-gray-600">
              Choose your need from web to React.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="text-3xl mb-3">☁️</div>
            <h4 className="font-semibold mb-1">No Setup Needed</h4>
            <p className="text-sm text-gray-600">
              Everything runs in the system.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h3 className="text-2xl font-bold mb-4">Try the Live Demo</h3>
        <p className="text-gray-600 mb-6">
          Upload your own wireframe and see the magic.
        </p>
        <Link
              href="./dashboard"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
            >
              Upload wirefarme
            </Link>
      </section>
    </div>
  );
}
