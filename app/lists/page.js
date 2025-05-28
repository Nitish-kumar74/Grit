import React from 'react';

const ThinkingFastAndSlow = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">थिंकिंग, फास्ट एंड स्लो</h1>
        <p className="text-lg text-gray-700">डैनियल काहनेमन (नोबेल पुरस्कार विजेता)</p>
        <p className="text-gray-600 mt-4">मानव निर्णय लेने की प्रक्रिया, संज्ञानात्मक पूर्वाग्रह, और तर्कहीन व्यवहार का विश्लेषण</p>
      </header>

      {/* Part 1: Two Systems */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">भाग 1: दो मस्तिष्क प्रणालियाँ</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* System 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">1. सिस्टम 1 (तेज़ सोच)</h3>
            <p className="text-gray-700 mb-2 font-medium">स्वचालित, तीव्र और भावनात्मक</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">उदाहरण:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>चेहरे पहचानना</li>
                  <li>ड्राइविंग</li>
                  <li>भाषा समझना</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">फायदे:</h4>
                <p className="text-gray-700">त्वरित निर्णय, कम ऊर्जा खपत</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">कमियाँ:</h4>
                <p className="text-gray-700">पूर्वाग्रहों का शिकार, तर्कहीन निष्कर्ष</p>
              </div>
            </div>
          </div>

          {/* System 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">2. सिस्टम 2 (धीमी सोच)</h3>
            <p className="text-gray-700 mb-2 font-medium">जानबूझकर, तार्किक और परिश्रमी</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">उदाहरण:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>गणित की समस्या हल करना</li>
                  <li>निवेश निर्णय लेना</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">फायदे:</h4>
                <p className="text-gray-700">विश्लेषणात्मक, त्रुटियाँ कम करता है</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">कमियाँ:</h4>
                <p className="text-gray-700">आलसी, थकान से प्रभावित ("मानसिक थकान")</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">महत्वपूर्ण अंतर्दृष्टि:</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>सिस्टम 1 हमारे 95% निर्णय लेता है, जबकि सिस्टम 2 केवल महत्वपूर्ण मामलों में हस्तक्षेप करता है</li>
            <li>गलतियाँ तब होती हैं जब सिस्टम 1 जल्दबाजी में निष्कर्ष निकालता है और सिस्टम 2 उसे रोकने में विफल रहता है</li>
          </ul>
        </div>
      </section>

      {/* Part 2: Biases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 border-b pb-2">भाग 2: पूर्वाग्रह और तर्कहीन निर्णय</h2>
        <p className="text-gray-700 mb-6">काहनेमन ने कई संज्ञानात्मक पूर्वाग्रह (Cognitive Biases) की पहचान की, जो हमारे निर्णयों को प्रभावित करते हैं:</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Bias 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">1. उपलब्धता पूर्वाग्रह</h3>
            <p className="text-gray-700 italic mb-3">"जो याद आसानी से आता है, वही सही लगता है"</p>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">उदाहरण:</h4>
              <p className="text-gray-700">हवाई दुर्घटनाओं का डर (मीडिया कवरेज के कारण), जबकि सड़क दुर्घटनाएँ ज़्यादा खतरनाक हैं</p>
            </div>
          </div>

          {/* Bias 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">2. प्रतिनिधित्व पूर्वाग्रह</h3>
            <p className="text-gray-700 italic mb-3">"स्टीरियोटाइप के आधार पर निर्णय लेना"</p>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">उदाहरण:</h4>
              <p className="text-gray-700">एक शर्मीले व्यक्ति को "लाइब्रेरियन" समझना, हालाँकि "सेल्समैन" होने की संभावना ज़्यादा है</p>
            </div>
          </div>

          {/* Bias 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">3. एंकरिंग प्रभाव</h3>
            <p className="text-gray-700 italic mb-3">"पहली जानकारी हमारी सोच को प्रभावित करती है"</p>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">उदाहरण:</h4>
              <p className="text-gray-700">दुकानदार पहले ऊँची कीमत बताकर हमारी मानसिकता सेट कर देता है</p>
            </div>
          </div>

          {/* Bias 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">4. हानि से डर</h3>
            <p className="text-gray-700 italic mb-3">"नुकसान का डर, लाभ की खुशी से ज़्यादा मजबूत होता है"</p>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-medium text-yellow-800 mb-1">उदाहरण:</h4>
              <p className="text-gray-700">शेयर बाज़ार में घाटे वाले शेयर न बेचना</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-indigo-100 to-blue-100 p-8 rounded-xl border border-indigo-200">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">निष्कर्ष: बेहतर निर्णय कैसे लें?</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>सिस्टम 1 की गलतियों से सावधान रहें - महत्वपूर्ण फैसलों में धीमी सोच का उपयोग करें</li>
          <li>पूर्वाग्रहों को पहचानें - एंकरिंग, उपलब्धता और पुष्टिकरण पूर्वाग्रह से बचें</li>
          <li>आँकड़ों पर भरोसा करें - व्यक्तिगत अनुमानों से बेहतर है एल्गोरिदम या डेटा</li>
          <li>खुशी को सही तरीके से मापें - अनुभव और यादों में अंतर समझें</li>
        </ul>
        <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
          <p className="text-lg italic text-gray-800">"हमारा दिमाग सहज रूप से आलसी है - अच्छे निर्णय के लिए हमें जानबूझकर प्रयास करना होगा"</p>
        </div>
      </section>
    </div>
  );
};

export default ThinkingFastAndSlow;