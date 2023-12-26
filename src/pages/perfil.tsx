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

interface ProfilePageProps {
  userData: User | null;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({ userData }) => {
  const { data: session } = useSession();
  const router = useRouter();

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
        username={userData?.email}
        visiblePhone={true}
        slug={userData.slug || ""}
        phone={""}
        hours={""}
        address={""}
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
      .select("name email image photos bio slug tags type")
      .lean();

    if (user) {
      const userData = {
        name: user.name,
        email: user.email,
        type: user.type || "",
        image: user.image || "",
        photos: user.photos || [],
        bio: user.bio || "",
        slug: user.slug || "",
        tags: user.tags || [],
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
