import HomeClient from "./home/homeclient";
import { Suspense } from "react";


  export const metadata = {
    metadataBase: new URL('https://byilya.vercel.app/'),
    title: 'by Ilya',
    description: 'Digital experiences crafted by Ilya - Frontend development and UX design',
    openGraph: {
      title: "by Ilya",
      description: "Digital experiences crafted by Ilya - Frontend development and UX design",
      images: [
        {
          url: '/og-home.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <HomeClient />
    </Suspense>
  );
}
