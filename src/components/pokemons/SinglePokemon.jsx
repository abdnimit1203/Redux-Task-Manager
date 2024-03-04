import React, { useState } from 'react';
import { useGetPokemonByIdQuery } from '../../redux/features/api/baseApi';
import pokeLoadergif from "/pokemongo.gif"
import Modal from '../ui/Modal';
const SinglePokemon = ({pokeID}) => {
    const {data,isLoading } = useGetPokemonByIdQuery(pokeID)
    const [isOpen,setIsOpen] = useState(false)
    if(isLoading){
        return <img src={pokeLoadergif} alt="loading..." className=' rounded-full w-full lg:w-32 lg:mx-auto ' />
    }
    
const handleTaskModal =() =>{
    setIsOpen(!isOpen)

  }
    return (
        <div className="text-center my-4 hover:scale-110 cursor-pointer hover:font-semibold transition duration-200" onClick={handleTaskModal}>
            <Modal title={"Pokemon Name"} isOpen={isOpen}>
                hello
            </Modal>
        <img src={`${data?.sprites?.front_default} `} alt="pokemon" className="w-fit mx-auto bg-white rounded-full hover:shadow-xl hover:shadow-red-500 transition" />
        <p className='hover:text-red-700'>{data?.species.name}</p>
        </div>

    );
};

export default SinglePokemon;