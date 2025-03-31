export const documentData = [
  {
    id: 1,
    document: "Veterinary Nutrition - User Guide",
    languages: {
      French: {
        status: "On validation",
        date: "Tue, 21 Nov 2023 08:26",
        executors: ["KK", "KK"],
        progress: [true, true, true, "partial", false],
      },
      English: {
        status: "Verified by linguist",
        date: "Tue, 21 Nov 2023 08:26",
        executors: ["KK", "KK"],
        progress: [true, true, "partial", false, false],
      },
      German: {
        status: "Preparing for AI translation",
        date: "As soon as possible",
        executors: ["M"],
        progress: ["partial", false, false, false, false],
      },
      // Add more languages and their respective data here
    },
  },
  {
    id: 2,
    document: "Veterinary Nutrition - Product Label",
    languages: {
      Spanish: {
        status: "On AI translation",
        date: "As soon as possible",
        executors: ["M"],
        progress: [true, true, true, false, false],
      },
      English: {
        status: "On AI translation",
        date: "Wed, 01 Nov 2023 16:20",
        executors: ["KK", "KK"],
        progress: [true, true, true, false, false],
      },
      Italian: {
        status: "On AI translation",
        date: "Fri, 27 Oct 2023 06:00",
        executors: ["KK", "KK"],
        progress: [true, true, true, false, false],
      },
      // Add more languages and their respective data here
    },
  },
  {
    id: 3,
    document: "doc1",
    languages: {
      Spanish: {
        status: "On AI translation",
        date: "As soon as possible",
        executors: ["M"],
        progress: ["partial", false, false, false, false],
      },
      English: {
        status: "On AI translation",
        date: "Wed, 01 Nov 2023 16:20",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
      Italian: {
        status: "On AI translation",
        date: "Fri, 27 Oct 2023 06:00",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
      // Add more languages and their respective data here
    },
  },
  {
    id: 4,
    document: "doc2",
    languages: {
      Spanish: {
        status: "On AI translation",
        date: "As soon as possible",
        executors: ["M"],
        progress: ["partial", false, false, false, false],
      },
      English: {
        status: "On AI translation",
        date: "Wed, 01 Nov 2023 16:20",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
      Italian: {
        status: "On AI translation",
        date: "Fri, 27 Oct 2023 06:00",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
      // Add more languages and their respective data here
    },
  },
  {
    id: 5,
    document: "doc3",
    languages: {
      Spanish: {
        status: "On AI translation",
        date: "As soon as possible",
        executors: ["M"],
        progress: ["partial", false, false, false, false],
      },
      English: {
        status: "On AI translation",
        date: "Wed, 01 Nov 2023 16:20",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
      Italian: {
        status: "On AI translation",
        date: "Fri, 27 Oct 2023 06:00",
        executors: ["KK", "KK"],
        progress: ["partial", false, false, false, false],
      },
    },
  },
  // Add more documents here
];

export const projects = [
  {
    id: 1,
    name: "Veterinary Nutrition",
    description: "A project focused on veterinary nutrition materials.",
    documents: [1, 2], // References to document IDs in `documentData`
  },
  {
    id: 2,
    name: "Pet Care Essentials",
    description: "A project covering essential pet care guides and labels.",
    documents: [], // Add document IDs as needed
  },
  {
    id: 123,
    name: "Pet Health and Wellness",
    description: "A project dedicated to pet health and wellness information.",
    documents: [3, 4, 5], // Add document IDs as needed
  },
];

export const translations = [
  {
    id: 1,
    type: "header",
    source: "BLOCK 1",
    portuguese: "BLOCK 1",
  },
  {
    id: 2,
    type: "header",
    source: "CAT",
    portuguese: "CAT",
  },
  {
    id: 3,
    type: "header",
    source: "KITTEN STERILISATION",
    portuguese: "KITTEN STERILISATION",
  },
  {
    id: 4,
    type: "paragraph",
    source: "Considering sterilisation?",
    portuguese: "Está a pensar na esterilização?",
  },
  {
    id: 5,
    type: "heading",
    source: "THINKING ABOUT STERILISATION?",
    portuguese: "ESTÁ A PENSAR NA ESTERILIZAÇÃO?",
  },
  {
    id: 6,
    type: "paragraph",
    source:
      "Your kitten is growing, so it could be time to start discussing with your vet about sterilisation. This is an important step. Some owners want to sterilise right away, others prefer to wait for different reasons. Either way, it should be well thought through as sterilisation has an impact on nutrition. Your vet can advise you on the best time to neuter your kitten. However, we do not recommend neutering until your kitten is 6 months old.",
    portuguese:
      "O seu gatinho está a crescer, por isso poderia ser oportuno começar a discutir a esterilização com o seu médico veterinário. Esta é uma etapa importante. Alguns tutores querem esterilizar os seus animais de estimação imediatamente; outros preferem aguardar por motivos diferentes. Em ambos os casos, a esterilização tem que ser bem pensada porque tem um impacto na nutrição. Pode consultar o seu médico veterinário para aconselhamento sobre o melhor momento para esterilizar o seu gatinho. No entanto, não recomendamos a esterilização do seu gatinho antes dos 6 meses.",
  },
  {
    id: 7,
    type: "cta",
    source: "Discover our sterilised kitten products",
    portuguese: "Descubra os nossos produtos para gatinhos esterilizados",
  },
  {
    id: 8,
    type: "feature",
    source: "STRONG IMMUNE SYSTEM",
    portuguese: "SISTEMA IMUNITÁRIO FORTE",
  },
  {
    id: 9,
    type: "feature",
    source: "GROWTH & WEIGHT CONTROL",
    portuguese: "CRESCIMENTO E CONTROLO DO PESO",
  },
  {
    id: 10,
    type: "feature",
    source: "MICROBIOME SUPPORT",
    portuguese: "SUPORTE AO MICROBIOMA",
  },
  {
    id: 11,
    type: "link",
    source: "See more",
    portuguese: "Ver mais",
  },
  {
    id: 12,
    type: "heading",
    source: "DID YOU KNOW?",
    portuguese: "SABIA QUE?",
  },
  {
    id: 13,
    type: "paragraph",
    source:
      "After neutering or spaying, your kitten's energy requirements decrease by around 30% but their appetite increases. They'll need less calories to stay in great shape.",
    portuguese:
      "Após a esterilização, as necessidades energéticas do seu gatinho diminuem cerca de 30%, mas o seu apetite aumenta. Precisará de menos calorias para se manter em forma.",
  },
  {
    id: 14,
    type: "heading",
    source: "3 golden rules for taking care of your newly sterilised pet",
    portuguese:
      "3 regras de ouro para cuidar do seu animal de estimação recém-esterilizado",
  },
  {
    id: 15,
    type: "list-item",
    source: "1- Lots of rest the first few days",
    portuguese: "1- Deixe-o descansar muito nos primeiros dias",
  },
  {
    id: 16,
    type: "paragraph",
    source:
      "They have had major surgery, and it has been a rough week for them, so be gentle with your cat.",
    portuguese:
      "Sofreu uma cirurgia importante, e foi uma semana agitada para ele, por isso seja delicado com ele.",
  },
  {
    id: 17,
    type: "list-item",
    source: "2- Take care of their scar",
    portuguese: "2- Cuide da sua cicatriz",
  },
  {
    id: 18,
    type: "paragraph",
    source: "Especially as they start to heal. Neck cones come in handy.",
    portuguese:
      "Especialmente quando começar a curar. Pode colocar um colar no seu animal de estimação para protegê-la.",
  },
  {
    id: 19,
    type: "list-item",
    source: "3- Watch out for weight gain",
    portuguese: "3- Preste atenção ao aumento de peso",
  },
  {
    id: 20,
    type: "paragraph",
    source:
      "Switch to a special kibble for sterilised cats to help keep their weight in check.",
    portuguese:
      "Mude para croquetes especiais para gatos esterilizados para ajudar a manter o seu peso.",
  },
  {
    id: 21,
    type: "heading",
    source: "LAST TIP",
    portuguese: "ÚLTIMO CONSELHO",
  },
  {
    id: 22,
    type: "paragraph",
    source:
      "Weigh your cat once a week for at least two months post-surgery to be sure their weight stays stable. After that, monthly weigh-ins work. A 200-g gain in a 3,5-kg cat is equivalent to an extra 3,5 kg on a grown man!",
    portuguese:
      "Pese o seu gato uma vez por semana durante pelo menos dois meses após a cirurgia para se asseguar de que o seu peso esteja estável. Depois deste período, basta pesá-lo uma vez por mês. Um aumento de 200 g num gato de 3,5 kg equivale a um aumento de 3,5 kg num homem adulto!",
  },
];
