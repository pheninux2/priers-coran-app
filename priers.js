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
        reminderDeleted: "Rappel supprimé"
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
        reminderDeleted: "Reminder deleted"
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
        reminderDeleted: "تم حذف التذكير"
    }
};

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

// Store the prayer times and user's location
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

// Show toast message
function showToast(message, isError = false) {
    toastMessage.textContent = message;
    toast.classList.toggle('error', isError);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

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
// Mise à jour de la fonction createReading pour inclure les informations de navigation
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

// Apply language
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

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
    document.querySelector('#isha .prayer-description').textContent = t.ishaDesc;

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

    // Save language preference
    localStorage.setItem('language', lang);
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

// Convert time string from API (HH:MM) to Date object
function timeStringToDate(timeStr, date = new Date()) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const timeDate = new Date(date);
    timeDate.setHours(hours, minutes, 0, 0);
    return timeDate;
}

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

// Handle method change
calculationMethodSelect.addEventListener('change', () => {
    loadPrayerTimes();
});

// Allow location button event handler
allowLocationBtn.addEventListener('click', async () => {
    locationPermissionEl.classList.add('hidden');
    await loadPrayerTimes();
});

// Load Surah button event handler
loadSurahBtn.addEventListener('click', async () => {
    const surahNumber = surahSelect.value;
    if (surahNumber) {
        await fetchQuranSurah(surahNumber);
    }
});

// Continue reading button event handler
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

// Doua search event handler
douaSearchEl.addEventListener('input', updateDouasList);

// Create reminder (surah) button handler
createReminderBtn.addEventListener('click', () => {
    if (currentSurah) {
        const title = currentLanguage === 'fr' ? `Lire sourate ${currentSurah.englishName}` :
            currentLanguage === 'en' ? `Read surah ${currentSurah.englishName}` :
                `قراءة سورة ${currentSurah.name}`;
        createReading('surah', currentSurah.number, title, `${currentSurah.englishName} (${currentSurah.numberOfAyahs} ${currentLanguage === 'fr' ? 'versets' : currentLanguage === 'en' ? 'verses' : 'آيات'})`);
    }
});

// Share surah button handler
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

// Add reminder for doua button handler
addReminderDoua.addEventListener('click', () => {
    const title = currentLanguage === 'fr' ? 'Rappel pour lire des invocations' :
        currentLanguage === 'en' ? 'Reminder to read supplications' :
            'تذكير لقراءة الأدعية';
    const content = currentLanguage === 'fr' ? 'N\'oubliez pas de lire vos invocations quotidiennes' :
        currentLanguage === 'en' ? 'Don\'t forget to read your daily supplications' :
            'لا تنس قراءة أذكارك اليومية';
    createReading('general', 0, title, content);
});


// Écouteur d'événements modifié pour saveReminderBtn
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

    // Planifier la notification avec l'interface existante (3 paramètres uniquement)
    if (window.AndroidInterface) {
        const reminderTime = datetime.getTime();
        if (reminderTime > Date.now()) {
            try {
                // Ici nous utilisons 'content' au lieu de 'message' qui n'existe pas
                let enhancedContent = content;

                // Si nous avons un ID de navigation, ajoutons-le au message
                if (navigationId) {
                    // Ajouter un marqueur spécial que le code Java pourra détecter
                    enhancedContent = `${content}\n\n##NAV_DATA##${JSON.stringify({type, id: navigationId})}`;
                }

                // Utiliser la méthode avec seulement les 3 paramètres originaux
                window.AndroidInterface.scheduleNotification(
                    title,
                    enhancedContent,
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


// Cancel reminder button handler
cancelReminderBtn.addEventListener('click', () => {
    reminderModal.classList.add('hidden');
});

// Close when clicking outside modal
reminderModal.addEventListener('click', (e) => {
    if (e.target === reminderModal) {
        reminderModal.classList.add('hidden');
    }
});

// Copy share content button handler
copyShareBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(shareContentTextarea.value)
        .then(() => {
            showToast(translations[currentLanguage].copied);
        })
        .catch(err => {
            console.error('Error copying to clipboard:', err);
        });
});

// Native share button handler
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

// Close share modal
closeShareBtn.addEventListener('click', () => {
    shareModal.classList.add('hidden');
});

// Close when clicking outside share modal
shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.add('hidden');
    }
});

// Theme toggle event handler
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', themeToggle.checked ? 'dark' : 'light');
});

// Language buttons event handlers
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

// Theme color buttons event handlers
colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.dataset.color;
        applyThemeColor(color);
    });
});

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
}

// Initialize app
(async function init() {
    try {
        // Load saved preferences
        loadSavedPreferences();

        // Initialize tabs
        await fetchQuranSurahs();

        // Load prayer times
        await loadPrayerTimes();
    } catch (error) {
        // Location permission error is already handled
        console.error('Initialization error:', error);
    }
})();

// Intégration des notifications natives Android
// Cette fonction s'exécute après le chargement du document
// mais aussi après l'initialisation de l'application
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

        // Remplacer la fonction saveReminders pour planifier les notifications natives
        const originalSaveReminders = saveReminders;
        window.saveReminders = function () {
            // Sauvegarder les rappels dans localStorage comme avant
            originalSaveReminders();

            // Planifier les notifications dans le système Android
            reminders.forEach(reminder => {
                const reminderTime = new Date(reminder.datetime).getTime();

                // Ne planifier que les notifications futures
                if (reminderTime > Date.now()) {
                    window.AndroidInterface.scheduleNotification(
                        reminder.title,
                        reminder.content,
                        reminderTime
                    );
                }
            });
        };

        // Intercepter les demandes de Notification web
        if ('Notification' in window) {
            const originalNotification = window.Notification;
            window.Notification = function (title, options) {
                // Utiliser directement la notification native Android
                window.AndroidInterface.showNotificationNow(title, options.body || "");

                // Simuler l'API Notification pour la compatibilité
                return {
                    onclick: function () {
                    },
                    close: function () {
                    }
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
                        reminderTime
                    );
                }
            });
        }

        // Synchroniser les rappels existants au démarrage
        syncExistingReminders();
    }
}

// Ajouter la fonction d'initialisation à la fin du code existant,
// juste après la fonction init() pour s'assurer que tout est chargé
document.addEventListener("DOMContentLoaded", function () {
    // Le code original d'initialisation s'exécute d'abord

    // Puis notre fonction de configuration des notifications Android
    setTimeout(setupAndroidNotifications, 1000); // Délai pour s'assurer que tout est chargé
});

// Également appeler la fonction au cas où DOMContentLoaded s'est déjà produit
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(setupAndroidNotifications, 1000);
}

// Ajouter cette fonction à votre code JavaScript priers.js
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