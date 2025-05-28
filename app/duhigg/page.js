"use client"
import { useState } from 'react';

export default function PowerOfHabitHindi() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 font-sans">
      {/* Header */}
      <header className="text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">आदतों की शक्ति</h1>
        <p className="text-xl opacity-90">चार्ल्स डुहिग द्वारा (हिंदी सारांश)</p>
        <div className="mt-4 text-sm bg-white text-blue-800 inline-block px-3 py-1 rounded-full">
          स्वयं को बेहतर बनाने की गाइड
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-10 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">परिचय: आदत क्यों ज़रूरी है?</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          हर दिन हम जो कार्य करते हैं, उनमें से अधिकांश आदतन होते हैं... चार्ल्स डुहिग ने अपनी इस पुस्तक में बताया है कि आदतें कैसे बनती हैं, कैसे काम करती हैं, और उन्हें कैसे बदला जा सकता है।
        </p>
      </section>

      {/* Main Content - Accordion Style */}
      <div className="space-y-4 mb-10">
        {sections.map((section) => (
          <div key={section.id} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              <svg
                className={`w-5 h-5 transform transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeSection === section.id && (
              <div className="p-4 bg-white">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Quotes */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">प्रमुख सूत्र व कथन</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
              <blockquote className="text-lg italic text-gray-700">"{quote.text}"</blockquote>
              {quote.context && (
                <p className="mt-2 text-sm text-gray-500">— {quote.context}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Thoughts */}
      <section className="bg-blue-50 p-6 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">अंतिम विचार</h2>
        <p className="text-lg text-gray-700 mb-4">
          "The Power of Habit" केवल एक किताब नहीं है, यह जीवन बदलने वाली गाइड है।
        </p>
        
      </section>
    </div>
  );
}

// Data for sections
const sections = [
  {
    id: 'science',
    title: 'भाग 1: आदतों का विज्ञान',
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3 text-gray-800">1. आदत का लूप (Habit Loop)</h3>
        <ul className="list-disc pl-5 space-y-2 mb-4 text-black">
          <li><strong>संकेत (Cue):</strong> वह ट्रिगर जो आदत को शुरू करता है।</li>
          <li><strong>दिनचर्या (Routine):</strong> वह कार्य जो आप करते हैं।</li>
          <li><strong>इनाम (Reward):</strong> वह लाभ जो आपको मिलता है।</li>
        </ul>
        <p className="mb-4 text-gray-700">उदाहरण: संकेत – सुबह उठना, दिनचर्या – चाय बनाना, इनाम – आराम और ताजगी।</p>

        <h3 className="text-xl font-medium mb-3 text-gray-800">2. मस्तिष्क कैसे आदतें बनाता है</h3>
        <p className="text-gray-700">
          मस्तिष्क शुरू में किसी कार्य को पूरा ध्यान देकर करता है... यह प्रक्रिया बेसल गैन्ग्लिया द्वारा नियंत्रित होती है।
        </p>
      </div>
    )
  },
  {
    id: 'change',
    title: 'भाग 2: आदतों को बदलने की शक्ति',
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3 text-gray-800">3. पुरानी आदतें कैसे बदलें?</h3>
        <p className="mb-3 text-gray-700">
          आदत को मिटाया नहीं जा सकता, लेकिन बदला जा सकता है...
        </p>
        <p className="mb-4 text-gray-700">
          उदाहरण: संकेत – तनाव, दिनचर्या – चॉकलेट खाना, इनाम – संतोष/सुकून।
        </p>

        <h3 className="text-xl font-medium mb-3 text-gray-800">4. इच्छाशक्ति (Willpower) एक आदत है</h3>
        <p className="text-gray-700">
          इच्छाशक्ति एक सीमित संसाधन है, पर अभ्यास से मजबूत हो सकती है।
        </p>
      </div>
    )
  },
  {
    id: 'success',
    title: 'भाग 3: सफल आदतों की शक्ति',
    content: (
      <div>
        <h3 className="text-xl font-medium mb-3 text-gray-800">5. संगठनों में आदतें</h3>
        <p className="mb-4 text-gray-700">
          चार्ल्स डुहिग बताते हैं कि कैसे कंपनियाँ आदतों का उपयोग करती हैं।
        </p>

        <h3 className="text-xl font-medium mb-3 text-gray-800">6. उपभोक्ता की आदतें और मार्केटिंग</h3>
        <p className="mb-4 text-gray-700">
          Target जैसी कंपनियाँ ग्राहक की आदतों को पहचानती हैं...
        </p>

        <h3 className="text-xl font-medium mb-3 text-gray-800">7. समाज में आदतों की शक्ति</h3>
        <p className="text-gray-700">
          सिविल राइट्स मूवमेंट आदतों और नेटवर्क पर आधारित था...
        </p>
      </div>
    )
  },
  {
    id: 'methods',
    title: 'भाग 4: आदत निर्माण के तरीके',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-gray-700">संकेत को पहचानें</li>
        <li className="text-gray-700">इनाम को पहचानें</li>
        <li className="text-gray-700">दिनचर्या बदलें</li>
      </ul>
    )
  },
  {
    id: 'practice',
    title: 'भाग 5: आदत परिवर्तन का अभ्यास',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-gray-700">आदत ट्रैकर रखें</li>
        <li className="text-gray-700">बुरी आदत की वजह समझें</li>
        <li className="text-gray-700">'अगर-तो' नियम अपनाएं</li>
      </ul>
    )
  },
  {
    id: 'examples',
    title: 'प्रेरक उदाहरण',
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-gray-700">माइकल फेल्प्स – अभ्यास और मानसिक आदतों से सफलता</li>
        <li className="text-gray-700">स्टारबक्स – कर्मचारियों को इच्छाशक्ति सिखाई जाती है</li>
      </ul>
    )
  }
];

// Data for quotes
const quotes = [
  {
    text: "बदलाव तभी स्थायी होता है जब वह नई आदत में बदल जाए।",
    context: "आदत परिवर्तन का सिद्धांत"
  },
  {
    text: "हर आदत को बदला जा सकता है, चाहे वह कितनी भी पुरानी क्यों न हो।",
    context: "आदतों का लचीलापन"
  },
  {
    text: "आपकी आदतें आपकी पहचान बनती हैं।",
    context: "व्यक्तित्व निर्माण"
  },
  {
    text: "सफलता छोटी-छोटी आदतों के निरंतर अभ्यास से मिलती है।",
    context: "सफलता का रहस्य"
  }
];