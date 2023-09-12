import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useQuizStore } from "../store/quizStore";
import { quizOptions } from "../constants/quiz";

function Partes() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<boolean>(false);
  const quizStore = useQuizStore();
  const { parte } = useParams();

  const handleSelectTratamento = (tratamento: string) => {
    const areaDoCorpo = quizOptions.find(
      (option) => option.parte === parte
    )?.parte;

    const tratamentoValue = quizOptions.find(
      (option) => option.area === tratamento
    )?.area;

    quizStore.setTratamento(tratamentoValue!);
    quizStore.setAreaDoCorpo(areaDoCorpo?.toLocaleUpperCase() || "");

    const value = quizOptions.find(
      (option) => option.area === tratamento
    )?.value;
    navigate(`/submit/${value}`);
  };

  const Question2 = ({}) => {
    const navigate = useNavigate();

    const options = [
      {
        area: "Sim",
        imagem: "/yes.png",
      },
      {
        area: "Não",
        imagem: "/no.png",
      },
    ];

    if (selected) {
      return null;
    }

    return (
      <>
        <div className="flex flex-col justify-center align-middle p-5 fixed top-0 right-0 left-0 mx-auto mb-12 bg-white">
          <h2
            className="text-center tracking-wider sm:text-2xl text-lg uppercase text-[#d7a3ab]"
            id="poppins-text"
          >
            Pergunta 2
          </h2>
          <h1 className="text-4xl my-5 text-[#384967]" id="playfair-text">
            VOCÊ TEM ALERGIAS?
          </h1>
          <p className="text-[#384967]" id="poppins-text">
            Alimentares ou de produtos cosméticos
          </p>
        </div>
        <div className=" w-full bg-transparent sm:h-full mt-40 mb-5 overflow-hidden justify-center flex flex-row mx-auto align-middle gap-4">
          {options.map((option) => {
            return (
              <div
                className="w-60 bg-transparent h-96 cursor-pointer border-[#FFF5F4] border-dashed border-2 flex flex-col justify-center hover:bg-[#FFF5F4] ease-in-out transition-colors duration-300"
                onClick={() => setSelected(true)}
                key={option.area}
              >
                <div className="w-40 h-40 flex justify-center align-middle items-center self-center mb-10">
                  <img
                    className="w-11 h-full rounded-full object-contain"
                    src={option.imagem}
                    alt={option.area}
                    width={200}
                    height={200}
                  />
                </div>
                <span id="poppins-text" className="text-md text-[#444444]">
                  {option.area}
                </span>
              </div>
            );
          })}
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            id="poppins-text"
            className="bg-[#D7A3AB] text-white text-md py-3 px-6 rounded-[2px] uppercase w-1/3 mx-auto cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </>
    );
  };

  if (selected) {
    return (
      <>
        <div className="flex flex-col justify-center align-middle">
        <h2
            className="text-center tracking-wider sm:text-2xl text-lg uppercase text-[#d7a3ab]"
            id="poppins-text"
          >
            Pergunta 3
          </h2>
          <h1 className="text-4xl my-5 text-[#384967] uppercase" id="playfair-text">
          O que te incomoda hoje?
          </h1>
          <p className="text-[#384967]" id="poppins-text">
          Algo em você que gostaria de melhorar
          </p>
        </div>
        <div className="w-full bg-transparent mt-10 mb-5 overflow-auto grid sm:grid-cols-3 grid-cols-1 mx-auto justify-items-center gap-4">
          {quizOptions
            .filter((item) => item.parte === parte)
            .map((option) => {
              return (
                <div
                  className="w-64 p-2 bg-transparent h-96 cursor-pointer border-[#FFF5F4] border-dashed border-2 flex flex-col justify-center hover:bg-[#FFF5F4] ease-in-out transition-colors duration-300"
                  onClick={() => handleSelectTratamento(option.area)}
                  key={option.area}
                >
                  <div className="w-40 h-40 flex justify-center align-middle items-center self-center mb-10">
                    <img
                      className="w-40 h-full rounded-full object-cover"
                      src={option.imagem}
                      alt={option.area}
                      width={200}
                      height={200}
                    />
                  </div>
                  <p id="poppins-text" className="text-md mb-2 text-[#444444]">
                    {option.area}
                  </p>
                  <p id="poppins-text" className="text-sm text-[#636363]">
                    {option.desc}
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <button
            onClick={() => navigate(-1)}
            id="poppins-text"
            className="bg-[#D7A3AB] text-white text-md py-3 px-6 rounded-[2px] uppercase w-1/3 mx-auto cursor-pointer"
          >
            Voltar
          </button>
        </div>
      </>
    );
  } else {
    return <Question2 />;
  }
}

export default Partes;
