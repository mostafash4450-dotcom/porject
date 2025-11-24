export interface ScamCompany {
  id: string;
  name: string;
  nameEn: string;
  image: string;
  location: string;
  website: string;
  warnings: string[];
  description: string;
}

export const scamCompanies: ScamCompany[] = [
  {
    id: "amwal-capital-scam",
    name: "أموال المالية - Amwal Capital",
    nameEn: "Amwal Capital",
    image: "http://hunterofscams.com/images/amwalalmaliyah.jpg",
    location: "سانت فنسنت وجزر غرينادين",
    website: "amwalcapital.com",
    warnings: [
      "شركة غير مرخصة",
      "منصة تداول مزيفة",
      "رفض طلبات السحب",
      "مديرو حسابات وهميون"
    ],
    description: "شركة غير مرخصة تستخدم منصة تداول مزيفة ومتلاعب بها لسرقة أموال المستثمرين."
  },
  {
    id: "zenstox-scam",
    name: "زينستوكس",
    nameEn: "Zenstox",
    image: "http://hunterofscams.com/images/Zenstox.jpg",
    location: "سانت فنسنت وجزر غرينادين",
    website: "ar.zenstox.net",
    warnings: [
      "شركة غير مرخصة",
      "تلاعب في منصة التداول"
    ],
    description: "شركة وهمية تقدم منصة تداول مزيفة وتمنع عمليات السحب."
  },
  {
    id: "xlntrade-scam",
    name: "xlntrade",
    nameEn: "XLNTrade",
    image: "http://hunterofscams.com/images/Xlntade.png",
    location: "مارشال آيلاندز",
    website: "xlntrade.com",
    warnings: [
      "عدم وجود ترخيص",
      "منصة تداول مزيفة"
    ],
    description: "شركة نصب تعمل بدون ترخيص وتستخدم منصة تداول مزيفة."
  }
];

export interface LawFirm {
  id: string;
  name: string;
  location: string;
  rating: number;
  casesCompleted: number;
  trusted: boolean;
  warnings?: string;
}

export const trustedLawFirms: LawFirm[] = [
  {
    id: "law-trust-ltd",
    name: "Trust Law - ترست لو للمحاماة",
    location: "بريطانيا/ لندن",
    rating: 5,
    casesCompleted: 35401,
    trusted: true
  },
  {
    id: "legal-firm",
    name: "Fortis Legal",
    location: "بريطانيا/ لندن",
    rating: 5,
    casesCompleted: 28790,
    trusted: true
  },
  {
    id: "fx-law",
    name: "FX LAW",
    location: "أوكرانيا/ فيينا",
    rating: 4,
    casesCompleted: 12459,
    trusted: true
  }
];

export const untrustedLawFirms: LawFirm[] = [
  {
    id: "khalifa-al-kindi",
    name: "خليفة الكندي",
    location: "دبي، الإمارات",
    rating: 0,
    casesCompleted: 0,
    trusted: false,
    warnings: "سرقة أموال، احتيال في استرداد الأموال"
  },
  {
    id: "linida-ali",
    name: "ليندا علي",
    location: "لندن، المملكة المتحدة",
    rating: 0,
    casesCompleted: 0,
    trusted: false,
    warnings: "عنوان وهمي، رسوم مقدمة مرتفعة"
  },
  {
    id: "mohammed-ali-sadiq",
    name: "محمد علي الصادق",
    location: "6 Tunstall Drive, Accrington, Lancashire, BB5 5DG, England",
    rating: 0,
    casesCompleted: 0,
    trusted: false,
    warnings: "عنوان مكتب وهمي في بريطانيا، نصب واحتيال منظم"
  },
  {
    id: "majid-abdullah",
    name: "ماجد عبدالله محمد (المعروف سابقاً باسم ياسر حسن طلال)",
    location: "الرياض، السعودية",
    rating: 0,
    casesCompleted: 0,
    trusted: false,
    warnings: "تغيير الهوية للتهرب من الملاحقة القانونية، عدم وجود ترخيص"
  }
];
