import Person1 from "/src/public/images/Person1.webp";
import Person2 from "/src/public/images/Person2.webp";
import Person3 from "/src/public/images/Person3.webp";
import Person4 from "/src/public/images/Person4.webp";
import Image from "next/image";

export default function SellersImage() {
  return (
    <div className="my-5 flex flex-col md:flex-row md:justify-center md:space-x-8">
      <div className="mb-4 flex-shrink-0 md:mb-0">
        <Image
          src={Person1}
          alt="Image of person1"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
      <div className="mb-4 flex-shrink-0 md:mb-0">
        <Image
          src={Person2}
          alt="Image of person2"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
      <div className="mb-4 flex-shrink-0 md:mb-0">
        <Image
          src={Person3}
          alt="Image of person3"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
      <div className="mb-4 flex-shrink-0 md:mb-0">
        <Image
          src={Person4}
          alt="Image of person4"
          width={240}
          height={240}
          className="object-cover"
        />
      </div>
    </div>
  );
}
