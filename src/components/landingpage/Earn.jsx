function Earn() {
  return (
    <section className="pt-20 bg-[url('../images/2.png')] bg-cover bg-center h-[100vh] bg-no-repeat text-center">
      <div className="text-white mt-40 p-10 font-mono bg-[#0a051f] rounded-3xl container mx-auto flex justify-between items-center">
        <ul className="flex space-x-10">
          <li className="font-extrabold text-6xl pr-10 border-r-2 border-white">How to Earn NFTs?</li>
          <li className="font-semibold text-4xl pr-10 border-r-2 border-white">
            Marketplace
            <p className="text-xl pt-5">Earn NFTs by purchasing and reselling them on marketplaces for a profit.</p>
          </li>
          <li className="font-semibold text-4xl">
            Create
            <p className="text-xl pt-5">Create your own digital art, mint it as an NFT, and sell it on NFT platforms.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Earn;
