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
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-za02-tRyF1aanYvJwyFVnrbtTPjzhmz49lFBuG5FLDZbn0u8qy7LqRw7LRWqYfl3Kn9EOIXJXZG3Qu7W3p4VIzASQX=s1600",
    link: "/rosto/acne",
  },
  {
    area: "Oleosidade",
    parte: "rosto",
    value: "oleosidade",
    desc: "Excesso de brilho e poros dilatados",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-wkSdQNhj6oTfsfka034YInwWui_ySWGDLAICaextKO2lNkbY3IOlfEMFACsuqOzhKQZZvPzq07vD6fFIW7fz_ZMfv7vg=s1600",
    link: "/rosto/oleosidade",
  },
  {
    area: "Manchas e cicatrizes",
    parte: "rosto",
    value: "manchas",
    desc: "Acnes ou lesões",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-whwW-vqbjG_2EEfYY-cL4BL4-kBD9RdYuLwSYf26jHQO_wh4n_aoW9WRUYkvMaIk0cbyU7WnNIEw7zl8ep66ZNA9QuFw=s1600",
    link: "/rosto/manchas",
  },
  {
    area: "Melasma",
    parte: "rosto",
    value: "melasma",
    desc: "Manchas escuras",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xDCm4xrbxXQTZtc9qTjiSreXrSASQ_6R0i1pcpL4VreD7x43oud_vCui2XBUx_2sFqKlq6sz1eXDL_xBMGVaYGPbOGvg=s1600",
    link: "/rosto/melasma",
  },
  {
    area: "Ressecamento",
    parte: "rosto",
    value: "ressecamento",
    desc: "Pele seca, descamação",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zyymOxipzdrER9YINx5_ntJ9dw4uV6WtP2nZGnYaB4OCA7m2aqJ2WpK3wF4mZzgbkEYZy4ea4QGeyQ08ENbFnqEMMc1A=s1600",
    link: "/rosto/ressecamento",
  },
  {
    area: "Linhas de expressão e rugas",
    parte: "rosto",
    value: "linhas",
    desc: "Envelhecimento, flacidez",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xoJmv8qLeH4DG7OWZqRKBueqCLIOGPmXJplbXsFIuddWzVMCyFl_3oOESRttAUaS_c0yvm0-4RxXcCOKqo5QrfnA-M=s1600",
    link: "/rosto/linhas",
  },
  {
    area: 'Redução de medidas',
    parte: 'corpo',
    value: 'medidas',
    desc: "Gordura localizada, culote, pochete",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-yBQkSjEzQLuZF1SCTKRqza6_hVE0L9Ox93jY6EEfVXrzf5rLyma_qbH2E5f9Fd6UkZeAHK2PT8lTn63i7ga9trm2Pplw=s1600",
    link: "/corpo/medidas",
  },
  {
    area: 'Retenção de Líquido',
    parte: 'corpo',
    value: 'liquido',
    desc: "Inchaço e celulite",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-y61ZtK3i4H0oGeqtExkWd2BH08b8y35iQQKNGo0qbccRdATcQRM3rnRyaGqUH6T-_2wYoKy8gWBcqyA-7hry5s4EKO=s1600",
    link: "/corpo/liquido",
  },
  {
    area: 'Manchas e Cicatrizes',
    parte: 'corpo',
    value: 'manchas',
    desc: "Lesões de acne e manchas",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-y0zhZD93sURY0-SlDFPPFtpMhSEifk3XH2DKeyyqyKOPZSBXoAUKOBbc7iSX4Z8AunWN2H4-ZaSAIBgCHhRjBsUmTqqQ=s1600",
    link: "/corpo/manchas",
  },
  {
    area: 'Prevenção de sinais',
    parte: 'corpo',
    desc: "Flacidez e Rugas do Sono",
    value: 'sinais',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-xZuw7ivc9Kkm7PTOBACsW-LKQ3rpDRtJHgj_6M-9sNtfj5wiEKwfNj0S2oww9uKwfhJFKkLVLwdWw8oaOYdl6iPwqvtQ=s1600",
    link: "/corpo/sinais",
  },
  {
    area: 'Acne',
    parte: 'corpo',
    value: 'acne',
    desc: "Cravos e espinhas",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-yHAoAa_pW2Rr3uSO9ecjgRh8NAYEGGkUS0Cl-7EJB16p5J9UGCXvuyh4iRXeh4_onucBzQrFd6Tp45ylvyhPl6lQ_f=s1600",
    link: "/corpo/acne",
  },
  {
    area: 'Estresse e ansiedade',
    parte: 'corpo',
    value: 'estresse',
    desc: "Tensão e irritabilidade",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zXeXthAKmyewD1JeTdHSstwrGduzBGCASb36OUb4O-Q6lSEWB4RLeuzOMyTIOqQRwnwCUx7mE3RDqeqCRMS2cGHpjXgw=s1600",
    link: "/corpo/estresse",
  },
  {
    area: 'Remoção de pelos definitiva',
    parte: 'pelos',
    value: 'remocao',
    desc: "Fim dos pelos indesejados",
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-wxKmALovU3pGBLTYB0jQIVeZXw0nhAVCCqe-0uYr4uMiv4kW7rg1ZO2F6w4q_MCSxmZJ_PizeJ8eiXqxReLN6jkiWOjA=s1600",
    link: '/pelos/remocao'
  },
  {
    area: 'Foliculite e pelos encravados',
    parte: 'pelos',
    value: 'foliculite',
    desc: 'Inflamação e pelos encravados',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zIRwt_VF7awKkbA2r4IlwV-N-ubx6c9a_yFon5u4nC58UzVM0l7oypenQKImeG0nGfr8Didy7NmGKV9q1DpAUSSgZ_AQ=s1600",
    link: '/pelos/foliculite'
  },
  {
    area: 'Manchas',
    parte: 'pelos',
    value: 'manchas',
    desc: 'Escurecidas por lâminas ou Cera',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-w0QIZOrAYLTlYO1zjy5fz-KSy3HAC9H6fM9olhytBIpHi3LVnHSqMUm74XIbXoyAbY0b6lFItP6JyOJQjzowYwHce9iw=s1600",
    link: '/pelos/manchas'
  },
  {
    area: 'Alopécia',
    parte: 'cabelos',
    value: 'alopecia',
    desc: 'Falhas no couro cabeludo',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-wuJ9eY-FNW7P2hLXXBo9EXP1M94LUsgblz-LqYb-9KHtZTsY8IiAjuhQ3l69rIbHmnbuX5JXcieUVUu_LVS9PUKfgsIg=s1600",
    link: '/cabelos/alopecia'
  },
  {
    area: 'Calvície',
    parte: 'cabelos',
    value: 'calvicie',
    desc: 'Perda permanente de cabelo',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-w9BzMzFafuRNvY_jqh3tUjQJBdOjsLot913fSDlFx7HPqUqkMPxYDbnV0q6kACNRIY-1hvUQHcDsvCypXd4fHs_7CTtQ=s1600",
    link: '/cabelos/calvicie'
  },
  {
    area: 'Queda de Cabelo Intensa',
    parte: 'cabelos',
    value: 'queda',
    desc: 'Perda excessiva de fios',
    imagem:
      "https://lh3.googleusercontent.com/drive-viewer/AITFw-zFFQFqrL2A_4XBAIK3l3EyRv2zpxwqNb4a-v13YZ5fNSRHNybn98pufx6hSBdMQwqQf2tCriWGxOhSs0JypnqjHgYzSQ=s1600",
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
