// app/library/page.js
import React from 'react';

const AtomicHabitsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Atomic Habits - हिंदी सारांश</h1>
        <p className="text-lg text-gray-700">जेम्स क्लियर द्वारा - छोटे बदलाव, असाधारण परिणाम</p>
      </header>

      <CorePrinciples />
      
      <div className="grid md:grid-cols-2 gap-8 my-12">
        <HabitLoopModel />
        <FourLaws />
      </div>

      <ChapterSummaries />
      
      <AdvancedStrategies />
      
      <FinalTakeaway />
    </div>
  );
};

// Component for core principles
const CorePrinciples = () => (
  <section className="bg-indigo-100 p-6 rounded-lg mb-12 border border-indigo-200">
    <h2 className="text-2xl font-semibold text-indigo-800 mb-4">🎯 केंद्रीय विचार</h2>
    <ul className="space-y-3 list-disc pl-5 text-gray-800">
      <li>छोटे बदलाव + निरंतर अभ्यास = असाधारण सफलता</li>
      <li>"1% रोज़ बेहतर बनो। समय के साथ यह विशाल परिवर्तन लाता है।"</li>
      <li>आदतें पहचान बनाती हैं → "मैं कौन हूँ" पर ध्यान दें</li>
    </ul>
  </section>
);

// Component for habit loop model
const HabitLoopModel = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-semibold mb-4 text-indigo-700">🔄 4-चरणीय आदत निर्माण मॉडल</h3>
    <ol className="space-y-3 list-decimal pl-5 text-gray-700">
      <li><strong className="text-indigo-600">संकेत (Cue)</strong> - आदत शुरू करने वाला ट्रिगर</li>
      <li><strong className="text-indigo-600">ललक (Craving)</strong> - आदत को करने की इच्छा</li>
      <li><strong className="text-indigo-600">प्रतिक्रिया (Response)</strong> - आदत को करना</li>
      <li><strong className="text-indigo-600">इनाम (Reward)</strong> - आदत के बाद मिलने वाली संतुष्टि</li>
    </ol>
  </div>
);

// Component for four laws
const FourLaws = () => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-semibold mb-4 text-indigo-700">📜 चार नियम: आदत बनाने के लिए</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-indigo-800 uppercase">नियम</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-indigo-800 uppercase">उद्देश्य</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-indigo-800 uppercase">कैसे लागू करें</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="hover:bg-indigo-50">
            <td className="px-4 py-2 text-gray-700">1️⃣ इसे स्पष्ट बनाएं</td>
            <td className="px-4 py-2 text-gray-700">आदत शुरू हो</td>
            <td className="px-4 py-2 text-gray-700">Habit Stacking, माहौल तैयार करें</td>
          </tr>
          <tr className="hover:bg-indigo-50">
            <td className="px-4 py-2 text-gray-700">2️⃣ इसे आकर्षक बनाएं</td>
            <td className="px-4 py-2 text-gray-700">करने की इच्छा बने</td>
            <td className="px-4 py-2 text-gray-700">Temptation Bundling, सही समूह चुनें</td>
          </tr>
          <tr className="hover:bg-indigo-50">
            <td className="px-4 py-2 text-gray-700">3️⃣ इसे आसान बनाएं</td>
            <td className="px-4 py-2 text-gray-700">आदत करने में बाधा न हो</td>
            <td className="px-4 py-2 text-gray-700">2-Minute Rule, friction हटाना</td>
          </tr>
          <tr className="hover:bg-indigo-50">
            <td className="px-4 py-2 text-gray-700">4️⃣ इसे संतोषजनक बनाएं</td>
            <td className="px-4 py-2 text-gray-700">आदत दोहराई जाए</td>
            <td className="px-4 py-2 text-gray-700">Habit Tracking, Instant Reward</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

// Component for chapter summaries
const ChapterSummaries = () => {
  const chapters = [
    {
      title: "अध्याय 1-5: आदतों की मूल बातें",
      points: [
        "1% का नियम - छोटे सुधारों का संचय",
        "पहचान-आधारित परिवर्तन (Identity-based change)",
        "Habit Stacking और Environment Design"
      ]
    },
    {
      title: "अध्याय 6-10: आदतों को आसान और आकर्षक बनाना",
      points: [
        "मोटिवेशन से ज़्यादा माहौल मायने रखता है",
        "Temptation Bundling तकनीक",
        "सामाजिक समूहों की भूमिका"
      ]
    },
    {
      title: "अध्याय 11-15: आदतों को टिकाऊ बनाना",
      points: [
        "2-Minute Rule - शुरुआत आसान बनाएं",
        "Habit Tracking - निरंतरता बनाए रखें",
        "तुरंत संतोष (Instant Gratification) का महत्व"
      ]
    },
    {
      title: "अध्याय 16-20: उन्नत रणनीतियाँ",
      points: [
        "Goldilocks Rule - सही चुनौती का स्तर",
        "Accountability Partners - जवाबदेही",
        "नियमित समीक्षा और सुधार"
      ]
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📚 अध्यायों का सारांश</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {chapters.map((chapter, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">{chapter.title}</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              {chapter.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// Component for advanced strategies
const AdvancedStrategies = () => (
  <section className="my-12 bg-amber-100 p-6 rounded-lg border border-amber-200">
    <h2 className="text-2xl font-semibold text-amber-800 mb-4">💪 लंबे समय तक आदतें बनाए रखने की रणनीतियाँ</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <StrategyCard 
        icon="📊" 
        title="Habit Tracker" 
        description="रोज़ ✔ लगाएं - दृश्य प्रगति मनोवैज्ञानिक रूप से प्रेरित करती है" 
      />
      <StrategyCard 
        icon="👥" 
        title="Accountability Partner" 
        description="दोस्त/कोच से रिपोर्ट करें - सामाजिक प्रतिबद्धता काम करती है" 
      />
      <StrategyCard 
        icon="🔄" 
        title="Review System" 
        description="हफ्ते में 1 बार प्रगति देखें - समायोजन करने का मौका" 
      />
      <StrategyCard 
        icon="🏡" 
        title="Environment Design" 
        description="माहौल आपकी आदत को प्रभावित करता है - इसे अनुकूल बनाएं" 
      />
      <StrategyCard 
        icon="🤔" 
        title="Reflection" 
        description="हर कुछ महीने में सुधार के लिए सोचना - पठन-पाठन करें" 
      />
    </div>
  </section>
);

// Reusable strategy card component
const StrategyCard = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="text-2xl mb-2">{icon}</div>
    <h4 className="font-medium text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
  </div>
);

// Final takeaway component
const FinalTakeaway = () => (
  <section className="mt-16 text-center bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl border border-indigo-200">
    <h2 className="text-3xl font-bold text-indigo-900 mb-4">🔚 अंतिम संदेश</h2>
    <blockquote className="text-xl italic text-gray-800 mb-6">
      "आप अपने लक्ष्यों तक नहीं पहुंचते — आप अपनी प्रणाली के स्तर तक गिरते हैं।"
    </blockquote>
    <div className="text-lg font-medium text-gray-800">
      <p className="mb-2">📈 Atomic Habits Formula (Hindi Edition)</p>
      <p className="text-2xl font-bold text-indigo-700">
        छोटी आदत × समय × निरंतरता = असाधारण परिणाम
      </p>
    </div>
  </section>
);

export default AtomicHabitsPage;