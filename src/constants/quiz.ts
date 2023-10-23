interface IQuizOptions {
  area: string;
  parte: string;
  imagem: string;
  value: string;
  desc: string;
  link: string;
}

interface IQuizOutcomes {
  area: string;
  parte: string;
  produtos: number[];
}

export const quizOptions: IQuizOptions[] = [
  {
    area: "Acne",
    value: "acne",
    parte: "rosto",
    desc: "Cravos e espinhas inflamadas",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131066/retrato-de-mulher-retocado-antes-e-depois_1_fbw9fe.jpg",
    link: "/rosto/acne",
  },
  {
    area: "Oleosidade",
    parte: "rosto",
    value: "oleosidade",
    desc: "Excesso de brilho e poros dilatados",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131107/retrato-natural-de-mulher-jovem_eetkms.jpg",
    link: "/rosto/oleosidade",
  },
  {
    area: "Manchas e cicatrizes",
    parte: "rosto",
    value: "manchas",
    desc: "Acnes ou lesões",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131256/homem-de-vista-lateral-com-problemas-de-pele_1_yngf9o.jpg",
    link: "/rosto/manchas",
  },
  {
    area: "Melasma",
    parte: "rosto",
    value: "melasma",
    desc: "Manchas escuras",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131290/portrait-british-woman_gmkfh5.jpg",
    link: "/rosto/melasma",
  },
  {
    area: "Ressecamento",
    parte: "rosto",
    value: "ressecamento",
    desc: "Pele seca, descamação",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131418/woman-dealing-with-rosacea-skin-condition-face_pgjfzj.jpg",
    link: "/rosto/ressecamento",
  },
  {
    area: "Linhas de expressão e rugas",
    parte: "rosto",
    value: "linhas",
    desc: "Envelhecimento, flacidez",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131461/before-after-portrait-mature-woman-retouched_lzpupk.jpg",
    link: "/rosto/linhas",
  },
  {
    area: 'Redução de medidas',
    parte: 'corpo',
    value: 'medidas',
    desc: "Gordura localizada, culote, pochete",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/q_60/v1695131497/close-up-abdomen-massage-concept_kuhmfr.jpg",
    link: "/corpo/medidas",
  },
  {
    area: 'Retenção de Líquido',
    parte: 'corpo',
    value: 'liquido',
    desc: "Inchaço e celulite",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131522/close-up-hands-making-heart-gesture_om1teb.jpg",
    link: "/corpo/liquido",
  },
  {
    area: 'Manchas e Cicatrizes',
    parte: 'corpo',
    value: 'manchas',
    desc: "Lesões de acne e manchas",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131598/young-woman-having-skin-allergy_dbcx6z.jpg",
    link: "/corpo/manchas",
  },
  {
    area: 'Prevenção de sinais',
    parte: 'corpo',
    desc: "Flacidez e Rugas do Sono",
    value: 'sinais',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131626/young-woman-hand-her-body_jccnnk.jpg",
    link: "/corpo/sinais",
  },
  {
    area: 'Acne',
    parte: 'corpo',
    value: 'acne',
    desc: "Cravos e espinhas",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131696/young-woman-showing-acne-her-shoulders_mhotmy.jpg",
    link: "/corpo/acne",
  },
  {
    area: 'Estresse e ansiedade',
    parte: 'corpo',
    value: 'estresse',
    desc: "Tensão e irritabilidade",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131720/beauty-spa_ddncnn.jpg",
    link: "/corpo/estresse",
  },
  {
    area: 'Remoção de pelos definitiva',
    parte: 'pelos',
    value: 'remocao',
    desc: "Fim dos pelos indesejados",
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131777/bela-jovem-deitada-no-tecido-de-la_ed8ycq.jpg",
    link: '/pelos/remocao'
  },
  {
    area: 'Foliculite e pelos encravados',
    parte: 'pelos',
    value: 'foliculite',
    desc: 'Inflamação e pelos encravados',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695132056/close-up-de-shirtless-restolho-homem-contra-fundo-branco_xwvbt9.jpg",
    link: '/pelos/foliculite'
  },
  {
    area: 'Manchas',
    parte: 'pelos',
    value: 'manchas',
    desc: 'Escurecidas por lâminas ou Cera',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131928/linda-mulher-caucasiana-com-toalha-contra-um-fundo-branco_uevcqv.jpg",
    link: '/pelos/manchas'
  },
  {
    area: 'Alopécia',
    parte: 'cabelos',
    value: 'alopecia',
    desc: 'Falhas no couro cabeludo',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695130868/woman-getting-hair-loss-treatment-clinic_mf6xgb.jpg",
    link: '/cabelos/alopecia'
  },
  {
    area: 'Calvície',
    parte: 'cabelos',
    value: 'calvicie',
    desc: 'Perda permanente de cabelo',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695130994/adult-male-having-balding-problems_g4wg1z.jpg",
    link: '/cabelos/calvicie'
  },
  {
    area: 'Queda de Cabelo Intensa',
    parte: 'cabelos',
    value: 'queda',
    desc: 'Perda excessiva de fios',
    imagem:
      "https://res.cloudinary.com/dx2t8se3j/image/upload/q_60/v1695131025/mulher-de-close-up-com-emaranhados_ynjzlp.jpg",
    link: '/cabelos/queda'
  }
];

export const quizOutcomes: IQuizOutcomes[] = [
  {
    area: "Acne",
    parte: "rosto",
    produtos: [1947, 1938]
  },
  {
    area: "Oleosidade",
    parte: "rosto",
    produtos: [1947, 1938]
  },
  {
    area: "Manchas",
    parte: "rosto",
    produtos: [1989]
  },
  {
    area: "Melasma",
    parte: "rosto",
    produtos: [1985]
  },
  {
    area: "Ressecamento",
    parte: "rosto",
    produtos: [1948, 1947]
  },
  {
    area: "Linhas",
    parte: "rosto",
    produtos: [1987]
  },
  {
    area: "Medidas",
    parte: "corpo",
    produtos: [1993]
  },
  {
    area: "Liquido",
    parte: "corpo",
    produtos: [1975]
  },
  {
    area: "Manchas",
    parte: "corpo",
    produtos: [1967, 1991]
  },
  {
    area: "Sinais",
    parte: "corpo",
    produtos: [1991]
  },
  {
    area: "Acne",
    parte: "corpo",
    produtos: [1971, 1947]
  },
  {
    area: "Estresse",
    parte: "corpo",
    produtos: [1967, 1973]
  },
  {
    area: "Remocao",
    parte: "pelos",
    produtos: [1885, 1967]
  },
  {
    area: "Foliculite",
    parte: "pelos",
    produtos: [1885, 1967]
  },
  {
    area: "Manchas",
    parte: "pelos",
    produtos: [1885, 1967]
  },
  {
    area: "Alopecia",
    parte: "cabelos",
    produtos: [1977, 1947]
  },
  {
    area: "Calvicie",
    parte: "cabelos",
    produtos: [1977, 1947]
  },
  {
    area: "Queda",
    parte: "cabelos",
    produtos: [1977, 1947]
  }
]
