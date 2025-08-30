export interface Translations {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  imageDetection: string;
  voiceOutput: string;
  multiLanguage: string;
  instantResults: string;

  // Language Selector
  selectLanguage: string;
  chooseLanguage: string;

  // Cards
  cropRecommendations: string;
  getTips: string;
  cropDiagnosis: string;
  go: string;

  // Features Section
  howItWorks: string;
  howItWorksSubtitle: string;
  uploadAnalyze: string;
  uploadAnalyzeDesc: string;
  aiDiagnosis: string;
  aiDiagnosisDesc: string;
  voiceText: string;
  voiceTextDesc: string;

  // Common
  loading: string;
  error: string;
  retry: string;

  // ChatBot Page
  cropChatAssistant: string;
  intelligentFarmingCompanion: string;
  aiAssistant: string;
  you: string;
  aiThinking: string;
  askAnythingFarming: string;
  initialBotMessage: string;

  // Crop Diagnosis Page
  cropDiagnosisTitle: string;
  cropDiagnosisSubtitle: string;
  analyzeFarmingConditions: string;
  cropRecommendationsTitle: string;
  farmingTips: string;
  soilPreparation: string;
  soilPreparationDesc: string;
  waterManagement: string;
  waterManagementDesc: string;
  cropRotation: string;
  cropRotationDesc: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Hero Section
    heroTitle: "KrishiSaarthi",
    heroSubtitle: "AI-powered crop disease diagnosis in your native language.",
    imageDetection: "Image Detection",
    voiceOutput: "Voice Output",
    multiLanguage: "Multi-language",
    instantResults: "Instant Results",

    // Language Selector
    selectLanguage: "Select Language",
    chooseLanguage: "Choose Language",

    // Cards
    cropRecommendations: "Crop Recommendations",
    getTips: "Get Tips",
    cropDiagnosis: "Crop Diagnosis",
    go: "Go",

    // Features Section
    howItWorks: "How CropAI Doctor Works",
    howItWorksSubtitle: "Advanced AI technology made simple for farmers worldwide",
    uploadAnalyze: "Upload & Analyze",
    uploadAnalyzeDesc: "Take a photo of your crop and our AI instantly identifies diseases.",
    aiDiagnosis: "AI Diagnosis",
    aiDiagnosisDesc: "Our AI provides detailed analysis and localized recommendations.",
    voiceText: "Voice & Text",
    voiceTextDesc: "Get advice in your native language via text & audio.",

    // Common
    loading: "Loading...",
    error: "Error",
    retry: "Retry",

    // ChatBot Page
    cropChatAssistant: "🌾 Crop Chat Assistant",
    intelligentFarmingCompanion: "Your intelligent farming companion",
    aiAssistant: "🤖 AI Assistant",
    you: "👤 You",
    aiThinking: "AI is thinking...",
    askAnythingFarming: "Ask me anything about farming...",
    initialBotMessage: "Hello! I'm your farming assistant. Ask me anything about crops, soil, or farming techniques!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "Crop Diagnosis",
    cropDiagnosisSubtitle: "Get personalized crop recommendations based on your soil, climate, and farming conditions",
    analyzeFarmingConditions: "Analyze Your Farming Conditions",
    cropRecommendationsTitle: "Crop Recommendations",
    farmingTips: "Farming Tips",
    soilPreparation: "🌱 Soil Preparation",
    soilPreparationDesc: "Prepare your soil 2-3 weeks before planting by adding organic matter and testing pH levels.",
    waterManagement: "💧 Water Management",
    waterManagementDesc: "Implement efficient irrigation systems to conserve water and ensure optimal plant growth.",
    cropRotation: "🔄 Crop Rotation",
    cropRotationDesc: "Rotate crops seasonally to maintain soil health and prevent pest buildup.",
  },

  hi: {
    // Hero Section
    heroTitle: "कृषिसारथी",
    heroSubtitle: "आपकी मातृभाषा में AI-संचालित फसल रोग निदान।",
    imageDetection: "छवि पहचान",
    voiceOutput: "आवाज आउटपुट",
    multiLanguage: "बहुभाषी",
    instantResults: "तत्काल परिणाम",

    // Language Selector
    selectLanguage: "भाषा चुनें",
    chooseLanguage: "भाषा चुनें",

    // Cards
    cropRecommendations: "फसल सिफारिशें",
    getTips: "सुझाव पाएं",
    cropDiagnosis: "फसल निदान",
    go: "जाएं",

    // Features Section
    howItWorks: "CropAI डॉक्टर कैसे काम करता है",
    howItWorksSubtitle: "दुनिया भर के किसानों के लिए उन्नत AI तकनीक को सरल बनाया गया",
    uploadAnalyze: "अपलोड और विश्लेषण",
    uploadAnalyzeDesc: "अपनी फसल की तस्वीर लें और हमारा AI तुरंत बीमारियों की पहचान करता है।",
    aiDiagnosis: "AI निदान",
    aiDiagnosisDesc: "हमारा AI विस्तृत विश्लेषण और स्थानीयकृत सिफारिशें प्रदान करता है।",
    voiceText: "आवाज और पाठ",
    voiceTextDesc: "अपनी मातृभाषा में पाठ और ऑडियो के माध्यम से सलाह प्राप्त करें।",

    // Common
    loading: "लोड हो रहा है...",
    error: "त्रुटि",
    retry: "पुनः प्रयास करें",

    // ChatBot Page
    cropChatAssistant: "🌾 फसल चैट सहायक",
    intelligentFarmingCompanion: "आपका बुद्धिमान कृषि साथी",
    aiAssistant: "🤖 AI सहायक",
    you: "👤 आप",
    aiThinking: "AI सोच रहा है...",
    askAnythingFarming: "खेती के बारे में कुछ भी पूछें...",
    initialBotMessage: "नमस्ते! मैं आपका कृषि सहायक हूं। फसल, मिट्टी या कृषि तकनीकों के बारे में कुछ भी पूछें!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "फसल निदान",
    cropDiagnosisSubtitle: "अपनी मिट्टी, जलवायु और कृषि परिस्थितियों के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें",
    analyzeFarmingConditions: "अपनी कृषि परिस्थितियों का विश्लेषण करें",
    cropRecommendationsTitle: "फसल सिफारिशें",
    farmingTips: "कृषि सुझाव",
    soilPreparation: "🌱 मिट्टी की तैयारी",
    soilPreparationDesc: "रोपण से 2-3 सप्ताह पहले जैविक पदार्थ मिलाकर और pH स्तर की जांच करके अपनी मिट्टी तैयार करें।",
    waterManagement: "💧 जल प्रबंधन",
    waterManagementDesc: "पानी का संरक्षण करने और इष्टतम पौधों की वृद्धि सुनिश्चित करने के लिए कुशल सिंचाई प्रणाली लागू करें।",
    cropRotation: "🔄 फसल चक्र",
    cropRotationDesc: "मिट्टी के स्वास्थ्य को बनाए रखने और कीट संचय को रोकने के लिए मौसमी रूप से फसलों का चक्र करें।",
  },

  es: { // Punjabi
    // Hero Section
    heroTitle: "ਕ੍ਰਿਸ਼ੀਸਾਰਥੀ",
    heroSubtitle: "ਤੁਹਾਡੀ ਮਾਤ੍ਰਿਭਾਸ਼ਾ ਵਿੱਚ AI-ਸੰਚਾਲਿਤ ਫਸਲ ਰੋਗ ਨਿਦਾਨ।",
    imageDetection: "ਚਿੱਤਰ ਪਛਾਣ",
    voiceOutput: "ਆਵਾਜ਼ ਆਉਟਪੁੱਟ",
    multiLanguage: "ਬਹੁ-ਭਾਸ਼ਾ",
    instantResults: "ਤੁਰੰਤ ਨਤੀਜੇ",

    // Language Selector
    selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    chooseLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",

    // Cards
    cropRecommendations: "ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ",
    getTips: "ਸੁਝਾਅ ਪ੍ਰਾਪਤ ਕਰੋ",
    cropDiagnosis: "ਫਸਲ ਨਿਦਾਨ",
    go: "ਜਾਓ",

    // Features Section
    howItWorks: "CropAI ਡਾਕਟਰ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    howItWorksSubtitle: "ਦੁਨੀਆ ਭਰ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ਉੱਨਤ AI ਤਕਨਾਲੋਜੀ ਨੂੰ ਸਰਲ ਬਣਾਇਆ ਗਿਆ",
    uploadAnalyze: "ਅੱਪਲੋਡ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ",
    uploadAnalyzeDesc: "ਆਪਣੀ ਫਸਲ ਦੀ ਫੋਟੋ ਲਓ ਅਤੇ ਸਾਡਾ AI ਤੁਰੰਤ ਬਿਮਾਰੀਆਂ ਦੀ ਪਛਾਣ ਕਰਦਾ ਹੈ।",
    aiDiagnosis: "AI ਨਿਦਾਨ",
    aiDiagnosisDesc: "ਸਾਡਾ AI ਵਿਸਤ੍ਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਸਥਾਨਕ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
    voiceText: "ਆਵਾਜ਼ ਅਤੇ ਟੈਕਸਟ",
    voiceTextDesc: "ਆਪਣੀ ਮਾਤ੍ਰਿਭਾਸ਼ਾ ਵਿੱਚ ਟੈਕਸਟ ਅਤੇ ਆਡੀਓ ਰਾਹੀਂ ਸਲਾਹ ਪ੍ਰਾਪਤ ਕਰੋ।",

    // Common
    loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...",
    error: "ਗਲਤੀ",
    retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",

    // ChatBot Page
    cropChatAssistant: "🌾 ਫਸਲ ਚੈਟ ਸਹਾਇਕ",
    intelligentFarmingCompanion: "ਤੁਹਾਡਾ ਬੁੱਧੀਮਾਨ ਖੇਤੀ ਸਾਥੀ",
    aiAssistant: "🤖 AI ਸਹਾਇਕ",
    you: "👤 ਤੁਸੀਂ",
    aiThinking: "AI ਸੋਚ ਰਿਹਾ ਹੈ...",
    askAnythingFarming: "ਖੇਤੀ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ...",
    initialBotMessage: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਹਾਂ। ਫਸਲਾਂ, ਮਿੱਟੀ ਜਾਂ ਖੇਤੀ ਤਕਨੀਕਾਂ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "ਫਸਲ ਨਿਦਾਨ",
    cropDiagnosisSubtitle: "ਆਪਣੀ ਮਿੱਟੀ, ਜਲਵਾਯੂ ਅਤੇ ਖੇਤੀ ਦੀਆਂ ਸਥਿਤੀਆਂ ਦੇ ਆਧਾਰ 'ਤੇ ਵਿਅਕਤੀਗਤ ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    analyzeFarmingConditions: "ਆਪਣੀਆਂ ਖੇਤੀ ਸਥਿਤੀਆਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
    cropRecommendationsTitle: "ਫਸਲ ਸਿਫਾਰਸ਼ਾਂ",
    farmingTips: "ਖੇਤੀ ਸੁਝਾਅ",
    soilPreparation: "🌱 ਮਿੱਟੀ ਦੀ ਤਿਆਰੀ",
    soilPreparationDesc: "ਜੈਵਿਕ ਪਦਾਰਥ ਮਿਲਾ ਕੇ ਅਤੇ pH ਪੱਧਰ ਦੀ ਜਾਂਚ ਕਰਕੇ ਬਿਜਾਈ ਤੋਂ 2-3 ਹਫ਼ਤੇ ਪਹਿਲਾਂ ਆਪਣੀ ਮਿੱਟੀ ਤਿਆਰ ਕਰੋ।",
    waterManagement: "💧 ਪਾਣੀ ਪ੍ਰਬੰਧਨ",
    waterManagementDesc: "ਪਾਣੀ ਦੀ ਬਚਤ ਅਤੇ ਪੌਧਿਆਂ ਦੀ ਸਰਵੋਤਮ ਵਿਕਾਸ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਕੁਸ਼ਲ ਸਿੰਚਾਈ ਪ੍ਰਣਾਲੀਆਂ ਲਾਗੂ ਕਰੋ।",
    cropRotation: "🔄 ਫਸਲ ਚੱਕਰ",
    cropRotationDesc: "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਬਣਾਈ ਰੱਖਣ ਅਤੇ ਕੀੜਿਆਂ ਦੇ ਇਕੱਠ ਨੂੰ ਰੋਕਣ ਲਈ ਮੌਸਮੀ ਤੌਰ 'ਤੇ ਫਸਲਾਂ ਦਾ ਚੱਕਰ ਕਰੋ।",
  },

  fr: { // Gujarati
    // Hero Section
    heroTitle: "કૃષિસારથી",
    heroSubtitle: "તમારી માતૃભાષામાં AI-સંચાલિત પાક રોગ નિદાન.",
    imageDetection: "છબી ઓળખ",
    voiceOutput: "અવાજ આઉટપુટ",
    multiLanguage: "બહુભાષી",
    instantResults: "તાત્કાલિક પરિણામો",

    // Language Selector
    selectLanguage: "ભાષા પસંદ કરો",
    chooseLanguage: "ભાષા પસંદ કરો",

    // Cards
    cropRecommendations: "પાક ભલામણો",
    getTips: "સૂચનો મેળવો",
    cropDiagnosis: "પાક નિદાન",
    go: "જાઓ",

    // Features Section
    howItWorks: "CropAI ડૉક્ટર કેવી રીતે કામ કરે છે",
    howItWorksSubtitle: "વિશ્વભરના ખેડૂતો માટે અદ્યતન AI તકનીકને સરળ બનાવવામાં આવી છે",
    uploadAnalyze: "અપલોડ અને વિશ્લેષણ",
    uploadAnalyzeDesc: "તમારા પાકનો ફોટો લો અને અમારો AI તરત જ રોગોની ઓળખ કરે છે.",
    aiDiagnosis: "AI નિદાન",
    aiDiagnosisDesc: "અમારો AI વિગતવાર વિશ્લેષણ અને સ્થાનિક ભલામણો પ્રદાન કરે છે.",
    voiceText: "અવાજ અને ટેક્સ્ટ",
    voiceTextDesc: "તમારી માતૃભાષામાં ટેક્સ્ટ અને ઓડિયો દ્વારા સલાહ મેળવો.",

    // Common
    loading: "લોડ થઈ રહ્યું છે...",
    error: "ભૂલ",
    retry: "ફરીથી પ્રયાસ કરો",

    // ChatBot Page
    cropChatAssistant: "🌾 પાક ચેટ સહાયક",
    intelligentFarmingCompanion: "તમારો બુદ્ધિશાળી ખેતી સાથી",
    aiAssistant: "🤖 AI સહાયક",
    you: "👤 તમે",
    aiThinking: "AI વિચારી રહ્યું છે...",
    askAnythingFarming: "ખેતી વિશે કંઈપણ પૂછો...",
    initialBotMessage: "નમસ્તે! હું તમારો ખેતી સહાયક છું। પાક, માટી અથવા ખેતી તકનીકો વિશે કંઈપણ પૂછો!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "પાક નિદાન",
    cropDiagnosisSubtitle: "તમારી માટી, આબોહવા અને ખેતી પરિસ્થિતિઓના આધારે વ્યક્તિગત પાક ભલામણો મેળવો",
    analyzeFarmingConditions: "તમારી ખેતી પરિસ્થિતિઓનું વિશ્લેષણ કરો",
    cropRecommendationsTitle: "પાક ભલામણો",
    farmingTips: "ખેતી સૂચનો",
    soilPreparation: "🌱 માટીની તૈયારી",
    soilPreparationDesc: "જૈવિક પદાર્થ ઉમેરીને અને pH સ્તરની તપાસ કરીને વાવેતર પહેલાં 2-3 અઠવાડિયા તમારી માટી તૈયાર કરો.",
    waterManagement: "💧 પાણી વ્યવસ્થાપન",
    waterManagementDesc: "પાણીની બચત અને શ્રેષ્ઠ છોડની વૃદ્ધિ સુનિશ્ચિત કરવા માટે કાર્યક્ષમ સિંચાઈ પ્રણાલીઓ અમલમાં મૂકો.",
    cropRotation: "🔄 પાક પરિભ્રમણ",
    cropRotationDesc: "માટીના સ્વાસ્થ્યને જાળવવા અને જીવાતોના સંચય અટકાવવા માટે મોસમી પાકોનું પરિભ્રમણ કરો.",
  },

  ar: { // Tamil
    // Hero Section
    heroTitle: "கிருஷிசார்த்தி",
    heroSubtitle: "உங்கள் தாய்மொழியில் AI-இயங்கும் பயிர் நோய் கண்டறிதல்.",
    imageDetection: "படம் கண்டறிதல்",
    voiceOutput: "குரல் வெளியீடு",
    multiLanguage: "பல மொழி",
    instantResults: "உடனடி முடிவுகள்",

    // Language Selector
    selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
    chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",

    // Cards
    cropRecommendations: "பயிர் பரிந்துரைகள்",
    getTips: "குறிப்புகளைப் பெறுங்கள்",
    cropDiagnosis: "பயிர் நோய் கண்டறிதல்",
    go: "செல்லுங்கள்",

    // Features Section
    howItWorks: "CropAI டாக்டர் எவ்வாறு செயல்படுகிறது",
    howItWorksSubtitle: "உலகெங்கிலும் உள்ள விவசாயிகளுக்காக மேம்பட்ட AI தொழில்நுட்பம் எளிமையாக்கப்பட்டுள்ளது",
    uploadAnalyze: "பதிவேற்றம் மற்றும் பகுப்பாய்வு",
    uploadAnalyzeDesc: "உங்கள் பயிரின் புகைப்படத்தை எடுங்கள், எங்கள் AI உடனடியாக நோய்களை அடையாளம் காணும்.",
    aiDiagnosis: "AI நோய் கண்டறிதல்",
    aiDiagnosisDesc: "எங்கள் AI விரிவான பகுப்பாய்வு மற்றும் உள்ளூர் பரிந்துரைகளை வழங்குகிறது.",
    voiceText: "குரல் மற்றும் உரை",
    voiceTextDesc: "உங்கள் தாய்மொழியில் உரை மற்றும் ஆடியோ மூலம் ஆலோசனை பெறுங்கள்.",

    // Common
    loading: "ஏற்றுகிறது...",
    error: "பிழை",
    retry: "மீண்டும் முயற்சிக்கவும்",

    // ChatBot Page
    cropChatAssistant: "🌾 பயிர் அரட்டை உதவியாளர்",
    intelligentFarmingCompanion: "உங்கள் அறிவார்ந்த விவசாய துணை",
    aiAssistant: "🤖 AI உதவியாளர்",
    you: "👤 நீங்கள்",
    aiThinking: "AI சிந்திக்கிறது...",
    askAnythingFarming: "விவசாயத்தைப் பற்றி எதையும் கேளுங்கள்...",
    initialBotMessage: "வணக்கம்! நான் உங்கள் விவசாய உதவியாளர். பயிர்கள், மண் அல்லது விவசாய நுட்பங்களைப் பற்றி எதையும் கேளுங்கள்!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "பயிர் நோய் கண்டறிதல்",
    cropDiagnosisSubtitle: "உங்கள் மண், காலநிலை மற்றும் விவசாய நிலைமைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பயிர் பரிந்துரைகளைப் பெறுங்கள்",
    analyzeFarmingConditions: "உங்கள் விவசாய நிலைமைகளை பகுப்பாய்வு செய்யுங்கள்",
    cropRecommendationsTitle: "பயிர் பரிந்துரைகள்",
    farmingTips: "விவசாய குறிப்புகள்",
    soilPreparation: "🌱 மண் தயாரிப்பு",
    soilPreparationDesc: "கரிமப் பொருட்களைச் சேர்த்து pH அளவைச் சோதித்து நடவு செய்வதற்கு 2-3 வாரங்களுக்கு முன்பு உங்கள் மண்ணைத் தயார் செய்யுங்கள்.",
    waterManagement: "💧 நீர் மேலாண்மை",
    waterManagementDesc: "நீரைச் சேமிக்கவும் சிறந்த தாவர வளர்ச்சியை உறுதிப்படுத்தவும் திறமையான நீர்ப்பாசன அமைப்புகளைச் செயல்படுத்துங்கள்.",
    cropRotation: "🔄 பயிர் சுழற்சி",
    cropRotationDesc: "மண் ஆரோக்கியத்தை பராமரிக்கவும் பூச்சிகள் குவிவதைத் தடுக்கவும் பருவகால பயிர்களை சுழற்றுங்கள்.",
  },

  pt: { // Malayalam
    // Hero Section
    heroTitle: "കൃഷിസാരഥി",
    heroSubtitle: "നിങ്ങളുടെ മാതൃഭാഷയിൽ AI-പവർഡ് വിള രോഗനിർണയം.",
    imageDetection: "ചിത്ര കണ്ടെത്തൽ",
    voiceOutput: "വോയ്സ് ഔട്ട്പുട്ട്",
    multiLanguage: "ബഹുഭാഷ",
    instantResults: "തൽക്ഷണ ഫലങ്ങൾ",

    // Language Selector
    selectLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    chooseLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",

    // Cards
    cropRecommendations: "വിള ശുപാർശകൾ",
    getTips: "നുറുങ്ങുകൾ നേടുക",
    cropDiagnosis: "വിള രോഗനിർണയം",
    go: "പോകുക",

    // Features Section
    howItWorks: "CropAI ഡോക്ടർ എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    howItWorksSubtitle: "ലോകമെമ്പാടുമുള്ള കർഷകർക്കായി വികസിത AI സാങ്കേതികവിദ്യ ലളിതമാക്കി",
    uploadAnalyze: "അപ്‌ലോഡ് ചെയ്ത് വിശകലനം ചെയ്യുക",
    uploadAnalyzeDesc: "നിങ്ങളുടെ വിളയുടെ ഫോട്ടോ എടുക്കുക, ഞങ്ങളുടെ AI തൽക്ഷണം രോഗങ്ങൾ തിരിച്ചറിയുന്നു.",
    aiDiagnosis: "AI രോഗനിർണയം",
    aiDiagnosisDesc: "ഞങ്ങളുടെ AI വിശദമായ വിശകലനവും പ്രാദേശിക ശുപാർശകളും നൽകുന്നു.",
    voiceText: "വോയ്സും ടെക്സ്റ്റും",
    voiceTextDesc: "നിങ്ങളുടെ മാതൃഭാഷയിൽ ടെക്സ്റ്റും ഓഡിയോയും വഴി ഉപദേശം നേടുക.",

    // Common
    loading: "ലോഡ് ചെയ്യുന്നു...",
    error: "പിശക്",
    retry: "വീണ്ടും ശ്രമിക്കുക",

    // ChatBot Page
    cropChatAssistant: "🌾 വിള ചാറ്റ് സഹായി",
    intelligentFarmingCompanion: "നിങ്ങളുടെ ബുദ്ധിമാനായ കൃഷി സഹായി",
    aiAssistant: "🤖 AI സഹായി",
    you: "👤 നിങ്ങൾ",
    aiThinking: "AI ചിന്തിക്കുന്നു...",
    askAnythingFarming: "കൃഷിയെക്കുറിച്ച് എന്തും ചോദിക്കുക...",
    initialBotMessage: "നമസ്കാരം! ഞാൻ നിങ്ങളുടെ കൃഷി സഹായിയാണ്. വിളകൾ, മണ്ണ് അല്ലെങ്കിൽ കൃഷി സാങ്കേതികതകളെക്കുറിച്ച് എന്തും ചോദിക്കുക!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "വിള രോഗനിർണയം",
    cropDiagnosisSubtitle: "നിങ്ങളുടെ മണ്ണ്, കാലാവസ്ഥ, കൃഷി സാഹചര്യങ്ങൾ എന്നിവയെ അടിസ്ഥാനമാക്കി വ്യക്തിഗതമാക്കിയ വിള ശുപാർശകൾ നേടുക",
    analyzeFarmingConditions: "നിങ്ങളുടെ കൃഷി സാഹചര്യങ്ങൾ വിശകലനം ചെയ്യുക",
    cropRecommendationsTitle: "വിള ശുപാർശകൾ",
    farmingTips: "കൃഷി നുറുങ്ങുകൾ",
    soilPreparation: "🌱 മണ്ണ് തയ്യാറാക്കൽ",
    soilPreparationDesc: "ജൈവവസ്തുക്കൾ ചേർത്ത് pH നില പരിശോധിച്ച് നടീൽ നടത്തുന്നതിന് 2-3 ആഴ്ച മുമ്പ് നിങ്ങളുടെ മണ്ണ് തയ്യാറാക്കുക.",
    waterManagement: "💧 ജല പരിപാലനം",
    waterManagementDesc: "ജലം സംരക്ഷിക്കാനും ഒപ്റ്റിമൽ സസ്യവളർച്ച ഉറപ്പാക്കാനും കാര്യക്ഷമമായ ജലസേചന സംവിധാനങ്ങൾ നടപ്പിലാക്കുക.",
    cropRotation: "🔄 വിള ഭ്രമണം",
    cropRotationDesc: "മണ്ണിന്റെ ആരോഗ്യം നിലനിർത്താനും കീടങ്ങളുടെ ശേഖരണം തടയാനും കാലാനുസൃതമായി വിളകൾ ഭ്രമണം ചെയ്യുക.",
  },

  bn: { // Bengali
    // Hero Section
    heroTitle: "কৃষিসারথী",
    heroSubtitle: "আপনার মাতৃভাষায় AI-চালিত ফসলের রোগ নির্ণয়।",
    imageDetection: "ছবি সনাক্তকরণ",
    voiceOutput: "ভয়েস আউটপুট",
    multiLanguage: "বহুভাষিক",
    instantResults: "তাৎক্ষণিক ফলাফল",

    // Language Selector
    selectLanguage: "ভাষা নির্বাচন করুন",
    chooseLanguage: "ভাষা নির্বাচন করুন",

    // Cards
    cropRecommendations: "ফসলের সুপারিশ",
    getTips: "টিপস পান",
    cropDiagnosis: "ফসলের রোগ নির্ণয়",
    go: "যান",

    // Features Section
    howItWorks: "CropAI ডাক্তার কীভাবে কাজ করে",
    howItWorksSubtitle: "বিশ্বব্যাপী কৃষকদের জন্য উন্নত AI প্রযুক্তি সহজ করা হয়েছে",
    uploadAnalyze: "আপলোড এবং বিশ্লেষণ",
    uploadAnalyzeDesc: "আপনার ফসলের ছবি তুলুন এবং আমাদের AI তাৎক্ষণিকভাবে রোগ সনাক্ত করে।",
    aiDiagnosis: "AI নির্ণয়",
    aiDiagnosisDesc: "আমাদের AI বিস্তারিত বিশ্লেষণ এবং স্থানীয় সুপারিশ প্রদান করে।",
    voiceText: "ভয়েস এবং টেক্সট",
    voiceTextDesc: "আপনার মাতৃভাষায় টেক্সট এবং অডিওর মাধ্যমে পরামর্শ পান।",

    // Common
    loading: "লোড হচ্ছে...",
    error: "ত্রুটি",
    retry: "আবার চেষ্টা করুন",

    // ChatBot Page
    cropChatAssistant: "🌾 ফসল চ্যাট সহায়ক",
    intelligentFarmingCompanion: "আপনার বুদ্ধিমান কৃষি সহচর",
    aiAssistant: "🤖 AI সহায়ক",
    you: "👤 আপনি",
    aiThinking: "AI চিন্তা করছে...",
    askAnythingFarming: "কৃষি সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন...",
    initialBotMessage: "নমস্কার! আমি আপনার কৃষি সহায়ক। ফসল, মাটি বা কৃষি কৌশল সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন!",

    // Crop Diagnosis Page
    cropDiagnosisTitle: "ফসলের রোগ নির্ণয়",
    cropDiagnosisSubtitle: "আপনার মাটি, জলবায়ু এবং কৃষি অবস্থার উপর ভিত্তি করে ব্যক্তিগতকৃত ফসলের সুপারিশ পান",
    analyzeFarmingConditions: "আপনার কৃষি অবস্থা বিশ্লেষণ করুন",
    cropRecommendationsTitle: "ফসলের সুপারিশ",
    farmingTips: "কৃষি টিপস",
    soilPreparation: "🌱 মাটি প্রস্তুতি",
    soilPreparationDesc: "জৈব পদার্থ যোগ করে এবং pH স্তর পরীক্ষা করে রোপণের ২-৩ সপ্তাহ আগে আপনার মাটি প্রস্তুত করুন।",
    waterManagement: "💧 জল ব্যবস্থাপনা",
    waterManagementDesc: "জল সংরক্ষণ এবং সর্বোত্তম উদ্ভিদ বৃদ্ধি নিশ্চিত করতে দক্ষ সেচ ব্যবস্থা বাস্তবায়ন করুন।",
    cropRotation: "🔄 ফসল আবর্তন",
    cropRotationDesc: "মাটির স্বাস্থ্য বজায় রাখতে এবং কীটপতঙ্গ সংগ্রহ প্রতিরোধ করতে মৌসুমী ফসল আবর্তন করুন।"
  },
};

export const getTranslation = (languageCode: string): Translations => {
  return translations[languageCode] || translations.en;
};
