import { useGetPokemonByIdQuery, useGetPokemonByNameQuery } from "../redux/features/api/baseApi";

const Chat = () => {
  // const { data, isLoading ,isError,error} = useGetPokemonByNameQuery();
  const { data, isLoading ,isError,error} = useGetPokemonByIdQuery(1);
  console.log(data);

  if(isLoading){
    return <p className="animate-spin w-fit aspect-square bg-red-500 rounded-full text-white">---O---</p>
  }
  if(isError){
    return <p className="animate-spin w-fit aspect-square bg-red-500 rounded-full text-white">{error}</p>
  }
  return (
    <div className="p-5 bg-gradient-to-br from-rose-100 to-green-100">
      <h1 className="font-semibold text-xl text-center  bg-gradient-to-tr from-purple-600 to-rose-400 w-fit p-3 rounded-se-2xl rounded-es-2xl text-white mx-auto">
        Pokedex
      </h1>
      <hr />
      <div className="border rounded-xl my-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
        {/* {
           data?.results.map((poke, idx) => (
              <p key={idx} className="font-semibold text-primary cursor-pointer">
                {idx + 1}
                {") "}
                {poke?.name}
              </p>
            ))} */}
            <div className="text-center">

            <img src={`${data?.sprites?.front_default} `} alt="pokemon" className="w-fit mx-auto bg-white rounded-full" />
            <p>{data?.species.name}</p>
            </div>

      </div>
    </div>
  );
};

export default Chat;
