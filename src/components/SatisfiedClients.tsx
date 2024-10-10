// components/SatisfiedClients.tsx
import Image from 'next/image';

const SatisfiedClients = () => {
  const clients = [
    {
      name: 'Sabrina Purdue',
      feedback: 'lorem Ipsum',
      imgSrc: '/images/sabrina.jpg',
    },
    {
      name: 'Mónica Ortiz',
      feedback: 'lorem Ipsum is',
      imgSrc: '/images/monica.jpg',
    },
    {
      name: 'Emma Miranda',
      feedback: 'lorem Ipsum',
      imgSrc: '/images/emma.jpg',
    },
  ];

  return (
    <section className="text-center py-8">
      <h2 className="text-3xl font-semibold mb-6">Satisfied Clients</h2>
      <div className="flex justify-center gap-6">
        {clients.map((client, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-4 w-64 text-left">
            <Image
              src={client.imgSrc}
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