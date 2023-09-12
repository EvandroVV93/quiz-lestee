import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuizStore } from "../store/quizStore";
import { quizOptions } from "../constants/quiz";

type Inputs = {
  nome: string;
  email: string;
  areaDoCorpo: string;
  tratamento: string;
};

export default function Submit() {
  const navigate = useNavigate();
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const { tratamento } = useParams();
  const quizStore = useQuizStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      tratamento: quizStore.tratamento,
      areaDoCorpo: quizStore.areaDoCorpo,
    },
  });

  const submitToGoogleForms = async (data: Inputs) => {
    setIsEmailSent(true);
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("email", data.email);
    formData.append("area", data.areaDoCorpo);
    formData.append("tratamento", data.tratamento);

    await fetch("https://sheetdb.io/api/v1/49b3ksq6hplki?mode=RAW", {
      method: "POST",
      headers: {
        Authorization: "Bearer l8njgpxneukeoaikb4raechpgzglra6avzadtoia",
      },
      body: formData,
    }).finally(() => {
      setIsEmailSent(false);
    });
  };

  const redirectTo = quizOptions.find(
    (item) => item.value === tratamento
  )?.value;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await submitToGoogleForms(data)
      .then(() => {
        navigate(`/final/${quizStore.areaDoCorpo.toLowerCase()}/${redirectTo}`);
      })
      .catch(() => {
        alert(
          "Ocorreu um erro ao enviar o formulário, tente novamente mais tarde."
        );
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center align-middle">
        <h2
          className="text-center text-2xl uppercase text-[#d7a3ab] font-bold"
          id="poppins-text"
        ></h2>
        <h1 className="text-2xl mt-2 text-[#384967]" id="playfair-text">
          Falta pouco…
        </h1>
      </div>
      <div className="sm:w-80 w-full bg-transparent sm:h-full  mt-5 mb-5 overflow-y-auto grid sm:grid-cols-1 mx-auto align-middle">
        <div className="flex flex-col justify-center align-middle">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 mb-5">
              <label
                className="text-[#384967] text-md text-left"
                htmlFor="nome"
                id="poppins-text"
              >
                Qual o seu nome?
              </label>
              <input
                {...register("nome", { required: "Campo obrigatório" })}
                className="border-2 border-[#384967] border-t-0 border-l-0 border-r-0 p-0 my-0 focus:outline-none"
                id="nome"
                name="nome"
                type="text"
                aria-invalid={errors.nome ? "true" : "false"}
                placeholder="Como você se chama?"
              />
              {errors.nome?.type === "required" && (
                <p role="alert" className="text-red-500 text-left -mt-1">
                  {errors.nome?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label
                id="poppins-text"
                className="text-[#384967] text-md text-left"
                htmlFor="email"
              >
                Escreva o seu e-mail
              </label>
              <input
                {...register("email", {
                  required: "Campo obrigatório",
                })}
                className="border-2 border-[#384967] border-t-0 border-l-0 border-r-0 p-0 focus:outline-none my-0"
                id="email"
                name="email"
                type="email"
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="Digite seu email"
              />
              {errors.email?.type === "required" && (
                <p role="alert" className="text-red-500 text-left -mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <input
              {...register("areaDoCorpo")}
              hidden
              id="areaDoCorpo"
              name="areaDoCorpo"
              type="text"
            />

            <input
              {...register("tratamento")}
              hidden
              id="tratamento"
              name="tratamento"
              type="text"
            />

            <input
              value={isEmailSent ? "Enviando..." : "Enviar"}
              type="submit"
              disabled={isEmailSent}
              id="poppins-text"
              className={`bg-[#D7A3AB] text-white text-md uppercase p-[20px] rounded-sm w-full my-5 mx-auto cursor-pointer ${
                isEmailSent ? "animate-pulse" : ""
              }`}
            />
          </form>
        </div>
      </div>
    </>
  );
}
