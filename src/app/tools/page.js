import ToolsClient from "./toolsclient";

  export const metadata = {
    metadataBase: new URL('https://byilya.vercel.app/'),
    title: 'Tools used',
    description: 'My favorite tools I use to craft unique digital experiences - frrom design software to development frameworks',
    openGraph: {
      title: "Ilya's Favorite Tools",
      description: "My favorite tools I use to craft unique digital experiences - frrom design software to development frameworks",
      images: [
        {
          url: '/og-tools.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };

export default function Tools() {
  return (
        <ToolsClient />
  );
}