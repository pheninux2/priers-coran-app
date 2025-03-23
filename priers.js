/**
 * priers.js - Application complète de prières islamiques
 * Version: 2.0
 * Organisation monolithique avec sections clairement délimitées
 */

/************************************
 * SECTION 1: CONFIGURATION & VARIABLES GLOBALES
 ************************************/

// Chemins des fichiers audio d'adhan
// const adhanPaths = {
//     adhan1: './madinah.mp3',
//     adhan2: './makkah.mp3',
//     beep: './beep.mp3'
// };

// Essayez ceci
const adhanPaths = {
    adhan1: 'https://www.islamcan.com/audio/adhan/azan1.mp3', // URL en ligne
    adhan2: 'https://www.islamcan.com/audio/adhan/azan3.mp3', // URL en ligne
    beep: './beep.mp3'
};

// Variable pour suivre si l'arrêt est volontaire ou non
let isManualStop = false;

// Variables globales de l'application
let packageName = '';
let currentPosition = null;
let prayerTimes = null;
let currentPrayer = null;
let nextPrayer = null;
let countdownInterval = null;
let currentLanguage = 'fr';
let primaryColor = '#5D5CDE';
let currentSurah = null;
let bookmarkData = null;
let reminders = [];
let adhanPlayPromise = null; // Nouvelle variable pour gérer les promesses d'adhan

// Initialiser packageName si l'interface Android est disponible
if (window.AndroidInterface) {
    packageName = window.AndroidInterface.getPackageName();
}

/************************************
 * SECTION 2: TRADUCTIONS
 ************************************/

// Translations
const translations = {
    fr: {
        appTitle: "Horaires des Prières",
        prayers: "Prières",
        quran: "Coran",
        douas: "Douas",
        settings: "Paramètres",
        nextPrayer: "Prochaine prière",
        fajrName: "Fajr",
        fajrDesc: "Prière de l'aube",
        sunriseName: "Chourouk",
        sunriseDesc: "Lever du soleil",
        dhuhrName: "Dhuhr",
        dhuhrDesc: "Prière de midi",
        asrName: "Asr",
        asrDesc: "Prière de l'après-midi",
        maghribName: "Maghrib",
        maghribDesc: "Prière du coucher du soleil",
        ishaName: "Isha",
        ishaDesc: "Prière de la nuit",
        locationPermission: "Veuillez autoriser l'accès à votre position pour obtenir les horaires précis de prière.",
        allowLocation: "Autoriser la géolocalisation",
        calculationInfo: "Les horaires peuvent légèrement varier selon les méthodes de calcul.",
        calculationMethod: "Méthode de calcul:",
        selectSurah: "Sélectionnez une sourate:",
        loadingSurahs: "Chargement des sourates...",
        read: "Lire",
        quranError: "Une erreur s'est produite lors du chargement du Coran.",
        settingsTitle: "Paramètres",
        languageTitle: "Langue",
        themeTitle: "Thème",
        themeDescription: "Basculer entre les thèmes clair et sombre",
        colorTitle: "Couleur du thème",
        douas: "Douas",
        douasTitle: "Invocations (Douas)",
        createReminder: "Créer un rappel",
        share: "Partager",
        remindersTitle: "Rappels",
        noReminders: "Aucun rappel configuré",
        reminderModalTitle: "Créer un rappel",
        reminderTitleLabel: "Titre du rappel",
        reminderDateLabel: "Date",
        reminderTimeLabel: "Heure",
        reminderRepeatLabel: "Répéter chaque jour",
        cancel: "Annuler",
        save: "Enregistrer",
        shareModalTitle: "Partager",
        copy: "Copier",
        nativeShare: "Partager",
        close: "Fermer",
        reminderCreated: "Rappel créé avec succès",
        copied: "Copié dans le presse-papiers",
        continueReading: "Reprendre la lecture",
        searchDoua: "Rechercher une invocation...",
        deleteReminder: "Supprimer",
        confirmDelete: "Êtes-vous sûr de vouloir supprimer ce rappel?",
        yes: "Oui",
        no: "Non",
        reminderDeleted: "Rappel supprimé",
        // Ajout des traductions pour adhan
        adhanTitle: 'Adhan (Appel à la prière)',
        adhanSettingsTitle: 'Paramètres Adhan',
        adhanSettingsDesc: 'Configurez votre adhan préféré pour chaque prière',
        listen: 'Écouter',
        adhanPlayError: 'Erreur lors de la lecture de l\'adhan',
        stop: 'Arrêter',
        adhanEnabled: 'Adhan activé',
        adhanDisabled: 'Adhan désactivé',
        beepEnabled: 'Bip activé',
        downloadAppTitle: "Application mobile",
        downloadSubtitle: "Téléchargez notre application Android",
        downloadDesc: "Profitez de toutes les fonctionnalités même hors ligne, avec notifications pour les heures de prière et mode sombre automatique.",
        feature1: "Notifications pour les heures de prière",
        feature2: "Fonctionne hors ligne",
        feature3: "Plus rapide et fluide",
        downloadButtonText: "Télécharger l'APK",
        downloadHelp: "Scannez le QR code avec votre téléphone ou cliquez sur le bouton pour télécharger.",
        welcomeTitle: "Bienvenue dans l'application Prières & Coran",
        welcomeSubtitle: "Votre compagnon spirituel quotidien",
        welcomeFeature1Title: "Horaires précis",
        welcomeFeature1Desc: "Obtenez les horaires de prière exacts basés sur votre localisation",
        welcomeFeature2Title: "Le Noble Coran",
        welcomeFeature2Desc: "Lisez le Coran en arabe et dans votre langue",
        welcomeFeature3Title: "Douas essentielles",
        welcomeFeature3Desc: "Accédez aux invocations pour chaque moment de la journée",
        welcomeStartText: "Commencer",
        welcomeDontShowText: "Ne plus afficher ce message"
    },
    en: {
        appTitle: "Prayer Times",
        prayers: "Prayers",
        quran: "Quran",
        douas: "Duas",
        settings: "Settings",
        nextPrayer: "Next Prayer",
        fajrName: "Fajr",
        fajrDesc: "Dawn Prayer",
        sunriseName: "Sunrise",
        sunriseDesc: "Sunrise",
        dhuhrName: "Dhuhr",
        dhuhrDesc: "Noon Prayer",
        asrName: "Asr",
        asrDesc: "Afternoon Prayer",
        maghribName: "Maghrib",
        maghribDesc: "Sunset Prayer",
        ishaName: "Isha",
        ishaDesc: "Night Prayer",
        locationPermission: "Please allow access to your location to get accurate prayer times.",
        allowLocation: "Allow Geolocation",
        calculationInfo: "Prayer times may slightly vary according to calculation methods.",
        calculationMethod: "Calculation Method:",
        selectSurah: "Select a Surah:",
        loadingSurahs: "Loading Surahs...",
        read: "Read",
        quranError: "An error occurred while loading the Quran.",
        settingsTitle: "Settings",
        languageTitle: "Language",
        themeTitle: "Theme",
        themeDescription: "Toggle between light and dark themes",
        colorTitle: "Theme Color",
        douas: "Duas",
        douasTitle: "Supplications (Duas)",
        createReminder: "Create Reminder",
        share: "Share",
        remindersTitle: "Reminders",
        noReminders: "No reminders configured",
        reminderModalTitle: "Create Reminder",
        reminderTitleLabel: "Reminder Title",
        reminderDateLabel: "Date",
        reminderTimeLabel: "Time",
        reminderRepeatLabel: "Repeat daily",
        cancel: "Cancel",
        save: "Save",
        shareModalTitle: "Share",
        copy: "Copy",
        nativeShare: "Share",
        close: "Close",
        reminderCreated: "Reminder created successfully",
        copied: "Copied to clipboard",
        continueReading: "Continue Reading",
        searchDoua: "Search for a supplication...",
        deleteReminder: "Delete",
        confirmDelete: "Are you sure you want to delete this reminder?",
        yes: "Yes",
        no: "No",
        reminderDeleted: "Reminder deleted",
        // Ajout des traductions pour adhan
        adhanTitle: 'Adhan (Call to Prayer)',
        adhanSettingsTitle: 'Adhan Settings',
        adhanSettingsDesc: 'Configure your preferred adhan for each prayer',
        listen: 'Listen',
        adhanPlayError: 'Error playing adhan',
        stop: 'Stop',
        adhanEnabled: 'Adhan enabled',
        adhanDisabled: 'Adhan disabled',
        beepEnabled: 'Beep enabled',
        downloadAppTitle: "Mobile App",
        downloadSubtitle: "Download our Android application",
        downloadDesc: "Enjoy all features even offline, with prayer time notifications and automatic dark mode.",
        feature1: "Prayer time notifications",
        feature2: "Works offline",
        feature3: "Faster and smoother",
        downloadButtonText: "Download APK",
        downloadHelp: "Scan the QR code with your phone or click the button to download.",
        welcomeTitle: "Welcome to Prayer & Quran App",
        welcomeSubtitle: "Your daily spiritual companion",
        welcomeFeature1Title: "Accurate Prayer Times",
        welcomeFeature1Desc: "Get exact prayer times based on your location",
        welcomeFeature2Title: "The Noble Quran",
        welcomeFeature2Desc: "Read the Quran in Arabic and your language",
        welcomeFeature3Title: "Essential Duas",
        welcomeFeature3Desc: "Access supplications for every moment of the day",
        welcomeStartText: "Get Started",
        welcomeDontShowText: "Don't show this message again"
    },
    ar: {
        appTitle: "مواقيت الصلاة",
        prayers: "الصلوات",
        quran: "القرآن",
        douas: "الأدعية",
        settings: "الإعدادات",
        nextPrayer: "الصلاة القادمة",
        fajrName: "الفجر",
        fajrDesc: "صلاة الفجر",
        sunriseName: "الشروق",
        sunriseDesc: "شروق الشمس",
        dhuhrName: "الظهر",
        dhuhrDesc: "صلاة الظهر",
        asrName: "العصر",
        asrDesc: "صلاة العصر",
        maghribName: "المغرب",
        maghribDesc: "صلاة المغرب",
        ishaName: "العشاء",
        ishaDesc: "صلاة العشاء",
        locationPermission: "يرجى السماح بالوصول إلى موقعك للحصول على مواقيت دقيقة للصلاة.",
        allowLocation: "السماح بتحديد الموقع",
        calculationInfo: "قد تختلف مواقيت الصلاة قليلاً وفقًا لطرق الحساب.",
        calculationMethod: "طريقة الحساب:",
        selectSurah: "اختر سورة:",
        loadingSurahs: "جاري تحميل السور...",
        read: "قراءة",
        quranError: "حدث خطأ أثناء تحميل القرآن.",
        settingsTitle: "الإعدادات",
        languageTitle: "اللغة",
        themeTitle: "السمة",
        themeDescription: "التبديل بين السمات الفاتحة والداكنة",
        colorTitle: "لون السمة",
        douas: "الأدعية",
        douasTitle: "الأدعية والأذكار",
        createReminder: "إنشاء تذكير",
        share: "مشاركة",
        remindersTitle: "التذكيرات",
        noReminders: "لا توجد تذكيرات",
        reminderModalTitle: "إنشاء تذكير",
        reminderTitleLabel: "عنوان التذكير",
        reminderDateLabel: "التاريخ",
        reminderTimeLabel: "الوقت",
        reminderRepeatLabel: "تكرار يوميًا",
        cancel: "إلغاء",
        save: "حفظ",
        shareModalTitle: "مشاركة",
        copy: "نسخ",
        nativeShare: "مشاركة",
        close: "إغلاق",
        reminderCreated: "تم إنشاء التذكير بنجاح",
        copied: "تم النسخ إلى الحافظة",
        continueReading: "متابعة القراءة",
        searchDoua: "البحث عن دعاء...",
        deleteReminder: "حذف",
        confirmDelete: "هل أنت متأكد من أنك تريد حذف هذا التذكير؟",
        yes: "نعم",
        no: "لا",
        reminderDeleted: "تم حذف التذكير",
        // Ajout des traductions pour adhan
        adhanTitle: 'الأذان (دعوة للصلاة)',
        adhanSettingsTitle: 'إعدادات الأذان',
        adhanSettingsDesc: 'قم بتكوين الأذان المفضل لكل صلاة',
        listen: 'استمع',
        adhanPlayError: 'خطأ في تشغيل الأذان',
        stop: 'توقف',
        adhanEnabled: 'الأذان مفعّل',
        adhanDisabled: 'الأذان غير مفعّل',
        beepEnabled: 'تنبيه صوتي مفعّل',
        downloadAppTitle: "تطبيق الجوال",
        downloadSubtitle: "قم بتنزيل تطبيق الأندرويد الخاص بنا",
        downloadDesc: "استمتع بجميع الميزات حتى عندما تكون غير متصل بالإنترنت، مع إشعارات لأوقات الصلاة والوضع المظلم التلقائي.",
        feature1: "إشعارات بأوقات الصلاة",
        feature2: "يعمل بدون إنترنت",
        feature3: "أسرع وأكثر سلاسة",
        downloadButtonText: "تنزيل APK",
        downloadHelp: "امسح رمز QR باستخدام هاتفك أو انقر على الزر للتنزيل.",
        welcomeTitle: "مرحبًا بك في تطبيق الصلاة والقرآن",
        welcomeSubtitle: "رفيقك الروحي اليومي",
        welcomeFeature1Title: "مواقيت دقيقة للصلاة",
        welcomeFeature1Desc: "احصل على مواقيت دقيقة للصلاة بناءً على موقعك",
        welcomeFeature2Title: "القرآن الكريم",
        welcomeFeature2Desc: "اقرأ القرآن باللغة العربية ولغتك",
        welcomeFeature3Title: "أدعية أساسية",
        welcomeFeature3Desc: "الوصول إلى الأدعية لكل لحظة من اليوم",
        welcomeStartText: "ابدأ",
        welcomeDontShowText: "لا تظهر هذه الرسالة مرة أخرى"
    }
};

/************************************
 * SECTION 3: MODÈLES DE DONNÉES
 ************************************/

// Douas list - Une liste d'invocations communes
const douasList = [
    {
        id: 1,
        titleFr: "Invocation du matin",
        titleEn: "Morning Supplication",
        titleAr: "دعاء الصباح",
        textFr: "Au nom d'Allah, avec le nom d'Allah, rien sur terre ou dans les cieux ne peut causer de tort, Il est Celui qui entend tout et sait tout.",
        textEn: "In the name of Allah, with the name of Allah, nothing on the earth or in the heaven can cause harm, and He is the All-Hearing and All-Knowing.",
        textAr: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
        category: "daily"
    },
    {
        id: 2,
        titleFr: "Invocation du soir",
        titleEn: "Evening Supplication",
        titleAr: "دعاء المساء",
        textFr: "Nous voici au soir, et le royaume appartient toujours à Allah. Louange à Allah, il n'y a de divinité qu'Allah, l'Unique, sans associé.",
        textEn: "We have reached the evening and the kingdom still belongs to Allah. Praise is to Allah, there is no deity except Allah, the One, without partner.",
        textAr: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
        category: "daily"
    },
    {
        id: 3,
        titleFr: "Protection contre le mal",
        titleEn: "Protection from Evil",
        titleAr: "دعاء الاستعاذة من الشر",
        textFr: "Je cherche refuge auprès d'Allah contre Satan le maudit. Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
        textEn: "I seek refuge with Allah from Satan, the accursed one. In the name of Allah, the Most Gracious, the Most Merciful.",
        textAr: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
        category: "protection"
    },
    {
        id: 4,
        titleFr: "Invocation avant de manger",
        titleEn: "Supplication before Eating",
        titleAr: "دعاء قبل الطعام",
        textFr: "Au nom d'Allah, et avec les bénédictions d'Allah.",
        textEn: "In the name of Allah, and with the blessings of Allah.",
        textAr: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
        category: "daily"
    },
    {
        id: 5,
        titleFr: "Invocation après avoir mangé",
        titleEn: "Supplication after Eating",
        titleAr: "دعاء بعد الطعام",
        textFr: "Louange à Allah qui nous a nourris, nous a donné à boire, et a fait de nous des musulmans.",
        textEn: "Praise be to Allah who has fed us, given us drink, and made us Muslims.",
        textAr: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ",
        category: "daily"
    },
    {
        id: 6,
        titleFr: "Invocation en entrant dans la mosquée",
        titleEn: "Supplication when Entering the Mosque",
        titleAr: "دعاء دخول المسجد",
        textFr: "Au nom d'Allah. O Allah, accorde Ta miséricorde à Muhammad. O Allah, pardonne-moi mes péchés, et ouvre-moi les portes de Ta miséricorde.",
        textEn: "In the name of Allah. O Allah, send blessings upon Muhammad. O Allah, forgive me my sins and open for me the gates of Your mercy.",
        textAr: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ اغْفِرْ لِي ذُنُوبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",
        category: "mosque"
    },
    {
        id: 7,
        titleFr: "Invocation de détresse",
        titleEn: "Supplication of Distress",
        titleAr: "دعاء الكرب",
        textFr: "Il n'y a de divinité qu'Allah, Le Très Grand, Le Magnanime. Il n'y a de divinité qu'Allah, Le Seigneur du Trône immense.",
        textEn: "There is no deity but Allah, the Great, the Tolerant. There is no deity but Allah, Lord of the Magnificent Throne.",
        textAr: "لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ",
        category: "difficulty"
    },
    {
        id: 8,
        titleFr: "Invocation avant de dormir",
        titleEn: "Supplication before Sleeping",
        titleAr: "دعاء قبل النوم",
        textFr: "Au nom d'Allah, je meurs et je vis.",
        textEn: "In Your name, O Allah, I die and I live.",
        textAr: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        category: "daily"
    },
    {
        id: 9,
        titleFr: "Invocation pour les parents",
        titleEn: "Supplication for Parents",
        titleAr: "دعاء للوالدين",
        textFr: "Ô Seigneur ! Fais-leur miséricorde comme ils m'ont élevé tout petit.",
        textEn: "My Lord! Bestow on them Your Mercy as they did bring me up when I was small.",
        textAr: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        category: "family"
    },
    {
        id: 10,
        titleFr: "Demande de pardon",
        titleEn: "Seeking Forgiveness",
        titleAr: "الاستغفار",
        textFr: "Je demande pardon à Allah, mon Seigneur, pour tout péché, et je me repens auprès de Lui.",
        textEn: "I seek forgiveness from Allah, my Lord, for every sin, and I turn to Him in repentance.",
        textAr: "أَسْتَغْفِرُ اللَّهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ",
        category: "forgiveness"
    }
];

// Variables pour les adhan
let adhanSettings = {
    enabled: true,
    Fajr: 'adhan1',
    Dhuhr: 'adhan1',
    Asr: 'adhan1',
    Maghrib: 'adhan1',
    Isha: 'adhan1'
};

/************************************
 * SECTION 4: RÉFÉRENCES DOM
 ************************************/

// DOM Elements
const locationPermissionEl = document.getElementById('location-permission');
const locationPermissionTextEl = document.getElementById('location-permission-text');
const allowLocationBtn = document.getElementById('allow-location');
const allowLocationTextEl = document.getElementById('allow-location-text');
const errorMessageEl = document.getElementById('error-message');
const loadingEl = document.getElementById('loading');
const prayerTimesEl = document.getElementById('prayer-times');
const dateDisplayEl = document.getElementById('date-display');
const locationDisplayEl = document.getElementById('location-display');
const calculationMethodSelect = document.getElementById('calculation-method');
const calculationMethodLabelEl = document.getElementById('calculation-method-label');
const calculationInfoEl = document.getElementById('calculation-info');
const countdownEl = document.getElementById('countdown');
const nextPrayerEl = document.getElementById('next-prayer');
const nextPrayerTitleEl = document.getElementById('next-prayer-title');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const surahSelect = document.getElementById('surah-select');
const loadSurahBtn = document.getElementById('load-surah');
const loadSurahTextEl = document.getElementById('load-surah-text');
const selectSurahLabelEl = document.getElementById('select-surah-label');
const loadingSurahsEl = document.getElementById('loading-surahs');
const quranLoadingEl = document.getElementById('quran-loading');
const quranErrorEl = document.getElementById('quran-error');
const quranErrorTextEl = document.getElementById('quran-error-text');
const surahContainer = document.getElementById('surah-container');
const surahTitle = document.getElementById('surah-title');
const surahInfo = document.getElementById('surah-info');
const bismillah = document.getElementById('bismillah');
const verses = document.getElementById('verses');
const themeToggle = document.getElementById('theme-toggle');
const languageBtns = document.querySelectorAll('.language-btn');
const colorBtns = document.querySelectorAll('.color-btn');
const continueReadingBtn = document.getElementById('continue-reading');
const continueReadingContainer = document.getElementById('continue-reading-container');
const continueReadingTextEl = document.getElementById('continue-reading-text');
const douasListEl = document.getElementById('douas-list');
const douaSearchEl = document.getElementById('doua-search');
const douasTitleEl = document.getElementById('douas-title');
const createReminderBtn = document.getElementById('create-reminder-btn');
const createReminderTextEl = document.getElementById('create-reminder-text');
const shareSurahBtn = document.getElementById('share-surah-btn');
const shareSurahTextEl = document.getElementById('share-surah-text');
const reminderModal = document.getElementById('reminder-modal');
const reminderModalTitle = document.getElementById('reminder-modal-title');
const reminderTitleInput = document.getElementById('reminder-title');
const reminderTitleLabel = document.getElementById('reminder-title-label');
const reminderDateInput = document.getElementById('reminder-date');
const reminderDateLabel = document.getElementById('reminder-date-label');
const reminderTimeInput = document.getElementById('reminder-time');
const reminderTimeLabel = document.getElementById('reminder-time-label');
const reminderRepeatCheckbox = document.getElementById('reminder-repeat');
const reminderRepeatLabel = document.getElementById('reminder-repeat-label');
const reminderSurahIdInput = document.getElementById('reminder-surah-id');
const reminderDouaIdInput = document.getElementById('reminder-doua-id');
const reminderVerseIdInput = document.getElementById('reminder-verse-id');
const reminderTypeInput = document.getElementById('reminder-type');
const cancelReminderBtn = document.getElementById('cancel-reminder');
const cancelReminderText = document.getElementById('cancel-reminder-text');
const saveReminderBtn = document.getElementById('save-reminder');
const saveReminderText = document.getElementById('save-reminder-text');
const shareModal = document.getElementById('share-modal');
const shareModalTitle = document.getElementById('share-modal-title');
const shareContentTextarea = document.getElementById('share-content');
const closeShareBtn = document.getElementById('close-share');
const closeShareText = document.getElementById('close-share-text');
const copyShareBtn = document.getElementById('copy-share');
const copyShareText = document.getElementById('copy-share-text');
const nativeShareBtn = document.getElementById('native-share');
const nativeShareText = document.getElementById('native-share-text');
const remindersTitle = document.getElementById('reminders-title');
const remindersListEl = document.getElementById('reminders-list');
const noRemindersEl = document.getElementById('no-reminders');
const noRemindersText = document.getElementById('no-reminders-text');
const addReminderDoua = document.getElementById('add-reminder-doua');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// Prayer times mapping
const prayerCards = {
    Fajr: document.getElementById('fajr'),
    Sunrise: document.getElementById('sunrise'),
    Dhuhr: document.getElementById('dhuhr'),
    Asr: document.getElementById('asr'),
    Maghrib: document.getElementById('maghrib'),
    Isha: document.getElementById('isha')
};

const prayerTimeElements = {
    Fajr: document.getElementById('fajr-time'),
    Sunrise: document.getElementById('sunrise-time'),
    Dhuhr: document.getElementById('dhuhr-time'),
    Asr: document.getElementById('asr-time'),
    Maghrib: document.getElementById('maghrib-time'),
    Isha: document.getElementById('isha-time')
};

/************************************
 * SECTION 5: UTILITAIRES UI
 ************************************/

// Show toast message
function showToast(message, isError = false) {
    toastMessage.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Format date according to language
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let locale;
    switch (currentLanguage) {
        case 'fr':
            locale = 'fr-FR';
            break;
        case 'en':
            locale = 'en-US';
            break;
        case 'ar':
            locale = 'ar-SA';
            break;
        default:
            locale = 'fr-FR';
    }

    return date.toLocaleDateString(locale, options);
}

// Share content function
function shareContentFunc(title, content) {
    shareContentTextarea.value = content;
    shareModal.classList.remove('hidden');

    // Check if Web Share API is available
    if (navigator.share) {
        nativeShareBtn.classList.remove('hidden');
    } else {
        nativeShareBtn.classList.add('hidden');
    }
}

/************************************
 * SECTION 6: FONCTIONNALITÉS DES TEMPS DE PRIÈRE
 ************************************/

// Convert time string from API (HH:MM) to Date object
function timeStringToDate(timeStr, date = new Date()) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const timeDate = new Date(date);
    timeDate.setHours(hours, minutes, 0, 0);
    return timeDate;
}

// Calculate current and next prayer time
function calculateCurrentAndNextPrayer() {
    if (!prayerTimes) return;

    const now = new Date();
    const prayerNames = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    const prayers = prayerNames.map(name => ({
        name,
        time: timeStringToDate(prayerTimes[name])
    }));

    // Add tomorrow's Fajr
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    prayers.push({
        name: 'Fajr',
        time: timeStringToDate(prayerTimes['Fajr'], tomorrow),
        isTomorrow: true
    });

    // Sort prayers by time
    prayers.sort((a, b) => a.time - b.time);

    // Find current and next prayer
    currentPrayer = null;
    for (let i = 0; i < prayers.length - 1; i++) {
        if (now >= prayers[i].time && now < prayers[i + 1].time) {
            currentPrayer = prayers[i];
            nextPrayer = prayers[i + 1];
            break;
        }
    }

    // If no current prayer found (before first prayer of the day)
    if (!currentPrayer && now < prayers[0].time) {
        currentPrayer = {
            name: 'Isha',
            time: timeStringToDate(prayerTimes['Isha'], new Date(now.getTime() - 24 * 60 * 60 * 1000)),
            isYesterday: true
        };
        nextPrayer = prayers[0];
    }

    // Après avoir déterminé la prochaine prière, configurer une alarme pour l'adhan
    if (nextPrayer) {
        const now = new Date();
        const nextTime = nextPrayer.time;
        const timeDiff = nextTime - now;

        // Si le temps restant est inférieur à 60 secondes et supérieur à 0, jouer l'adhan
        if (timeDiff <= 60000 && timeDiff > 0) {
            // Programmer l'adhan pour le moment exact de la prière
            setTimeout(() => {
                playAdhanAtPrayerTime(nextPrayer.name);
            }, timeDiff);
        }
    }

    // Update UI
    updatePrayerHighlight();
    updateNextPrayerDisplay();
}

// Update UI to highlight current prayer
function updatePrayerHighlight() {
    // Reset all highlights
    Object.values(prayerCards).forEach(card => {
        card.classList.remove('current', 'bg-primary/10');
    });

    // Highlight current prayer if it's one of the main prayers (not including Sunset)
    if (currentPrayer && prayerCards[currentPrayer.name]) {
        const currentCard = prayerCards[currentPrayer.name];
        currentCard.classList.add('current', 'bg-primary/10');
    }
}

// Update next prayer display
function updateNextPrayerDisplay() {
    if (!nextPrayer) return;

    // Get prayer name in current language
    let nextName;
    switch (nextPrayer.name) {
        case 'Fajr':
            nextName = translations[currentLanguage].fajrName;
            break;
        case 'Sunrise':
            nextName = translations[currentLanguage].sunriseName;
            break;
        case 'Dhuhr':
            nextName = translations[currentLanguage].dhuhrName;
            break;
        case 'Asr':
            nextName = translations[currentLanguage].asrName;
            break;
        case 'Maghrib':
            nextName = translations[currentLanguage].maghribName;
            break;
        case 'Isha':
            nextName = translations[currentLanguage].ishaName;
            break;
        default:
            nextName = nextPrayer.name;
    }

    // Get tomorrow text
    const tomorrowText = currentLanguage === 'fr' ? ' (demain)' :
        currentLanguage === 'en' ? ' (tomorrow)' :
            ' (غدا)';

    nextPrayerEl.textContent = `${nextName} - ${prayerTimes[nextPrayer.name]}${nextPrayer.isTomorrow ? tomorrowText : ''}`;

    // Start countdown
    startCountdown();
}

// Start countdown to next prayer
function startCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(() => {
        const now = new Date();
        const nextTime = nextPrayer.time;
        const diff = nextTime - now;

        if (diff <= 0) {
            // Time for next prayer, recalculate
            clearInterval(countdownInterval);
            calculateCurrentAndNextPrayer();
            return;
        }

        // Calculate hours, minutes, seconds
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Format countdown based on language
        let countdownText = '';
        if (currentLanguage === 'ar') {
            if (hours > 0) {
                countdownText += `${hours} س `;
            }
            countdownText += `${minutes.toString().padStart(2, '0')} د ${seconds.toString().padStart(2, '0')} ث`;
        } else if (currentLanguage === 'en') {
            if (hours > 0) {
                countdownText += `${hours}h `;
            }
            countdownText += `${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
        } else { // French
            if (hours > 0) {
                countdownText += `${hours}h `;
            }
            countdownText += `${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
        }

        countdownEl.textContent = countdownText;
    }, 1000);
}

// Fetch prayer times from API
async function fetchPrayerTimes(latitude, longitude, method = 2) {
    try {
        const date = new Date();
        const dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

        const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${latitude}&longitude=${longitude}&method=${method}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            return data.data;
        } else {
            throw new Error('Erreur lors de la récupération des horaires de prière');
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        throw error;
    }
}

// Get user's location from browser's geolocation API
function getLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            locationPermissionEl.classList.remove('hidden');
            reject(new Error('La géolocalisation n\'est pas prise en charge par votre navigateur'));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            error => {
                locationPermissionEl.classList.remove('hidden');
                reject(error);
            },
            {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000}
        );
    });
}

// Get city name from coordinates using reverse geocoding
async function getCityFromCoordinates(latitude, longitude) {
    try {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=${currentLanguage}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.city) {
            return `${data.city}, ${data.countryName}`;
        } else if (data.locality) {
            return `${data.locality}, ${data.countryName}`;
        } else {
            return `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
        }
    } catch (error) {
        console.error('Error getting city name:', error);
        return `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
    }
}

// Load and display prayer times
async function loadPrayerTimes() {
    loadingEl.classList.remove('hidden');
    prayerTimesEl.classList.add('hidden');
    errorMessageEl.classList.add('hidden');

    try {
        // Get user location
        if (!currentPosition) {
            currentPosition = await getLocation();
        }

        // Get city name for display
        const cityName = await getCityFromCoordinates(
            currentPosition.latitude,
            currentPosition.longitude
        );
        locationDisplayEl.textContent = cityName;

        // Get calculation method
        const method = calculationMethodSelect.value;

        // Fetch prayer times
        const data = await fetchPrayerTimes(
            currentPosition.latitude,
            currentPosition.longitude,
            method
        );

        // Update date display
        const date = new Date();
        dateDisplayEl.textContent = formatDate(date);

        if (data.hijri) {
            if (currentLanguage === 'ar') {
                dateDisplayEl.textContent += ` / ${data.hijri.day} ${data.hijri.month.ar} ${data.hijri.year}هـ`;
            } else {
                dateDisplayEl.textContent += ` / ${data.hijri.day} ${data.hijri.month.en} ${data.hijri.year}H`;
            }
        }

        // Store prayer times
        prayerTimes = data.timings;

        // Display prayer times
        for (const [prayer, element] of Object.entries(prayerTimeElements)) {
            if (prayerTimes[prayer]) {
                element.textContent = prayerTimes[prayer];
            }
        }

        // Calculate current and next prayer
        calculateCurrentAndNextPrayer();

        // Show prayer times
        loadingEl.classList.add('hidden');
        prayerTimesEl.classList.remove('hidden');

        // Mettre à jour les indicateurs d'adhan
        updateAdhanIndicators();
    } catch (error) {
        console.error('Error:', error);
        loadingEl.classList.add('hidden');
        errorMessageEl.classList.remove('hidden');

        // Get error message in current language
        let errorMessage;
        if (error.message === 'User denied Geolocation') {
            errorMessage = currentLanguage === 'fr' ? 'Accès à la géolocalisation refusé.' :
                currentLanguage === 'en' ? 'Geolocation access denied.' :
                    'تم رفض الوصول إلى تحديد الموقع الجغرافي.';
        } else {
            errorMessage = currentLanguage === 'fr' ? 'Impossible de charger les horaires de prière.' :
                currentLanguage === 'en' ? 'Unable to load prayer times.' :
                    'تعذر تحميل مواقيت الصلاة.';
        }

        errorMessageEl.textContent = `${currentLanguage === 'fr' ? 'Erreur' :
            currentLanguage === 'en' ? 'Error' :
                'خطأ'}: ${error.message || errorMessage}`;
    }
}

/************************************
 * SECTION 7: FONCTIONNALITÉS DU CORAN
 ************************************/

// Load bookmarks from localStorage
function loadBookmarks() {
    try {
        const bookmarksStr = localStorage.getItem('quran_bookmarks');
        if (bookmarksStr) {
            return JSON.parse(bookmarksStr);
        }
    } catch (error) {
        console.error('Error loading bookmarks:', error);
    }
    return null;
}

// Save bookmark to localStorage
function saveBookmark(surahNumber, versesNumber, verseId) {
    try {
        const bookmark = {
            surahNumber,
            versesNumber,
            verseId,
            timestamp: new Date().getTime()
        };
        localStorage.setItem('quran_bookmarks', JSON.stringify(bookmark));
    } catch (error) {
        console.error('Error saving bookmark:', error);
    }
}

// Check if there's a bookmark and update UI
function checkAndDisplayBookmark() {
    bookmarkData = loadBookmarks();

    if (bookmarkData) {
        continueReadingContainer.classList.remove('hidden');

        // Get the surah name if possible
        let surahName = '';
        const surahOption = Array.from(surahSelect.options).find(opt => opt.value === bookmarkData.surahNumber.toString());
        if (surahOption) {
            surahName = surahOption.textContent.split('.')[1].trim();
        }

        if (surahName) {
            continueReadingBtn.title = `${surahName}, verset ${bookmarkData.versesNumber}`;
        }
    } else {
        continueReadingContainer.classList.add('hidden');
    }
}

// Fetch Quran Surahs
async function fetchQuranSurahs() {
    try {
        // Determine which language to use for the Quran API
        let lang = 'fr';
        if (currentLanguage === 'en') {
            lang = 'en';
        } else if (currentLanguage === 'ar') {
            lang = 'ar';
        }

        const url = `https://api.alquran.cloud/v1/surah`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            // Clear existing options
            surahSelect.innerHTML = '';

            // Add default option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.disabled = true;
            defaultOption.selected = true;
            defaultOption.textContent = translations[currentLanguage].selectSurah;
            surahSelect.appendChild(defaultOption);

            // Add surahs
            data.data.forEach(surah => {
                const option = document.createElement('option');
                option.value = surah.number;

                // Format the option text based on language
                if (currentLanguage === 'ar') {
                    option.textContent = `${surah.number}. ${surah.name}`;
                } else {
                    option.textContent = `${surah.number}. ${surah.englishName} (${surah.name})`;
                }

                surahSelect.appendChild(option);
            });

            // Check for bookmark
            checkAndDisplayBookmark();

            return true;
        } else {
            throw new Error('Failed to load Quran surahs');
        }
    } catch (error) {
        console.error('Error fetching Quran surahs:', error);
        return false;
    }
}

// Fetch and display Quran Surah
async function fetchQuranSurah(surahNumber, scrollToVerse = null) {
    quranLoadingEl.classList.remove('hidden');
    quranErrorEl.classList.add('hidden');
    surahContainer.classList.add('hidden');

    try {
        // Select edition based on language
        let editionName;
        if (currentLanguage === 'fr') {
            editionName = 'fr.hamidullah';
        } else if (currentLanguage === 'en') {
            editionName = 'en.sahih';
        } else {
            editionName = 'quran-uthmani';
        }

        const url = `https://api.alquran.cloud/v1/surah/${surahNumber}/${editionName}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.code === 200 && data.data) {
            currentSurah = data.data;

            // Set surah title
            if (currentLanguage === 'ar') {
                surahTitle.textContent = currentSurah.name;
                surahTitle.classList.add('arabic-text');
            } else {
                surahTitle.textContent = currentSurah.englishName;
                surahTitle.classList.remove('arabic-text');
            }

            // Set surah info
            const revelationType = currentLanguage === 'fr' ?
                (currentSurah.revelationType === 'Meccan' ? 'Mecquoise' : 'Médinoise') :
                currentLanguage === 'en' ? currentSurah.revelationType :
                    (currentSurah.revelationType === 'Meccan' ? 'مكية' : 'مدنية');

            const versesCount = currentLanguage === 'fr' ?
                `${currentSurah.numberOfAyahs} versets` :
                currentLanguage === 'en' ?
                    `${currentSurah.numberOfAyahs} verses` :
                    `${currentSurah.numberOfAyahs} آيات`;

            surahInfo.textContent = `${revelationType} · ${versesCount}`;

            // Set Bismillah
            if (currentSurah.number !== 9) {
                bismillah.textContent = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
                bismillah.classList.remove('hidden');
            } else {
                bismillah.classList.add('hidden');
            }

            // Clear previous verses
            verses.innerHTML = '';

            // Add verses
            currentSurah.ayahs.forEach(ayah => {
                const verseDiv = document.createElement('div');
                verseDiv.className = 'verse mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 relative';
                verseDiv.id = `verse-${ayah.numberInSurah}`;

                // Add bookmark indicator if this is the bookmarked verse
                if (bookmarkData &&
                    parseInt(bookmarkData.surahNumber) === currentSurah.number &&
                    parseInt(bookmarkData.versesNumber) === ayah.numberInSurah) {
                    const bookmarkIndicator = document.createElement('div');
                    bookmarkIndicator.className = 'bookmark-indicator';
                    verseDiv.appendChild(bookmarkIndicator);
                    verseDiv.classList.add('pl-2');
                }

                const verseNumber = document.createElement('div');
                verseNumber.className = 'verse-number font-bold text-primary mb-2 flex justify-between items-center';

                const numberText = document.createElement('span');
                numberText.textContent = currentLanguage === 'fr' ? `Verset ${ayah.numberInSurah}` :
                    currentLanguage === 'en' ? `Verse ${ayah.numberInSurah}` :
                        `الآية ${ayah.numberInSurah}`;

                // Add bookmark button
                const bookmarkBtn = document.createElement('button');
                bookmarkBtn.className = 'text-gray-400 hover:text-primary text-sm';
                bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
                bookmarkBtn.title = currentLanguage === 'fr' ? 'Marquer ce verset' :
                    currentLanguage === 'en' ? 'Bookmark this verse' :
                        'وضع إشارة مرجعية على هذه الآية';

                bookmarkBtn.addEventListener('click', () => {
                    saveBookmark(currentSurah.number, ayah.numberInSurah, `verse-${ayah.numberInSurah}`);

                    // Remove existing bookmark indicators
                    const existingIndicators = verses.querySelectorAll('.bookmark-indicator');
                    existingIndicators.forEach(el => el.remove());

                    verses.querySelectorAll('.verse').forEach(el => {
                        el.classList.remove('pl-2');
                    });

                    // Add new indicator
                    const bookmarkIndicator = document.createElement('div');
                    bookmarkIndicator.className = 'bookmark-indicator';
                    verseDiv.prepend(bookmarkIndicator);
                    verseDiv.classList.add('pl-2');

                    // Update continue reading button
                    checkAndDisplayBookmark();

                    // Show confirmation
                    showToast(currentLanguage === 'fr' ? 'Verset marqué' :
                        currentLanguage === 'en' ? 'Verse bookmarked' :
                            'تم وضع إشارة مرجعية على الآية');
                });

                verseNumber.appendChild(numberText);
                verseNumber.appendChild(bookmarkBtn);

                const verseText = document.createElement('div');
                verseText.className = 'verse-text';
                if (currentLanguage === 'ar') {
                    verseText.classList.add('arabic-text', 'text-xl');
                }
                verseText.textContent = ayah.text;

                // Add verse actions
                const verseActions = document.createElement('div');
                verseActions.className = 'flex justify-end mt-2 gap-2 text-sm';

                // Add reminder button
                const reminderBtn = document.createElement('button');
                reminderBtn.className = 'text-gray-400 hover:text-primary';
                reminderBtn.innerHTML = '<i class="fas fa-bell mr-1"></i>' +
                    (currentLanguage === 'fr' ? 'Rappel' :
                        currentLanguage === 'en' ? 'Reminder' : 'تذكير');

                reminderBtn.addEventListener('click', () => {
                    const title = `${currentSurah.englishName} - ${currentLanguage === 'fr' ? 'Verset' :
                        currentLanguage === 'en' ? 'Verse' : 'الآية'} ${ayah.numberInSurah}`;
                    createReading('verse', ayah.numberInSurah, title, ayah.text);
                });

                // Add share button
                const shareBtn = document.createElement('button');
                shareBtn.className = 'text-gray-400 hover:text-primary ml-4';
                shareBtn.innerHTML = '<i class="fas fa-share-alt mr-1"></i>' +
                    (currentLanguage === 'fr' ? 'Partager' :
                        currentLanguage === 'en' ? 'Share' : 'مشاركة');

                shareBtn.addEventListener('click', () => {
                    const shareTitle = `${currentSurah.englishName} - ${currentLanguage === 'fr' ? 'Verset' :
                        currentLanguage === 'en' ? 'Verse' : 'الآية'} ${ayah.numberInSurah}`;
                    const shareText = `${ayah.text}\n\n- ${currentSurah.englishName} (${currentSurah.number}:${ayah.numberInSurah})`;
                    shareContentFunc(shareTitle, shareText);
                });

                verseActions.appendChild(reminderBtn);
                verseActions.appendChild(shareBtn);

                verseDiv.appendChild(verseNumber);
                verseDiv.appendChild(verseText);
                verseDiv.appendChild(verseActions);
                verses.appendChild(verseDiv);
            });

            // Show surah container
            quranLoadingEl.classList.add('hidden');
            surahContainer.classList.remove('hidden');

            // Scroll to verse if specified
            if (scrollToVerse) {
                setTimeout(() => {
                    const verseElement = document.getElementById(scrollToVerse);
                    if (verseElement) {
                        verseElement.scrollIntoView({behavior: 'smooth', block: 'center'});
                        verseElement.classList.add('bg-primary/5');
                        setTimeout(() => {
                            verseElement.classList.remove('bg-primary/5');
                        }, 2000);
                    }
                }, 500);
            }
        } else {
            throw new Error('Failed to load Quran surah');
        }
    } catch (error) {
        console.error('Error fetching Quran surah:', error);
        quranLoadingEl.classList.add('hidden');
        quranErrorEl.classList.remove('hidden');
        quranErrorTextEl.textContent = translations[currentLanguage].quranError;
    }
}

/************************************
 * SECTION 8: FONCTIONNALITÉS DES DOUAS
 ************************************/

// Update douas list based on search and language
function updateDouasList() {
    douasListEl.innerHTML = '';

    const searchTerm = douaSearchEl.value.toLowerCase();
    const filteredDouas = douasList.filter(doua => {
        const titleField = currentLanguage === 'fr' ? doua.titleFr :
            currentLanguage === 'en' ? doua.titleEn : doua.titleAr;
        const textField = currentLanguage === 'fr' ? doua.textFr :
            currentLanguage === 'en' ? doua.textEn : doua.textAr;

        return titleField.toLowerCase().includes(searchTerm) ||
            textField.toLowerCase().includes(searchTerm);
    });

    filteredDouas.forEach(doua => {
        const douaCard = document.createElement('div');
        douaCard.className = 'doua-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 relative';
        douaCard.dataset.id = doua.id;

        const title = currentLanguage === 'fr' ? doua.titleFr :
            currentLanguage === 'en' ? doua.titleEn : doua.titleAr;
        const text = currentLanguage === 'fr' ? doua.textFr :
            currentLanguage === 'en' ? doua.textEn : doua.textAr;

        // Create title
        const titleEl = document.createElement('h3');
        titleEl.className = 'font-bold text-primary mb-2';
        titleEl.textContent = title;

        // Create text
        const textEl = document.createElement('p');
        textEl.className = 'mb-4 text-gray-700 dark:text-gray-300';
        if (currentLanguage === 'ar') {
            textEl.classList.add('arabic-text', 'text-lg');
        }
        textEl.textContent = text;

        // Create actions
        const actions = document.createElement('div');
        actions.className = 'flex justify-end gap-2 mt-2';

        // Share button
        const shareBtn = document.createElement('button');
        shareBtn.className = 'text-gray-500 hover:text-primary';
        shareBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
        shareBtn.addEventListener('click', () => {
            const shareTitle = title;
            const shareText = text;
            shareContentFunc(shareTitle, shareText);
        });

        // Reminder button
        const reminderBtn = document.createElement('button');
        reminderBtn.className = 'text-gray-500 hover:text-primary ml-4';
        reminderBtn.innerHTML = '<i class="fas fa-bell"></i>';
        reminderBtn.addEventListener('click', () => {
            createReading('doua', doua.id, title, text);
        });

        actions.appendChild(shareBtn);
        actions.appendChild(reminderBtn);

        douaCard.appendChild(titleEl);
        douaCard.appendChild(textEl);
        douaCard.appendChild(actions);

        douasListEl.appendChild(douaCard);
    });

    if (filteredDouas.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'text-center text-gray-500 dark:text-gray-400 py-4';
        noResults.textContent = currentLanguage === 'fr' ? 'Aucun résultat trouvé' :
            currentLanguage === 'en' ? 'No results found' : 'لا توجد نتائج';
        douasListEl.appendChild(noResults);
    }
}

/************************************
 * SECTION 9: FONCTIONNALITÉS DE RAPPELS
 ************************************/

// Load reminders from localStorage
function loadReminders() {
    try {
        const remindersStr = localStorage.getItem('prayer_reminders');
        if (remindersStr) {
            reminders = JSON.parse(remindersStr);
        } else {
            reminders = [];
        }
    } catch (error) {
        console.error('Error loading reminders:', error);
        reminders = [];
    }

    updateRemindersDisplay();
    checkUpcomingReminders();
}

// Save reminders to localStorage
function saveReminders() {
    try {
        localStorage.setItem('prayer_reminders', JSON.stringify(reminders));
    } catch (error) {
        console.error('Error saving reminders:', error);
    }

    updateRemindersDisplay();
}

// Update reminders display in the settings tab
function updateRemindersDisplay() {
    // Clear existing reminders
    const existingReminders = remindersListEl.querySelectorAll('.reminder-item');
    existingReminders.forEach(el => el.remove());

    if (reminders.length === 0) {
        noRemindersEl.classList.remove('hidden');
    } else {
        noRemindersEl.classList.add('hidden');

        // Add reminders to the list
        reminders.forEach((reminder, index) => {
            const reminderEl = document.createElement('div');
            reminderEl.className = 'reminder-item bg-white dark:bg-gray-800 p-3 rounded-md flex justify-between items-center';
            reminderEl.dataset.index = index;

            // Format date and time
            const date = new Date(reminder.datetime);
            const formattedDate = date.toLocaleDateString(currentLanguage === 'fr' ? 'fr-FR' :
                currentLanguage === 'en' ? 'en-US' : 'ar-SA');
            const formattedTime = date.toLocaleTimeString(currentLanguage === 'fr' ? 'fr-FR' :
                    currentLanguage === 'en' ? 'en-US' : 'ar-SA',
                {hour: '2-digit', minute: '2-digit'});

            // Create reminder info
            const reminderInfo = document.createElement('div');
            reminderInfo.className = 'flex-1';

            const reminderTitle = document.createElement('div');
            reminderTitle.className = 'font-medium';
            reminderTitle.textContent = reminder.title;

            const reminderDetails = document.createElement('div');
            reminderDetails.className = 'text-sm text-gray-500 dark:text-gray-400';
            reminderDetails.textContent = `${formattedDate}, ${formattedTime}${reminder.repeat ? ' - ' + (currentLanguage === 'fr' ? 'Quotidien' : currentLanguage === 'en' ? 'Daily' : 'يومي') : ''}`;

            reminderInfo.appendChild(reminderTitle);
            reminderInfo.appendChild(reminderDetails);

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'text-red-500 hover:text-red-700 p-1';
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.title = translations[currentLanguage].deleteReminder;

            deleteBtn.addEventListener('click', () => {
                if (confirm(translations[currentLanguage].confirmDelete)) {
                    reminders.splice(index, 1);
                    saveReminders();
                    showToast(translations[currentLanguage].reminderDeleted);
                }
            });

            reminderEl.appendChild(reminderInfo);
            reminderEl.appendChild(deleteBtn);

            remindersListEl.insertBefore(reminderEl, noRemindersEl);
        });
    }
}

// Check for upcoming reminders
function checkUpcomingReminders() {
    const now = new Date();

    reminders.forEach((reminder, index) => {
        const reminderTime = new Date(reminder.datetime);

        // If reminder is due
        if (reminderTime <= now) {
            // Show notification if possible
            if ('Notification' in window && Notification.permission === 'granted') {
                const notification = new Notification(reminder.title, {
                    body: reminder.content,
                    icon: 'https://i.imgur.com/favicon.ico'
                });

                notification.onclick = function () {
                    window.focus();
                    this.close();
                };
            }

            // If it's a repeating reminder, update for tomorrow
            if (reminder.repeat) {
                const tomorrow = new Date(reminderTime);
                tomorrow.setDate(tomorrow.getDate() + 1);
                reminders[index].datetime = tomorrow.toISOString();
            } else {
                // Remove one-time reminders that are done
                reminders.splice(index, 1);
            }

            saveReminders();
        }
    });

    // Check again in a minute
    setTimeout(checkUpcomingReminders, 60000);
}

// Create a reminder for reading
function createReading(type, id, title, content) {
    // Reset et préparer le modal comme avant
    reminderTitleInput.value = title;

    const today = new Date();
    const dateStr = today.toISOString().split('T')[0];
    reminderDateInput.value = dateStr;

    const timeStr = `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`;
    reminderTimeInput.value = timeStr;

    reminderRepeatCheckbox.checked = false;

    // Stocker les informations de navigation
    let navigationType = type;
    let navigationId = id;

    // Si c'est un verset, formater correctement l'ID
    if (type === 'verse' && currentSurah) {
        navigationId = `${currentSurah.number}:${id}`;
    }

    // Stocker ces valeurs pour les utiliser dans saveReminderBtn.addEventListener
    reminderTypeInput.value = navigationType;

    // Stocker aussi les anciennes valeurs pour la compatibilité
    reminderSurahIdInput.value = '';
    reminderDouaIdInput.value = '';
    reminderVerseIdInput.value = '';

    if (type === 'surah') {
        reminderSurahIdInput.value = id;
    } else if (type === 'doua') {
        reminderDouaIdInput.value = id;
    } else if (type === 'verse') {
        reminderVerseIdInput.value = id;
        reminderSurahIdInput.value = currentSurah?.number || '';
    }

    // Ajouter un attribut de données personnalisé pour stocker l'ID de navigation
    reminderModal.dataset.navigationId = navigationId;

    // Afficher le modal
    reminderModal.classList.remove('hidden');
}

/************************************
 * SECTION 10: FONCTIONNALITÉS DE PARAMÈTRES
 ************************************/

// Apply language
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Mettre à jour les traductions de l'écran de bienvenue
    updateWelcomeScreenTranslations();

    // Mettre à jour les traductions pour les paramètres d'adhan
    updateAdhanTranslations();

    // Update tab buttons
    document.querySelector('#tab-prayers .tab-text').textContent = t.prayers;
    document.querySelector('#tab-quran .tab-text').textContent = t.quran;
    document.querySelector('#tab-douas .tab-text').textContent = t.douas;
    document.querySelector('#tab-settings .tab-text').textContent = t.settings;

    // Update header
    document.getElementById('app-title').textContent = t.appTitle;

    // Update prayer section
    nextPrayerTitleEl.textContent = t.nextPrayer;
    document.querySelector('#fajr .prayer-name').textContent = t.fajrName;
    document.querySelector('#fajr .prayer-description').textContent = t.fajrDesc;
    document.querySelector('#sunrise .prayer-name').textContent = t.sunriseName;
    document.querySelector('#sunrise .prayer-description').textContent = t.sunriseDesc;
    document.querySelector('#dhuhr .prayer-name').textContent = t.dhuhrName;
    document.querySelector('#dhuhr .prayer-description').textContent = t.dhuhrDesc;
    document.querySelector('#asr .prayer-name').textContent = t.asrName;
    document.querySelector('#asr .prayer-description').textContent = t.asrDesc;
    document.querySelector('#maghrib .prayer-name').textContent = t.maghribName;
    document.querySelector('#maghrib .prayer-description').textContent = t.maghribDesc;
    document.querySelector('#isha .prayer-name').textContent = t.ishaName;
    document.querySelector('#isha .prayer-description').textContent = t.ishaDesc;// Update download app section
    document.getElementById('download-app-title').textContent = t.downloadAppTitle;
    document.getElementById('download-subtitle').textContent = t.downloadSubtitle;
    document.getElementById('download-desc').textContent = t.downloadDesc;
    document.getElementById('feature-1').innerHTML = `<i class="fas fa-check text-green-500 mr-2"></i> ${t.feature1}`;
    document.getElementById('feature-2').innerHTML = `<i class="fas fa-check text-green-500 mr-2"></i> ${t.feature2}`;
    document.getElementById('feature-3').innerHTML = `<i class="fas fa-check text-green-500 mr-2"></i> ${t.feature3}`;
    document.getElementById('download-button-text').textContent = t.downloadButtonText;
    document.getElementById('download-help').textContent = t.downloadHelp;

    // Update location permission
    locationPermissionTextEl.textContent = t.locationPermission;
    allowLocationTextEl.textContent = t.allowLocation;

    // Update calculation method
    calculationInfoEl.textContent = t.calculationInfo;
    calculationMethodLabelEl.textContent = t.calculationMethod;

    // Update Quran section
    selectSurahLabelEl.textContent = t.selectSurah;
    if (!surahSelect.options.length) {
        loadingSurahsEl.textContent = t.loadingSurahs;
    }
    loadSurahTextEl.textContent = t.read;
    quranErrorTextEl.textContent = t.quranError;
    continueReadingTextEl.textContent = t.continueReading;

    // Update quran action buttons
    createReminderTextEl.textContent = t.createReminder;
    shareSurahTextEl.textContent = t.share;

    // Update Douas section
    douasTitleEl.textContent = t.douasTitle;
    douaSearchEl.placeholder = t.searchDoua;

    // Update settings section
    document.getElementById('settings-title').textContent = t.settingsTitle;
    document.getElementById('language-title').textContent = t.languageTitle;
    document.getElementById('theme-title').textContent = t.themeTitle;
    document.getElementById('theme-description').textContent = t.themeDescription;
    document.getElementById('color-title').textContent = t.colorTitle;
    remindersTitle.textContent = t.remindersTitle;
    noRemindersText.textContent = t.noReminders;

    // Update reminder modal
    reminderModalTitle.textContent = t.reminderModalTitle;
    reminderTitleLabel.textContent = t.reminderTitleLabel;
    reminderDateLabel.textContent = t.reminderDateLabel;
    reminderTimeLabel.textContent = t.reminderTimeLabel;
    reminderRepeatLabel.textContent = t.reminderRepeatLabel;
    cancelReminderText.textContent = t.cancel;
    saveReminderText.textContent = t.save;

    // Update share modal
    shareModalTitle.textContent = t.shareModalTitle;
    closeShareText.textContent = t.close;
    copyShareText.textContent = t.copy;
    nativeShareText.textContent = t.nativeShare;

    // Update language buttons highlight
    languageBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('bg-primary', 'text-white', 'border-primary');
            btn.classList.remove('border-gray-300', 'dark:border-gray-700');
        } else {
            btn.classList.remove('bg-primary', 'text-white', 'border-primary');
            btn.classList.add('border-gray-300', 'dark:border-gray-700');
        }
    });

    // Change document direction
    if (lang === 'ar') {
        document.body.classList.add('arabic-text');
    } else {
        document.body.classList.remove('arabic-text');
    }

    // Update douas list
    updateDouasList();

    // Update reminders display
    updateRemindersDisplay();

    // Mettre à jour les indicateurs d'adhan après changement de langue
    updateAdhanIndicators();

    // Save language preference
    localStorage.setItem('language', lang);
}

// Apply theme color
function applyThemeColor(color) {
    // Update primary color
    primaryColor = color;

    // Create style element to override Tailwind primary color
    let styleEl = document.getElementById('theme-color-style');
    if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = 'theme-color-style';
        document.head.appendChild(styleEl);
    }

    styleEl.textContent = `
        :root {
            --color-primary: ${color};
        }
        .text-primary { color: ${color} !important; }
        .bg-primary { background-color: ${color} !important; }
        .border-primary { border-color: ${color} !important; }
        .bg-primary\\/10 { background-color: ${color}1A !important; }
        .bg-primary\\/5 { background-color: ${color}0D !important; }
        input:checked + .slider { background-color: ${color} !important; }
        .loader { border-top-color: ${color} !important; }
    `;

    // Update color button highlights
    colorBtns.forEach(btn => {
        if (btn.dataset.color === color) {
            btn.classList.add('ring-2', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-gray-900', 'ring-primary');
        } else {
            btn.classList.remove('ring-2', 'ring-offset-2', 'ring-offset-white', 'dark:ring-offset-gray-900', 'ring-primary');
        }
    });

    // Save color preference
    localStorage.setItem('themeColor', color);
}

// Load saved preferences
function loadSavedPreferences() {
    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggle.checked = true;
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        themeToggle.checked = false;
    }

    // Load language
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['fr', 'en', 'ar'].includes(savedLanguage)) {
        applyLanguage(savedLanguage);
    } else {
        applyLanguage('fr'); // Default to French
    }

    // Load theme color
    const savedColor = localStorage.getItem('themeColor');
    if (savedColor) {
        applyThemeColor(savedColor);
    } else {
        applyThemeColor('#5D5CDE'); // Default primary color
    }

    // Load bookmarks
    checkAndDisplayBookmark();

    // Load reminders
    loadReminders();

    // Load adhan settings
    loadAdhanSettings();
}

/************************************
 * SECTION 11: FONCTIONNALITÉS ADHAN
 ************************************/

// Création dynamique des éléments de l'UI pour Adhan
function createAdhanSettingsUI() {
    // Vérifier si les éléments existent déjà
    if (document.getElementById('adhan-title')) {
        return; // L'UI Adhan existe déjà
    }

    // Créer le conteneur principal
    const adhanSection = document.createElement('div');
    adhanSection.className = 'mt-8';
    adhanSection.innerHTML = `
      <h3 id="adhan-title" class="text-lg font-semibold mb-4">Adhan (Appel à la prière)</h3>
      
      <div class="space-y-4">
        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <div class="flex justify-between items-center mb-2">
            <div>
              <span id="adhan-settings-title" class="font-medium">Paramètres Adhan</span>
              <p id="adhan-settings-desc" class="text-sm text-gray-500 dark:text-gray-400">Configurez votre adhan préféré pour chaque prière</p>
            </div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" id="adhan-enabled" class="sr-only peer" checked>
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
        
        <div id="adhan-container" class="space-y-3">
          <!-- Fajr -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <span id="adhan-fajr" class="font-medium">Fajr</span>
              <select id="adhan-fajr-type" class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm" data-prayer="Fajr">
                <option value="adhan1">Adhan Makkah</option>
                <option value="adhan2">Adhan Madinah</option>
                <option value="beep">Bip</option>
                <option value="none">Aucun</option>
              </select>
            </div>
            <button id="preview-fajr" class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-primary" data-prayer="Fajr" data-playing="false">
              <i class="fas fa-play mr-1"></i> <span id="preview-fajr-text">Écouter</span>
            </button>
          </div>

          <!-- Dhuhr -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <span id="adhan-dhuhr" class="font-medium">Dhuhr</span>
              <select id="adhan-dhuhr-type" class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm" data-prayer="Dhuhr">
                <option value="adhan1">Adhan Makkah</option>
                <option value="adhan2">Adhan Madinah</option>
                <option value="beep">Bip</option>
                <option value="none">Aucun</option>
              </select>
            </div>
            <button id="preview-dhuhr" class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-primary" data-prayer="Dhuhr" data-playing="false">
              <i class="fas fa-play mr-1"></i> <span id="preview-dhuhr-text">Écouter</span>
            </button>
          </div>

          <!-- Asr -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <span id="adhan-asr" class="font-medium">Asr</span>
              <select id="adhan-asr-type" class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm" data-prayer="Asr">
                <option value="adhan1">Adhan Makkah</option>
                <option value="adhan2">Adhan Madinah</option>
                <option value="beep">Bip</option>
                <option value="none">Aucun</option>
              </select>
            </div>
            <button id="preview-asr" class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-primary" data-prayer="Asr" data-playing="false">
              <i class="fas fa-play mr-1"></i> <span id="preview-asr-text">Écouter</span>
            </button>
          </div>

          <!-- Maghrib -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <span id="adhan-maghrib" class="font-medium">Maghrib</span>
              <select id="adhan-maghrib-type" class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm" data-prayer="Maghrib">
                <option value="adhan1">Adhan Makkah</option>
                <option value="adhan2">Adhan Madinah</option>
                <option value="beep">Bip</option>
                <option value="none">Aucun</option>
              </select>
            </div>
            <button id="preview-maghrib" class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-primary" data-prayer="Maghrib" data-playing="false">
              <i class="fas fa-play mr-1"></i> <span id="preview-maghrib-text">Écouter</span>
            </button>
          </div>

          <!-- Isha -->
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between items-center mb-2">
              <span id="adhan-isha" class="font-medium">Isha</span>
              <select id="adhan-isha-type" class="rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-sm" data-prayer="Isha">
                <option value="adhan1">Adhan Makkah</option>
                <option value="adhan2">Adhan Madinah</option>
                <option value="beep">Bip</option>
                <option value="none">Aucun</option>
              </select>
            </div>
            <button id="preview-isha" class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-primary" data-prayer="Isha" data-playing="false">
              <i class="fas fa-play mr-1"></i> <span id="preview-isha-text">Écouter</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // Ajouter l'élément audio pour la prévisualisation
    const audioElement = document.createElement('audio');
    audioElement.id = 'adhan-preview';
    audioElement.preload = 'none';
    adhanSection.appendChild(audioElement);

    // Ajouter au contenu des paramètres
    const settingsContent = document.getElementById('settings-content');
    if (settingsContent) {
        settingsContent.appendChild(adhanSection);
    }
}

// Fonction pour charger les paramètres d'adhan
function loadAdhanSettings() {
    try {
        // Créer l'interface d'adhan si elle n'existe pas
        createAdhanSettingsUI();

        const savedSettings = localStorage.getItem('adhan_settings');
        if (savedSettings) {
            adhanSettings = JSON.parse(savedSettings);

            // Appliquer les valeurs enregistrées aux éléments de l'interface
            const adhanEnabledElement = document.getElementById('adhan-enabled');
            if (adhanEnabledElement) {
                adhanEnabledElement.checked = adhanSettings.enabled;

                // Mettre à jour la visibilité du conteneur d'adhan
                const adhanContainer = document.getElementById('adhan-container');
                if (adhanContainer) {
                    adhanContainer.style.display = adhanSettings.enabled ? 'block' : 'none';
                }
            }

            for (const prayer of ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']) {
                const selectElem = document.getElementById(`adhan-${prayer.toLowerCase()}-type`);
                if (selectElem && adhanSettings[prayer]) {
                    selectElem.value = adhanSettings[prayer];
                }
            }
        }

        // Mettre à jour les traductions
        updateAdhanTranslations();

        // Configurer les gestionnaires d'événements
        setupAdhanHandlers();
    } catch (error) {
        console.error('Error loading adhan settings:', error);
    }
    // Mettre à jour les indicateurs d'adhan
    updateAdhanIndicators();
}

// Fonction pour sauvegarder les paramètres d'adhan
function saveAdhanSettings() {
    try {
        localStorage.setItem('adhan_settings', JSON.stringify(adhanSettings));
    } catch (error) {
        console.error('Error saving adhan settings:', error);
    }
}

// Fonction pour prévisualiser l'adhan avec gestion correcte de la promesse
// Modifiez cette partie de la fonction previewAdhan
// Variable globale pour garder une référence à l'audio en cours
let currentAdhanAudio = null;

function previewAdhan(prayer) {
    // Référence au bouton
    const previewBtn = document.getElementById(`preview-${prayer.toLowerCase()}`);
    if (!previewBtn) return;

    // Bloquer les clics multiples
    if (previewBtn.disabled) return;
    previewBtn.disabled = true;
    setTimeout(() => { previewBtn.disabled = false; }, 500);

    // Si on est en train de jouer, arrêter complètement
    if (previewBtn.dataset.playing === "true") {
        console.log('Arrêt forcé de la lecture');

        // Indiquer que c'est un arrêt volontaire pour éviter de montrer l'erreur
        isManualStop = true;

        // Mettre à jour l'interface
        previewBtn.dataset.playing = "false";
        previewBtn.innerHTML = `<i class="fas fa-play mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].listen || 'Écouter'}</span>`;

        // Arrêter et détruire l'audio en cours
        if (currentAdhanAudio) {
            try {
                currentAdhanAudio.pause();
                currentAdhanAudio.src = '';
                currentAdhanAudio.remove(); // Retirer du DOM
                currentAdhanAudio = null;
            } catch (e) {
                console.error('Erreur lors de la suppression audio:', e);
            }
        }

        // Réinitialiser le flag après un court délai
        setTimeout(() => {
            isManualStop = false;
        }, 300);

        return;
    }

    // SINON: Démarrer un tout nouveau lecteur
    console.log('Création d\'un nouveau lecteur audio');
    isManualStop = false;

    // Mettre à jour l'interface pendant le chargement
    previewBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">Chargement...</span>`;

    // Obtenir l'URL de l'audio
    const adhanType = adhanSettings[prayer];
    const adhanUrl = adhanPaths[adhanType];

    // Créer un nouveau lecteur audio
    const newAudio = document.createElement('audio');
    newAudio.style.display = 'none';
    document.body.appendChild(newAudio);

    // Supprimer l'ancien lecteur si présent
    if (currentAdhanAudio) {
        try {
            currentAdhanAudio.pause();
            currentAdhanAudio.src = '';
            currentAdhanAudio.remove();
        } catch (e) {
            console.error('Erreur nettoyage audio:', e);
        }
    }

    // Définir le nouvel élément comme actif
    currentAdhanAudio = newAudio;

    // Gestionnaire de fin de lecture
    newAudio.addEventListener('ended', function() {
        console.log('Lecture terminée');

        // Mise à jour de l'interface
        previewBtn.dataset.playing = "false";
        previewBtn.innerHTML = `<i class="fas fa-play mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].listen || 'Écouter'}</span>`;

        // Nettoyage
        if (currentAdhanAudio === newAudio) {
            currentAdhanAudio = null;
        }

        // Retirer l'élément du DOM
        setTimeout(() => {
            newAudio.remove();
        }, 100);
    }, { once: true });

    // Gestionnaire d'erreur - Ne montrer l'erreur que si ce n'est pas un arrêt volontaire
    newAudio.addEventListener('error', function(e) {
        console.error('Erreur de lecture:', e);

        // Mise à jour de l'interface
        previewBtn.dataset.playing = "false";
        previewBtn.innerHTML = `<i class="fas fa-play mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].listen || 'Écouter'}</span>`;

        // Afficher le message d'erreur UNIQUEMENT si ce n'est pas un arrêt manuel
        if (!isManualStop) {
            showToast('Erreur de lecture audio', true);
        }

        // Nettoyage
        if (currentAdhanAudio === newAudio) {
            currentAdhanAudio = null;
        }

        // Retirer l'élément du DOM
        setTimeout(() => {
            newAudio.remove();
        }, 100);
    }, { once: true });

    // Commencer la lecture une fois prêt
    newAudio.addEventListener('canplay', function() {
        console.log('Audio prêt à jouer');

        // Vérifier si l'utilisateur a déjà cliqué pour arrêter avant même que le chargement ne soit terminé
        if (isManualStop) {
            console.log('Chargement terminé mais arrêt demandé entre-temps');
            newAudio.remove();
            return;
        }

        // Démarrer la lecture
        try {
            const playPromise = newAudio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Lecture démarrée');

                    // Vérifier à nouveau si on a demandé l'arrêt pendant que la promesse était en cours
                    if (isManualStop) {
                        newAudio.pause();
                        newAudio.remove();
                        return;
                    }

                    // Mise à jour interface en succès
                    previewBtn.dataset.playing = "true";
                    previewBtn.innerHTML = `<i class="fas fa-stop mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].stop || 'Arrêter'}</span>`;
                }).catch(err => {
                    // Ne pas afficher d'erreur si c'est un arrêt manuel
                    if (isManualStop) return;

                    console.error('Échec lecture:', err);

                    // Mise à jour interface en échec
                    previewBtn.dataset.playing = "false";
                    previewBtn.innerHTML = `<i class="fas fa-play mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].listen || 'Écouter'}</span>`;

                    // Nettoyage
                    if (currentAdhanAudio === newAudio) {
                        currentAdhanAudio = null;
                    }
                    newAudio.remove();
                });
            } else {
                // Pour les navigateurs qui ne retournent pas de promesse
                console.log('Lecture démarrée (sans promesse)');
                previewBtn.dataset.playing = "true";
                previewBtn.innerHTML = `<i class="fas fa-stop mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].stop || 'Arrêter'}</span>`;
            }
        } catch (err) {
            // Ne pas afficher d'erreur si c'est un arrêt manuel
            if (isManualStop) return;

            console.error('Exception lecture:', err);
            previewBtn.dataset.playing = "false";
            previewBtn.innerHTML = `<i class="fas fa-play mr-1"></i> <span id="preview-${prayer.toLowerCase()}-text">${translations[currentLanguage].listen || 'Écouter'}</span>`;

            if (currentAdhanAudio === newAudio) {
                currentAdhanAudio = null;
            }
            newAudio.remove();
        }
    }, { once: true });

    // Définir la source et commencer le chargement
    newAudio.src = adhanUrl;
    newAudio.load();
}

// Fonction pour mettre à jour les traductions des paramètres d'adhan
function updateAdhanTranslations() {
    const adhanTitle = document.getElementById('adhan-title');
    const adhanSettingsTitle = document.getElementById('adhan-settings-title');
    const adhanSettingsDesc = document.getElementById('adhan-settings-desc');

    if (adhanTitle) adhanTitle.textContent = translations[currentLanguage].adhanTitle || 'Adhan (Appel à la prière)';
    if (adhanSettingsTitle) adhanSettingsTitle.textContent = translations[currentLanguage].adhanSettingsTitle || 'Paramètres Adhan';
    if (adhanSettingsDesc) adhanSettingsDesc.textContent = translations[currentLanguage].adhanSettingsDesc || 'Configurez votre adhan préféré pour chaque prière';

    // Mettre à jour les noms des prières
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    prayers.forEach(prayer => {
        const prayerElement = document.getElementById(`adhan-${prayer}`);
        if (prayerElement) prayerElement.textContent = translations[currentLanguage][`${prayer}Name`];
    });

    // Mettre à jour les textes des boutons de prévisualisation
    const previewTexts = document.querySelectorAll('[id^="preview-"][id$="-text"]');
    previewTexts.forEach(elem => {
        const previewBtn = elem.closest('button');
        if (elem && previewBtn) {
            if (previewBtn.dataset.playing === "true") {
                elem.textContent = translations[currentLanguage].stop || 'Arrêter';
            } else {
                elem.textContent = translations[currentLanguage].listen || 'Écouter';
            }
        }
    });
}

// Fonction pour mettre à jour les indicateurs d'adhan dans l'interface de prière
function updateAdhanIndicators() {
    const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    prayerNames.forEach(prayer => {
        const prayerCard = document.getElementById(prayer.toLowerCase());
        if (!prayerCard) return;

        // Retirer tout indicateur existant
        const existingIndicator = prayerCard.querySelector('.adhan-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }

        // Ne pas ajouter d'indicateur si l'adhan est désactivé globalement
        if (!adhanSettings.enabled) return;

        // Ajouter un nouvel indicateur selon le type d'adhan
        const adhanType = adhanSettings[prayer];
        if (adhanType && adhanType !== 'none') {
            const indicatorEl = document.createElement('div');
            indicatorEl.className = 'adhan-indicator text-xs ml-2';

            if (adhanType === 'beep') {
                indicatorEl.innerHTML = `<i class="fas fa-volume-up text-yellow-500"></i> <span class="ml-1">${translations[currentLanguage].beepEnabled}</span>`;
            } else {
                indicatorEl.innerHTML = `<i class="fas fa-bullhorn text-green-500"></i> <span class="ml-1">${translations[currentLanguage].adhanEnabled}</span>`;
            }

            // Ajouter l'indicateur dans la carte de prière
            const titleSection = prayerCard.querySelector('.prayer-name');
            if (titleSection && titleSection.parentNode) {
                titleSection.parentNode.appendChild(indicatorEl);
            }
        }
    });
}

// Fonction pour jouer l'adhan à l'heure de la prière
// Fonction pour jouer l'adhan à l'heure de la prière
function playAdhanAtPrayerTime(prayer) {
    if (!adhanSettings.enabled) return;

    const adhanType = adhanSettings[prayer];

    // Ne rien jouer si le type est "none"
    if (adhanType === 'none') return;

    const adhanUrl = adhanPaths[adhanType];

    // Si nous sommes dans l'application Android, utiliser son système de lecture
    if (window.AndroidInterface) {
        window.AndroidInterface.playAdhan(adhanUrl, prayer);
        return;
    }

    // Pour les navigateurs, afficher une notification avec bouton de lecture
    // Créer une div pour la notification spéciale d'adhan
    const adhanNotif = document.createElement('div');
    adhanNotif.className = 'fixed bottom-4 left-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50 flex items-center justify-between';

    // Obtenir le nom de la prière dans la langue actuelle
    let prayerName = prayer;
    if (prayer === 'Fajr') prayerName = translations[currentLanguage].fajrName;
    else if (prayer === 'Dhuhr') prayerName = translations[currentLanguage].dhuhrName;
    else if (prayer === 'Asr') prayerName = translations[currentLanguage].asrName;
    else if (prayer === 'Maghrib') prayerName = translations[currentLanguage].maghribName;
    else if (prayer === 'Isha') prayerName = translations[currentLanguage].ishaName;

    // Message personnalisé selon la langue
    const message = currentLanguage === 'fr' ?
        `C'est l'heure de la prière ${prayerName}` :
        currentLanguage === 'en' ?
            `It's time for ${prayerName} prayer` :
            `حان وقت صلاة ${prayerName}`;

    // Texte du bouton selon la langue
    const buttonText = currentLanguage === 'fr' ?
        "Écouter l'adhan" :
        currentLanguage === 'en' ?
            "Play adhan" :
            "تشغيل الأذان";

    // Contenu de la notification
    adhanNotif.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-mosque mr-3 text-xl"></i>
            <div>
                <p class="font-bold">${message}</p>
            </div>
        </div>
        <div class="flex items-center">
            <button id="play-adhan-btn" class="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
                <i class="fas fa-play mr-2"></i>${buttonText}
            </button>
            <button id="close-adhan-notif" class="ml-2 text-white p-2 rounded-full hover:bg-white/20">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Ajouter la notification au document
    document.body.appendChild(adhanNotif);

    // Gérer le clic sur le bouton de lecture
    document.getElementById('play-adhan-btn').addEventListener('click', function() {
        const audio = new Audio(adhanUrl);
        audio.play().catch(error => {
            console.error('Error playing adhan:', error);
        });

        // Optionnel: masquer le bouton de lecture après avoir cliqué
        this.disabled = true;
        this.innerHTML = `<i class="fas fa-volume-up mr-2"></i>${currentLanguage === 'fr' ? 'En cours...' : currentLanguage === 'en' ? 'Playing...' : 'جاري التشغيل...'}`;
    });

    // Gérer la fermeture de la notification
    document.getElementById('close-adhan-notif').addEventListener('click', function() {
        adhanNotif.remove();
    });

    // Masquer automatiquement après 2 minutes si l'utilisateur n'interagit pas
    setTimeout(() => {
        if (document.body.contains(adhanNotif)) {
            adhanNotif.remove();
        }
    }, 120000);
}

// Fonction pour configurer les gestionnaires d'événements pour Adhan
function setupAdhanHandlers() {
    // Gestion du toggle général d'activation/désactivation
    const adhanEnabled = document.getElementById('adhan-enabled');
    if (adhanEnabled) {
        adhanEnabled.addEventListener('change', function() {
            adhanSettings.enabled = this.checked;
            const adhanContainer = document.getElementById('adhan-container');
            if (adhanContainer) {
                adhanContainer.style.display = this.checked ? 'block' : 'none';
            }
            saveAdhanSettings();
            updateAdhanIndicators(); // Mettre à jour les indicateurs
        });
    }

    // Gestion des sélecteurs d'adhan
    for (const prayer of ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']) {
        const selectElem = document.getElementById(`adhan-${prayer.toLowerCase()}-type`);
        if (selectElem) {
            selectElem.addEventListener('change', function() {
                adhanSettings[prayer] = this.value;
                saveAdhanSettings();
                updateAdhanIndicators(); // Mettre à jour les indicateurs
            });
        }

        // Gestion des boutons de prévisualisation
        const previewBtn = document.getElementById(`preview-${prayer.toLowerCase()}`);
        if (previewBtn) {
            previewBtn.addEventListener('click', function() {
                previewAdhan(prayer);
            });
        }
    }

    // Arrêter la prévisualisation lors du changement d'onglet
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const adhanPreview = document.getElementById('adhan-preview');
            if (adhanPreview) {
                adhanPreview.pause();
                adhanPreview.currentTime = 0;
                adhanPlayPromise = null;
            }
        });
    });

    // Mettre à jour les indicateurs au chargement
    updateAdhanIndicators();
}

/************************************
 * SECTION 12: NAVIGATION & INTEGRATION ANDROID
 ************************************/

// Navigation au contenu spécifique
function navigateToContent(type, id) {
    console.log("Navigation vers:", type, id);

    // Selon le type, naviguez vers le contenu approprié
    if (type === 'surah') {
        // Activer l'onglet Coran
        document.getElementById('tab-quran').click();

        // Sélectionner la sourate et la charger
        const surahNumber = id;
        if (surahSelect) {
            surahSelect.value = surahNumber;
            // Attendre un peu pour s'assurer que la valeur est bien définie
            setTimeout(() => {
                fetchQuranSurah(surahNumber);
            }, 500);
        }
    } else if (type === 'verse') {
        // Activer l'onglet Coran
        document.getElementById('tab-quran').click();

        // Les données sont au format 'surahNumber:verseNumber'
        const [surahNumber, verseNumber] = id.split(':');

        if (surahSelect) {
            surahSelect.value = surahNumber;
            // Charger la sourate puis défiler jusqu'au verset
            setTimeout(() => {
                fetchQuranSurah(surahNumber, `verse-${verseNumber}`);
            }, 500);
        }
    } else if (type === 'doua') {
        // Activer l'onglet Douas
        document.getElementById('tab-douas').click();

        // Chercher la doua par ID
        const douaId = parseInt(id);
        setTimeout(() => {
            const douaElement = document.querySelector(`.doua-card[data-id="${douaId}"]`);
            if (douaElement) {
                // Faire défiler jusqu'à la doua
                douaElement.scrollIntoView({behavior: 'smooth', block: 'center'});
                // Mettre en évidence la doua
                douaElement.classList.add('bg-primary/10');
                setTimeout(() => {
                    douaElement.classList.remove('bg-primary/10');
                }, 2000);
            }
        }, 500);
    }
}

// Configuration des notifications natives Android
function setupAndroidNotifications() {
    // Vérifier si l'application native Android est disponible
    if (window.AndroidInterface) {
        console.log("Application Android détectée - Intégration des notifications natives activée");

        // Remplacer la fonction checkUpcomingReminders pour utiliser les notifications natives
        window.checkUpcomingReminders = function () {
            const now = new Date();

            reminders.forEach((reminder, index) => {
                const reminderTime = new Date(reminder.datetime);

                // Si le rappel est dû
                if (reminderTime <= now) {
                    // Envoyer une notification native via l'interface Android
                    window.AndroidInterface.showNotificationNow(reminder.title, reminder.content);

                    // Si c'est un rappel récurrent, le mettre à jour pour demain
                    if (reminder.repeat) {
                        const tomorrow = new Date(reminderTime);
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        reminders[index].datetime = tomorrow.toISOString();
                    } else {
                        // Supprimer les rappels ponctuels terminés
                        reminders.splice(index, 1);
                    }

                    saveReminders();
                }
            });

            // Vérifier à nouveau dans une minute
            setTimeout(checkUpcomingReminders, 60000);
        };

        // Intercepter les demandes de Notification web
        if ('Notification' in window) {
            const originalNotification = window.Notification;
            window.Notification = function (title, options) {
                // Utiliser directement la notification native Android
                window.AndroidInterface.showNotificationNow(title, options.body || "");

                // Simuler l'API Notification pour la compatibilité
                return {
                    onclick: function () {},
                    close: function () {}
                };
            };

            // Simuler la permission toujours accordée
            window.Notification.permission = "granted";
            window.Notification.requestPermission = function (callback) {
                if (callback) callback("granted");
                return Promise.resolve("granted");
            };
        }

        // Synchronisation des rappels existants
        function syncExistingReminders() {
            // Synchroniser tous les rappels existants avec le système Android
            reminders.forEach(reminder => {
                const reminderTime = new Date(reminder.datetime).getTime();

                if (reminderTime > Date.now()) {
                    window.AndroidInterface.scheduleNotification(
                        reminder.title,
                        reminder.content,
                        reminderTime,
                        reminder.type,
                        reminder.navigationId
                    );
                }
            });
        }

        // Synchroniser les rappels existants au démarrage
        syncExistingReminders();
    }
}

/************************************
 * SECTION 13: GESTIONNAIRES D'EVENEMENTS
 ************************************/

// Event Listeners - Prayer Times Tab
allowLocationBtn.addEventListener('click', async () => {
    locationPermissionEl.classList.add('hidden');
    await loadPrayerTimes();
});

calculationMethodSelect.addEventListener('change', () => {
    loadPrayerTimes();
});

// Event Listeners - Quran Tab
loadSurahBtn.addEventListener('click', async () => {
    const surahNumber = surahSelect.value;
    if (surahNumber) {
        await fetchQuranSurah(surahNumber);
    }
});

continueReadingBtn.addEventListener('click', async () => {
    if (bookmarkData) {
        // Load the surah and scroll to the bookmarked verse
        await fetchQuranSurah(bookmarkData.surahNumber, bookmarkData.verseId);

        // Make sure the Quran tab is active
        tabBtns.forEach(btn => {
            btn.classList.remove('border-primary', 'text-primary');
            btn.classList.add('text-gray-500', 'dark:text-gray-400', 'border-transparent');
        });

        document.getElementById('tab-quran').classList.add('border-primary', 'text-primary');
        document.getElementById('tab-quran').classList.remove('text-gray-500', 'dark:text-gray-400', 'border-transparent');

        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById('quran-content').classList.add('active');
    }
});

createReminderBtn.addEventListener('click', () => {
    if (currentSurah) {
        const title = currentLanguage === 'fr' ? `Lire sourate ${currentSurah.englishName}` :
            currentLanguage === 'en' ? `Read surah ${currentSurah.englishName}` :
                `قراءة سورة ${currentSurah.name}`;
        createReading('surah', currentSurah.number, title, `${currentSurah.englishName} (${currentSurah.numberOfAyahs} ${currentLanguage === 'fr' ? 'versets' : currentLanguage === 'en' ? 'verses' : 'آيات'})`);
    }
});

shareSurahBtn.addEventListener('click', () => {
    if (currentSurah) {
        const shareTitle = currentSurah.englishName;
        const shareText = `${currentLanguage === 'fr' ? 'Sourate' :
            currentLanguage === 'en' ? 'Surah' : 'سورة'} ${currentSurah.englishName}\n\n${currentLanguage === 'fr' ? 'Type' :
            currentLanguage === 'en' ? 'Type' : 'النوع'}: ${currentSurah.revelationType === 'Meccan' ?
            (currentLanguage === 'fr' ? 'Mecquoise' :
                currentLanguage === 'en' ? 'Meccan' : 'مكية') :
            (currentLanguage === 'fr' ? 'Médinoise' :
                currentLanguage === 'en' ? 'Medinan' : 'مدنية')}\n${currentLanguage === 'fr' ? 'Nombre de versets' :
            currentLanguage === 'en' ? 'Number of verses' : 'عدد الآيات'}: ${currentSurah.numberOfAyahs}`;
        shareContentFunc(shareTitle, shareText);
    }
});

// Event Listeners - Douas Tab
douaSearchEl.addEventListener('input', updateDouasList);

addReminderDoua.addEventListener('click', () => {
    const title = currentLanguage === 'fr' ? 'Rappel pour lire des invocations' :
        currentLanguage === 'en' ? 'Reminder to read supplications' :
            'تذكير لقراءة الأدعية';
    const content = currentLanguage === 'fr' ? 'N\'oubliez pas de lire vos invocations quotidiennes' :
        currentLanguage === 'en' ? 'Don\'t forget to read your daily supplications' :
            'لا تنس قراءة أذكارك اليومية';
    createReading('general', 0, title, content);
});

// Event Listeners - Settings Tab
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
});

languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);

        // Reload prayer times to update city name and date format
        if (currentPosition) {
            loadPrayerTimes();
        }

        // Reload Quran surahs if the quran tab is active
        if (document.getElementById('quran-content').classList.contains('active')) {
            fetchQuranSurahs();

            // Reload current surah if any
            if (currentSurah) {
                fetchQuranSurah(currentSurah.number);
            }
        }

        // Update douas list if douas tab is active
        if (document.getElementById('douas-content').classList.contains('active')) {
            updateDouasList();
        }
    });
});

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        applyThemeColor(color);
    });
});

// Event Listeners - Reminder Modal
saveReminderBtn.addEventListener('click', () => {
    const title = reminderTitleInput.value.trim();
    if (!title) {
        alert(currentLanguage === 'fr' ? 'Veuillez saisir un titre pour le rappel' :
            currentLanguage === 'en' ? 'Please enter a title for the reminder' :
                'الرجاء إدخال عنوان للتذكير');
        return;
    }

    const date = reminderDateInput.value;
    const time = reminderTimeInput.value;
    if (!date || !time) {
        alert(currentLanguage === 'fr' ? 'Veuillez sélectionner une date et une heure' :
            currentLanguage === 'en' ? 'Please select a date and time' :
                'الرجاء تحديد تاريخ ووقت');
        return;
    }

    const datetime = new Date(`${date}T${time}`);
    if (isNaN(datetime.getTime())) {
        alert(currentLanguage === 'fr' ? 'Date ou heure invalide' :
            currentLanguage === 'en' ? 'Invalid date or time' :
                'تاريخ أو وقت غير صالح');
        return;
    }

    const repeat = reminderRepeatCheckbox.checked;
    const type = reminderTypeInput.value;
    const surahId = reminderSurahIdInput.value;
    const douaId = reminderDouaIdInput.value;
    const verseId = reminderVerseIdInput.value;

    // Créer l'ID de navigation selon le type
    let navigationId = null;
    if (type === 'surah') {
        navigationId = surahId;
    } else if (type === 'doua') {
        navigationId = douaId;
    } else if (type === 'verse' && currentSurah) {
        navigationId = `${currentSurah.number}:${verseId}`;
    }

    // Get content based on type
    let content = '';
    if (type === 'surah' && currentSurah) {
        content = `${currentLanguage === 'fr' ? 'Sourate' :
            currentLanguage === 'en' ? 'Surah' : 'سورة'} ${currentSurah.englishName}`;
    } else if (type === 'doua') {
        const doua = douasList.find(d => d.id.toString() === douaId);
        if (doua) {
            content = currentLanguage === 'fr' ? doua.titleFr :
                currentLanguage === 'en' ? doua.titleEn : doua.titleAr;
        }
    } else if (type === 'verse' && currentSurah) {
        content = `${currentSurah.englishName} - ${currentLanguage === 'fr' ? 'Verset' :
            currentLanguage === 'en' ? 'Verse' : 'الآية'} ${verseId}`;
    } else {
        content = title;
    }

    // Create reminder with navigation info
    const reminder = {
        id: Date.now(),
        title,
        content,
        datetime: datetime.toISOString(),
        repeat,
        type,
        surahId,
        douaId,
        verseId,
        navigationId // Ajouter l'ID de navigation pour l'usage interne
    };

    // Add to reminders list
    reminders.push(reminder);
    saveReminders();

    // Close modal
    reminderModal.classList.add('hidden');

    // Show confirmation
    showToast(translations[currentLanguage].reminderCreated);

    // Request notification permission if needed
    if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission();
    }

    // Planifier la notification avec l'interface Android
    if (window.AndroidInterface) {
        const reminderTime = datetime.getTime();
        if (reminderTime > Date.now()) {
            try {
                window.AndroidInterface.scheduleNotification(
                    title,
                    content,
                    reminderTime,
                    type,
                    navigationId
                );
            } catch (error) {
                console.error("Erreur lors de la planification de la notification:", error);
            }
        }
    }
});

cancelReminderBtn.addEventListener('click', () => {
    reminderModal.classList.add('hidden');
});

reminderModal.addEventListener('click', (e) => {
    if (e.target === reminderModal) {
        reminderModal.classList.add('hidden');
    }
});

// Event Listeners - Share Modal
copyShareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shareContentTextarea.value)
        .then(() => {
            showToast(translations[currentLanguage].copied);
        })
        .catch(err => {
            console.error('Error copying to clipboard:', err);
        });
});

nativeShareBtn.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: shareModalTitle.textContent,
            text: shareContentTextarea.value
        })
            .catch(err => {
                console.error('Error sharing:', err);
            });
    }
});

closeShareBtn.addEventListener('click', () => {
    shareModal.classList.add('hidden');
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.add('hidden');
    }
});

// Tab Switching Logic
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.id.replace('tab-', '');

        // Reset tabs
        tabBtns.forEach(b => {
            b.classList.remove('border-primary', 'text-primary');
            b.classList.add('text-gray-500', 'dark:text-gray-400', 'border-transparent');
        });

        // Activate clicked tab
        btn.classList.add('border-primary', 'text-primary');
        btn.classList.remove('text-gray-500', 'dark:text-gray-400', 'border-transparent');

        // Toggle content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${target}-content`).classList.add('active');

        // Load specific content for tabs
        if (target === 'quran' && !surahSelect.options.length) {
            fetchQuranSurahs();
        } else if (target === 'douas' && douasListEl.children.length === 0) {
            updateDouasList();
        }
    });
});

// Gestion de l'écran de bienvenue - à ajouter au début de la fonction init() ou juste après la déclaration des variables

function setupWelcomeScreen() {
    const welcomeModal = document.getElementById('welcome-modal');
    const welcomeStartBtn = document.getElementById('welcome-start-btn');
    const welcomeDontShow = document.getElementById('welcome-dontshow');

    // Vérifier si l'utilisateur a déjà choisi de ne plus afficher l'écran
    const hideWelcomeScreen = localStorage.getItem('hideWelcomeScreen') === 'true';

    if (hideWelcomeScreen) {
        // Cacher immédiatement si l'utilisateur a déjà choisi de ne plus l'afficher
        welcomeModal.style.display = 'none';
    } else {
        // Sinon, afficher l'écran et configurer les gestionnaires d'événements
        welcomeStartBtn.addEventListener('click', () => {
            // Masquer avec animation
            welcomeModal.classList.add('opacity-0');

            setTimeout(() => {
                welcomeModal.style.display = 'none';
            }, 300);

            // Si la case est cochée, enregistrer la préférence
            if (welcomeDontShow.checked) {
                localStorage.setItem('hideWelcomeScreen', 'true');
            }
        });
    }

    // Mettre à jour les traductions de l'écran de bienvenue
    updateWelcomeScreenTranslations();
}

// Fonction pour mettre à jour les traductions de l'écran de bienvenue
function updateWelcomeScreenTranslations() {
    const t = translations[currentLanguage];

    if (document.getElementById('welcome-title')) {
        document.getElementById('welcome-title').textContent = t.welcomeTitle || 'Bienvenue dans l\'application Prières & Coran';
        document.getElementById('welcome-subtitle').textContent = t.welcomeSubtitle || 'Votre compagnon spirituel quotidien';

        document.getElementById('welcome-feature1-title').textContent = t.welcomeFeature1Title || 'Horaires précis';
        document.getElementById('welcome-feature1-desc').textContent = t.welcomeFeature1Desc || 'Obtenez les horaires de prière exacts basés sur votre localisation';

        document.getElementById('welcome-feature2-title').textContent = t.welcomeFeature2Title || 'Le Noble Coran';
        document.getElementById('welcome-feature2-desc').textContent = t.welcomeFeature2Desc || 'Lisez le Coran en arabe et dans votre langue';

        document.getElementById('welcome-feature3-title').textContent = t.welcomeFeature3Title || 'Douas essentielles';
        document.getElementById('welcome-feature3-desc').textContent = t.welcomeFeature3Desc || 'Accédez aux invocations pour chaque moment de la journée';

        document.getElementById('welcome-start-text').textContent = t.welcomeStartText || 'Commencer';
        document.getElementById('welcome-dontshow-text').textContent = t.welcomeDontShowText || 'Ne plus afficher ce message';
    }
}

/************************************
 * SECTION 14: INITIALISATION
 ************************************/

// Initialize app
(async function init() {
    console.log("Initialisation de l'application...");
    try {
        // Appel pour initialiser l'écran de bienvenue
        setupWelcomeScreen();

        // Créer d'abord les composants UI dynamiques
        createAdhanSettingsUI();

        // Charger les préférences et paramètres
        loadSavedPreferences();

        // Initialiser les modules
        setupAdhanHandlers();

        // Intégration Android
        setTimeout(setupAndroidNotifications, 1000);

        // Charger les données initiales de l'application
        await fetchQuranSurahs();
        await loadPrayerTimes();

        console.log("Initialisation terminée");
    } catch (error) {
        // Location permission error is already handled
        console.error('Initialization error:', error);
    }
})();