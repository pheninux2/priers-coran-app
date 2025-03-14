const translations = {
    fr: {
        appTitle: "Horaires des Prières",
        prayers: "Prières",
        quran: "Coran",
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
        colorTitle: "Couleur du thème"
    },
    en: {
        appTitle: "Prayer Times",
        prayers: "Prayers",
        quran: "Quran",
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
        colorTitle: "Theme Color"
    },
    ar: {
        appTitle: "مواقيت الصلاة",
        prayers: "الصلوات",
        quran: "القرآن",
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
        colorTitle: "لون السمة"
    }
};

// Dark mode detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-toggle').checked = true;
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle').checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle').checked = false;
    }
});

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

// Apply language
function applyLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];

    // Update tab buttons
    document.querySelector('#tab-prayers .tab-text').textContent = t.prayers;
    document.querySelector('#tab-quran .tab-text').textContent = t.quran;
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

    // Update settings section
    document.getElementById('settings-title').textContent = t.settingsTitle;
    document.getElementById('language-title').textContent = t.languageTitle;
    document.getElementById('theme-title').textContent = t.themeTitle;
    document.getElementById('theme-description').textContent = t.themeDescription;
    document.getElementById('color-title').textContent = t.colorTitle;

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
        case 'fr': locale = 'fr-FR'; break;
        case 'en': locale = 'en-US'; break;
        case 'ar': locale = 'ar-SA'; break;
        default: locale = 'fr-FR';
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
        case 'Fajr': nextName = translations[currentLanguage].fajrName; break;
        case 'Sunrise': nextName = translations[currentLanguage].sunriseName; break;
        case 'Dhuhr': nextName = translations[currentLanguage].dhuhrName; break;
        case 'Asr': nextName = translations[currentLanguage].asrName; break;
        case 'Maghrib': nextName = translations[currentLanguage].maghribName; break;
        case 'Isha': nextName = translations[currentLanguage].ishaName; break;
        default: nextName = nextPrayer.name;
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
        await fetchQuranSurahs()
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
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
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
async function fetchQuranSurah(surahNumber) {
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
            const surah = data.data;

            // Set surah title
            if (currentLanguage === 'ar') {
                surahTitle.textContent = surah.name;
                surahTitle.classList.add('arabic-text');
            } else {
                surahTitle.textContent = surah.englishName;
                surahTitle.classList.remove('arabic-text');
            }

            // Set surah info
            const revelationType = currentLanguage === 'fr' ?
                (surah.revelationType === 'Meccan' ? 'Mecquoise' : 'Médinoise') :
                currentLanguage === 'en' ? surah.revelationType :
                    (surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية');

            const versesCount = currentLanguage === 'fr' ?
                `${surah.numberOfAyahs} versets` :
                currentLanguage === 'en' ?
                    `${surah.numberOfAyahs} verses` :
                    `${surah.numberOfAyahs} آيات`;

            surahInfo.textContent = `${revelationType} · ${versesCount}`;

            // Set Bismillah
            if (surah.number !== 9) {
                bismillah.textContent = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
                bismillah.classList.remove('hidden');
            } else {
                bismillah.classList.add('hidden');
            }

            // Clear previous verses
            verses.innerHTML = '';

            // Add verses
            surah.ayahs.forEach(ayah => {
                const verseDiv = document.createElement('div');
                verseDiv.className = 'verse mb-4 pb-4 border-b border-gray-200 dark:border-gray-700';

                const verseNumber = document.createElement('div');
                verseNumber.className = 'verse-number font-bold text-primary mb-2';
                verseNumber.textContent = currentLanguage === 'fr' ? `Verset ${ayah.numberInSurah}` :
                    currentLanguage === 'en' ? `Verse ${ayah.numberInSurah}` :
                        `الآية ${ayah.numberInSurah}`;

                const verseText = document.createElement('div');
                verseText.className = 'verse-text';
                if (currentLanguage === 'ar') {
                    verseText.classList.add('arabic-text', 'text-xl');
                }
                verseText.textContent = ayah.text;

                verseDiv.appendChild(verseNumber);
                verseDiv.appendChild(verseText);
                verses.appendChild(verseDiv);
            });

            // Show surah container
            quranLoadingEl.classList.add('hidden');
            surahContainer.classList.remove('hidden');
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
                input:checked + .slider { background-color: ${color} !important; }
                .loader { border-top-color: ${color} !important; }
                .heart { color: ${color} !important; }
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

        // Load surah list if quran tab is activated and not already loaded
        if (target === 'quran' && !surahSelect.options.length) {
            fetchQuranSurahs();
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
}

// Initialize app
(async function init() {
    try {
        // Load saved preferences
        loadSavedPreferences();

        // Load prayer times
        await loadPrayerTimes();
    } catch (error) {
        // Location permission error is already handled
        console.error('Initialization error:', error);
    }
})();