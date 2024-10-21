import AboutSeller from "@/app/ui/sellers/aboutSeller";
import SellersImage from "@/app/ui/sellers/SellerImages";

export default function Page() {
  return (
    <>
      <main className="mx-auto mt-[5%] block min-h-screen w-6/12">
        <h1 className="text-center text-5xl font-bold text-black">
          Our Trusted Selers
        </h1>
        <SellersImage />
        <AboutSeller />
      </main>
    </>
  );
}
