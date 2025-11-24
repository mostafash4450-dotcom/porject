export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "forex-scam-recovery-guide",
    title: "كيفية استرجاع أموالك من شركات الفوركس النصابة؟ دليل شامل",
    slug: "forex-scam-recovery-guide",
    excerpt: "دليل مختصر عبر صياد الاحتيال لاسترجاع أموالك من شركات الفوركس النصابة بخطوات قانونية مدروسة.",
    category: "استرداد الأموال",
    date: "30 ابريل 2025",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "how-to-detect-scam-companies",
    title: "كيف تكتشف شركة التداول النصابة؟ 7 علامات لا يمكن تجاهلها",
    slug: "how-to-detect-scam-companies",
    excerpt: "دليل شامل لكشف علامات شركات التداول المشبوهة وكيفية حماية نفسك من الاحتيال",
    category: "تحذيرات",
    date: "27 مارس 2024",
    image: "https://images.unsplash.com/photo-1607944024060-0450380ddd33?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "money-recovery-guide-2025",
    title: "كيفية استرجاع أموالك من شركة تداول نصابة (دليل قانوني 2025)",
    slug: "money-recovery-guide-2025",
    excerpt: "دليل شامل وخطوات عملية لاسترداد أموالك من شركات التداول النصابة",
    category: "استرداد الأموال",
    date: "28 مارس 2024",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "scam-broker-list-2025",
    title: "أسماء شركات تداول نصابة في الخليج والعالم العربي لعام 2025 (تحذيرات هامة)",
    slug: "scam-broker-list-2025",
    excerpt: "تحذير 2025: شركات تداول نصابة تنتشر في الخليج والعالم العربي بأساليب احتيال مثل رفض السحب والتسويق الوهمي – تأكد من التراخيص قبل الاستثمار.",
    category: "تحذيرات",
    date: "29 مارس 2024",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80"
  }
];
