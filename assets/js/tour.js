// Define step configuration for the tour
const tourSteps = [
    {
        element: '#websiteUrl',
        popover: {
            titleKey: 'tour.steps.websiteUrl.title',
            descriptionKey: 'tour.steps.websiteUrl.description',
            position: 'bottom',
            showButtons: ['close', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '.input-hints',
        popover: {
            titleKey: 'tour.steps.hints.title',
            descriptionKey: 'tour.steps.hints.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '.url-format-options',
        popover: {
            titleKey: 'tour.steps.urlFormat.title',
            descriptionKey: 'tour.steps.urlFormat.description',
            position: 'bottom',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#campaignSource',
        popover: {
            titleKey: 'tour.steps.campaignSource.title',
            descriptionKey: 'tour.steps.campaignSource.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-hint-for="campaign-source"]',
        popover: {
            titleKey: 'tour.steps.sourceHints.title',
            descriptionKey: 'tour.steps.sourceHints.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#campaignMedium',
        popover: {
            titleKey: 'tour.steps.campaignMedium.title',
            descriptionKey: 'tour.steps.campaignMedium.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#campaignName',
        popover: {
            titleKey: 'tour.steps.campaignName.title',
            descriptionKey: 'tour.steps.campaignName.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#campaignTerm',
        popover: {
            titleKey: 'tour.steps.campaignTerm.title',
            descriptionKey: 'tour.steps.campaignTerm.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#campaignContent',
        popover: {
            titleKey: 'tour.steps.campaignContent.title',
            descriptionKey: 'tour.steps.campaignContent.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-output]',
        popover: {
            titleKey: 'tour.steps.output.title',
            descriptionKey: 'tour.steps.output.description',
            position: 'top',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-action="copy"]',
        popover: {
            titleKey: 'tour.steps.copy.title',
            descriptionKey: 'tour.steps.copy.description',
            position: 'right',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-container="history"]',
        popover: {
            titleKey: 'tour.steps.history.title',
            descriptionKey: 'tour.steps.history.description',
            position: 'top',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-action="select-all"]',
        popover: {
            titleKey: 'tour.steps.selectAll.title',
            descriptionKey: 'tour.steps.selectAll.description',
            position: 'left',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-action="copy-table"]',
        popover: {
            titleKey: 'tour.steps.copyTable.title',
            descriptionKey: 'tour.steps.copyTable.description',
            position: 'left',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '[data-utm-action="create-sheet"]',
        popover: {
            titleKey: 'tour.steps.createSheet.title',
            descriptionKey: 'tour.steps.createSheet.description',
            position: 'left',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '#tourButton',
        popover: {
            titleKey: 'tour.steps.tourButton.title',
            descriptionKey: 'tour.steps.tourButton.description',
            position: 'left',
            showButtons: ['close', 'previous'],
            closeBtnText: 'Finish Tour'
        }
    }
];

// Initialize driver instance
let driverObj = null;
let currentLanguage = 'en'; // Default language

// Function to translate tour steps based on the current language
function translateTourSteps() {
    // Check if we have the utmLanguageManager available (from main.js)
    if (typeof window.utmLanguageManager === 'undefined') {
        console.warn('UTM Language Manager not found, using default English texts');
        return tourSteps;
    }

    // Get the current language from the language manager
    const newLanguage = window.utmLanguageManager.getCurrentLanguage();

    // Only update if language has changed
    if (newLanguage === currentLanguage && driverObj) {
        return;
    }

    currentLanguage = newLanguage;
    console.log(`Updating tour steps to language: ${currentLanguage}`);

    // Create translated steps by applying translations to the keys
    const translatedSteps = tourSteps.map(step => {
        // Create a new step object to avoid modifying the original
        const newStep = { ...step };

        // Create a new popover object
        newStep.popover = { ...step.popover };

        // Apply translations if keys exist
        if (step.popover.titleKey) {
            newStep.popover.title = window.utmLanguageManager.translate(step.popover.titleKey);
        }

        if (step.popover.descriptionKey) {
            newStep.popover.description = window.utmLanguageManager.translate(step.popover.descriptionKey);
        }

        // Translate button texts
        newStep.popover.closeBtnText = window.utmLanguageManager.translate('tour.buttons.close');

        return newStep;
    });

    // If we have an active driver instance, update its steps
    if (driverObj) {
        try {
            driverObj.setSteps(translatedSteps);
        } catch (error) {
            console.error('Error updating tour steps with translations:', error);
        }
    }

    return translatedSteps;
}

// Register a callback for language changes
function setupLanguageChangeListener() {
    // Check if we have the utmLanguageManager available
    if (typeof window.utmLanguageManager !== 'undefined' &&
        typeof window.utmLanguageManager.onLanguageChange === 'function') {
        window.utmLanguageManager.onLanguageChange(function (newLang) {
            console.log(`Language changed to ${newLang}, updating tour`);
            translateTourSteps();
        });
    }
}

// Get the driver function from the window object
function getDriverFunction() {
    // According to documentation for CDN:
    // "If you are using the CDN, you will have to use the package from the window object"
    if (typeof window.driver !== 'undefined' && typeof window.driver.driver === 'function') {
        return window.driver.driver;
    } else if (typeof window.driver?.js?.driver === 'function') {
        // For older or alternative versions
        return window.driver.js.driver;
    } else if (typeof window.driver === 'function') {
        // Direct function export
        return window.driver;
    } else {
        console.error('Driver.js not properly loaded in window object');
        return null;
    }
}

// Main function to create the tour with proper configuration
function createTourInstance() {
    // Get the driver function
    const driverFunction = getDriverFunction();

    // Make sure Driver.js is loaded
    if (!driverFunction) {
        console.error('Driver.js function not found. Make sure it is properly loaded.');
        return null;
    }

    try {
        // Get translated steps
        const translatedSteps = translateTourSteps();

        // Create a fresh instance using the driver() constructor
        driverObj = driverFunction({
            animate: true,                    // Whether to animate or not
            showProgress: true,               // Show progress bar
            showButtons: ['next', 'previous', 'close'], // Show all buttons
            closeBtnText: 'Close Tour',       // Text for close button
            nextBtnText: 'Next',              // Text for next button
            prevBtnText: 'Previous',          // Text for previous button
            doneBtnText: 'Done',              // Text for done button
            steps: translatedSteps,           // Steps to show
            allowClose: true,                 // Allow closing by clicking overlay
            overlayClickNext: false,          // Don't move to next step when clicking overlay
            stagePadding: 10,                 // Padding around highlighted element
            stageRadius: 5,                   // Border radius of highlighted area
            onReset: () => {
                // Callback when tour is reset
                console.log('Tour reset');
            },
            onNext: () => {
                // Callback when next button is clicked
                console.log('Next step');
            },
            onPrevious: () => {
                // Callback when previous button is clicked
                console.log('Previous step');
            },
            onClose: () => {
                // Callback when close button is clicked
                console.log('Close button clicked');
                closeTour();
            },
            onDestroyStarted: () => {
                // Callback when tour is being destroyed
                console.log('Tour being destroyed');
            },
            onDestroyed: () => {
                // Callback when tour is destroyed
                console.log('Tour destroyed');
                showTourButton();
            },
            onHighlightStarted: (element) => {
                // Callback when element is being highlighted
                console.log('Highlighting element:', element);
            },
            onHighlighted: (element) => {
                // Callback when element is highlighted
                console.log('Element highlighted:', element);
            },
            onDeselected: (element) => {
                // Callback when element is deselected
                console.log('Element deselected:', element);
            }
        });

        return driverObj;
    } catch (error) {
        console.error('Error creating tour instance:', error);
        return null;
    }
}

// Function to close the tour
function closeTour() {
    if (driverObj) {
        try {
            // Remove event listeners first
            document.removeEventListener('keydown', handleEscapeKey);

            // Destroy the tour instance
            driverObj.destroy();
            driverObj = null;

            // Show the tour button
            showTourButton();

            // Mark tour as completed
            localStorage.setItem('tourCompleted', 'true');

            // Re-add the escape key listener for future tours
            document.addEventListener('keydown', handleEscapeKey);
        } catch (error) {
            console.error('Error closing tour:', error);
        }
    }
}

// Function to show the tour button
function showTourButton() {
    const tourButton = document.getElementById('tourButton');
    if (tourButton) {
        tourButton.classList.remove('hidden');
    }
}

// Function to start the tour
function startTour() {
    // Hide the tutorial modal
    const tutorialModal = document.getElementById('tutorial-modal');
    if (tutorialModal) {
        tutorialModal.classList.add('hidden');
    }

    // Hide the tour button
    const tourButton = document.getElementById('tourButton');
    if (tourButton) {
        tourButton.classList.add('hidden');
    }

    // Create and start the tour
    driverObj = createTourInstance();
    if (driverObj) {
        try {
            driverObj.drive();
        } catch (error) {
            console.error('Error starting tour:', error);
        }
    }
}

// Function to handle escape key
function handleEscapeKey(event) {
    if (event.key === 'Escape' && driverObj) {
        closeTour();
    }
}

// Function to start the drive
function startDrive() {
    // Check if tour has been completed before
    const hasSeenTour = localStorage.getItem('tourCompleted');
    if (!hasSeenTour) {
        // Show the tutorial modal
        const tutorialModal = document.getElementById('tutorial-modal');
        if (tutorialModal) {
            tutorialModal.classList.remove('hidden');
        }
    }
}

// Function to load Driver.js
function loadDriverJS(callback) {
    // Check if Driver.js is already loaded
    if (typeof window.driver !== 'undefined') {
        console.log('Driver.js already loaded');
        if (callback) callback();
        return;
    }

    // Load Driver.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js';
    script.onload = function () {
        console.log('Driver.js loaded successfully');
        if (callback) callback();
    };
    script.onerror = function () {
        console.error('Error loading Driver.js');
    };
    document.head.appendChild(script);
}

// Function to check tour status and initialize
function checkTourStatus() {
    // Load Driver.js if not already loaded
    loadDriverJS(() => {
        // Set up event listeners
        document.addEventListener('keydown', handleEscapeKey);

        // Set up tour button click handler
        const tourButton = document.getElementById('tourButton');
        if (tourButton) {
            tourButton.addEventListener('click', startTour);
        }

        // Set up tutorial modal buttons
        const startTourButton = document.getElementById('startTour');
        const declineTourButton = document.getElementById('declineTour');

        if (startTourButton) {
            startTourButton.addEventListener('click', startTour);
        }

        if (declineTourButton) {
            declineTourButton.addEventListener('click', () => {
                const tutorialModal = document.getElementById('tutorial-modal');
                if (tutorialModal) {
                    tutorialModal.classList.add('hidden');
                }
                // Mark tour as completed even if declined
                localStorage.setItem('tourCompleted', 'true');
            });
        }

        // Set up language change listener
        setupLanguageChangeListener();

        // Start the drive
        startDrive();
    });
}

// Function to update tutorial modal translations
function updateTutorialModalTranslations() {
    if (typeof window.utmLanguageManager === 'undefined') return;

    const elements = {
        'tutorial-modal h3': 'tour.modal.title',
        'tutorial-modal p': 'tour.modal.description',
        '#startTour': 'tour.modal.startTour',
        '#declineTour': 'tour.modal.skipTour'
    };

    for (const [selector, key] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = window.utmLanguageManager.translate(key);
        }
    }
}

// Function to update all tour translations
function updateAllTourTranslations() {
    updateTutorialModalTranslations();
    translateTourSteps();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', checkTourStatus);
window.updateAllTourTranslations = updateAllTourTranslations; 