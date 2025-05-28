import React from "react";

// Simple Card component since the original import isn't working
const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden my-4">
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Separator = () => <hr className="my-6 border-gray-200" />;

export default function GritPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-800">GRIT – जुनून और दृढ़ता की शक्ति</h1>
      <Separator />

      <Card>
        <CardContent className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold text-gray-500">1. ग्रिट क्या है?</h2>
            <p className="text-gray-700">
              ग्रिट का अर्थ है दीर्घकालिक लक्ष्यों के प्रति जुनून और लगातार प्रयास। यह केवल प्रतिभा या बुद्धिमत्ता नहीं है,
              बल्कि यह है कि आप कितनी दृढ़ता से अपने लक्ष्यों की ओर बढ़ते हैं, चाहे रास्ते में कितनी भी बाधाएं क्यों न आएं।
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">2. प्रतिभा बनाम प्रयास</h2>
            <p className="text-gray-700">
              डकवर्थ बताती हैं कि सफलता केवल प्रतिभा पर निर्भर नहीं करती। वास्तव में, प्रयास प्रतिभा से अधिक महत्वपूर्ण है।
              उदाहरण के लिए, एक छात्र जो नियमित रूप से अभ्यास करता है, वह एक प्रतिभाशाली लेकिन आलसी छात्र से बेहतर प्रदर्शन कर सकता है।
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">3. जुनून और दृढ़ता का महत्व</h2>
            <p className="text-gray-700">
              सफल लोग अपने लक्ष्यों के प्रति गहरे जुनून और दृढ़ता रखते हैं। वे असफलताओं से नहीं डरते और लगातार प्रयास करते रहते हैं।
              उदाहरण के लिए, थॉमस एडिसन ने बल्ब का आविष्कार करने से पहले हजारों बार असफल प्रयोग किए, लेकिन उन्होंने हार नहीं मानी।
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">4. ग्रिट का विकास कैसे करें?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>लंबे समय तक एक लक्ष्य पर ध्यान केंद्रित करें: अपने लक्ष्यों को स्पष्ट करें और उन्हें प्राप्त करने के लिए लगातार प्रयास करें।</li>
              <li>असफलताओं से सीखें: असफलता को सीखने का अवसर मानें और उससे आगे बढ़ें।</li>
              <li>नियमित अभ्यास करें: निरंतर अभ्यास से कौशल में सुधार होता है और आत्मविश्वास बढ़ता है।</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">5. ग्रिट का मूल्यांकन</h2>
            <p className="text-gray-700">
              डकवर्थ ने ग्रिट को मापने के लिए एक "Grit Scale" विकसित किया है, जो यह आकलन करता है कि कोई व्यक्ति अपने लक्ष्यों के प्रति कितना समर्पित और दृढ़ है।
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">🎯 उदाहरणों के माध्यम से समझना</h2>
            <div className="text-gray-700 space-y-3">
              <p>🎓 <strong>शैक्षणिक क्षेत्र:</strong> एक छात्र जो गणित में कमजोर है, लेकिन रोजाना अभ्यास करता है और अपनी गलतियों से सीखता है, वह अंततः अच्छे अंक प्राप्त कर सकता है।</p>
              <p>🏃‍♂️ <strong>खेल क्षेत्र:</strong> एक खिलाड़ी जो रोजाना कड़ी मेहनत करता है, अपनी तकनीक में सुधार करता है और हार से सीखता है, वह एक दिन चैंपियन बन सकता है।</p>
              <p>💼 <strong>व्यवसाय क्षेत्र:</strong> एक उद्यमी जो अपने व्यवसाय में बार-बार असफल होता है, लेकिन हर बार नई रणनीति के साथ प्रयास करता है, वह अंततः सफल हो सकता है।</p>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">🔑 मुख्य संदेश</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>सफलता के लिए जुनून और दृढ़ता आवश्यक हैं।</li>
              <li>प्रतिभा महत्वपूर्ण है, लेकिन प्रयास उससे भी अधिक महत्वपूर्ण है।</li>
              <li>असफलता से डरना नहीं चाहिए; उसे सीखने का अवसर मानना चाहिए।</li>
              <li>निरंतर अभ्यास और समर्पण से किसी भी लक्ष्य को प्राप्त किया जा सकता है।</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-semibold text-gray-500">"अपूर्व की उड़ान" – एक प्रेरणादायक कहानी</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="font-bold text-lg">भाग 1: एक छोटा सपना</h3>
                <p>उत्तर प्रदेश के एक छोटे गाँव में एक लड़का रहता था — नाम था अपूर्व। बचपन से ही उसकी आँखों में एक सपना था — एक दिन देश का सबसे बेहतरीन वैज्ञानिक बनना।</p>
                <p>लेकिन अपूर्व के पास न अच्छे स्कूल थे, न इंटरनेट, न महंगे कोचिंग सेंटर। उसके पिता एक दर्जी थे, और माँ खेतों में काम करती थीं। सब कहते, "इतनी बड़ी बातें मत कर अपूर्व, ये शहर वालों के लिए होता है।"</p>
                <p>पर अपूर्व ने ठान लिया था – "मैं हार नहीं मानूंगा।"</p>
              </div>

              <div>
                <h3 className="font-bold text-lg">भाग 2: शुरुआती असफलताएँ</h3>
                <p>अपूर्व ने जब 10वीं की बोर्ड परीक्षा दी, तो गणित में फेल हो गया। पूरे गाँव ने मज़ाक उड़ाया:</p>
                <p>"जो नंबरी बनना चाहता था, वो जोड़-घटाव नहीं कर पाया।"</p>
                <p>लेकिन अपूर्व ने हार नहीं मानी। वह हर रोज़ स्कूल के बाद गाँव के एक बुजुर्ग मास्टर जी के पास जाता और 2 घंटे गणित सीखता। धीरे-धीरे, उसका डर खत्म हुआ।</p>
              </div>

              {/* Add remaining parts of the story in similar format */}
              
              <div>
                <h3 className="font-bold text-lg">Grit का संदेश इस कहानी से:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Passion</strong> – सपने में पूरी तरह डूब जाना</li>
                  <li><strong>Perseverance</strong> – चाहे कुछ भी हो जाए, रोज़ एक क़दम आगे बढ़ना</li>
                  <li><strong>Resilience</strong> – असफलताओं से टूटना नहीं, उनसे सीखना</li>
                  <li><strong>Focus</strong> – एक ही लक्ष्य पर ध्यान केंद्रित करना</li>
                  <li><strong>Support</strong> – सही लोगों से मदद लेना, जैसे अपूर्व ने मास्टर जी से ली</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator />

          <blockquote className="text-lg italic text-center p-4 bg-gray-500 rounded-lg border-l-4 border-blue-500">
            "हार मानना एक विकल्प है, पर जीतने की कोशिश करना एक आदत होनी चाहिए।"
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}