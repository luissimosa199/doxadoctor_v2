import dbConnect from "@/db/dbConnect";
import { UserModel } from "@/db/models/userModel";
import { User } from "@/types";
import { GetServerSidePropsContext } from "next";
import { FunctionComponent } from "react";
// import { useFavorite } from "@/hooks/useFavorite";
import DoctorPageBody from "@/components/DoctorPageBody";
import DoctorPageHeader from "@/components/DoctorPageHeader";

interface UserPageProps {
  userData: User | null;
}

const UserPage: FunctionComponent<UserPageProps> = ({ userData }) => {
  // const { isFavorite, mutation, isLoading } = useFavorite(
  //   userData?.email as string
  // );

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
        slug={userData?.slug || ""}
        phone={""}
        hours={""}
        address={""}
      />
    </main>
  );
};

export default UserPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    await dbConnect();

    const { slug } = context.query;

    const user = await UserModel.findOne({ slug })
      .select("name email image photos bio slug tags type")
      .lean();

    if (user) {
      const userData = {
        name: user.name,
        type: user.type,
        email: user.email,
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
