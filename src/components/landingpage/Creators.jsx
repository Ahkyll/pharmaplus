const creators = [
  { id: 1, creator: 'Yuga Labs', img: '../images/ape.jpg' },
  { id: 2, creator: 'Larva Labs', img: '../images/punk.png'},
  { id: 3, creator: 'PROOF COLLECTIVE', img: '../images/mbird.png'},
  { id: 4, creator: 'Luca Netz', img: '../images/pudgy.png'},
  { id: 5, creator: 'Chiru Labs', img: '../images/azuki.png'},
  { id: 6, creator: 'Burn Toast', img: '../images/doodles.avif'},
];

function Creators() {
  return (
    <section id="creators" className="p-1 bg-[url('../images/4.png')] bg-cover bg-center h-[130vh] bg-no-repeat text-center font-mono">
      <hr />
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold m-20 pt-20 text-white">Top Creators</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
          {creators.map((creator) => (
            <div key={creator.id} className="bg-transparent rounded-lg overflow-hidden shadow-lg border border-white">
              <div className="relative flex justify-center items-center h-[250px]">
                <img
                  src={creator.img}
                  alt={creator.creator}
                  className="transform transition duration-500 ease-in-out hover:scale-110 object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                  <h2 className="font-bold text-xl">{creator.creator}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Creators;
