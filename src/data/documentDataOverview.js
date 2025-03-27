export const documentData = [
  {
    document: "BJ-M-CAT-VET-DRY_VHN-ANALLERGENIC_2023-10-31_J",
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
  // Add more documents here
];

export const translations = [
  {
    id: 1,
    source: "IMPORTANT INFORMATION",
    french: "INFORMATIONS IMPORTANTES",
  },
  {
    id: 2,
    source:
      "It is recommended that advice from a veterinarian be sought before use and before extending the period of use.",
    french:
      "Il est recommandé de consulter un vétérinaire avant utilisation ou prolongation de la période d’utilisation",
  },
  {
    id: 3,
    source: "DIGESTIVE SUPPORT",
    french: "SOUTIEN DIGESTIF",
  },
  {
    id: 4,
    source:
      "A SCIENCE-BASED FORMULA FOR YOUR CAT WITH GASTROINTESTINAL PROBLEMS",
    french:
      "UNE FORMULE DÉVELOPPÉE SCIENTIFIQUEMENT POUR VOTRE CHAT AYANT DES PROBLÈMES GASTRO-INTESTINAUX",
  },
  {
    id: 5,
    source: "High palatability to satisfy decreased appetites.",
    french:
      "Haute appétence pour satisfaire les animaux présentant une perte d’appétit.",
  },
];
