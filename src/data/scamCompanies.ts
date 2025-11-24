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
