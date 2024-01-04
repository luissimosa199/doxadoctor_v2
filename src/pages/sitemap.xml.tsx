import dbConnect from "@/db/dbConnect";
import { UserModel } from "@/db/models/userModel";
import { GetServerSideProps } from "next/types";

function generateSiteMap(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>${process.env.NEXT_PUBLIC_BASE_URL}</loc>
       </url>

       ${urls
         .map((e: string) => {
           return `
         <url>
             <loc>${`${process.env.NEXT_PUBLIC_BASE_URL}/medicos/${e}`}</loc>
         </url>`;
         })
         .join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  await dbConnect();

  const doctors = await UserModel.find({ role: "DOCTOR" })
    .select("slug")
    .lean();
  const slugs = doctors.map((obj) => obj.slug).filter((e) => e !== undefined);

  const sitemap = generateSiteMap(slugs);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
