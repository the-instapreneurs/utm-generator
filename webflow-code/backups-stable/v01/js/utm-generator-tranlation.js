
/**
 * UTM Generator - Ukrainian Translation
 * Version: 1.0.0
 */

const UTM_TRANSLATIONS_UK = {
    // General UI
    general: {
        title: "Створення URL кампаній",
        description: "Цей інструмент дозволяє легко додавати параметри кампанії до URL-адрес, щоб вимірювати власні кампанії у Google Analytics.",
        websiteUrl: "URL веб-сайту",
        generatedUrl: "Згенерований URL",
        copy: "Копіювати",
        copied: "Скопійовано!",
        reset: "Скинути",
        confirmClearHistory: "Ви впевнені, що хочете очистити всю історію?",
        noHistoryFound: "Історія відсутня",
        justNow: "щойно",
        timeAgo: "тому",
        timeMinSingular: "хвилина",
        timeMinPlural: "хвилин",
        timeHourSingular: "година",
        timeHourPlural: "годин",
        timeDaySingular: "день",
        timeDayPlural: "днів",
        timeWeekSingular: "тиждень",
        timeWeekPlural: "тижнів",
        timeMonthSingular: "місяць",
        timeMonthPlural: "місяців",
        timeYearSingular: "рік",
        timeYearPlural: "років",
        requiredProgress: "Обов'язкові",
        optionalProgress: "Додаткові"
    },

    // Form sections
    formSections: {
        primaryIdentifiers: "Основні ідентифікатори кампанії",
        advancedTargeting: "Розширене таргетування"
    },

    // Form fields
    formFields: {
        websiteUrl: {
            label: "URL веб-сайту",
            placeholder: "https://www.example.com",
            tooltip: "Повна URL-адреса вашого веб-сайту (наприклад, https://www.example.com)"
        },
        urlFormat: {
            label: "Параметри формату URL:",
            auto: "Автовизначення",
            preserve: "Зберегти як введено",
            https: "Примусовий HTTPS",
            http: "Примусовий HTTP",
            tooltip: "Виберіть спосіб форматування структури URL"
        },
        campaignId: {
            label: "ID кампанії",
            placeholder: "abc123, q2_campaign",
            tooltip: "Необов'язково: Унікальний ідентифікатор вашої кампанії (наприклад, abc.123)"
        },
        campaignSource: {
            label: "Джерело кампанії",
            placeholder: "google, facebook, newsletter",
            tooltip: "Обов'язково: Джерело вашого трафіку (наприклад, google, newsletter)"
        },
        campaignMedium: {
            label: "Тип кампанії",
            placeholder: "cpc, banner, email",
            tooltip: "Обов'язково: Маркетинговий канал (наприклад, cpc, banner, email)"
        },
        campaignName: {
            label: "Назва кампанії",
            placeholder: "summer_sale, product_launch",
            tooltip: "Необов'язково: Назва вашої кампанії (наприклад, spring_sale)"
        },
        campaignTerm: {
            label: "Пошукові терміни",
            placeholder: "running+shoes, organic+foods",
            tooltip: "Необов'язково: Ключові слова для платних пошукових кампаній"
        },
        campaignContent: {
            label: "Вміст кампанії",
            placeholder: "logolink, textlink, version_a",
            tooltip: "Необов'язково: Розрізняйте подібний вміст або посилання в одній рекламі"
        }
    },

    // Hints
    hints: {
        examples: "Приклади:",
        popular: "Популярні:",
        tips: "Поради:",
        format: "Формат:",
        forPaidSearch: "Для платного пошуку:",
        forABTesting: "Для A/B тестування:",
        recent: "Недавні:",
        websiteUrlHint1: "https://www.yourcompany.com",
        websiteUrlHint2: "https://www.yourcompany.com/landing-page",
        campaignIdHint: "Унікальний ідентифікатор для вашої кампанії (наприклад, q2_2023, summer23)"
    },

    // History
    history: {
        title: "Останні URL",
        clearHistory: "Очистити історію",
        clearSession: "Скинути форму",
        apply: "Застосувати",
        delete: "Видалити",
        untitled: "Без назви"
    },

    // Errors
    errors: {
        urlRequired: "Будь ласка, введіть URL веб-сайту",
        invalidUrl: "Будь ласка, введіть коректний URL",
        requiredFieldsMissing: "Будь ласка, заповніть усі обов'язкові поля",
        generateFirst: "Спочатку згенеруйте URL"
    },

    // Tour
    tour: {
        needHelp: "Потрібна допомога?",
        tourQuestion: "Бажаєте ознайомитись з основними функціями генератора UTM?",
        declineTour: "Ні, дякую",
        startTour: "Так, покажіть мені",
        startTourButton: "?",
        steps: {
            websiteUrl: {
                title: "URL веб-сайту",
                description: "Почніть із введення URL веб-сайту, який ви хочете відстежувати. Це місце, куди будуть потрапляти користувачі."
            },
            languageSwitcher: {
                title: "Вибір мови",
                description: "Виберіть зручну для вас мову. Ваш вибір буде збережено для наступних відвідувань."
            },
            campaignSource: {
                title: "Джерело кампанії",
                description: "Це обов'язкове поле визначає звідки надходить трафік (наприклад, google, facebook, newsletter)."
            },
            campaignMedium: {
                title: "Тип кампанії",
                description: "Це обов'язкове поле визначає маркетинговий канал (наприклад, cpc, banner, email)."
            },
            hints: {
                title: "Швидкі підказки",
                description: "Натисніть на ці кнопки, щоб швидко заповнити поля поширеними значеннями."
            },
            campaignName: {
                title: "Назва кампанії",
                description: "Необов'язково: Назва вашої маркетингової кампанії (наприклад, spring_sale, product_launch)."
            },
            output: {
                title: "Згенерований URL",
                description: "Тут з'явиться ваш UTM URL. Натисніть кнопку 'Копіювати', щоб скопіювати його."
            },
            history: {
                title: "Історія URL",
                description: "Тут зберігаються ваші раніше згенеровані URL. Ви можете застосувати їх до форми, скопіювати або видалити."
            }
        }
    }
};

/**
 * UTM Generator - English Translation
 * Version: 1.0.0
 */

const UTM_TRANSLATIONS_EN = {
    // General UI
    general: {
        title: "Campaign URL Builder",
        description: "This tool allows you to easily add campaign parameters to URLs so you can measure Custom Campaigns in Google Analytics.",
        websiteUrl: "Website URL",
        generatedUrl: "Generated URL",
        copy: "Copy",
        copied: "Copied!",
        reset: "Reset",
        confirmClearHistory: "Are you sure you want to clear all history?",
        noHistoryFound: "No history found",
        justNow: "just now",
        timeAgo: "ago",
        timeMinSingular: "min",
        timeMinPlural: "mins",
        timeHourSingular: "hour",
        timeHourPlural: "hours",
        timeDaySingular: "day",
        timeDayPlural: "days",
        timeWeekSingular: "week",
        timeWeekPlural: "weeks",
        timeMonthSingular: "month",
        timeMonthPlural: "months",
        timeYearSingular: "year",
        timeYearPlural: "years",
        requiredProgress: "Required",
        optionalProgress: "Optional"
    },

    // Form sections
    formSections: {
        primaryIdentifiers: "Primary Campaign Identifiers",
        advancedTargeting: "Advanced Targeting"
    },

    // Form fields
    formFields: {
        websiteUrl: {
            label: "Website URL",
            placeholder: "https://www.example.com",
            tooltip: "The full URL of your website (e.g., https://www.example.com)"
        },
        urlFormat: {
            label: "URL Format Options:",
            auto: "Auto-detect",
            preserve: "Preserve as entered",
            https: "Force HTTPS",
            http: "Force HTTP",
            tooltip: "Choose how the URL structure should be formatted"
        },
        campaignId: {
            label: "Campaign ID",
            placeholder: "abc123, q2_campaign",
            tooltip: "Optional: A unique identifier for your campaign (e.g., abc.123)"
        },
        campaignSource: {
            label: "Campaign Source",
            placeholder: "google, facebook, newsletter",
            tooltip: "Required: The source of your traffic (e.g., google, newsletter)"
        },
        campaignMedium: {
            label: "Campaign Medium",
            placeholder: "cpc, banner, email",
            tooltip: "Required: The marketing medium (e.g., cpc, banner, email)"
        },
        campaignName: {
            label: "Campaign Name",
            placeholder: "summer_sale, product_launch",
            tooltip: "Optional: The name of your campaign (e.g., spring_sale)"
        },
        campaignTerm: {
            label: "Campaign Term",
            placeholder: "running+shoes, organic+foods",
            tooltip: "Optional: Keywords for paid search campaigns"
        },
        campaignContent: {
            label: "Campaign Content",
            placeholder: "logolink, textlink, version_a",
            tooltip: "Optional: Differentiate similar content or links within the same ad"
        }
    },

    // Hints
    hints: {
        examples: "Examples:",
        popular: "Popular:",
        tips: "Tips:",
        format: "Format:",
        forPaidSearch: "For paid search:",
        forABTesting: "For A/B testing:",
        recent: "Recent:",
        websiteUrlHint1: "https://www.yourcompany.com",
        websiteUrlHint2: "https://www.yourcompany.com/landing-page",
        campaignIdHint: "Unique identifier for your campaign (e.g., q2_2023, summer23)"
    },

    // History
    history: {
        title: "Recent URLs",
        clearHistory: "Clear History",
        clearSession: "Reset Form",
        apply: "Apply",
        delete: "Delete",
        untitled: "Untitled"
    },

    // Errors
    errors: {
        urlRequired: "Please enter a website URL",
        invalidUrl: "Please enter a valid URL",
        requiredFieldsMissing: "Please fill in all required fields",
        generateFirst: "Generate a URL first"
    },

    // Tour
    tour: {
        needHelp: "Need help?",
        tourQuestion: "Would you like to take a quick tour of the UTM Generator?",
        declineTour: "No, thanks",
        startTour: "Yes, show me",
        startTourButton: "?",
        steps: {
            websiteUrl: {
                title: "Website URL",
                description: "Start by entering the website URL you want to track. This is the destination where users will land."
            },
            languageSwitcher: {
                title: "Language Selection",
                description: "Choose your preferred language. Your selection will be saved for future visits."
            },
            campaignSource: {
                title: "Campaign Source",
                description: "This required field identifies where the traffic is coming from (e.g., google, facebook, newsletter)."
            },
            campaignMedium: {
                title: "Campaign Medium",
                description: "This required field identifies the marketing medium (e.g., cpc, banner, email)."
            },
            hints: {
                title: "Quick Hints",
                description: "Click these buttons to quickly fill in common values for each field."
            },
            campaignName: {
                title: "Campaign Name",
                description: "Optional: The name of your marketing campaign (e.g., spring_sale, product_launch)."
            },
            output: {
                title: "Generated URL",
                description: "Your UTM URL will appear here. Click the Copy button to copy it to your clipboard."
            },
            history: {
                title: "URL History",
                description: "Your previously generated URLs are saved here. You can apply them to the form, copy them, or delete them."
            }
        }
    }
};

/**
 * UTM Generator - Polish Translation
 * Version: 1.0.0
 */

const UTM_TRANSLATIONS_PL = {
    // General UI
    general: {
        title: "Kreator URL Kampanii",
        description: "To narzędzie pozwala łatwo dodawać parametry kampanii do adresów URL, aby mierzyć niestandardowe kampanie w Google Analytics.",
        websiteUrl: "Adres URL strony",
        generatedUrl: "Wygenerowany URL",
        copy: "Kopiuj",
        copied: "Skopiowano!",
        reset: "Resetuj",
        confirmClearHistory: "Czy na pewno chcesz wyczyścić całą historię?",
        noHistoryFound: "Brak historii",
        justNow: "przed chwilą",
        timeAgo: "temu",
        timeMinSingular: "minuta",
        timeMinPlural: "minut",
        timeHourSingular: "godzina",
        timeHourPlural: "godzin",
        timeDaySingular: "dzień",
        timeDayPlural: "dni",
        timeWeekSingular: "tydzień",
        timeWeekPlural: "tygodni",
        timeMonthSingular: "miesiąc",
        timeMonthPlural: "miesięcy",
        timeYearSingular: "rok",
        timeYearPlural: "lat",
        requiredProgress: "Wymagane",
        optionalProgress: "Opcjonalne"
    },

    // Form sections
    formSections: {
        primaryIdentifiers: "Główne identyfikatory kampanii",
        advancedTargeting: "Zaawansowane targetowanie"
    },

    // Form fields
    formFields: {
        websiteUrl: {
            label: "Adres URL strony",
            placeholder: "https://www.example.com",
            tooltip: "Pełny adres URL Twojej strony (np. https://www.example.com)"
        },
        urlFormat: {
            label: "Opcje formatu URL:",
            auto: "Automatyczne wykrywanie",
            preserve: "Zachowaj jak wprowadzono",
            https: "Wymuś HTTPS",
            http: "Wymuś HTTP",
            tooltip: "Wybierz sposób formatowania struktury URL"
        },
        campaignId: {
            label: "ID kampanii",
            placeholder: "abc123, q2_campaign",
            tooltip: "Opcjonalnie: Unikalny identyfikator Twojej kampanii (np. abc.123)"
        },
        campaignSource: {
            label: "Źródło kampanii",
            placeholder: "google, facebook, newsletter",
            tooltip: "Wymagane: Źródło Twojego ruchu (np. google, newsletter)"
        },
        campaignMedium: {
            label: "Medium kampanii",
            placeholder: "cpc, banner, email",
            tooltip: "Wymagane: Medium marketingowe (np. cpc, banner, email)"
        },
        campaignName: {
            label: "Nazwa kampanii",
            placeholder: "summer_sale, product_launch",
            tooltip: "Opcjonalnie: Nazwa Twojej kampanii (np. spring_sale)"
        },
        campaignTerm: {
            label: "Frazy kampanii",
            placeholder: "running+shoes, organic+foods",
            tooltip: "Opcjonalnie: Słowa kluczowe dla płatnych kampanii wyszukiwania"
        },
        campaignContent: {
            label: "Zawartość kampanii",
            placeholder: "logolink, textlink, version_a",
            tooltip: "Opcjonalnie: Rozróżnienie podobnych treści lub linków w tej samej reklamie"
        }
    },

    // Hints
    hints: {
        examples: "Przykłady:",
        popular: "Popularne:",
        tips: "Wskazówki:",
        format: "Format:",
        forPaidSearch: "Dla płatnego wyszukiwania:",
        forABTesting: "Dla testów A/B:",
        recent: "Ostatnie:",
        websiteUrlHint1: "https://www.yourcompany.com",
        websiteUrlHint2: "https://www.yourcompany.com/landing-page",
        campaignIdHint: "Unikalny identyfikator dla Twojej kampanii (np. q2_2023, summer23)"
    },

    // History
    history: {
        title: "Ostatnie URL",
        clearHistory: "Wyczyść historię",
        clearSession: "Resetuj formularz",
        apply: "Zastosuj",
        delete: "Usuń",
        untitled: "Bez tytułu"
    },

    // Errors
    errors: {
        urlRequired: "Proszę podać adres URL strony",
        invalidUrl: "Proszę podać poprawny adres URL",
        requiredFieldsMissing: "Proszę wypełnić wszystkie wymagane pola",
        generateFirst: "Najpierw wygeneruj URL"
    },

    // Tour
    tour: {
        needHelp: "Potrzebujesz pomocy?",
        tourQuestion: "Czy chcesz zobaczyć krótki przewodnik po generatorze UTM?",
        declineTour: "Nie, dziękuję",
        startTour: "Tak, pokaż mi",
        startTourButton: "?",
        steps: {
            websiteUrl: {
                title: "Adres URL strony",
                description: "Zacznij od wprowadzenia adresu URL strony, którą chcesz śledzić. To miejsce, do którego trafią użytkownicy."
            },
            languageSwitcher: {
                title: "Wybór języka",
                description: "Wybierz preferowany język. Twój wybór zostanie zapisany na przyszłość."
            },
            campaignSource: {
                title: "Źródło kampanii",
                description: "To wymagane pole identyfikuje, skąd pochodzi ruch (np. google, facebook, newsletter)."
            },
            campaignMedium: {
                title: "Medium kampanii",
                description: "To wymagane pole określa medium marketingowe (np. cpc, banner, email)."
            },
            hints: {
                title: "Szybkie podpowiedzi",
                description: "Kliknij te przyciski, aby szybko wypełnić pola popularnymi wartościami."
            },
            campaignName: {
                title: "Nazwa kampanii",
                description: "Opcjonalnie: Nazwa Twojej kampanii marketingowej (np. spring_sale, product_launch)."
            },
            output: {
                title: "Wygenerowany URL",
                description: "Tutaj pojawi się Twój URL z parametrami UTM. Kliknij przycisk Kopiuj, aby skopiować go do schowka."
            },
            history: {
                title: "Historia URL",
                description: "Twoje wcześniej wygenerowane URL są tutaj zapisane. Możesz zastosować je do formularza, skopiować lub usunąć."
            }
        }
    }
};

/**
 * UTM Generator - Language Manager
 * Version: 1.0.0
 */

class LanguageManager {
    constructor() {
        this.defaultLanguage = 'uk';
        this.availableLanguages = ['uk', 'en', 'pl'];
        this.storageKey = 'utmLanguagePreference';
        this.currentLanguage = this.getLanguagePreference();
        this.translations = {};
        this.initTranslations();
    }

    /**
     * Initialize available translations
     */
    initTranslations() {
        // Translations are loaded from separate files
        if (typeof UTM_TRANSLATIONS_UK !== 'undefined') {
            this.translations.uk = UTM_TRANSLATIONS_UK;
        }
        if (typeof UTM_TRANSLATIONS_EN !== 'undefined') {
            this.translations.en = UTM_TRANSLATIONS_EN;
        }
        if (typeof UTM_TRANSLATIONS_PL !== 'undefined') {
            this.translations.pl = UTM_TRANSLATIONS_PL;
        }
    }

    /**
     * Get user's language preference from localStorage or default to browser language
     */
    getLanguagePreference() {
        const savedLanguage = localStorage.getItem(this.storageKey);

        if (savedLanguage && this.availableLanguages.includes(savedLanguage)) {
            return savedLanguage;
        }

        // Try to detect browser language
        const browserLang = navigator.language.split('-')[0];
        if (this.availableLanguages.includes(browserLang)) {
            return browserLang;
        }

        return this.defaultLanguage;
    }

    /**
     * Save language preference to localStorage
     */
    saveLanguagePreference(language) {
        if (this.availableLanguages.includes(language)) {
            localStorage.setItem(this.storageKey, language);
            this.currentLanguage = language;
            return true;
        }
        return false;
    }

    /**
     * Change language and update UI
     */
    changeLanguage(language) {
        if (this.saveLanguagePreference(language)) {
            this.applyTranslations();
            return true;
        }
        return false;
    }

    /**
     * Get translation for a key
     */
    translate(path) {
        try {
            const keys = path.split('.');
            let result = this.translations[this.currentLanguage];

            for (const key of keys) {
                if (result[key] === undefined) {
                    console.warn(
                        `[UTM Language Manager] Missing translation for key: ${path} in language: ${this.currentLanguage}`
                    );
                    // Try to fall back to English
                    if (this.currentLanguage !== 'en' && this.translations['en']) {
                        let fallback = this.translations['en'];
                        let found = true;
                        for (const fbKey of keys) {
                            if (fallback[fbKey] === undefined) {
                                found = false;
                                break;
                            }
                            fallback = fallback[fbKey];
                        }
                        if (found) {
                            return fallback;
                        }
                    }
                    return path; // Return the key as fallback
                }
                result = result[key];
            }
            return result;
        } catch (error) {
            console.error(`[UTM Language Manager] Error translating: ${path}`, error);
            return path;
        }
    }

    /**
     * Apply translations to the entire UI
     */
    applyTranslations() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.translate(key);
        });

        // Update all elements with data-i18n-placeholder attribute
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.translate(key);
        });

        // Update all tooltips
        document.querySelectorAll('[data-utm-tooltip]').forEach(element => {
            const tooltipKey = element.getAttribute('data-utm-tooltip');

            // Check if we have UTM_CONFIG with tooltip content mapping
            if (window.UTM_CONFIG && window.UTM_CONFIG.tooltips && window.UTM_CONFIG.tooltips
                .content) {
                // Get the translation key for this tooltip
                const translationKey = window.UTM_CONFIG.tooltips.content[tooltipKey];

                if (translationKey) {
                    // Translate using the proper key
                    const tooltipText = this.translate(translationKey);
                    // Set as title attribute for native browser tooltip as fallback
                    element.setAttribute('title', tooltipText);

                    // Also set data attribute for custom tooltips
                    element.setAttribute('data-tooltip-text', tooltipText);
                }
            } else {
                // Fallback to old behavior
                const fallbackKey = `formFields.${tooltipKey}.tooltip`;
                const tooltipText = this.translate(fallbackKey);
                element.setAttribute('title', tooltipText);
                element.setAttribute('data-tooltip-text', tooltipText);
            }
        });

        // Fire a custom event so other components can update
        window.dispatchEvent(new CustomEvent('utmLanguageChanged', {
            detail: { language: this.currentLanguage }
        }));
    }

    /**
     * Create language switcher UI
     */
    createLanguageSwitcher(targetSelector) {
        const targetElement = document.querySelector(targetSelector);
        if (!targetElement) return;

        const switcherContainer = document.createElement('div');
        switcherContainer.className = 'language-switcher';

        // Create language options
        const languageLabels = {
            uk: 'Українська',
            en: 'English',
            pl: 'Polski'
        };

        this.availableLanguages.forEach(lang => {
            const langButton = document.createElement('button');
            langButton.textContent = languageLabels[lang];
            langButton.className = 'language-button';
            langButton.setAttribute('data-language', lang);
            if (lang === this.currentLanguage) {
                langButton.classList.add('active');
            }

            langButton.addEventListener('click', () => {
                if (lang !== this.currentLanguage) {
                    document.querySelectorAll('.language-button').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    langButton.classList.add('active');
                    this.changeLanguage(lang);
                }
            });

            switcherContainer.appendChild(langButton);
        });

        targetElement.appendChild(switcherContainer);
    }
}

// Global instance
const utmLanguageManager = new LanguageManager();
