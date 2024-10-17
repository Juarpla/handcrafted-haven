import AboutSeller from "./aboutSeller";
import SellersImage from "./SellerImages";

export default function Page() {
  return (
    <>
      <main className="mx-auto mt-[5%] block w-[50%]">
        <h1 className="text-center text-5xl font-bold text-black">
          Our Trusted Selers
        </h1>
        <SellersImage />
        <AboutSeller />
      </main>
    </>
  );
}
