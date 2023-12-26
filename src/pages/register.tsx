import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isDoctor, setIsDoctor] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const type = formData.get("type");
    const user_agent_id = getCookie(`user_agent_id`);
    const isDoctor = formData.get("doctor");

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
        user_agent_id,
        isDoctor,
        type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      router.push("/login");
    } else {
      setErrorMessage(data.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <fieldset>
            <legend className="text-gray-700 text-base font-bold mb-2 ">
              ¿Eres un profesional de la salud?
            </legend>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <label htmlFor="true">Si</label>
                <input
                  type="radio"
                  id="true"
                  name="doctor"
                  value="true"
                  onChange={() => {
                    setIsDoctor(true);
                  }}
                />
              </div>
              <div className="flex gap-1">
                <label htmlFor="false">No</label>
                <input
                  type="radio"
                  id="false"
                  name="doctor"
                  value="false"
                  onChange={() => {
                    setIsDoctor(false);
                  }}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            id="name"
            required
          />
        </div>

        {isDoctor && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="type"
            >
              Especialidad
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="type"
              type="text"
              id="type"
              required={isDoctor}
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            id="email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            type="password"
            id="password"
            required
          />
        </div>
        {errorMessage && (
          <div className="mb-6">
            <p className="text-sm text-red-600 font-semibold text-center">
              Error: {errorMessage}
            </p>
          </div>
        )}
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Registrando..." : "Registrarse"}
          </button>
          <Link
            href="/login"
            className="text-sm mt-2 text-slate-500 hover:opacity-75 transition-all"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </form>
    </div>
  );
}
