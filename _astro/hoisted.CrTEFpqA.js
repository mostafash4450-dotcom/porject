import"./hoisted.D8jPrrWn.js";const h=[{id:"zenstox-scam",name:"زينستوكس",type:"scam-company",description:"شركة غير مرخصة تستخدم أساليب احتيالية",link:"/article/zenstox-scam"},{id:"xlntrade-scam",name:"xlntrade",type:"scam-company",description:"منصة تداول مشبوهة تستهدف المستثمرين العرب",link:"/article/xlntrade-scam"},{id:"abyan-scam",name:"ابيان",type:"scam-company",description:"شركة تداول تستخدم أساليب احتيالية",link:"/article/abyan-scam"},{id:"law-trust-ltd",name:"Trust Law - ترست لو للمحاماة",type:"trusted-law-firm",description:"مكتب محاماة موثوق في بريطانيا",link:"/law-firm/law-trust-ltd"},{id:"khalifa-al-kindi",name:"خليفة الكندي",type:"untrusted-law-firm",description:"مكتب محاماة مشبوه - احذر التعامل معه",link:"/untrusted-law-firm/khalifa-al-kindi"},{id:"linida-ali",name:"ليندا علي",type:"untrusted-law-firm",description:"محامية مشبوهة - احذر التعامل معها",link:"/untrusted-law-firm/linida-ali"}];document.addEventListener("DOMContentLoaded",()=>{const a=document.getElementById("search-page-input"),e=document.getElementById("search-page-results"),l=document.getElementById("search-button");if(!a||!e||!l)return;const c=new URLSearchParams(window.location.search).get("q");c&&(a.value=c,o(c)),a.addEventListener("input",()=>{const t=a.value.trim();o(t)}),l.addEventListener("click",()=>{const t=a.value.trim();t&&o(t)});function o(t){if(!t){e.classList.add("hidden");return}e.classList.remove("hidden");const r=t.toLowerCase().split(" "),d=h.filter(n=>{const s=`${n.name} ${n.description}`.toLowerCase();return r.every(i=>s.includes(i))});if(d.length===0)e.innerHTML=`
          <div class="p-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold">نتائج البحث عن: ${t}</h3>
              <button id="close-search" class="text-gray-500 hover:text-gray-700">إغلاق</button>
            </div>
            <p class="text-gray-600 text-center py-4">لا توجد نتائج مطابقة للبحث</p>
          </div>
        `;else{let n=`
          <div class="p-4">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold">نتائج البحث عن: ${t}</h3>
              <button id="close-search" class="text-gray-500 hover:text-gray-700">إغلاق</button>
            </div>
            <div class="space-y-4">
        `;d.forEach(s=>{let i="";s.type==="trusted-law-firm"?i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-blue-600 ml-3 mt-1"><path d="M19 3v12.5a1.5 1.5 0 0 1-1.5 1.5H16"></path><path d="M9 3v12.5a1.5 1.5 0 0 0 1.5 1.5H13"></path><path d="M5 3v18"></path><path d="M19 21v-6"></path><path d="M5 7h14"></path></svg>':s.type==="untrusted-law-firm"?i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-red-600 ml-3 mt-1"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 14.14 14.14"></path></svg>':s.type==="scam-company"&&(i='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-red-600 ml-3 mt-1"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'),n+=`
            <a href="${s.link}" class="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div class="flex items-start">
                ${i}
                <div>
                  <h4 class="font-semibold mb-1 text-black">${s.name}</h4>
                  <p class="text-sm text-gray-600">${s.description}</p>
                </div>
              </div>
            </a>
          `}),n+=`
            </div>
          </div>
        `,e.innerHTML=n}const m=document.getElementById("close-search");m&&m.addEventListener("click",()=>{e.classList.add("hidden")})}document.addEventListener("click",t=>{const r=t.target;!a.contains(r)&&!e.contains(r)&&!l.contains(r)&&e.classList.add("hidden")})});
