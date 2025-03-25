/**
 * UTM Generator - Core Functionality
 * Version: 1.3.3
 * Last Updated: ${new Date().toISOString().split('T')[0]}
 */

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
                // Use the translation key as the tooltip content
                trigger.setAttribute('data-tooltip-content', translationKey);
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
                content: params.get('utm_content')
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

            // Generate new URL
            generateUTMUrl();
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

        if (history.length === 0) {
            historyList.innerHTML =
                `<div class="history-item-empty">${utmLanguageManager.translate('general.noHistoryFound')}</div>`;
            return;
        }

        historyList.innerHTML = history.map(item => {
            const timeAgo = formatTimeAgo(item.timestamp);
            const fullDate = formatFullDate(item.timestamp);

            return `
                  <div class="history-item">
                      <div class="meta-info">
                          <div class="title">${item.title || utmLanguageManager.translate('history.untitled')}</div>
                          <div class="timestamp" data-full-date="${fullDate}">
                              ${timeAgo}
    </div>
    </div>
                      <div class="url">${item.url}</div>
                      <div class="actions">
                          <button data-utm-action="apply" data-url="${encodeURIComponent(item.url)}">${utmLanguageManager.translate('history.apply')}</button>
                          <button data-utm-action="copy" data-url="${encodeURIComponent(item.url)}">${utmLanguageManager.translate('general.copy')}</button>
                          <button data-utm-action="delete" class="main-button is-danger" data-url="${encodeURIComponent(item.url)}">${utmLanguageManager.translate('history.delete')}</button>
    </div>
    </div>
              `;
        }).join('');
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
        }

        // Medium (required)
        if (inputs.campaignMedium) {
            params.push(`utm_medium=${encodeParameter(inputs.campaignMedium)}`);
        }

        // Campaign Name (optional)
        if (inputs.campaignName) {
            params.push(`utm_campaign=${encodeParameter(inputs.campaignName)}`);
        }

        // Campaign ID (optional)
        if (inputs.campaignId) {
            params.push(`utm_id=${encodeParameter(inputs.campaignId)}`);
        }

        // Term (optional)
        if (inputs.campaignTerm) {
            params.push(`utm_term=${encodeParameter(inputs.campaignTerm)}`);
        }

        // Content (optional)
        if (inputs.campaignContent) {
            params.push(`utm_content=${encodeParameter(inputs.campaignContent)}`);
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
    }

    // Function to show URL format options and register event listeners
    function showUrlFormatOptions() {
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

        // Set the initial active button based on saved preference or default to auto
        const savedFormat = localStorage.getItem('utm_url_format') || 'auto';
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
                        // Validate required fields before copying
                        const validation = validateRequiredFields();
                        if (!validation.valid) {
                            debugLog('Cannot copy - missing required fields', validation.missingFields);
                            const errorElement = document.querySelector(UTM_CONFIG.form.error);
                            if (errorElement) {
                                errorElement.textContent = utmLanguageManager.translate(
                                    'errors.requiredFieldsMissing');
                                setTimeout(() => {
                                    errorElement.textContent = '';
                                }, 3000);
                            }
                            return;
                        }

                        e.preventDefault(); // Prevent any form submission that might be happening

                        navigator.clipboard.writeText(output.value)
                            .then(() => {
                                debugLog('Current URL copied', output.value);
                                const title = document.querySelector(UTM_CONFIG.form.inputs.campaignName)
                                    .value ||
                                    document.querySelector(UTM_CONFIG.form.inputs.websiteUrl).value;
                                if (output.value) {
                                    addToHistory(output.value, title);
                                    debugLog('Form state after copy - keeping inputs', {
                                        websiteUrl: document.querySelector(UTM_CONFIG.form.inputs
                                            .websiteUrl).value,
                                        campaignSource: document.querySelector(UTM_CONFIG.form.inputs
                                            .campaignSource).value,
                                        campaignMedium: document.querySelector(UTM_CONFIG.form.inputs
                                            .campaignMedium).value
                                    });
                                }
                                action.textContent = utmLanguageManager.translate('general.copied');
                                setTimeout(() => {
                                    action.textContent = utmLanguageManager.translate('general.copy');
                                }, 2000);
                            })
                            .catch(err => {
                                debugLog('Error copying URL', err);
                            });
                    } else {
                        debugLog('Nothing to copy - output is empty');
                        const errorElement = document.querySelector(UTM_CONFIG.form.error);
                        if (errorElement) {
                            errorElement.textContent = utmLanguageManager.translate('errors.generateFirst');
                            setTimeout(() => {
                                errorElement.textContent = '';
                            }, 3000);
                        }
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
        }
    });

    // Form input event listeners
    document.addEventListener('input', (e) => {
        const input = e.target.closest('[data-utm-input]');
        if (input) {
            debugLog('Input changed', {
                input: input.getAttribute('data-utm-input'),
                value: input
                    .value
            });
            generateUTMUrl();
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

    // Initialize language selector
    utmLanguageManager.createLanguageSwitcher('.language-container');
    utmLanguageManager.applyTranslations();

    // Listen for language changes
    window.addEventListener('utmLanguageChanged', () => {
        // Update dynamic content that isn't covered by data-i18n attributes
        renderHistory();
        updateProgress();
    });

    // Initialize hint buttons
    setupHintButtons();
    updateRecentHints();

    // Initialize tooltips
    initTooltips();

    // Initialize URL format options
    showUrlFormatOptions();

    // Update time attributes for translations
    if (!utmLanguageManager.translations[utmLanguageManager.currentLanguage]?.general) {
        // Add time translations if they don't exist
        if (utmLanguageManager.translations[utmLanguageManager.currentLanguage]) {
            utmLanguageManager.translations[utmLanguageManager.currentLanguage].general = {
                ...utmLanguageManager.translations[utmLanguageManager.currentLanguage].general,
                justNow: 'just now',
                timeAgo: 'ago',
                timeMinSingular: 'min',
                timeMinPlural: 'mins',
                timeHourSingular: 'hour',
                timeHourPlural: 'hours',
                timeDaySingular: 'day',
                timeDayPlural: 'days',
                timeWeekSingular: 'week',
                timeWeekPlural: 'weeks',
                timeMonthSingular: 'month',
                timeMonthPlural: 'months',
                timeYearSingular: 'year',
                timeYearPlural: 'years',
                requiredProgress: 'Required',
                optionalProgress: 'Optional'
            };
        }
    }

    // Initial URL generation and history rendering
    generateUTMUrl();
    renderHistory();
    updateProgress();
    debugLog('Initialization complete');

    // Add event listener for website URL input to apply current format setting
    const websiteUrlInput = document.querySelector(UTM_CONFIG.form.inputs.websiteUrl);
    if (websiteUrlInput) {
        websiteUrlInput.addEventListener('input', function () {
            // Apply the current format setting to the URL
            const formatPreference = localStorage.getItem('utm_url_format') || 'auto';
            if (this.value && formatPreference !== 'preserve') {
                const formattedUrl = fixUrlFormat(this.value, formatPreference);
                if (formattedUrl !== this.value) {
                    this.value = formattedUrl;
                }
            }
        });
    }
});

/**
 * UTM Generator - Tour Functionality
 * Version: 1.3.0
 * Last Updated: ${new Date().toISOString().split('T')[0]}
 */

console.log(`%c UTM Generator Tour v1.3.0 initialized`,
    'background: #f39c12; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;');

document.addEventListener('DOMContentLoaded', function () {
    // Create driver instance
    const tourDriver = driver.js.driver({
        animate: true,
        showProgress: true,
        showButtons: ['next', 'previous', 'close'],
        steps: [
            {
                element: '[data-utm-input="website-url"]',
                popover: {
                    title: getTourText('tour.steps.websiteUrl.title', 'Website URL'),
                    description: getTourText('tour.steps.websiteUrl.description',
                        'Start by entering the website URL you want to track. This is the destination where users will land.'
                    ),
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '.language-switcher',
                popover: {
                    title: getTourText('tour.steps.languageSwitcher.title', 'Language Selection'),
                    description: getTourText('tour.steps.languageSwitcher.description',
                        'Choose your preferred language. Your selection will be saved for future visits.'
                    ),
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '[data-utm-input="campaign-source"]',
                popover: {
                    title: getTourText('tour.steps.campaignSource.title', 'Campaign Source'),
                    description: getTourText('tour.steps.campaignSource.description',
                        'This required field identifies where the traffic is coming from (e.g., google, facebook, newsletter).'
                    ),
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '[data-utm-input="campaign-medium"]',
                popover: {
                    title: getTourText('tour.steps.campaignMedium.title', 'Campaign Medium'),
                    description: getTourText('tour.steps.campaignMedium.description',
                        'This required field identifies the marketing medium (e.g., cpc, banner, email).'
                    ),
                    side: 'right',
                    align: 'start'
                }
            },
            {
                element: '.hint-buttons:first-of-type',
                popover: {
                    title: getTourText('tour.steps.hints.title', 'Quick Hints'),
                    description: getTourText('tour.steps.hints.description',
                        'Click these buttons to quickly fill in common values for each field.'),
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '[data-utm-input="campaign-name"]',
                popover: {
                    title: getTourText('tour.steps.campaignName.title', 'Campaign Name'),
                    description: getTourText('tour.steps.campaignName.description',
                        'Optional: The name of your marketing campaign (e.g., spring_sale, product_launch).'
                    ),
                    side: 'left',
                    align: 'start'
                }
            },
            {
                element: '[data-utm-output]',
                popover: {
                    title: getTourText('tour.steps.output.title', 'Generated URL'),
                    description: getTourText('tour.steps.output.description',
                        'Your UTM URL will appear here. Click the Copy button to copy it to your clipboard.'
                    ),
                    side: 'bottom',
                    align: 'center'
                }
            },
            {
                element: '[data-utm-list="history"]',
                popover: {
                    title: getTourText('tour.steps.history.title', 'URL History'),
                    description: getTourText('tour.steps.history.description',
                        'Your previously generated URLs are saved here. You can apply them to the form, copy them, or delete them.'
                    ),
                    side: 'top',
                    align: 'center'
                }
            }]
    });

    // Helper function to get tour text with translation support
    function getTourText(key, fallback) {
        if (typeof utmLanguageManager !== 'undefined') {
            const translated = utmLanguageManager.translate(key);
            if (translated && translated !== key) {
                return translated;
            }
        }
        return fallback;
    }

    // Show tour modal if first time visiting
    const hasVisitedBefore = localStorage.getItem('utmTourShown');
    const tutorialModal = document.getElementById('tutorialModal');
    const tourButton = document.getElementById('tourButton');

    if (!hasVisitedBefore && tutorialModal) {
        tutorialModal.classList.remove('hidden');
    } else if (tourButton) {
        tourButton.classList.remove('hidden');
    }

    // Handle tour button click
    if (tourButton) {
        tourButton.addEventListener('click', function () {
            tourDriver.drive();
        });
    }

    // Handle start tour button click
    const startTourBtn = document.getElementById('startTour');
    if (startTourBtn) {
        startTourBtn.addEventListener('click', function () {
            tutorialModal.classList.add('hidden');
            tourButton.classList.remove('hidden');
            localStorage.setItem('utmTourShown', 'true');
            tourDriver.drive();
        });
    }

    // Handle decline tour button click
    const declineTourBtn = document.getElementById('declineTour');
    if (declineTourBtn) {
        declineTourBtn.addEventListener('click', function () {
            tutorialModal.classList.add('hidden');
            tourButton.classList.remove('hidden');
            localStorage.setItem('utmTourShown', 'true');
        });
    }

    // Listen for language changes to update tour content
    window.addEventListener('utmLanguageChanged', function (e) {
        // Recreate the driver with translated content
        tourDriver.setConfig({
            steps: tourDriver.getConfig().steps.map(step => {
                const element = step.element;
                const side = step.popover.side;
                const align = step.popover.align;

                // Find the original step to get the translation key
                const originalStep = findOriginalStep(element);
                if (originalStep) {
                    const titleKey = `tour.steps.${originalStep}.title`;
                    const descriptionKey = `tour.steps.${originalStep}.description`;

                    return {
                        element,
                        popover: {
                            title: getTourText(titleKey, step.popover.title),
                            description: getTourText(descriptionKey, step.popover.description),
                            side,
                            align
                        }
                    };
                }
                return step;
            })
        });
    });

    // Helper to find the original step name based on element selector
    function findOriginalStep(elementSelector) {
        const stepMapping = {
            '[data-utm-input="website-url"]': 'websiteUrl',
            '.language-switcher': 'languageSwitcher',
            '[data-utm-input="campaign-source"]': 'campaignSource',
            '[data-utm-input="campaign-medium"]': 'campaignMedium',
            '.hint-buttons:first-of-type': 'hints',
            '[data-utm-input="campaign-name"]': 'campaignName',
            '[data-utm-output]': 'output',
            '[data-utm-list="history"]': 'history'
        };
        return stepMapping[elementSelector];
    }
});
