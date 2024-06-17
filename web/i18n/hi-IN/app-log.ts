const translation = {
  title: 'लॉग्स',
  description: 'लॉग्स एप्लिकेशन के रनिंग स्टेटस को रिकॉर्ड करते हैं, जिसमें यूजर इनपुट और एआई रिप्लाईज़ शामिल हैं।',
  dateTimeFormat: 'MM/DD/YYYY hh:mm A',
  table: {
    header: {
      time: 'समय',
      endUser: 'अंतिम उपयोगकर्ता',
      input: 'इनपुट',
      output: 'आउटपुट',
      summary: 'शीर्षक',
      messageCount: 'संदेशों की संख्या',
      userRate: 'उपयोगकर्ता दर',
      adminRate: 'ऑपरेटर दर',
      startTime: 'शुरू करने का समय',
      status: 'स्थिति',
      runtime: 'रन टाइम',
      tokens: 'टोकन',
      user: 'अंतिम उपयोगकर्ता',
      version: 'संस्करण',
    },
    pagination: {
      previous: 'पिछला',
      next: 'अगला',
    },
    empty: {
      noChat: 'कोई बातचीत नहीं हुई',
      noOutput: 'कोई आउटपुट नहीं',
      element: {
        title: 'क्या कोई वहाँ है?',
        content:
          'अंत उपयोगकर्ताओं और एआई एप्लिकेशन के बीच इंटरैक्शंस को देखें और एनोटेट करें ताकि एआई की सटीकता लगातार सुधारी जा सके। आप <shareLink>यहाँ शेयर</shareLink> या <testLink>परीक्षण</testLink> कर सकते हैं वेब ऐप अपने आप, फिर इस पृष्ठ पर लौटें।',
      },
    },
  },
  detail: {
    time: 'समय',
    conversationId: 'बातचीत आईडी',
    promptTemplate: 'प्रॉम्प्ट टेम्पलेट',
    promptTemplateBeforeChat: 'चैट से पहले प्रॉम्प्ट टेम्पलेट · सिस्टम मेसेज के रूप में',
    annotationTip: '{{user}} द्वारा सुधार चिह्नित',
    timeConsuming: '',
    second: 'सेकंड',
    tokenCost: 'टोकन खर्च',
    loading: 'लोड हो रहा है',
    operation: {
      like: 'पसंद',
      dislike: 'नापसंद',
      addAnnotation: 'सुधार जोड़ें',
      editAnnotation: 'सुधार संपादित करें',
      annotationPlaceholder:
        'एआई के लिए आपको वह अपेक्षित उत्तर दर्ज करें जिसका उपयोग भविष्य में मॉडल फ़ाइन-ट्यूनिंग और टेक्स्ट जनरेशन की गुणवत्ता में सुधार के लिए किया जा सकता है।',
    },
    variables: 'वेरिएबल्स',
    uploadImages: 'अपलोड की गई छवियाँ',
  },
  filter: {
    period: {
      today: 'आज',
      last7days: 'पिछले 7 दिन',
      last4weeks: 'पिछले 4 सप्ताह',
      last3months: 'पिछले 3 महीने',
      last12months: 'पिछले 12 महीने',
      monthToDate: 'माह तक तिथि',
      quarterToDate: 'तिमाही तक तिथि',
      yearToDate: 'वर्ष तक तिथि',
      allTime: 'सभी समय',
    },
    annotation: {
      all: 'सभी',
      annotated: 'एनोटेट किए गए सुधार ({{count}} आइटम)',
      not_annotated: 'एनोटेट नहीं किया गया',
    },
  },
  workflowTitle: 'वर्कफ़्लो लॉग्स',
  workflowSubtitle: 'यह लॉग ऑटोमेटे के ऑपरेशन को रिकॉर्ड करता है।',
  runDetail: {
    title: 'बातचीत लॉग',
    workflowTitle: 'लॉग विवरण',
  },
  promptLog: 'प्रॉम्प्ट लॉग',
  agentLog: 'एजेंट लॉग',
  viewLog: 'व्यू लॉग',
  agentLogDetail: {
    agentMode: 'एजेंट मोड',
    startTime: 'शुरू करने का समय',
    endTime: 'समाप्ति समय',
    duration: 'अवधि',
    promptTemplate: 'प्रॉम्प्ट टेम्पलेट',
    promptInput: 'प्रॉम्प्ट इनपुट',
    response: 'प्रतिक्रिया',
  },
}

export default translation
