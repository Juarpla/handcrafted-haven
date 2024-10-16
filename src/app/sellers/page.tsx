import SellersImage from "./SellerImages";
import AboutSeller from "./aboutSeller";

export default function Page() {
    return (
        <>
        <main className="block w-[50%] mx-auto mt-[5%]">
                <h1 className="text-5xl text-black font-bold text-center">Our Trusted Selers</h1>
                <SellersImage />
                <AboutSeller />
        </main>
        </>
    )
}