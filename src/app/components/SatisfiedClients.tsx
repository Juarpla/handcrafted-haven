import Image from 'next/image';
import jose from '/src/public/images/jose.webp';     // Import estático
import monica from '/src/public/images/monica.webp'; // Import estático
import sabrina from '/src/public/images/sabrina.webp'; // Import estático

const SatisfiedClients = () => {
  const clients = [
    {
      name: 'Sabrina Purdue',
      feedback: 'The handcrafted textile from the loom fits perfectly in my home, and the quality is outstanding.',
      imgSrc: sabrina,  // Uso de la variable importada
    },
    {
      name: 'Mónica Ortiz',
      feedback: 'The ceramic piece was a great purchase; it beautifully decorates my living room and adds a special touch.',
      imgSrc: monica,  // Uso de la variable importada
    },
    {
      name: 'Jose Miranda',
      feedback: 'The handmade baskets are very practical in my home and help me stay organized.',
      imgSrc: jose,  // Uso de la variable importada
    },
  ];

  return (
    <section className="text-center py-8">
      <h2 className="text-3xl font-semibold mb-6">Satisfied Clients</h2>
      <div className="flex justify-center gap-6">
        {clients.map((client, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 w-64 text-left">
            <Image
              src={client.imgSrc}    // Usar variable importada en lugar de ruta relativa
              alt={client.name}
              width={250}
              height={250}
              className="rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{client.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{client.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SatisfiedClients;