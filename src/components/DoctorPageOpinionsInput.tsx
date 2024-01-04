import React, { useState } from "react";
import DoctorPageRank from "./DoctorPageRank";

const DoctorPageOpinionsInput = ({
  doctorName,
  doctorId,
}: {
  doctorName: string;
  doctorId: string;
}) => {
  const [selectedStar, setSelectedStar] = useState<number | null>(null);
  const [submitState, setSubmitState] = useState<"OK" | "ERROR" | null>(null);
  const [error, setError] = useState<{ comment: boolean; rank: boolean }>({
    comment: false,
    rank: false,
  });

  const sendOpinion = async (data: {}) => {
    const response = await fetch("/api/medicos/opinions", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setSubmitState("ERROR");
    } else {
      setSubmitState("OK");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    if (!selectedStar) {
      setError((prev) => ({ ...prev, rank: true }));
      return null;
    }

    setError((prev) => ({ ...prev, rank: false }));

    if (!formData.comment) {
      setError((prev) => ({ ...prev, comment: true }));
      return null;
    }

    setError((prev) => ({ ...prev, comment: false }));

    const data = {
      rank: selectedStar + 1,
      name: formData.name,
      email: formData.email,
      subscribe: !!formData.subscribe,
      comment: formData.comment,
      doctorName: doctorName,
      doctorId: doctorId,
    };

    sendOpinion(data);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="h-full shadow-md p-4">
        <div>
          {submitState === "ERROR" && (
            <div>
              <h3>
                Ha ocurrido un error al enviar el comentario, recarga la pagina
                e intenta de nuevo.
              </h3>
            </div>
          )}
          {submitState === "OK" && (
            <div>
              <h3>
                Tu comentario ha sido enviado para evaluación y será publicado
                pronto.
              </h3>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl mb-4">
            Agrega tu comentario para{" "}
            <strong className="capitalize">{doctorName.toLowerCase()}</strong>
          </h3>
          <div>
            <span className="text-lg mb-2">Ingresa tu calificación</span>
            <DoctorPageRank
              selectedStar={selectedStar}
              setSelectedStar={setSelectedStar}
            />
          </div>
          <div>
            {error.rank && (
              <span className="text-red-600 font-semibold">
                Debe dar una calificación
              </span>
            )}
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-lg"
              >
                Nombre (opcional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ej. Juan Perez"
                className="rounded-md border p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-lg"
              >
                Email (opcional)
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Ej. juanperez@gmail.com"
                className="rounded-md border p-2"
              />
              <span className="font-semibold text-sm">
                *Tu email no será público
              </span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="subscribe"
                id="subscribe"
                defaultChecked={true}
              />
              <label htmlFor="subscribe text-lg">
                Deseo recibir información sobre mi bienestar y promociones
              </label>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="comment text-lg">Comentario</label>
              <div>
                {error.comment && (
                  <span className="text-red-600 font-semibold">
                    Debe dar un comentario
                  </span>
                )}
              </div>
              <textarea
                id="comment"
                name="comment"
                placeholder="Escribe tu comentario..."
                className="rounded-md border p-2"
              ></textarea>
            </div>
            <button className="px-4 py-4 bg-blue-500 font-semibold text-white w-fit rounded-md">
              Enviar comentario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorPageOpinionsInput;
