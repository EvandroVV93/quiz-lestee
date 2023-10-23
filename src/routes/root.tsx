import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";

function Start() {
  const navigate = useNavigate();
  const quizStore = useQuizStore();

  const options = [
    {
      area: "Rosto",
      imagem:
        "https://res.cloudinary.com/dx2t8se3j/image/upload/q_50/retrato-natural-de-mulher-jovem_eetkms.jpg",
      link: "/opcoes/rosto",
    },
    {
      area: "Corpo",
      imagem:
        "https://res.cloudinary.com/dx2t8se3j/image/upload/q_50/close-up-abdomen-massage-concept_kuhmfr.jpg",
      link: "/opcoes/corpo",
    },
    {
      area: "Pelos",
      imagem:
        "https://res.cloudinary.com/dx2t8se3j/image/upload/q_50/bela-jovem-deitada-no-tecido-de-la_ed8ycq.jpg",
      link: "/opcoes/pelos",
    },
    {
      area: "Cabelos",
      imagem:
        "https://res.cloudinary.com/dx2t8se3j/image/upload/q_50/adult-male-having-balding-problems_g4wg1z.jpg",
      link: "/opcoes/cabelos",
    },
  ];

  const handleFirstStep = (areaDoCorpo: string, link: string) => {
    quizStore.setAreaDoCorpo(areaDoCorpo);
    navigate(link);
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle p-5 fixed top-0 right-0 left-0 mx-auto mb-12 bg-white">
        <h2
          className="text-center tracking-wider sm:text-2xl text-lg uppercase text-[#d7a3ab] "
          id="poppins-text"
        >
          Pergunta 1
        </h2>
        <h1
          className="sm:text-4xl text-xl my-5 text-[#384967]"
          id="playfair-text"
        >
          QUAL REGIÃO VOCÊ GOSTARIA DE CUIDAR?
        </h1>
      </div>
      <div className="w-full bg-transparent mt-40 mb-5 overflow-auto flex flex-row flex-wrap mx-auto justify-center gap-4">
        {options.map((option) => {
          return (
            <div
              className="w-60 bg-transparent h-96 cursor-pointer border-[#FFF5F4] border-dashed border-2 flex flex-col justify-center hover:bg-[#FFF5F4] ease-in-out transition-colors duration-300"
              onClick={() => handleFirstStep(option.area, option.link)}
              key={option.area}
            >
              <div className="w-40 h-40  flex justify-center align-middle items-center self-center mb-10">
                <img
                  className="w-40 h-full rounded-full object-cover"
                  src={option.imagem}
                  alt={option.area}
                  width={160}
                  height={160}
                />
              </div>
              <span id="poppins-text" className="text-md text-[#444444]">
                {option.area}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Start;
