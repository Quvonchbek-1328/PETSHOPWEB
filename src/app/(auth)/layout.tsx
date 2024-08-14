import { Metadata } from "next";
import authImage from "../../../public/auth.svg";
import Image from "next/image";
import "../(home)/globals.css";
import { Toaster } from "@/components/ui/sonner";

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
      <body className="font-roboto container px-4">
        <Toaster richColors />
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center  h-screen">
          <main className="flex justify-center items-center w-full h-full">
            <div className="max-w-[464px] w-full">{children}</div>
          </main>
          <div className="lg:flex md:hidden sm:hidden hidden">
            <Image src={authImage} alt="Auth image" />
          </div>
        </div>
      </body>
    </html>
  );
}
