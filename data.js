// Godavari River Water Quality Citizen Monitoring Data - Rajahmundry
// Audit Date: September 12, 2026 | Certified Lab Report Ref: SV/VP/26-09/01 - 07

const GODAVARI_DATA = {
  meta: {
    city: "Rajamahendravaram (Rajahmundry)",
    auditDate: "12 September 2026",
    nextAuditDate: "First week of November 2026",
    labDate: "22 September 2026",
    labRef: "SV/VP/26-09/01 to 07",
    client: "Dr. Vihari Piratla, Kontamuru",
    standards: "CPCB Designated Best Use (Class A & B)"
  },

  ghats: [
    {
      id: "point-1",
      pointNo: 1,
      name: "Kateru Bathing Ghat",
      teluguName: "కాతేరు స్నానాల ఘాట్ (గండి పోచమ్మ గుడి)",
      landmark: "Near Gandi Pochamma Temple (Upstream City Entry)",
      sampleCode: "SV/26/6170",
      refNo: "SV/VP/26-09/01",
      lat: 17.04072,
      lon: 81.76371,
      image: "images/kateru_ghat.jpg",
      video: "videos/kateru_sample.mov",
      overallVerdict: "Safe for Bathing & Occasional Sipping",
      overallVerdictTe: "స్నానానికి & ఆచమనానికి సురక్షితం",
      overallClass: "Category A & B",
      statusTheme: "safe",

      drinkingFitness: {
        isFit: true,
        verdict: "SAFE FOR SIPPING",
        badgeClass: "badge-fit",
        reason: "Dissolved Oxygen is excellent at 6.3 mg/L (standard is ≥ 6.0 mg/L), Total Coliform is exceptionally low at 3.0 CFU/100mL (well below the 50 limit), and E. coli is absent.",
        reasonTe: "కరిగిన ఆక్సిజన్ (DO) 6.3 mg/L గా అద్భుతంగా ఉంది (ప్రమాణం ≥ 6.0 mg/L), మొత్తం కొలిఫాం 3.0 CFU/100mL గా చాలా తక్కువగా ఉంది (పరిమితి ≤ 50), మరియు E. coli లేదు."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Dissolved Oxygen 6.3 mg/L ≥ 5.0 required; Coliform 3 vs 500 permissible. As the upstream entry point to Rajahmundry, the river here retains its pristine natural state before mixing with urban contaminants.",
        reasonTe: "DO 6.3 mg/L (అవసరం ≥ 5.0); కొలిఫాం 3 (అనుమతి ≤ 500). రాజమహేంద్రవరానికి ఎగువన ప్రవేశ స్థానం కావడంతో నగర కాలుష్యాలు కలవకముందు నది ఇక్కడ స్వచ్ఛంగా ఉంది."
      },

      metrics: {
        do: "6.3 mg/L",
        ph: "7.77",
        coliform: "3.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-2",
      pointNo: 2,
      name: "Behind Andhra Paper Mill",
      teluguName: "పేపర్ మిల్లు వెనుక భాగం (వ్యర్థ జలాల కలిసే ప్రాంతం)",
      landmark: "Behind Paper Mill outfall, North of Kotilingala",
      sampleCode: "SV/26/6171",
      refNo: "SV/VP/26-09/02",
      lat: 17.02761,
      lon: 81.76828,
      image: "images/papermill_drain.jpg",
      overallVerdict: "Safe for Bathing · Unfit for Sipping",
      overallVerdictTe: "స్నానానికి సురక్షితం · ఆచమనానికి అనర్హం",
      overallClass: "Category B",
      statusTheme: "caution",

      drinkingFitness: {
        isFit: false,
        verdict: "UNFIT FOR SIPPING",
        badgeClass: "badge-unfit",
        reason: "Dissolved Oxygen measured 5.9 mg/L, which fails the strict Category A threshold of ≥ 6.0 mg/L required for occasional sipping.",
        reasonTe: "కరిగిన ఆక్సిజన్ (DO) 5.9 mg/L మాత్రమే ఉంది, ఇది ఆచమనానికి అవసరమైన వర్గం A ప్రమాణం (≥ 6.0 mg/L) కంటే తక్కువ."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Comfortably qualifies for Category B outdoor bathing (DO 5.9 mg/L exceeds the 5.0 mg/L bathing minimum, and Coliform is low at 5.0 CFU/100mL). Safe for immersion under high river flow, but industrial drainage outlets remain an active threat in lean season.",
        reasonTe: "వర్గం B బహిరంగ స్నాన ప్రమాణాలకు అనుగుణంగా ఉంది (DO 5.9 mg/L ≥ 5.0; కొలిఫాం 5.0 CFU/100mL). అధిక ప్రవాహంలో స్నానానికి సురక్షితమే కానీ వేసవిలో పారిశ్రామిక వ్యర్థ జలాల ముప్పు ఉంటుంది."
      },

      metrics: {
        do: "5.9 mg/L",
        ph: "7.91",
        coliform: "5.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-3",
      pointNo: 3,
      name: "Kotilingala Revu / Shivalayam",
      teluguName: "కోటిలింగాల రేవు ప్రారంభం / శివాలయం (ఉమా ఆలయం వెనుక)",
      landmark: "Behind Sri Uma Kotilingeswara Swamy Temple Precinct",
      sampleCode: "SV/26/6172",
      refNo: "SV/VP/26-09/03",
      lat: 17.02277,
      lon: 81.76834,
      image: "images/kotilingala_ghat.jpg",
      video: "videos/kotilingala_sample.mp4",
      overallVerdict: "Safe for Bathing · Unfit for Sipping",
      overallVerdictTe: "స్నానానికి సురక్షితం · ఆచమనానికి అనర్హం",
      overallClass: "Category B",
      statusTheme: "caution",

      drinkingFitness: {
        isFit: false,
        verdict: "UNFIT FOR SIPPING",
        badgeClass: "badge-unfit",
        reason: "Total Coliform jumped nearly 10-fold to 29.0 CFU/100mL compared to upstream Kateru (3.0 CFU). While technically below the 50 limit for Category A, this sharp localized spike signals raw domestic waste entering the water, making it unsafe for occasional sipping (Achamanam).",
        reasonTe: "ఎగువన ఉన్న కాతేరు (3.0 CFU) తో పోలిస్తే మొత్తం కొలిఫాం దాదాపు 10 రెట్లు పెరిగి 29.0 CFU/100mL కు చేరింది. మురుగు నీరు కలుస్తోందనడానికి ఇది సంకేతం కాబట్టి ఆచమనానికి సురక్షితం కాదు."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Meets Category B limits (DO is 6.0 mg/L; Coliform 29 is under the 500 ceiling). However, because Kotilingala hosts hundreds of thousands of bathers daily, this steep microbial gradient warns that stagnant summer flow will quickly turn this ghat into a pathogen hotspot.",
        reasonTe: "వర్గం B పరిమితులకు అనుగుణంగా ఉంది (DO 6.0 mg/L; కొలిఫాం 29 ≤ 500). అయితే వరద ప్రవాహం తగ్గినప్పుడు బాక్టీరియా వేగంగా పెరిగే ప్రమాదం ఉంది."
      },

      metrics: {
        do: "6.0 mg/L",
        ph: "7.40",
        coliform: "29.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-4",
      pointNo: 4,
      name: "Near Nalla Drainage Pump",
      teluguName: "నల్లా మురుగు కాలువ పంపు వద్ద (ప్రధాన వ్యర్థ జలాల కేంద్రం)",
      landmark: "Major City Municipal Sewer Outfall into Godavari",
      sampleCode: "SV/26/6173",
      refNo: "SV/VP/26-09/04",
      lat: 17.01318,
      lon: 81.76967,
      image: "images/nalla_drainage_pump.jpg",
      video: "videos/nalla_collection.mov",
      overallVerdict: "Unsafe · Municipal Sewage Outfall",
      overallVerdictTe: "అసురక్షితం · మురుగు కాలువ పారుదల",
      overallClass: "UNSAFE / HAZARD",
      statusTheme: "hazard",

      drinkingFitness: {
        isFit: false,
        verdict: "UNSAFE / HAZARD",
        badgeClass: "badge-hazard"
      },

      bathingFitness: {
        isFit: false,
        verdict: "UNSAFE FOR BATHING",
        badgeClass: "badge-hazard",
        reason: "Drainage outfall.",
        reasonTe: "మురుగు కాలువ పారుదల కేంద్రం."
      },

      metrics: {
        do: "6.1 mg/L",
        ph: "7.60",
        coliform: "7.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-5",
      pointNo: 5,
      name: "Pushkara Ghat",
      teluguName: "పుష్కర ఘాట్ (ప్రధాన చారిత్రక పుష్కర కేంద్రం)",
      landmark: "Heart of Rajahmundry, Main Historical Pushkaram Ghat",
      sampleCode: "SV/26/6174",
      refNo: "SV/VP/26-09/05",
      lat: 17.00626,
      lon: 81.76683,
      image: "images/pushkar_ghat.jpg",
      video: "videos/pushkar_collection.mp4",
      overallVerdict: "Safe for Bathing · Unfit for Sipping",
      overallVerdictTe: "స్నానానికి సురక్షితం · ఆచమనానికి అనర్హం",
      overallClass: "Category B",
      statusTheme: "caution",

      drinkingFitness: {
        isFit: false,
        verdict: "UNFIT FOR SIPPING",
        badgeClass: "badge-unfit",
        reason: "Even though DO is 6.3 mg/L and Coliform is 10 CFU/100mL under flood spate, Pushkara Ghat sits merely 700 meters downstream of the untreated municipal Nalla sewer pump. Any drop in river current exposes pilgrims to raw sewage.",
        reasonTe: "వరద ప్రవాహంలో DO 6.3 mg/L మరియు కొలిఫాం 10 CFU/100mL ఉన్నప్పటికీ, పుష్కర ఘాట్ నల్లా మురుగు పంపుకు కేవలం 700 మీటర్ల దిగువన ఉంది. కాబట్టి ఆచమనానికి సురక్షితం కాదు."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Meets Category B bathing criteria during flood flow (DO 6.3 mg/L, Coliform 10). However, during Pushkaram with 10+ lakh bathers per day and dry season river stagnation, bacterial counts will explode unless real-time screens and upstream STP interception are enforced.",
        reasonTe: "ప్రస్తుత వరద ప్రవాహంలో వర్గం B స్నాన ప్రమాణాలకు అనుగుణంగా ఉంది (DO 6.3 mg/L, కొలిఫాం 10). అయితే పుష్కరాల సమయంలో ఎగువన మురుగు మళ్ళింపు లేకపోతే బాక్టీరియా భారీగా పెరిగే ముప్పు ఉంది."
      },

      metrics: {
        do: "6.3 mg/L",
        ph: "7.55",
        coliform: "10.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-6",
      pointNo: 6,
      name: "Gowthami Ghat",
      teluguName: "గౌతమీ ఘాట్ (ఇస్కాన్ ఆలయ ప్రాంతం)",
      landmark: "Near ISKCON Temple and Cultural Promenade",
      sampleCode: "SV/26/6175",
      refNo: "SV/VP/26-09/06",
      lat: 17.00309,
      lon: 81.76702,
      image: "images/gowthami_ghat.jpg",
      video: "videos/gowthami_collection.mp4",
      overallVerdict: "Safe for Bathing · Unfit for Sipping",
      overallVerdictTe: "స్నానానికి సురక్షితం · ఆచమనానికి అనర్హం",
      overallClass: "Category B",
      statusTheme: "caution",

      drinkingFitness: {
        isFit: false,
        verdict: "UNFIT FOR SIPPING",
        badgeClass: "badge-unfit",
        reason: "Dissolved Oxygen is 5.9 mg/L, which is marginally below the 6.0 mg/L threshold needed for Category A water. Not recommended for occasional sipping (Achamanam) without filtration and treatment.",
        reasonTe: "కరిగిన ఆక్సిజన్ (DO) 5.9 mg/L గా ఉంది, ఇది వర్గం A ప్రమాణం (≥ 6.0 mg/L) కంటే కొద్దిగా తక్కువ. శుద్ధి చేయకుండా ఆచమనానికి లేదా తాగడానికి సురక్షితం కాదు."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Meets Category B criteria with balanced neutral pH (7.08) and zero coliform detected in the 100mL sample. Good for bathing/immersion during active river flow.",
        reasonTe: "సమతుల్య pH (7.08) మరియు < 1.0 CFU కొలిఫాంతో వర్గం B స్నాన ప్రమాణాలకు పూర్తిగా అనుగుణంగా ఉంది."
      },

      metrics: {
        do: "5.9 mg/L",
        ph: "7.08",
        coliform: "< 1.0 CFU/100mL",
        cod: "< 10.0 mg/L",
        ecoli: "Not Detected"
      }
    },
    {
      id: "point-7",
      pointNo: 7,
      name: "Saraswathi Ghat",
      teluguName: "సరస్వతీ ఘాట్ (రైల్వే ఆర్చ్ వంతెన సమీపంలో)",
      landmark: "Near Godavari Arch Bridge, Downstream Urban Reach",
      sampleCode: "SV/26/6176",
      refNo: "SV/VP/26-09/07",
      lat: 16.99315,
      lon: 81.77201,
      image: "images/saraswathi_ghat.jpg",
      video: "videos/saraswathi_collection.mov",
      overallVerdict: "Safe for Bathing · Unfit for Sipping",
      overallVerdictTe: "స్నానానికి సురక్షితం · ఆచమనానికి అనర్హం",
      overallClass: "Category B",
      statusTheme: "caution",

      drinkingFitness: {
        isFit: false,
        verdict: "UNFIT FOR SIPPING",
        badgeClass: "badge-unfit",
        reason: "Sits furthest downstream, accumulating runoffs from the entire city frontage. Tested pH is 8.03 (alkaline shift). Occasional sipping is not advised due to garbage pileup at the ghat.",
        reasonTe: "నగరానికి అత్యంత దిగువన ఉండటం మరియు ఘాట్ వద్ద పేరుకుపోయిన చెత్త కారణంగా ఆచమనానికి సురక్షితం కాదు (pH 8.03)."
      },

      bathingFitness: {
        isFit: true,
        verdict: "SAFE FOR BATHING",
        badgeClass: "badge-fit",
        reason: "Tested pH (8.03) and COD (<10.0 mg/L) comply with Category B standards.",
        reasonTe: "పరీక్షించిన pH (8.03) మరియు COD (<10.0 mg/L) వర్గం B స్నాన ప్రమాణాలకు అనుగుణంగా ఉన్నాయి."
      },

      metrics: {
        do: "Not in panel",
        ph: "8.03",
        coliform: "Not in panel",
        cod: "< 10.0 mg/L",
        ecoli: "Not in panel"
      }
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GODAVARI_DATA;
}
