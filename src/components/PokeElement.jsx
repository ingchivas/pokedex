import pokeball from "public/pokemon.png"
import Image from "next/image";

const PokeElement = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="basis-full h-16 bg-green-400">
            <span className="flex flex-row h-16 rounded-3xl items-center  bg-red-600  ">
                <Image src={pokeball}className="h-full w-full "/> 
                <h3 className="font-serif w-full py-0 bg-green-500"> sinnoh pokedex</h3>
            </span>
        </div>
        <div className="basis-full h-54 bg-green-400">
            sdf
        </div>
        <div className="basis-full h-10 bg-green-400">
            sdf
        </div>
      </div>
      
    );
  }
  
  export default PokeElement;