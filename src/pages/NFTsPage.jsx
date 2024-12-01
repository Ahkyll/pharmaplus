const artworks = [
  { id: 1, title: 'Bored Ape Yacht Club', img: '../images/sun.jfif', price: '50 ETH (~$80,000)', creator: 'Yuga Labs' },
  { id: 2, title: 'CryptoPunks', img: '../images/cyrpto.png', price: '100 ETH (~$160,000)', creator: 'Larva Labs' },
  { id: 3, title: 'Moonbirds', img: '../images/moon.jfif', price: '10-30 ETH (~$16,000 - $48, 000)', creator: 'PROOF Collective' },
  { id: 4, title: 'Moonbirds', img: '../images/moon.jfif', price: '10-30 ETH (~$16,000 - $48, 000)', creator: 'PROOF Collective' },
  { id: 5, title: 'Moonbirds', img: '../images/moon.jfif', price: '10-30 ETH (~$16,000 - $48, 000)', creator: 'PROOF Collective' },
  { id: 6, title: 'Moonbirds', img: '../images/moon.jfif', price: '10-30 ETH (~$16,000 - $48, 000)', creator: 'PROOF Collective' },
];

function NFTsPage() {
  return (
    <section className="p-1 bg-[url('../images/3.png')] bg-cover bg-center h-[200vh] bg-no-repeat text-center font-mono">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold m-20 text-white">NFT's Collection</h2>
        <ul className="flex space-x-10 justify-center pb-20">
          <li  className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
            PFP and Avatar NFTs
            </a>
          </li>
          <li className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
              Art NFTs
            </a>
          </li>
          <li className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
              Gaming NFTs
            </a>
          </li>
          <li className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
              Music NFTs
            </a>
          </li>
          <li className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
              Sports Collectibles
            </a>
          </li>
          <li className="hover:shadow-black shadow-xl">
            <a className="inline-block bg-[#283c5b] hover:bg-[#c64de4] text-white px-5 py-5 rounded font-medium text-sm border border-white">
              Virtual Real Estate
            </a>
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-20">
          {artworks.map((art) => (
            <div key={art.id} className="bg-transparent rounded-lg overflow-hidden border border-white hover:shadow-black shadow-lg">
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-[300px] object-cover p-8"
              />
              <div className="p-4 text-white">
                <h2 className="font-bold text-xl">{art.title}</h2>
                <p className="text-sm">{art.price}</p>
                <p className="text-sm">Creator: {art.creator}</p>
              </div>
            </div>
          ))}
          
            <a className="bg-transparent  text-white px-5 py-5 rounded font-medium text-sm ">
            </a>
          
      
          
     
        </div>
      </div>
    </section>
  );
}

export default NFTsPage;
