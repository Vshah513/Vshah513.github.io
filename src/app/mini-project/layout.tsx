import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mini Project",
  description: "Link to ivy-dev.com — consulting and development.",
  openGraph: {
    title: "Mini Project — Ivy Dev",
    description: "Link to ivy-dev.com and Consulting Idea repo.",
  },
};

export default function MiniProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ paddingTop: "140px" }}>{children}</div>;
}
