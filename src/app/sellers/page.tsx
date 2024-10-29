import AboutSeller from "@/app/ui/sellers/aboutSeller";
import SellersImage from "@/app/ui/sellers/SellerImages";

export default function Page() {
  return (
    <>
      <main className="mx-auto block min-h-screen w-6/12">
        <h1 className="mt-24 text-center text-4xl font-bold text-black md:text-5xl">
          {" "}
          Our Trusted Sellers
        </h1>

        <SellersImage />
        <AboutSeller />
      </main>
    </>
  );
}
