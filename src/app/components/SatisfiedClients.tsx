import jose from "/src/public/images/jose.webp"; // Import estático
import monica from "/src/public/images/monica.webp"; // Import estático
import sabrina from "/src/public/images/sabrina.webp"; // Import estático
import Image from "next/image";

const SatisfiedClients = () => {
  const clients = [
    {
      name: "Sabrina Purdue",
      feedback:
        "The handcrafted textile from the loom fits perfectly in my home, and the quality is outstanding.",
      imgSrc: sabrina, // Uso de la variable importada
    },
    {
      name: "Mónica Ortiz",
      feedback:
        "The ceramic piece was a great purchase; it beautifully decorates my living room and adds a special touch.",
      imgSrc: monica, // Uso de la variable importada
    },
    {
      name: "Jose Miranda",
      feedback:
        "The handmade baskets are very practical in my home and help me stay organized.",
      imgSrc: jose, // Uso de la variable importada
    },
  ];

  return (
    <section className="py-8 text-center">
      <h2 className="mb-6 text-3xl font-semibold">Satisfied Clients</h2>
      <div className="flex justify-center gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="w-64 rounded-lg bg-gray-100 p-4 text-left"
          >
            <Image
              src={client.imgSrc} // Usar variable importada en lugar de ruta relativa
              alt={client.name}
              width={250}
              height={250}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{client.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfiedClients;
