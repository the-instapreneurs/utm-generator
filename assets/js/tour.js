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
        element: '[data-utm-format="https"]',
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
        element: '.history-section',
        popover: {
            titleKey: 'tour.steps.history.title',
            descriptionKey: 'tour.steps.history.description',
            position: 'top',
            showButtons: ['close', 'previous', 'next'],
            closeBtnText: 'Close Tour'
        }
    },
    {
        element: '.table-export-section',
        popover: {
            titleKey: 'tour.steps.export.title',
            descriptionKey: 'tour.steps.export.description',
            position: 'top',
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
            overlayOpacity: 0.75,             // Background opacity (0 means only popovers and without overlay)
            stagePadding: 10,                 // Distance of element from around the edges
            allowClose: true,                 // Whether clicking on overlay should close or not
            overlayClickNext: false,          // Whether clicking on overlay should move next
            doneBtnText: window.utmLanguageManager?.translate('tour.buttons.done') || 'Done',              // Text on the final button
            closeBtnText: window.utmLanguageManager?.translate('tour.buttons.close') || 'Close',            // Text on the close button
            nextBtnText: window.utmLanguageManager?.translate('tour.buttons.next') || 'Next',              // Next button text
            prevBtnText: window.utmLanguageManager?.translate('tour.buttons.previous') || 'Previous',          // Previous button text
            showButtons: ['close', 'next', 'previous'], // Which buttons to show (adding close as first for visibility)
            keyboardControl: true,            // Allow controlling through keyboard (escape to close, arrow keys to move)
            scrollIntoViewOptions: { behavior: 'smooth', block: 'center' },
            onHighlightStarted: (element) => {
                console.log('Element highlight started', element);
            },
            onHighlighted: (element) => {
                console.log('Element highlighted', element);
            },
            onDeselected: (element) => {
                console.log('Element deselected', element);
            },
            onDestroyed: () => {
                console.log('Tour destroyed/completed');
                localStorage.setItem('tourCompleted', 'true');
                showTourButton();
            },
            onDestroyStarted: () => {
                console.log('Tour destruction started');
            },
            onCloseClick: () => {
                console.log('Close button clicked, destroying tour');
                if (driverObj) {
                    try {
                        driverObj.destroy();
                    } catch (e) {
                        console.error('Error destroying tour on close:', e);
                    }
                }
                showTourButton();
            },
            steps: translatedSteps,          // Use the translated steps
            showProgress: true,               // Show progress bar
            progressText: '{{current}} of {{total}}', // Progress text format
            stagePadding: 10,                 // Padding around the highlighted element
            stageRadius: 5                    // Border radius of the highlighted area
        });

        return driverObj;
    } catch (error) {
        console.error('Error creating tour:', error);
        return null;
    }
}

// Add an explicit function to close the tour manually
function closeTour() {
    console.log('Manually closing tour');
    if (driverObj) {
        try {
            driverObj.destroy();
            driverObj = null;
            // Remove any event listeners
            document.removeEventListener('keydown', handleEscapeKey);
            // Show the tour button
            showTourButton();
            // Flag tour as completed in local storage
            localStorage.setItem('tourCompleted', 'true');
        } catch (error) {
            console.warn('Error manually closing tour:', error);
        }
    }
}

// Helper to show tour button and hide close button
function showTourButton() {
    const tourButton = document.getElementById('tourButton');
    const tourCloseButton = document.getElementById('tourCloseButton');

    if (tourButton) {
        tourButton.classList.remove('hidden');
    }

    if (tourCloseButton) {
        tourCloseButton.classList.add('hidden');
    }
}

// Helper to hide tour button and show close button
function showCloseButton() {
    const tourButton = document.getElementById('tourButton');
    const tourCloseButton = document.getElementById('tourCloseButton');

    if (tourButton) {
        tourButton.classList.add('hidden');
    }

    if (tourCloseButton) {
        tourCloseButton.classList.remove('hidden');
    }
}

// Start the tour
function startTour() {
    console.log('Starting tour...');

    // If we have a previous instance, destroy it
    if (driverObj) {
        try {
            driverObj.destroy();
            driverObj = null;
            // Remove any existing event listeners
            document.removeEventListener('keydown', handleEscapeKey);
        } catch (error) {
            console.warn('Error destroying previous tour:', error);
        }
    }

    // Create a new tour instance
    driverObj = createTourInstance();

    if (!driverObj) {
        console.error('Failed to create tour instance');
        // Try to load Driver.js and retry
        loadDriverJS(() => {
            driverObj = createTourInstance();
            if (driverObj) {
                startDrive();
            }
        });
        return;
    }

    // Show the close button and hide the tour button
    showCloseButton();

    startDrive();

    // Add a keyboard event listener for Escape key
    document.addEventListener('keydown', handleEscapeKey);
}

// Handle Escape key press to close tour
function handleEscapeKey(event) {
    if (event.key === 'Escape' && driverObj) {
        console.log('Escape key pressed, closing tour');
        try {
            driverObj.destroy();
            driverObj = null;
        } catch (error) {
            console.warn('Error destroying tour on escape key:', error);
        }
        // Remove the event listener when tour is closed
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Helper function to start the actual tour
function startDrive() {
    try {
        // Make sure the tour button is visible
        showTourButton();

        // Start the tour (per documentation)
        console.log('Driving the tour...');
        driverObj.drive();
    } catch (error) {
        console.error('Error starting tour:', error);
        // Try a simpler approach as fallback
        try {
            console.log('Attempting fallback highlight approach...');
            const firstStep = tourSteps[0];
            driverObj.highlight({
                element: firstStep.element,
                popover: firstStep.popover
            });
        } catch (fallbackError) {
            console.error('All tour methods failed:', fallbackError);
        }
    }
}

// Load Driver.js dynamically if needed
function loadDriverJS(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js';
    script.async = true;
    script.onload = function () {
        console.log('Driver.js loaded dynamically');
        if (callback && typeof callback === 'function') {
            callback();
        }
    };
    document.head.appendChild(script);

    // Also load the CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css';
    document.head.appendChild(link);
}

// Check if tour has been completed
function checkTourStatus() {
    const tourCompleted = localStorage.getItem('tourCompleted');

    // Always make sure the tour button is visible for future access
    showTourButton();

    // Only show the tutorial modal on first visit
    if (!tourCompleted) {
        // Show tutorial modal first
        const tutorialModal = document.getElementById('tutorial-modal');
        if (tutorialModal) {
            tutorialModal.classList.remove('hidden');
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Setting up tour functionality');

    // Set up language change listener
    setupLanguageChangeListener();

    // Check if this is the first visit
    checkTourStatus();

    // Add event listener for the tour button
    const tourButton = document.getElementById('tourButton');
    if (tourButton) {
        tourButton.addEventListener('click', (e) => {
            e.preventDefault();
            startTour();
        });
        console.log('Tour button event listener attached');
    } else {
        console.warn('Tour button not found in the DOM');
    }

    // Add event listener for the tour close button
    const tourCloseButton = document.getElementById('tourCloseButton');
    if (tourCloseButton) {
        tourCloseButton.addEventListener('click', (e) => {
            e.preventDefault();
            closeTour();
        });
        console.log('Tour close button event listener attached');
    } else {
        console.warn('Tour close button not found in the DOM');
    }

    // Add event listeners for tutorial modal buttons
    const startTourBtn = document.getElementById('startTour');
    if (startTourBtn) {
        startTourBtn.addEventListener('click', () => {
            const tutorialModal = document.getElementById('tutorial-modal');
            if (tutorialModal) {
                tutorialModal.classList.add('hidden');
            }
            startTour();
        });
        console.log('Start tour button event listener attached');
    } else {
        console.warn('Start tour button not found in the DOM');
    }

    const declineTourBtn = document.getElementById('declineTour');
    if (declineTourBtn) {
        declineTourBtn.addEventListener('click', () => {
            const tutorialModal = document.getElementById('tutorial-modal');
            if (tutorialModal) {
                tutorialModal.classList.add('hidden');
            }
            // Mark as completed so it doesn't show again
            localStorage.setItem('tourCompleted', 'true');
        });
        console.log('Decline tour button event listener attached');
    } else {
        console.warn('Decline tour button not found in the DOM');
    }

    // If user arrives with no tour completion status, show the tutorial modal
    if (!localStorage.getItem('tourCompleted')) {
        console.log('First visit detected, showing tutorial modal');
    }

    // Update tutorial modal text with translations if language manager is available
    updateTutorialModalTranslations();
});

// Function to update the tutorial modal text with translations
function updateTutorialModalTranslations() {
    if (typeof window.utmLanguageManager === 'undefined') {
        return;
    }

    // Get elements
    const tutorialModal = document.getElementById('tutorial-modal');
    if (!tutorialModal) return;

    const title = tutorialModal.querySelector('h3');
    const description = tutorialModal.querySelector('p');
    const startBtn = document.getElementById('startTour');
    const declineBtn = document.getElementById('declineTour');

    // Update texts if elements exist
    if (title) {
        title.textContent = window.utmLanguageManager.translate('tour.tutorial.title');
    }

    if (description) {
        description.textContent = window.utmLanguageManager.translate('tour.tutorial.description');
    }

    if (startBtn) {
        startBtn.textContent = window.utmLanguageManager.translate('tour.tutorial.startTour');
    }

    if (declineBtn) {
        declineBtn.textContent = window.utmLanguageManager.translate('tour.tutorial.declineTour');
    }
}

// Add this function to update translations when language changes
function updateAllTourTranslations() {
    // Update the tutorial modal
    updateTutorialModalTranslations();

    // Update the tour steps if we have an active instance
    translateTourSteps();
}

// Make functions available globally
window.updateTourTranslations = translateTourSteps;
window.updateTutorialModalTranslations = updateTutorialModalTranslations;
window.setupLanguageChangeListener = setupLanguageChangeListener;
window.updateAllTourTranslations = updateAllTourTranslations; 