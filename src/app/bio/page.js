import AboutClient from "./aboutclient";

  export const metadata = {
    metadataBase: new URL('https://byilya.vercel.app/'),
    title: 'About',
    description: 'Get to know the person behind the code - my journey in frontend development, design philosophy, and approach to creating digital experiences.',
    openGraph: {
      title: "About Ilya",
      description: "Get to know the person behind the code - my journey in frontend development, design philosophy, and approach to creating digital experiences.",
      images: [
        {
          url: '/og-about.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };

export default function About() {
  return (
        <AboutClient />
  );
}