/**
 * UTM Generator - Core Functionality
 * Version: 1.3.3
 * Last Updated: ${new Date().toISOString().split('T')[0]}
 */

/**
 * UTM Generator - Ukrainian Translation
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
        optionalProgress: "Додаткові",
        paste: "Вставити"
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
        tutorial: {
            title: "Ласкаво просимо до UTM Generator!",
            description: "UTM-теги допомагають відстежувати, звідки надходить трафік на ваш веб-сайт. Бажаєте пройти ознайомчу екскурсію?",
            startTour: "Почати екскурсію",
            declineTour: "Пропустити екскурсію"
        },
        buttons: {
            close: "Закрити",
            next: "Далі",
            previous: "Назад",
            done: "Готово"
        },
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
            sourceHints: {
                title: "Популярні джерела",
                description: "Натисніть на ці кнопки, щоб швидко додати популярні джерела трафіку."
            },
            urlFormat: {
                title: "Параметри формату URL",
                description: "Виберіть, як форматувати ваш URL - наприклад, примусове використання HTTPS для безпеки."
            },
            campaignName: {
                title: "Назва кампанії",
                description: "Необов'язково: Назва вашої маркетингової кампанії (наприклад, spring_sale, product_launch)."
            },
            campaignTerm: {
                title: "Пошукові терміни",
                description: "Необов'язково: Додайте ключові слова для платних пошукових кампаній."
            },
            campaignContent: {
                title: "Вміст кампанії",
                description: "Необов'язково: Диференціюйте різні оголошення або посилання, які вказують на один і той же URL (корисно для A/B тестування)."
            },
            output: {
                title: "Згенерований URL",
                description: "Тут з'явиться ваш UTM URL. Натисніть кнопку 'Копіювати', щоб скопіювати його."
            },
            copy: {
                title: "Кнопка копіювання",
                description: "Натисніть, щоб скопіювати згенерований URL у буфер обміну."
            },
            history: {
                title: "Історія URL",
                description: "Тут зберігаються ваші раніше згенеровані URL. Ви можете застосувати їх до форми, скопіювати або видалити."
            },
            export: {
                title: "Експорт в таблицю",
                description: "Виберіть URL-адреси та експортуйте їх у форматі таблиці для Google Sheets. Зручно для відстеження та організації ваших кампаній."
            },
            tourButton: {
                title: "Кнопка екскурсії",
                description: "Натисніть цю кнопку в будь-який час, щоб перезапустити екскурсію."
            }
        }
    },

    // Export functionality
    export: {
        title: "Експорт вибраних URL",
        description: "Виберіть URL-адреси для експорту у форматі, придатному для Google Таблиць.",
        selectAll: "Вибрати все",
        copyTable: "Копіювати як таблицю",
        createSheet: "Google Таблицю Шаблон",
        noItemsSelected: "Будь ласка, виберіть елементи для експорту",
        copied: "Таблицю скопійовано в буфер обміну! Тепер ви можете вставити її в Google Таблиці (Ctrl+V або Cmd+V)",
        copyError: "Не вдалося скопіювати таблицю",
        modal: {
            title: "Налаштування експорту",
            includeFields: "Включити поля:",
            cancel: "Скасувати",
            export: "Експортувати"
        },
        fields: {
            createdDate: "Дата додавання",
            utmSource: "Джерело трафіку",
            utmMedium: "Тип реклами",
            utmCampaign: "Назва кампанії",
            utmTerm: "Пошукові терміни",
            utmContent: "Зміст реклами",
            fullUrl: "Повна URL-адреса"
        }
    }
};

/**
 * UTM Generator - English Translation (Default)
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
        timeMinSingular: "minute",
        timeMinPlural: "minutes",
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
        optionalProgress: "Optional",
        paste: "Paste"
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
            tooltip: "The full website URL (e.g., https://www.example.com)"
        },
        urlFormat: {
            label: "URL Format Options:",
            auto: "Auto-detect",
            preserve: "Preserve as entered",
            https: "Force HTTPS",
            http: "Force HTTP",
            tooltip: "Choose how to format the URL structure"
        },
        campaignId: {
            label: "Campaign ID",
            placeholder: "abc123, q2_campaign",
            tooltip: "Optional: A unique identifier for your campaign (e.g., abc.123)"
        },
        campaignSource: {
            label: "Campaign Source",
            placeholder: "google, facebook, newsletter",
            tooltip: "Required: The referrer source of your traffic (e.g., google, newsletter)"
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
            tooltip: "Optional: Identify paid search keywords for your campaigns"
        },
        campaignContent: {
            label: "Campaign Content",
            placeholder: "logolink, textlink, version_a",
            tooltip: "Optional: Differentiate similar content or links in the same ad"
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
        tourQuestion: "Would you like to learn about the key features of the UTM Generator?",
        declineTour: "No, thanks",
        startTour: "Yes, show me",
        startTourButton: "?",
        tutorial: {
            title: "Welcome to UTM Generator!",
            description: "UTM tags help track where your website traffic comes from. Would you like a guided tour of how to use this tool?",
            startTour: "Start Tour",
            declineTour: "Skip Tour"
        },
        buttons: {
            close: "Close",
            next: "Next",
            previous: "Previous",
            done: "Done"
        },
        steps: {
            websiteUrl: {
                title: "Website URL",
                description: "Start by entering the full URL of the website you want to track. This is where users will land when they click your link."
            },
            languageSwitcher: {
                title: "Language Switcher",
                description: "Select your preferred language. Your choice will be saved for future visits."
            },
            campaignSource: {
                title: "Campaign Source",
                description: "This required field identifies where your traffic is coming from (e.g., google, facebook, newsletter)."
            },
            campaignMedium: {
                title: "Campaign Medium",
                description: "This required field identifies the marketing medium (e.g., cpc, banner, email)."
            },
            hints: {
                title: "Quick Hints",
                description: "Click these buttons to quickly populate fields with common values."
            },
            sourceHints: {
                title: "Popular Sources",
                description: "Click these buttons to quickly add common traffic sources to your UTM link."
            },
            urlFormat: {
                title: "URL Format Options",
                description: "Choose how your URL should be formatted - for example, forcing HTTPS for security."
            },
            campaignName: {
                title: "Campaign Name",
                description: "Optional: Name your marketing campaign to identify it in analytics reports."
            },
            campaignTerm: {
                title: "Campaign Term",
                description: "Optional: Add paid search keywords or terms associated with your campaign."
            },
            campaignContent: {
                title: "Campaign Content",
                description: "Optional: Differentiate ads or links that point to the same URL (useful for A/B testing)."
            },
            output: {
                title: "Generated URL",
                description: "Your UTM-tagged URL will appear here. Use the Copy button to copy it to your clipboard."
            },
            copy: {
                title: "Copy Button",
                description: "Click to copy the generated URL to your clipboard."
            },
            history: {
                title: "URL History",
                description: "Your previously generated URLs are saved here for easy access."
            },
            export: {
                title: "Export Functionality",
                description: "Export your UTM links to a table format for use in spreadsheets or reports."
            },
            tourButton: {
                title: "Tour Button",
                description: "Click this button anytime to restart the tour."
            }
        }
    },

    // Export functionality
    export: {
        title: "Export Selected URLs",
        description: "Select URLs to export in a format suitable for Google Sheets.",
        selectAll: "Select All",
        copyTable: "Copy as Table",
        createSheet: "Create Google Sheet",
        noItemsSelected: "Please select items to export",
        copied: "Table copied to clipboard! You can now paste it into Google Sheets (Ctrl+V or Cmd+V)",
        copyError: "Failed to copy table",
        modal: {
            title: "Export Options",
            includeFields: "Include Fields:",
            cancel: "Cancel",
            export: "Export"
        },
        fields: {
            createdDate: "Created Date",
            utmSource: "UTM Source",
            utmMedium: "UTM Medium",
            utmCampaign: "UTM Campaign",
            utmTerm: "UTM Term",
            utmContent: "UTM Content",
            fullUrl: "Full URL"
        }
    }
};

/**
 * UTM Generator - Polish Translation
 */
const UTM_TRANSLATIONS_PL = {
    // General UI
    general: {
        title: "Generator URL Kampanii",
        description: "To narzędzie pozwala łatwo dodawać parametry kampanii do adresów URL, aby mierzyć kampanie niestandardowe w Google Analytics.",
        websiteUrl: "URL strony",
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
        optionalProgress: "Opcjonalne",
        paste: "Wklej"
    },

    // Form sections
    formSections: {
        primaryIdentifiers: "Główne identyfikatory kampanii",
        advancedTargeting: "Zaawansowane targetowanie"
    },

    // Form fields
    formFields: {
        websiteUrl: {
            label: "URL strony",
            placeholder: "https://www.example.com",
            tooltip: "Pełny adres URL Twojej strony (np. https://www.example.com)"
        },
        urlFormat: {
            label: "Opcje formatu URL:",
            auto: "Automatycznie",
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
            tooltip: "Wymagane: Źródło ruchu (np. google, newsletter)"
        },
        campaignMedium: {
            label: "Medium kampanii",
            placeholder: "cpc, banner, email",
            tooltip: "Wymagane: Medium marketingowe (np. cpc, banner, email)"
        },
        campaignName: {
            label: "Nazwa kampanii",
            placeholder: "summer_sale, product_launch",
            tooltip: "Opcjonalnie: Nazwij swoją kampanię marketingową (np. spring_sale)"
        },
        campaignTerm: {
            label: "Słowa kluczowe",
            placeholder: "running+shoes, organic+foods",
            tooltip: "Opcjonalnie: Słowa kluczowe dla kampanii płatnych"
        },
        campaignContent: {
            label: "Treść kampanii",
            placeholder: "logolink, textlink, version_a",
            tooltip: "Opcjonalnie: Rozróżniaj podobne treści lub linki w reklamie"
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
        campaignIdHint: "Unikalny identyfikator kampanii (np. q2_2023, summer23)"
    },

    // History
    history: {
        title: "Ostatnie URL",
        clearHistory: "Wyczyść historię",
        clearSession: "Resetuj formularz",
        apply: "Zastosuj",
        delete: "Usuń",
        untitled: "Bez nazwy"
    },

    // Errors
    errors: {
        urlRequired: "Wprowadź URL strony",
        invalidUrl: "Wprowadź poprawny URL",
        requiredFieldsMissing: "Wypełnij wszystkie wymagane pola",
        generateFirst: "Najpierw wygeneruj URL"
    },

    // Tour
    tour: {
        needHelp: "Potrzebujesz pomocy?",
        tourQuestion: "Czy chcesz poznać główne funkcje generatora UTM?",
        declineTour: "Nie, dziękuję",
        startTour: "Tak, pokaż mi",
        startTourButton: "?",
        tutorial: {
            title: "Witamy w Generatorze UTM!",
            description: "Tagi UTM pomagają śledzić, skąd pochodzi ruch na Twojej stronie. Czy chcesz zobaczyć przewodnik po tym narzędziu?",
            startTour: "Rozpocznij przewodnik",
            declineTour: "Pomiń przewodnik"
        },
        buttons: {
            close: "Zamknij",
            next: "Dalej",
            previous: "Wstecz",
            done: "Gotowe"
        },
        steps: {
            websiteUrl: {
                title: "URL strony",
                description: "Zacznij od wprowadzenia adresu URL strony, którą chcesz śledzić. To miejsce, do którego trafią użytkownicy."
            },
            languageSwitcher: {
                title: "Wybór języka",
                description: "Wybierz preferowany język. Twój wybór zostanie zapisany na przyszłe wizyty."
            },
            campaignSource: {
                title: "Źródło kampanii",
                description: "To wymagane pole określa, skąd pochodzi ruch (np. google, facebook, newsletter)."
            },
            campaignMedium: {
                title: "Medium kampanii",
                description: "To wymagane pole określa medium marketingowe (np. cpc, banner, email)."
            },
            hints: {
                title: "Szybkie podpowiedzi",
                description: "Kliknij te przyciski, aby szybko wypełnić pola popularnymi wartościami."
            },
            sourceHints: {
                title: "Popularne źródła",
                description: "Kliknij te przyciski, aby szybko dodać popularne źródła ruchu."
            },
            urlFormat: {
                title: "Opcje formatu URL",
                description: "Wybierz, jak formatować adres URL - na przykład, wymuszając HTTPS dla bezpieczeństwa."
            },
            campaignName: {
                title: "Nazwa kampanii",
                description: "Opcjonalnie: Nazwij swoją kampanię marketingową (np. spring_sale, product_launch)."
            },
            campaignTerm: {
                title: "Słowa kluczowe",
                description: "Opcjonalnie: Dodaj słowa kluczowe dla płatnych kampanii wyszukiwania."
            },
            campaignContent: {
                title: "Treść kampanii",
                description: "Opcjonalnie: Różnicuj reklamy lub linki wskazujące na ten sam URL (przydatne przy testach A/B)."
            },
            output: {
                title: "Wygenerowany URL",
                description: "Tutaj pojawi się Twój URL z tagami UTM. Użyj przycisku 'Kopiuj', aby skopiować go do schowka."
            },
            copy: {
                title: "Przycisk kopiowania",
                description: "Kliknij, aby skopiować wygenerowany URL do schowka."
            },
            history: {
                title: "Historia URL",
                description: "Tutaj zapisywane są Twoje wcześniej wygenerowane URL-e. Możesz je łatwo wykorzystać ponownie."
            },
            export: {
                title: "Eksport do tabeli",
                description: "Eksportuj swoje linki UTM w formacie tabeli do wykorzystania w arkuszach lub raportach."
            },
            tourButton: {
                title: "Przycisk przewodnika",
                description: "Kliknij ten przycisk w dowolnym momencie, aby ponownie uruchomić przewodnik."
            }
        }
    },

    // Export functionality
    export: {
        title: "Eksportuj wybrane URL",
        description: "Wybierz URL-e do eksportu w formacie odpowiednim dla Google Sheets.",
        selectAll: "Zaznacz wszystko",
        copyTable: "Kopiuj jako tabelę",
        createSheet: "Szablon Google Sheets",
        noItemsSelected: "Wybierz elementy do eksportu",
        copied: "Tabela skopiowana do schowka! Możesz ją teraz wkleić do Google Sheets (Ctrl+V lub Cmd+V)",
        copyError: "Nie udało się skopiować tabeli",
        modal: {
            title: "Ustawienia eksportu",
            includeFields: "Dołącz pola:",
            cancel: "Anuluj",
            export: "Eksportuj"
        },
        fields: {
            createdDate: "Data dodania",
            utmSource: "Źródło ruchu",
            utmMedium: "Typ reklamy",
            utmCampaign: "Nazwa kampanii",
            utmTerm: "Słowa kluczowe",
            utmContent: "Treść reklamy",
            fullUrl: "Pełny URL"
        }
    }
};

// UTM Generator - Language Manager
const utmLanguageManager = (function () {
    // Available languages
    const languages = {
        'en': UTM_TRANSLATIONS_EN,
        'uk': UTM_TRANSLATIONS_UK,
        'pl': UTM_TRANSLATIONS_PL
    };

    // Default language
    let currentLanguage = 'en';

    // List of callbacks to run when language changes
    let languageChangeCallbacks = [];

    // Try to load saved language preference
    try {
        const savedLanguage = localStorage.getItem('utmLanguage');
        if (savedLanguage && languages[savedLanguage]) {
            currentLanguage = savedLanguage;
        }
    } catch (e) {
        console.error('Error loading language preference:', e);
    }

    // Register a callback for language changes
    function onLanguageChange(callback) {
        if (typeof callback === 'function') {
            languageChangeCallbacks.push(callback);
        }
    }

    // Change language and notify all listeners
    function changeLanguage(lang) {
        if (languages[lang]) {
            currentLanguage = lang;
            try {
                localStorage.setItem('utmLanguage', lang);
            } catch (e) {
                console.error('Error saving language preference:', e);
            }

            // Notify all registered callbacks
            languageChangeCallbacks.forEach(callback => {
                try {
                    callback(lang);
                } catch (e) {
                    console.error('Error in language change callback:', e);
                }
            });

            return true;
        }
        return false;
    }

    // Get translation for a key
    function translate(key) {
        const parts = key.split('.');
        let result = languages[currentLanguage];

        // Navigate through the object structure
        for (const part of parts) {
            if (result && result[part] !== undefined) {
                result = result[part];
            } else {
                // If not found, try to fall back to English
                if (currentLanguage !== 'en') {
                    let fallback = languages['en'];
                    for (const p of parts) {
                        if (fallback && fallback[p] !== undefined) {
                            fallback = fallback[p];
                        } else {
                            return key; // Not found in fallback either
                        }
                    }
                    return fallback;
                }
                return key; // Key not found
            }
        }

        return result;
    }

    // Get current language
    function getCurrentLanguage() {
        return currentLanguage;
    }

    // Public API
    return {
        translate,
        changeLanguage,
        getCurrentLanguage,
        onLanguageChange
    };
})();

// Make the language manager globally available
window.utmLanguageManager = utmLanguageManager;

console.log(`%c UTM Generator v1.3.3 initialized`,
    'background: #3498db; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;');

// Make UTM_CONFIG available globally
window.UTM_CONFIG = {
    // Form configuration
    form: {
        selector: '[data-utm-form="main"]',
        inputs: {
            websiteUrl: '[data-utm-input="website-url"]',
            campaignId: '[data-utm-input="campaign-id"]',
            campaignSource: '[data-utm-input="campaign-source"]',
            campaignMedium: '[data-utm-input="campaign-medium"]',
            campaignName: '[data-utm-input="campaign-name"]',
            campaignTerm: '[data-utm-input="campaign-term"]',
            campaignContent: '[data-utm-input="campaign-content"]'
        },
        error: '[data-utm-error="website-url"]',
        output: '[data-utm-output]'
    },

    // Progress configuration
    progress: {
        container: '[data-utm-progress]',
        style: 'circles', // Options: 'bars', 'circles'
        showPercentage: true,
        showNumbers: true
    },

    // History configuration
    history: {
        list: '[data-utm-list="history"]',
        maxItems: 10,
        storageKey: 'utmHistory',
        expirationDays: 30 // Set to 0 for no expiration
    },

    // Tooltips
    tooltips: {
        selector: '[data-utm-tooltip]',
        content: {
            'website-url': 'formFields.websiteUrl.tooltip',
            'campaign-source': 'formFields.campaignSource.tooltip',
            'campaign-medium': 'formFields.campaignMedium.tooltip',
            'campaign-name': 'formFields.campaignName.tooltip',
            'campaign-id': 'formFields.campaignId.tooltip',
            'campaign-term': 'formFields.campaignTerm.tooltip',
            'campaign-content': 'formFields.campaignContent.tooltip',
            'url-format': 'formFields.urlFormat.tooltip'
        }
    }
};

// Make sure UTM_CONFIG is a global variable
const UTM_CONFIG = window.UTM_CONFIG;

// Wait for document to be fully loaded and all scripts to be executed
document.addEventListener('DOMContentLoaded', function () {
    // Debug logging function
    function debugLog(message, data = null) {
        console.log(`[UTM Generator] ${message}`, data || '');
    }

    // Format timestamp as time ago
    function formatTimeAgo(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);
        const seconds = Math.floor((now - date) / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);

        if (seconds < 60) {
            return utmLanguageManager.translate('general.justNow') || 'just now';
        } else if (minutes < 60) {
            const unit = minutes === 1 ?
                (utmLanguageManager.translate('general.timeMinSingular') || 'min') :
                (utmLanguageManager.translate('general.timeMinPlural') || 'mins');
            return `${minutes} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        } else if (hours < 24) {
            const unit = hours === 1 ?
                (utmLanguageManager.translate('general.timeHourSingular') || 'hour') :
                (utmLanguageManager.translate('general.timeHourPlural') || 'hours');
            return `${hours} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        } else if (days < 7) {
            const unit = days === 1 ?
                (utmLanguageManager.translate('general.timeDaySingular') || 'day') :
                (utmLanguageManager.translate('general.timeDayPlural') || 'days');
            return `${days} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        } else if (weeks < 5) {
            const unit = weeks === 1 ?
                (utmLanguageManager.translate('general.timeWeekSingular') || 'week') :
                (utmLanguageManager.translate('general.timeWeekPlural') || 'weeks');
            return `${weeks} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        } else if (months < 12) {
            const unit = months === 1 ?
                (utmLanguageManager.translate('general.timeMonthSingular') || 'month') :
                (utmLanguageManager.translate('general.timeMonthPlural') || 'months');
            return `${months} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        } else {
            const years = Math.floor(days / 365);
            const unit = years === 1 ?
                (utmLanguageManager.translate('general.timeYearSingular') || 'year') :
                (utmLanguageManager.translate('general.timeYearPlural') || 'years');
            return `${years} ${unit} ${utmLanguageManager.translate('general.timeAgo') || 'ago'}`;
        }
    }

    // Format timestamp as full date with 24-hour time
    function formatFullDate(timestamp) {
        const date = new Date(timestamp);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format
        };
        return date.toLocaleString(undefined, options);
    }

    // Initialize tooltips
    function initTooltips() {
        const tooltipTriggers = document.querySelectorAll(UTM_CONFIG.tooltips.selector);

        tooltipTriggers.forEach(trigger => {
            // Get tooltip key from data attribute
            const tooltipKey = trigger.getAttribute('data-utm-tooltip');

            // Get translation key from config
            if (tooltipKey && UTM_CONFIG.tooltips.content[tooltipKey]) {
                const translationKey = UTM_CONFIG.tooltips.content[tooltipKey];
                // Get the translated text
                const tooltipText = utmLanguageManager.translate(translationKey);
                // Set the tooltip text as a data attribute
                trigger.setAttribute('data-tooltip-text', tooltipText);
                // Also set as title for native browser tooltip as fallback
                trigger.setAttribute('title', tooltipText);
            }
        });

        debugLog('Tooltips initialized');
    }

    // Function to handle hint button clicks
    function setupHintButtons() {
        // We'll use event delegation instead of direct binding
        document.addEventListener('click', function (event) {
            // Check if the clicked element is a hint button (both regular and recent hints)
            const hintButton = event.target.closest('.hint-button');
            if (!hintButton) return;

            const field = hintButton.getAttribute('data-hint-for');
            const value = hintButton.textContent.trim();

            // Find the input field
            const inputSelector = `[data-utm-input="${field}"]`;
            const input = document.querySelector(inputSelector);

            if (input) {
                // Set value
                input.value = value;

                // Save this value as a recent hint
                saveRecentHint(field, value);

                // Log the hint application
                debugLog('Applied hint', { field, value });

                // Trigger the input change event to regenerate the URL
                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });
                input.dispatchEvent(event);

                // Force URL regeneration
                generateUTMUrl();

                // Explicitly update progress to ensure UI is consistent
                updateProgress();
            }
        });

        debugLog('Hint buttons initialized');
    }

    // Helper to convert kebab-case to camelCase
    function camelCase(str) {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }

    // Track recent hints per field (up to 3 per field)
    const recentHints = JSON.parse(localStorage.getItem('utmRecentHints') || '{}');

    // Save a recent hint
    function saveRecentHint(field, value) {
        if (!recentHints[field]) {
            recentHints[field] = [];
        }

        // Remove if already exists
        const existingIndex = recentHints[field].indexOf(value);
        if (existingIndex !== -1) {
            recentHints[field].splice(existingIndex, 1);
        }

        // Add to beginning and limit size
        recentHints[field].unshift(value);
        if (recentHints[field].length > 3) {
            recentHints[field].pop();
        }

        localStorage.setItem('utmRecentHints', JSON.stringify(recentHints));
        updateRecentHints();
    }

    // Update UI with recent hints
    function updateRecentHints() {
        for (const field in recentHints) {
            if (recentHints[field].length > 0) {
                const inputSelector = UTM_CONFIG.form.inputs[camelCase(field)];
                const formGroup = document.querySelector(inputSelector)?.closest('.form-group');
                if (!formGroup) continue;

                // Find or create the Recent section
                let recentSection = formGroup.querySelector('.recent-hints');
                if (!recentSection) {
                    const hintsSection = formGroup.querySelector('.input-hints');
                    if (!hintsSection) continue;

                    recentSection = document.createElement('div');
                    recentSection.className = 'recent-hints';

                    const recentLabel = document.createElement('span');
                    recentLabel.className = 'hint-label recent-label';
                    recentLabel.setAttribute('data-i18n', 'hints.recent');
                    recentLabel.textContent = utmLanguageManager.translate('hints.recent') || 'Recent:';

                    recentSection.appendChild(recentLabel);

                    const recentButtons = document.createElement('div');
                    recentButtons.className = 'hint-buttons recent-buttons';
                    recentSection.appendChild(recentButtons);

                    hintsSection.appendChild(recentSection);
                }

                // Update recent buttons
                const recentButtons = recentSection.querySelector('.recent-buttons');
                recentButtons.innerHTML = '';

                recentHints[field].forEach(hint => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.className = 'hint-button recent-hint';
                    button.setAttribute('data-hint-for', field);
                    button.textContent = hint;
                    recentButtons.appendChild(button);
                });
            }
        }
    }

    // Function to get history from localStorage
    function getHistory() {
        try {
            const history = JSON.parse(localStorage.getItem(UTM_CONFIG.history.storageKey) || '[]');
            return Array.isArray(history) ? history : [];
        } catch (e) {
            console.error('Error parsing history:', e);
            return [];
        }
    }

    // Function to save to history
    function saveHistory(url, title) {
        if (!url) return;
        debugLog('Saving to history', { url, title });
        let history = getHistory(); // Get fresh history from localStorage
        const newItem = { url, title, timestamp: Date.now() };

        // Remove if URL already exists
        const existingIndex = history.findIndex(item => item.url === url);
        if (existingIndex !== -1) {
            history.splice(existingIndex, 1);
        }

        // Add to beginning and limit size
        history.unshift(newItem);
        if (history.length > UTM_CONFIG.history.maxItems) {
            history.pop();
        }

        localStorage.setItem(UTM_CONFIG.history.storageKey, JSON.stringify(history));
        debugLog('History saved successfully', history);
    }

    // Function to add to history
    function addToHistory(url, title) {
        saveHistory(url, title);
        renderHistory();
    }

    // Function to delete from history
    function deleteFromHistory(url) {
        let history = getHistory(); // Get fresh history from localStorage
        history = history.filter(item => item.url !== url);
        localStorage.setItem(UTM_CONFIG.history.storageKey, JSON.stringify(history));
        debugLog('Item deleted from history', { url, remainingItems: history.length });
        renderHistory();
    }

    // Function to clear current session
    function clearCurrentSession() {
        const form = document.querySelector(UTM_CONFIG.form.selector);
        if (form) {
            form.reset();
            updateOutput('');
        }
    }

    // Function to clear all history
    function clearHistory() {
        debugLog('Clearing all history');
        localStorage.removeItem(UTM_CONFIG.history.storageKey);
        debugLog('History cleared, current storage:', localStorage.getItem(UTM_CONFIG.history
            .storageKey));
        renderHistory();
    }

    // Function to apply URL to form
    function applyUrlToForm(url) {
        try {
            const urlObj = new URL(url);
            const params = new URLSearchParams(urlObj.search);

            // Extract UTM parameters
            const utmParams = {
                source: params.get('utm_source'),
                medium: params.get('utm_medium'),
                name: params.get('utm_campaign'),
                term: params.get('utm_term'),
                content: params.get('utm_content'),
                id: params.get('utm_id')
            };

            // Update form fields
            Object.entries(utmParams).forEach(([key, value]) => {
                const input = document.querySelector(UTM_CONFIG.form.inputs[
                    `campaign${key.charAt(0).toUpperCase() + key.slice(1)}`]);
                if (input && value) {
                    input.value = value;
                }
            });

            // Update website URL
            const websiteUrlInput = document.querySelector(UTM_CONFIG.form.inputs.websiteUrl);
            if (websiteUrlInput) {
                websiteUrlInput.value = urlObj.origin + urlObj.pathname;
            }

            // Explicitly call these functions to ensure UI updates correctly
            generateUTMUrl();
            updateProgress();

            // Log application for debugging
            debugLog('Applied URL from history', { url, params: Object.fromEntries(params) });
        } catch (error) {
            console.error('Error applying URL:', error);
        }
    }

    // Function to render history
    function renderHistory() {
        const historyList = document.querySelector(UTM_CONFIG.history.list);
        if (!historyList) return;

        const history = getHistory();
        debugLog('Rendering history', { itemCount: history.length });

        // Clear existing items except templates
        const templates = historyList.querySelectorAll('[data-template]');
        const emptyState = historyList.querySelector('.history-item-empty');
        historyList.innerHTML = '';
        templates.forEach(template => historyList.appendChild(template));
        if (emptyState) historyList.appendChild(emptyState);

        if (history.length === 0) {
            const emptyStateElement = historyList.querySelector('.history-item-empty');
            if (emptyStateElement) {
                emptyStateElement.style.display = 'block';
                emptyStateElement.textContent = utmLanguageManager.translate('general.noHistoryFound');
            }
            return;
        }

        // Hide empty state
        const emptyStateElement = historyList.querySelector('.history-item-empty');
        if (emptyStateElement) {
            emptyStateElement.style.display = 'none';
        }

        // Get the template
        const template = historyList.querySelector('[data-template="history-item"]');
        if (!template) return;

        // Create history items
        history.forEach((item, index) => {
            const timeAgo = formatTimeAgo(item.timestamp);
            const fullDate = formatFullDate(item.timestamp);
            const urlObj = new URL(item.url);
            const params = new URLSearchParams(urlObj.search);

            // Clone the template
            const historyItem = template.cloneNode(true);
            historyItem.style.display = 'block';
            historyItem.setAttribute('data-url', encodeURIComponent(item.url));

            // Update checkbox
            const checkbox = historyItem.querySelector('.history-select');
            if (checkbox) {
                checkbox.id = `history-item-${index}`;
                checkbox.setAttribute('data-index', index);
            }

            // Update meta info
            const urlElement = historyItem.querySelector('.url-');
            if (urlElement) {
                urlElement.textContent = item.url;
            }

            const titleElement = historyItem.querySelector('.title--');
            if (titleElement) {
                titleElement.textContent = item.title || utmLanguageManager.translate('history.untitled');
            }

            const timestampElement = historyItem.querySelector('.utm_timestamp');
            if (timestampElement) {
                timestampElement.textContent = timeAgo;
                timestampElement.setAttribute('data-full-date', fullDate);
            }

            // Update UTM params
            const sourceElement = historyItem.querySelector('.utm-param--.source--');
            if (sourceElement) {
                sourceElement.textContent = params.get('utm_source') || '';
            }

            const mediumElement = historyItem.querySelector('.utm-param--.medium--');
            if (mediumElement) {
                mediumElement.textContent = params.get('utm_medium') || '';
            }

            const campaignElement = historyItem.querySelector('.utm-param-.campaign-');
            if (campaignElement) {
                campaignElement.textContent = params.get('utm_campaign') || '';
                campaignElement.style.display = params.get('utm_campaign') ? 'inline-block' : 'none';
            }

            // Update action buttons
            const applyButton = historyItem.querySelector('[data-utm-action="apply"]');
            if (applyButton) {
                applyButton.setAttribute('data-url', encodeURIComponent(item.url));
            }

            const copyButton = historyItem.querySelector('[data-utm-action="copy"]');
            if (copyButton) {
                copyButton.setAttribute('data-url', encodeURIComponent(item.url));
            }

            const deleteButton = historyItem.querySelector('[data-utm-action="delete"]');
            if (deleteButton) {
                deleteButton.setAttribute('data-url', encodeURIComponent(item.url));
            }

            // Add to history list
            historyList.appendChild(historyItem);
        });
    }

    // Function to get selected history items
    function getSelectedHistoryItems() {
        const selectedCheckboxes = document.querySelectorAll('.history-select:checked');
        const history = getHistory();
        return Array.from(selectedCheckboxes).map(checkbox => {
            const index = parseInt(checkbox.getAttribute('data-index'));
            return history[index];
        });
    }

    // Function to format data as table
    function formatAsTable(items, selectedFields) {
        // Default fields if none selected
        if (!selectedFields || selectedFields.length === 0) {
            selectedFields = ['created_date', 'utm_source', 'utm_medium', 'utm_campaign', 'full_url'];
        }

        // Create header row
        const headers = selectedFields.map(field => {
            const translationKey = `export.fields.${field}`;
            return utmLanguageManager.translate(translationKey) || field;
        });

        // Create data rows
        const rows = items.map(item => {
            const urlObj = new URL(item.url);
            const params = new URLSearchParams(urlObj.search);

            return selectedFields.map(field => {
                switch (field) {
                    case 'created_date':
                        return formatFullDate(item.utm_timestamp);
                    case 'utm_source':
                        return params.get('utm_source') || '';
                    case 'utm_medium':
                        return params.get('utm_medium') || '';
                    case 'utm_campaign':
                        return params.get('utm_campaign') || '';
                    case 'utm_term':
                        return params.get('utm_term') || '';
                    case 'utm_content':
                        return params.get('utm_content') || '';
                    case 'full_url':
                        return item.url;
                    default:
                        return '';
                }
            });
        });

        // Combine headers and rows
        return [headers, ...rows]
            .map(row => row.join('\t'))
            .join('\n');
    }

    // Function to copy table to clipboard
    function copyTableToClipboard() {
        const selectedItems = getSelectedHistoryItems();
        if (selectedItems.length === 0) {
            alert(utmLanguageManager.translate('export.noItemsSelected') || 'Please select items to export');
            return;
        }

        const exportModal = document.getElementById('exportModal');
        if (exportModal) {
            exportModal.classList.remove('hidden');
        } else {
            // If modal doesn't exist, use default fields
            const tableData = formatAsTable(selectedItems);
            navigator.clipboard.writeText(tableData)
                .then(() => {
                    alert(utmLanguageManager.translate('export.copied') || 'Table copied to clipboard');
                })
                .catch(err => {
                    console.error('Failed to copy table:', err);
                    alert(utmLanguageManager.translate('export.copyError') || 'Failed to copy table');
                });
        }
    }

    // Function to create Google Sheet
    function createGoogleSheet() {
        const selectedItems = getSelectedHistoryItems();
        if (selectedItems.length === 0) {
            alert(utmLanguageManager.translate('export.noItemsSelected') || 'Please select items to export');
            return;
        }

        // Google Sheets template URL
        const templateUrl = 'https://docs.google.com/spreadsheets/d/1yCYnJYav1FeOLJv8osjJq6nU5J7W1w84kEWz9K4UhBE/copy';
        window.open(templateUrl, '_blank');
    }

    // Function to validate URL
    function isValidUrl(url) {
        try {
            // Try to create a URL object
            const urlObj = new URL(url);

            // Check for valid protocol
            if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
                return false;
            }

            // Basic validation passed
            return true;
        } catch (e) {
            // If URL constructor fails, try various fixes
            // Check common URL patterns without protocol
            const patterns = [
                // www.domain.com
                /^www\.[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}.*$/,
                // domain.com
                /^[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}.*$/
            ];

            for (const pattern of patterns) {
                if (pattern.test(url)) {
                    try {
                        const fixedUrl = 'https://' + (url.startsWith('www.') ? '' : 'www.') + url.replace(
                            /^www\./, '');
                        new URL(fixedUrl);
                        return {
                            valid: true,
                            fixedUrl: fixedUrl,
                            format: url.startsWith('www.') ? 'www' : 'domain'
                        };
                    } catch (e) {
                        // Continue to next pattern
                    }
                }
            }
            return false;
        }
    }

    // Function to fix URL format based on specified preference
    function fixUrlFormat(url, format = 'auto') {
        // Return empty string for empty input
        if (!url) return '';

        // Trim whitespace
        url = url.trim();

        // If format is 'preserve', return the URL as is
        if (format === 'preserve') {
            return url;
        }

        // If URL doesn't start with http:// or https://, add it
        if (!/^https?:\/\//i.test(url)) {
            // For format 'http', force http://
            if (format === 'http') {
                url = 'http://' + url;
            }
            // For format 'https' or 'auto', force https://
            else {
                url = 'https://' + url;
            }
        }
        // If URL already has a protocol and format is specified, enforce it
        else {
            if (format === 'https' && url.startsWith('http://')) {
                url = 'https://' + url.substring(7);
            } else if (format === 'http' && url.startsWith('https://')) {
                url = 'http://' + url.substring(8);
            }
        }

        // For auto format, add www. if not present and not a subdomain
        if (format === 'auto' && !url.includes('://www.') && url.match(
            /https?:\/\/[^\/]+\.[^\/]+/)) {
            const urlParts = url.split('://');
            if (urlParts.length >= 2 && !urlParts[1].startsWith('www.') && !urlParts[1].includes(
                '.www.')) {
                url = urlParts[0] + '://www.' + urlParts[1];
            }
        }

        return url;
    }

    // Function to encode parameters
    function encodeParameter(value) {
        if (!value) return '';
        return encodeURIComponent(value.toLowerCase().replace(/\s+/g, '_'));
    }

    // Function to track UTM generation in Mixpanel
    function trackUtmGeneration(formValues, generatedUrl) {
        if (window.mixpanel && typeof window.mixpanel.track === 'function') {
            window.mixpanel.track("UTM Generator Used", {
                websiteUrl: formValues.websiteUrl,
                utm_source: formValues.campaignSource || "",
                utm_medium: formValues.campaignMedium || "",
                utm_campaign: formValues.campaignName || "",
                utm_id: formValues.campaignId || "",
                utm_term: formValues.campaignTerm || "",
                utm_content: formValues.campaignContent || "",
                generatedUrl: generatedUrl
            });
        }
    }

    // Function to track UTM parameter addition in Mixpanel
    function trackUtmParameter(formValues, generatedUrl, parameterName, parameterValue) {
        if (window.mixpanel && typeof window.mixpanel.track === 'function') {
            window.mixpanel.track(`UTM Generator Used - ${parameterName} Added`, {
                websiteUrl: formValues.websiteUrl,
                generatedUrl: generatedUrl,
                parameterValue: parameterValue
            });
        }
    }

    // Function to track URL copy action in Mixpanel
    function trackUrlCopy(formValues, generatedUrl) {
        if (window.mixpanel && typeof window.mixpanel.track === 'function') {
            // Extract UTM parameters from the generated URL
            const urlParams = new URLSearchParams(new URL(generatedUrl).search);
            const utmParams = {
                utm_source: urlParams.get('utm_source') || '',
                utm_medium: urlParams.get('utm_medium') || '',
                utm_campaign: urlParams.get('utm_campaign') || '',
                utm_id: urlParams.get('utm_id') || '',
                utm_term: urlParams.get('utm_term') || '',
                utm_content: urlParams.get('utm_content') || ''
            };

            window.mixpanel.track("UTM Generator Used - URL Copied", {
                websiteUrl: formValues.websiteUrl,
                generatedUrl: generatedUrl,
                utmParameters: utmParams
            });
        }
    }

    // Function to generate UTM URL
    function generateUTMUrl() {
        debugLog('Generating UTM URL');

        // Get form values
        const form = document.querySelector(UTM_CONFIG.form.selector);

        // Get all input values dynamically
        const inputs = {};
        Object.keys(UTM_CONFIG.form.inputs).forEach(key => {
            const inputSelector = UTM_CONFIG.form.inputs[key];
            const inputElement = document.querySelector(inputSelector);
            if (inputElement) {
                inputs[key] = inputElement.value.trim();
            }
        });

        debugLog('Form values', inputs);

        // Clear any previous error message
        const errorElement = document.querySelector(UTM_CONFIG.form.error);
        if (errorElement) {
            errorElement.textContent = '';
        }

        // If no website URL, clear output and return
        if (!inputs.websiteUrl) {
            debugLog('No website URL provided');
            updateOutput('');
            updateProgress();
            return;
        }

        // Get the current format preference
        const formatPreference = localStorage.getItem('utm_url_format') || 'auto';

        // Format and validate URL
        const formattedUrl = fixUrlFormat(inputs.websiteUrl, formatPreference);

        // Check if URL is valid
        if (!isValidUrl(formattedUrl)) {
            if (errorElement) {
                const errorTranslationKey = 'errors.invalidUrl';
                errorElement.textContent = window.languageManager ?
                    window.languageManager.translate(errorTranslationKey) :
                    'Please enter a valid URL';
            }
            updateOutput('');
            updateProgress();
            return;
        }

        // Update input with properly formatted URL
        const urlInput = document.querySelector(UTM_CONFIG.form.inputs.websiteUrl);
        if (urlInput && urlInput.value !== formattedUrl) {
            urlInput.value = formattedUrl;
        }

        // Start building UTM URL
        let utmUrl = formattedUrl;

        // Add parameter separator
        utmUrl += utmUrl.includes('?') ? '&' : '?';

        // Add UTM parameters if they exist
        const params = [];

        // Source (required)
        if (inputs.campaignSource) {
            params.push(`utm_source=${encodeParameter(inputs.campaignSource)}`);
            trackUtmParameter(inputs, utmUrl, 'Source', inputs.campaignSource);
        }

        // Medium (required)
        if (inputs.campaignMedium) {
            params.push(`utm_medium=${encodeParameter(inputs.campaignMedium)}`);
            trackUtmParameter(inputs, utmUrl, 'Medium', inputs.campaignMedium);
        }

        // Campaign Name (optional)
        if (inputs.campaignName) {
            params.push(`utm_campaign=${encodeParameter(inputs.campaignName)}`);
            trackUtmParameter(inputs, utmUrl, 'Campaign', inputs.campaignName);
        }

        // Campaign ID (optional)
        if (inputs.campaignId) {
            params.push(`utm_id=${encodeParameter(inputs.campaignId)}`);
            trackUtmParameter(inputs, utmUrl, 'Campaign ID', inputs.campaignId);
        }

        // Term (optional)
        if (inputs.campaignTerm) {
            params.push(`utm_term=${encodeParameter(inputs.campaignTerm)}`);
            trackUtmParameter(inputs, utmUrl, 'Term', inputs.campaignTerm);
        }

        // Content (optional)
        if (inputs.campaignContent) {
            params.push(`utm_content=${encodeParameter(inputs.campaignContent)}`);
            trackUtmParameter(inputs, utmUrl, 'Content', inputs.campaignContent);
        }

        // If there are parameters, build the URL
        if (params.length > 0) {
            utmUrl += params.join('&');
        } else {
            // If no parameters, just return the formatted URL without ?
            utmUrl = formattedUrl;
        }

        debugLog('Generated URL', utmUrl);
        updateOutput(utmUrl);
        updateProgress();

        // Track UTM generation in Mixpanel
        trackUtmGeneration(inputs, utmUrl);
    }

    // Function to show URL format options and register event listeners
    function showUrlFormatOptions() {
        // Set HTTPS as the default format if none is saved
        if (!localStorage.getItem('utm_url_format')) {
            localStorage.setItem('utm_url_format', 'https');
        }

        // Register a delegated event listener for format buttons
        document.addEventListener('click', function (event) {
            const formatButton = event.target.closest('[data-utm-format]');
            if (!formatButton) return;

            // Get all format buttons
            const formatButtons = document.querySelectorAll('[data-utm-format]');

            // Remove active class from all buttons
            formatButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            formatButton.classList.add('active');

            // Get the format value from data attribute
            const format = formatButton.getAttribute('data-utm-format');

            // Save the selected format to localStorage
            localStorage.setItem('utm_url_format', format);

            // Get the current website URL
            const websiteUrl = document.querySelector('[data-utm-input="website-url"]').value;

            // Apply the format to the URL if a URL exists
            if (websiteUrl) {
                // Apply the selected format
                const formattedUrl = fixUrlFormat(websiteUrl, format);

                // Update the URL input with the formatted URL
                document.querySelector('[data-utm-input="website-url"]').value = formattedUrl;

                // Regenerate the UTM URL with the new format
                generateUTMUrl();
            }
        });

        // Set the initial active button based on saved preference or default to https
        const savedFormat = localStorage.getItem('utm_url_format') || 'https';
        const savedFormatButton = document.querySelector(`[data-utm-format="${savedFormat}"]`);

        if (savedFormatButton) {
            const formatButtons = document.querySelectorAll('[data-utm-format]');
            formatButtons.forEach(btn => btn.classList.remove('active'));
            savedFormatButton.classList.add('active');
        }
    }

    function updateOutput(url) {
        const output = document.querySelector(UTM_CONFIG.form.output);
        if (output) {
            output.value = url;
            adjustTextareaHeight(output);
        }
    }

    function adjustTextareaHeight(textarea) {
        if (!textarea) return;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    // Function to check if required fields are filled
    function validateRequiredFields() {
        const requiredFields = [
            UTM_CONFIG.form.inputs.websiteUrl,
            UTM_CONFIG.form.inputs.campaignSource,
            UTM_CONFIG.form.inputs.campaignMedium
        ];

        const missingFields = requiredFields.filter(selector => {
            const input = document.querySelector(selector);
            return !input || input.value.trim() === '';
        });

        return {
            valid: missingFields.length === 0,
            missingFields
        };
    }

    // Event delegation for all actions
    document.addEventListener('click', (e) => {
        const action = e.target.closest('[data-utm-action]');
        if (!action) return;

        const actionType = action.getAttribute('data-utm-action');
        const url = action.getAttribute('data-url');

        debugLog('Action clicked', { actionType, url });

        switch (actionType) {
            case 'copy':
                if (url) {
                    navigator.clipboard.writeText(decodeURIComponent(url))
                        .then(() => {
                            debugLog('URL copied from history', decodeURIComponent(url));
                            action.textContent = utmLanguageManager.translate('general.copied');
                            setTimeout(() => {
                                action.textContent = utmLanguageManager.translate('general.copy');
                            }, 2000);
                        })
                        .catch(err => {
                            debugLog('Error copying URL', err);
                        });
                } else {
                    const output = document.querySelector(UTM_CONFIG.form.output);
                    if (output && output.value) {
                        navigator.clipboard.writeText(output.value)
                            .then(() => {
                                debugLog('Current URL copied', output.value);
                                const title = document.querySelector(UTM_CONFIG.form.inputs.campaignName)
                                    .value ||
                                    document.querySelector(UTM_CONFIG.form.inputs.websiteUrl).value;
                                if (output.value) {
                                    addToHistory(output.value, title);

                                    // Get form values for tracking
                                    const inputs = {};
                                    Object.keys(UTM_CONFIG.form.inputs).forEach(key => {
                                        const inputSelector = UTM_CONFIG.form.inputs[key];
                                        const inputElement = document.querySelector(inputSelector);
                                        if (inputElement) {
                                            inputs[key] = inputElement.value.trim();
                                        }
                                    });

                                    // Track URL copy action
                                    trackUrlCopy(inputs, output.value);
                                }
                                action.textContent = utmLanguageManager.translate('general.copied');
                                setTimeout(() => {
                                    action.textContent = utmLanguageManager.translate('general.copy');
                                }, 2000);
                            })
                            .catch(err => {
                                debugLog('Error copying URL', err);
                            });
                    }
                }
                break;
            case 'apply':
                if (url) {
                    applyUrlToForm(decodeURIComponent(url));
                    debugLog('URL applied to form', url);
                }
                break;
            case 'delete':
                if (url) {
                    deleteFromHistory(decodeURIComponent(url));
                    debugLog('URL deleted from history', url);
                }
                break;
            case 'clear-session':
                clearCurrentSession();
                debugLog('Session cleared');
                break;
            case 'clear-history':
                if (confirm(utmLanguageManager.translate('general.confirmClearHistory'))) {
                    clearHistory();
                    debugLog('History cleared by user');

                    // Verify the history was actually cleared
                    if (getHistory().length > 0) {
                        debugLog('WARNING: History not properly cleared, forcing clear');
                        localStorage.setItem(UTM_CONFIG.history.storageKey, '[]');
                        renderHistory();
                    }
                }
                break;
            case 'paste-url':
                navigator.clipboard.readText()
                    .then(text => {
                        const websiteUrlInput = document.querySelector(UTM_CONFIG.form.inputs.websiteUrl);
                        if (websiteUrlInput) {
                            websiteUrlInput.value = text.trim();
                            // Manually trigger input event
                            websiteUrlInput.dispatchEvent(new Event('input'));
                            // Explicitly call generate function to ensure progress updates
                            generateUTMUrl();
                        }
                    })
                    .catch(err => {
                        console.error('Failed to read clipboard:', err);
                    });
                break;
            case 'select-all':
                const checkboxes = document.querySelectorAll('.history-select');
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                checkboxes.forEach(cb => cb.checked = !allChecked);
                break;
            case 'copy-table':
                copyTableToClipboard();
                break;
            case 'create-sheet':
                createGoogleSheet();
                break;
            case 'close-export-modal':
                document.getElementById('exportModal')?.classList.add('hidden');
                break;
            case 'confirm-export':
                const selectedFields = Array.from(document.querySelectorAll('input[name="export-field"]:checked'))
                    .map(cb => cb.value);
                const selectedItems = getSelectedHistoryItems();
                const tableData = formatAsTable(selectedItems, selectedFields);

                navigator.clipboard.writeText(tableData)
                    .then(() => {
                        document.getElementById('exportModal')?.classList.add('hidden');
                        alert(utmLanguageManager.translate('export.copied') || 'Table copied to clipboard');
                    })
                    .catch(err => {
                        console.error('Failed to copy table:', err);
                        alert(utmLanguageManager.translate('export.copyError') || 'Failed to copy table');
                    });
                break;
        }
    });

    // Form input event listeners
    document.addEventListener('input', (e) => {
        const input = e.target.closest('[data-utm-input]');
        if (input) {
            debugLog('Input changed', {
                input: input.getAttribute('data-utm-input'),
                value: input.value
            });
            generateUTMUrl();

            // Explicitly call updateProgress to ensure UI is always in sync
            updateProgress();
        }
    });

    // Update progress bar
    function updateProgress() {
        // Count filled fields
        const requiredFields = ['websiteUrl', 'campaignSource', 'campaignMedium'];
        const optionalFields = ['campaignId', 'campaignName', 'campaignTerm', 'campaignContent'];

        const filledRequired = requiredFields.filter(field => {
            const input = document.querySelector(UTM_CONFIG.form.inputs[field]);
            return input && input.value.trim() !== '';
        }).length;

        const filledOptional = optionalFields.filter(field => {
            const input = document.querySelector(UTM_CONFIG.form.inputs[field]);
            return input && input.value.trim() !== '';
        }).length;

        debugLog('Progress updated', { filledRequired, filledOptional });

        // Update progress UI
        const progressContainer = document.querySelector('[data-utm-progress]');
        if (progressContainer) {
            const requiredPercentage = (filledRequired / requiredFields.length) * 100;
            const optionalPercentage = optionalFields.length ? (filledOptional / optionalFields
                .length) * 100 : 0;

            if (UTM_CONFIG.progress.style === 'circles') {
                progressContainer.innerHTML = `
                      <div class="progress-sections">
                          <div class="progress-section required">
                              <div class="progress-label">
                                  <span class="required-label">${utmLanguageManager.translate('general.requiredProgress') || 'Required'}</span>
                                  ${UTM_CONFIG.progress.showNumbers ? `<span class="progress-numbers">${filledRequired}/${requiredFields.length}</span>` : ''}
                                  ${UTM_CONFIG.progress.showPercentages ? `<span class="progress-percentage">(${Math.round(requiredPercentage)}%)</span>` : ''}
    </div>
                              <div class="progress-circles">
                                  ${Array(requiredFields.length).fill().map((_, i) =>
                    `<div class="progress-circle ${i < filledRequired ? 'filled' : ''}"></div>`
                ).join('')}
    </div>
    </div>
                          <div class="progress-section optional">
                              <div class="progress-label">
                                  <span class="optional-label">${utmLanguageManager.translate('general.optionalProgress') || 'Optional'}</span>
                                  ${UTM_CONFIG.progress.showNumbers ? `<span class="progress-numbers">${filledOptional}/${optionalFields.length}</span>` : ''}
                                  ${UTM_CONFIG.progress.showPercentages ? `<span class="progress-percentage">(${Math.round(optionalPercentage)}%)</span>` : ''}
    </div>
                              <div class="progress-circles">
                                  ${Array(optionalFields.length).fill().map((_, i) =>
                    `<div class="progress-circle ${i < filledOptional ? 'filled' : ''}"></div>`
                ).join('')}
    </div>
    </div>
    </div>
                  `;
            } else {
                // Original bars style
                progressContainer.innerHTML = `
                      <div class="progress-label">
                          <span class="required-label">${utmLanguageManager.translate('general.requiredProgress') || 'Required'}</span>
                          ${UTM_CONFIG.progress.showNumbers ? `<span class="progress-numbers">${filledRequired}/${requiredFields.length}</span>` : ''}
                          ${UTM_CONFIG.progress.showPercentages ? `<span class="progress-percentage">(${Math.round(requiredPercentage)}%)</span>` : ''}
                          <span class="optional-label">${utmLanguageManager.translate('general.optionalProgress') || 'Optional'}</span>
                          ${UTM_CONFIG.progress.showNumbers ? `<span class="progress-numbers">${filledOptional}/${optionalFields.length}</span>` : ''}
                          ${UTM_CONFIG.progress.showPercentages ? `<span class="progress-percentage">(${Math.round(optionalPercentage)}%)</span>` : ''}
    </div>
                      <div class="progress-bars">
                          <div class="progress-bar required" style="width: ${requiredPercentage}%"></div>
                          <div class="progress-bar optional" style="width: ${optionalPercentage}%"></div>
    </div>
                  `;
            }
        }
    }

    // Function to create and initialize the language switcher
    function initLanguageSwitcher() {
        const container = document.querySelector('.language-container');
        if (!container) return;

        // Clear existing content
        container.innerHTML = '';

        // Create language switcher
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';

        // Add available languages
        const languages = [
            { code: 'en', name: 'English' },
            { code: 'uk', name: 'Українська' },
            { code: 'pl', name: 'Polski' }
        ];

        // Current language
        const currentLang = utmLanguageManager.getCurrentLanguage();

        languages.forEach(lang => {
            const button = document.createElement('button');
            button.className = `language-button ${lang.code === currentLang ? 'active' : ''}`;
            button.setAttribute('data-language', lang.code);
            button.textContent = lang.name;

            button.addEventListener('click', () => {
                if (lang.code !== utmLanguageManager.getCurrentLanguage()) {
                    // Remove active class from all buttons
                    switcher.querySelectorAll('.language-button').forEach(btn => {
                        btn.classList.remove('active');
                    });

                    // Add active class to clicked button
                    button.classList.add('active');

                    // Change language
                    utmLanguageManager.changeLanguage(lang.code);

                    // Apply translations to the UI
                    applyTranslations();

                    // Also update tour translations if tour.js has exposed the function
                    if (typeof window.updateAllTourTranslations === 'function') {
                        window.updateAllTourTranslations();
                    }
                }
            });

            switcher.appendChild(button);
        });

        container.appendChild(switcher);
    }

    // Function to apply translations to the UI
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = utmLanguageManager.translate(key);

            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    // For input elements, update placeholder
                    element.setAttribute('placeholder', translation);
                } else {
                    // For other elements, update text content
                    element.textContent = translation;
                }
            }
        });

        // Also update placeholders for i18n-placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = utmLanguageManager.translate(key);

            if (translation && element.tagName === 'INPUT') {
                element.setAttribute('placeholder', translation);
            }
        });

        // Update document title
        document.title = utmLanguageManager.translate('general.title');
    }

    // Make sure to add updateAllTourTranslations to the window object
    window.updateAllTourTranslations = function () {
        if (typeof window.updateTourTranslations === 'function') {
            window.updateTourTranslations();
        }
    };

    // Initial setup
    console.log('UTM Generator v1.3.3 initialized');

    // Initialize language switcher
    initLanguageSwitcher();

    // Apply initial translations
    applyTranslations();

    // Set up tour integration
    setupTourIntegration();

    // Add event listener for language changes
    utmLanguageManager.onLanguageChange(() => {
        // Update UI translations
        applyTranslations();

        // Update tour translations if available
        if (typeof window.updateAllTourTranslations === 'function') {
            window.updateAllTourTranslations();
        }
    });

    // Other initializations
    initTooltips();
    setupHintButtons();
    updateProgress();
    renderHistory();

    // Log initialization completion
    debugLog('Initialization complete');
});

// Setup tour integration
function setupTourIntegration() {
    if (typeof window.setupLanguageChangeListener === 'function') {
        window.setupLanguageChangeListener();
    }

    if (typeof window.updateTutorialModalTranslations === 'function') {
        window.updateTutorialModalTranslations();
    }
}

/**
 * UTM Generator - Tour Functionality
 * Version: 1.3.0
 * Last Updated: ${new Date().toISOString().split('T')[0]}
 */

// Initialize tour functionality
function initTour() {
    // Check if Driver.js is loaded
    if (typeof window.Driver === 'undefined') {
        console.warn('Driver.js is not loaded yet. Will retry when script loads.');
        return null;
    }

    try {
        // Create driver.js instance with v0.9.8 API
        const driverObj = new window.Driver({
            animate: true,
            opacity: 0.8,
            padding: 5,
            allowClose: true,
            overlayClickNext: false,
            doneBtnText: '✓',
            closeBtnText: '×',
            nextBtnText: '→',
            prevBtnText: '←',
            showButtons: true,
            onReset: () => {
                console.log('Tour was reset or closed');
            }
        });

        function getSteps() {
            // Define all potential steps
            const allSteps = [
                {
                    element: '[data-utm-input="website-url"]',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.websiteUrl.title'),
                        description: utmLanguageManager.translate('tour.steps.websiteUrl.description'),
                        position: 'bottom'
                    }
                },
                {
                    element: '.language-switcher',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.languageSwitcher.title'),
                        description: utmLanguageManager.translate('tour.steps.languageSwitcher.description'),
                        position: 'bottom'
                    }
                },
                {
                    element: '[data-utm-input="campaign-source"]',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.campaignSource.title'),
                        description: utmLanguageManager.translate('tour.steps.campaignSource.description'),
                        position: 'bottom'
                    }
                },
                {
                    element: '[data-utm-input="campaign-medium"]',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.campaignMedium.title'),
                        description: utmLanguageManager.translate('tour.steps.campaignMedium.description'),
                        position: 'bottom'
                    }
                },
                {
                    element: '.input-hints',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.hints.title'),
                        description: utmLanguageManager.translate('tour.steps.hints.description'),
                        position: 'top'
                    }
                },
                {
                    element: '[data-utm-output]',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.output.title'),
                        description: utmLanguageManager.translate('tour.steps.output.description'),
                        position: 'top'
                    }
                },
                {
                    element: '[data-utm-list="history"]',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.history.title'),
                        description: utmLanguageManager.translate('tour.steps.history.description'),
                        position: 'top'
                    }
                },
                {
                    element: '.table-export-section',
                    popover: {
                        title: utmLanguageManager.translate('tour.steps.export.title'),
                        description: utmLanguageManager.translate('tour.steps.export.description'),
                        position: 'top'
                    }
                }
            ];

            // Filter out steps where the element doesn't exist in the DOM
            return allSteps.filter(step => {
                const element = document.querySelector(step.element);
                return element !== null;
            });
        }

        return {
            driver: driverObj,
            drive: () => {
                try {
                    const steps = getSteps();
                    if (steps.length === 0) {
                        console.warn('No valid elements found for the tour. Tour cannot start.');
                        return;
                    }
                    driverObj.setSteps(steps);
                    driverObj.start();
                } catch (error) {
                    console.error('Error starting tour:', error);
                    // Fallback for older Driver.js versions
                    try {
                        driverObj.reset();
                        getSteps().forEach(step => {
                            const element = document.querySelector(step.element);
                            if (element) {
                                driverObj.highlight(element);
                            }
                        });
                    } catch (fallbackError) {
                        console.error('Fallback tour also failed:', fallbackError);
                    }
                }
            },
            updateSteps: () => {
                try {
                    const steps = getSteps();
                    driverObj.setSteps(steps);
                } catch (error) {
                    console.error('Error updating tour steps:', error);
                }
            }
        };
    } catch (error) {
        console.error('Error initializing tour:', error);
        return null;
    }
}
