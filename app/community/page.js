import React from 'react';

const EmotionalIntelligence = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">भावनात्मक बुद्धिमत्ता (इमोशनल इंटेलिजेंस)</h1>
        <p className="text-lg text-gray-700">डैनियल गोलेमैन द्वारा</p>
      </header>

      {/* Introduction */}
      <section className="mb-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">परिचय: इमोशनल इंटेलिजेंस क्या है?</h2>
        <p className="text-gray-700 mb-4">
          हम अक्सर मानते हैं कि IQ (बुद्धि लब्धि) ही सफलता की कुंजी है। लेकिन डैनियल गोलेमैन इस धारणा को चुनौती देते हुए कहते हैं कि भावनात्मक बुद्धिमत्ता (Emotional Intelligence या EQ) सफलता, नेतृत्व, और रिश्तों में IQ से कहीं अधिक महत्वपूर्ण भूमिका निभाती है।
        </p>
        
        <div className="bg-white p-4 rounded border border-gray-200">
          <h3 className="font-semibold text-indigo-700 mb-2">इमोशनल इंटेलिजेंस के पाँच मुख्य घटक:</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>स्व-चेतना (Self-Awareness)</li>
            <li>स्व-नियमन (Self-Regulation)</li>
            <li>प्रेरणा (Motivation)</li>
            <li>सहानुभूति (Empathy)</li>
            <li>सामाजिक कौशल (Social Skills)</li>
          </ul>
        </div>
      </section>

      {/* Part 1: Science of Emotions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">भाग 1: भावनाओं का विज्ञान</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">🧠 मस्तिष्क और भावनाएँ</h3>
          <p className="text-gray-700 mb-4">
            गोलेमैन बताते हैं कि मस्तिष्क के दो हिस्से - लिम्बिक सिस्टम और नियो-कोर्टेक्स - भावनाओं और तर्क के लिए जिम्मेदार होते हैं।
          </p>
          <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>एमिगडाला (Amygdala) भावनात्मक प्रतिक्रियाओं का केंद्र है</li>
              <li>यह कभी-कभी "हाईजैक" करता है जिससे व्यक्ति बिना सोचे-समझे प्रतिक्रिया करता है (Amygdala Hijack)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Part 2: Self-Awareness */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">भाग 2: आत्म-जागरूकता (Self-Awareness)</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">क्या हम अपनी भावनाओं को पहचान सकते हैं?</h3>
            <p className="text-gray-700">
              अपने मूड, सोच और व्यवहार के बीच संबंध को समझना आत्म-जागरूकता का पहला चरण है।
            </p>
            <div className="mt-4 bg-blue-50 p-4 rounded border border-blue-200">
              <p className="font-medium text-blue-800">उदाहरण:</p>
              <p className="text-gray-700">यदि आप गुस्से में हैं, तो यह समझना कि यह गुस्सा किस कारण से है, और इसे कैसे नियंत्रित किया जाए</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">कैसे विकसित करें?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>जर्नलिंग करें - अपने अनुभवों को लिखें</li>
              <li>ध्यान (Mindfulness) का अभ्यास करें</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EQ vs IQ Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">भाग 7: EQ बनाम IQ</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase">विशेषता</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase">EQ</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-indigo-800 uppercase">IQ</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-gray-700">परिभाषा</td>
                <td className="px-4 py-3 text-gray-700">भावनाओं की समझ और प्रबंधन</td>
                <td className="px-4 py-3 text-gray-700">तार्किक व विश्लेषणात्मक क्षमताएँ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">सफलता में योगदान</td>
                <td className="px-4 py-3 text-gray-700">अधिक</td>
                <td className="px-4 py-3 text-gray-700">कम</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">सीखा जा सकता है</td>
                <td className="px-4 py-3 text-gray-700">हाँ</td>
                <td className="px-4 py-3 text-gray-700">सीमित रूप से</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl border border-indigo-200">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">निष्कर्ष</h2>
        <p className="text-gray-700 mb-4">
          डैनियल गोलेमैन का "Emotional Intelligence" यह दर्शाता है कि सिर्फ बुद्धिमत्ता ही नहीं, बल्कि भावनात्मक जागरूकता और प्रबंधन भी जीवन में सफलता, संबंधों, और नेतृत्व के लिए अत्यंत आवश्यक हैं।
        </p>
        <p className="text-gray-700 font-medium">
          अच्छी खबर यह है कि EQ को सीखा और विकसित किया जा सकता है - चाहे आप किसी भी उम्र में क्यों न हों।
        </p>
      </section>
    </div>
  );
};

export default EmotionalIntelligence;