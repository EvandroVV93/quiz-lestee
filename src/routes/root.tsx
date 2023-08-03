import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quizStore";

function Start() {
  const navigate = useNavigate();
  const quizStore = useQuizStore();

  const options = [
    {
      area: "Rosto",
      imagem:
        "https://lh3.googleusercontent.com/drive-viewer/AITFw-wkSdQNhj6oTfsfka034YInwWui_ySWGDLAICaextKO2lNkbY3IOlfEMFACsuqOzhKQZZvPzq07vD6fFIW7fz_ZMfv7vg=s1600",
      link: "/opcoes/rosto",
    },
    {
      area: "Corpo",
      imagem:
        "https://lh3.googleusercontent.com/drive-viewer/AITFw-yBQkSjEzQLuZF1SCTKRqza6_hVE0L9Ox93jY6EEfVXrzf5rLyma_qbH2E5f9Fd6UkZeAHK2PT8lTn63i7ga9trm2Pplw=s1600",
      link: "/opcoes/corpo",
    },
    {
      area: "Pelos",
      imagem:
        "https://lh3.googleusercontent.com/drive-viewer/AITFw-wxKmALovU3pGBLTYB0jQIVeZXw0nhAVCCqe-0uYr4uMiv4kW7rg1ZO2F6w4q_MCSxmZJ_PizeJ8eiXqxReLN6jkiWOjA=s1600",
      link: "/opcoes/pelos",
    },
    {
      area: "Cabelos",
      imagem:
        "https://lh3.googleusercontent.com/drive-viewer/AITFw-w9BzMzFafuRNvY_jqh3tUjQJBdOjsLot913fSDlFx7HPqUqkMPxYDbnV0q6kACNRIY-1hvUQHcDsvCypXd4fHs_7CTtQ=s1600",
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
