import { Metadata } from "next";
import authImage from "../../../public/auth.svg";
import Image from "next/image";
import "../(home)/globals.css";

export const metadata: Metadata = {
  title: "Uzworks Uz",
  description:
    "Uzworks Uz is a platform for freelancers and clients to connect and work together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-between">
          <main className="flex justify-center items-center w-full h-full">
            <div>{children}</div>
          </main>
          <Image src={authImage} alt="Auth image" />
        </div>
      </body>
    </html>
  );
}
