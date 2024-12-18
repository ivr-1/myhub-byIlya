import ProjectsClient from "./projectsclient";

  export const metadata = {
    metadataBase: new URL('https://byilya.vercel.app/'),
    title: 'Projects',
    description: 'Frontend and UX projects where I blend code with design to create unique digital experiences',
    openGraph: {
      title: "Projects made by Ilya ",
      description: "Frontend and UX projects where I blend code with design to create unique digital experiences",
      images: [
        {
          url: '/og-projects.jpg',
          width: 1200,
          height: 630,
        },
      ],
    },
  };

export default function Projects() {
  return (
        <ProjectsClient />
  );
}
