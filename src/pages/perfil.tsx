import dbConnect from "@/db/dbConnect";
import { UserModel } from "@/db/models/userModel";
import { User } from "@/types";
import { GetServerSidePropsContext } from "next";
import { FunctionComponent, useEffect } from "react";
import DoctorPageBody from "@/components/DoctorPageBody";
import DoctorPageHeader from "@/components/DoctorPageHeader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { useQuery } from "@tanstack/react-query";

interface ProfilePageProps {
  userData: User | null;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({ userData }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const { data: userInfo, isLoading } = useQuery(
    ["userInfo", session?.user?.email],
    async () => {
      const response = await fetch(
        `api/user/info?username=${session?.user?.email}`
      );

      return response.json();
    },
    {
      initialData: {
        address: userData?.address,
        hours: userData?.hours,
        phone: userData?.phone,
      },
    }
  );

  useEffect(() => {
    if (!session || !session.user) {
      router.push("/login");
    }
  }, [router, session]);

  if (!userData) {
    return <p>Error</p>;
  }

  return (
    <main className="bg-zinc-50">
      <DoctorPageHeader
        photo={userData?.image}
        name={userData?.name}
        type={userData?.type || ""}
      />
      <DoctorPageBody
        doctorName={userData?.name as string}
        doctorId={userData?._id as string}
        username={userData?.email}
        visiblePhone={true}
        slug={userData.slug || ""}
        phone={userInfo.phone || ""}
        hours={userInfo.hours || ""}
        address={userInfo.address || ""}
      />
    </main>
  );
};

export default ProfilePage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    await dbConnect();

    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );
    const username = session?.user?.email;

    if (!session) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }
    const user = await UserModel.findOne({ email: username })
      .select("name email image photos bio slug tags type address hours phone")
      .lean();

    if (user) {
      const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        type: user.type || "",
        image: user.image || "",
        photos: user.photos || [],
        bio: user.bio || "",
        slug: user.slug || "",
        tags: user.tags || [],
        address: user.address || "",
        hours: user.hours || "",
        phone: user.phone || "",
      };
      return {
        props: {
          userData,
        },
      };
    }

    throw new Error("error");
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
