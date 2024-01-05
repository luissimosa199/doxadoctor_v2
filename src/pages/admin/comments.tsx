import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import React, { FunctionComponent, useState } from "react";
import { CustomSession, authOptions } from "../api/auth/[...nextauth]";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Opinion } from "@/types";
import formatDateString from "@/utils/formatDateString";

interface AdminPageInterface {
  name: string;
  email: string;
}

interface OldData {
  opinions: Opinion[];
  totalPages: number;
  currentPage: number;
  totalOpinions: number;
}

const Comments: FunctionComponent<AdminPageInterface> = ({ name, email }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const queryClient = useQueryClient();

  const fetchOpinions = async ({ page = 1, limit = 10 }) => {
    const query = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    const response = await fetch(`/api/medicos/opinions?${query.toString()}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const handleAprove = async (id: string) => {
    try {
      queryClient.cancelQueries(["opinions", page, limit]);

      queryClient.setQueryData(
        ["opinions", page, limit],
        (oldData?: OldData) => {
          if (!oldData) {
            return undefined;
          }
          return {
            ...oldData,
            opinions: oldData.opinions.filter((opinion) => opinion._id !== id),
          };
        }
      );

      const response = await fetch(`/api/medicos/opinions?id=${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const { data, isLoading } = useQuery(
    ["opinions", page, limit],
    () => fetchOpinions({ page, limit }),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <p className="mb-6 p-4">
        Logueado como {name} ({email})
      </p>

      <div>
        {data && (
          <div>
            <div>
              <div>
                <table className="min-w-full table-auto">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-4 py-2">Nombre</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Doctor</th>
                      <th className="px-4 py-2">Fecha</th>
                      <th className="px-4 py-2">Comentario</th>
                      <th className="px-4 py-2">Aprobar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.opinions.map((e: Opinion) => (
                      <tr
                        key={e._id}
                        className="border-b"
                      >
                        <td className="px-4 py-2">{e.name}</td>
                        <td className="px-4 py-2">{e.email}</td>
                        <td className="px-4 py-2">{e.doctorName}</td>
                        <td className="px-4 py-2">
                          {formatDateString(e.createdAt)}
                        </td>
                        <td className="px-4 py-2">{e.comment}</td>
                        <td className="px-4 py-2">
                          <button
                            className="shadow-md rounded-md py-2 px-4 font-semibold text-green-400"
                            onClick={() => {
                              handleAprove(e._id);
                            }}
                          >
                            ✔
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex gap-2 justify-center my-2">
                <button
                  onClick={() => setPage((old) => Math.max(old - 1, 1))}
                  disabled={page === 1}
                  className="shadow-md rounded-md py-2 px-4 text-white bg-blue-400 font-semibold"
                >
                  &lt;
                </button>
                <button
                  onClick={() => setPage((old) => old + 1)}
                  disabled={!data || data.opinions.length < limit}
                  className="shadow-md rounded-md py-2 px-4 text-white bg-blue-400 font-semibold"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;

export const getServerSideProps: GetServerSideProps<
  AdminPageInterface
> = async (context) => {
  const session: CustomSession | null = await getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session || session?.role !== "ADMIN") {
    return {
      redirect: {
        destination: session ? "/" : "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      name: session?.user?.name || "Usuario",
      email: session?.user?.email || "Usuario",
    },
  };
};
