// UTM Generator Main JavaScript
class UTMGenerator {
    constructor() {
        this.form = document.querySelector('[data-utm-form="main"]');
        this.outputField = document.querySelector('[data-utm-output]');
        this.historyList = document.querySelector('[data-utm-list="history"]');
        this.urlFormatButtons = document.querySelectorAll('[data-utm-format]');
        this.currentUrlFormat = 'auto';
        this.tooltips = {};

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadHistory();
        this.setupFormatButtons();
        this.setupTooltips();
    }

    setupEventListeners() {
        // Form input events
        this.form.querySelectorAll('[data-utm-input]').forEach(input => {
            input.addEventListener('input', () => this.generateURL());
            input.addEventListener('change', () => this.generateURL());
        });

        // Copy button
        document.querySelector('[data-utm-action="copy"]')?.addEventListener('click', () => this.copyToClipboard());

        // Clear history button
        document.querySelector('[data-utm-action="clear-history"]')?.addEventListener('click', () => this.clearHistory());

        // Clear session button
        document.querySelector('[data-utm-action="clear-session"]')?.addEventListener('click', () => this.clearSession());

        // Hint buttons
        document.querySelectorAll('.hint-button').forEach(button => {
            button.addEventListener('click', () => {
                const targetInput = button.getAttribute('data-hint-for');
                const input = document.querySelector(`[data-utm-input="${targetInput}"]`);
                if (input) {
                    input.value = button.textContent.trim();
                    this.generateURL();
                }
            });
        });
    }

    setupFormatButtons() {
        this.urlFormatButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.urlFormatButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.currentUrlFormat = button.getAttribute('data-utm-format');
                this.generateURL();
            });
        });
    }

    setupTooltips() {
        const tooltips = {
            'website-url': 'The full website URL (e.g., https://www.example.com)',
            'campaign-source': 'The referrer (e.g., google, newsletter)',
            'campaign-medium': 'Marketing medium (e.g., cpc, banner, email)',
            'campaign-name': 'Product, promo code, or slogan (e.g., spring_sale)',
            'campaign-term': 'Identify the paid keywords',
            'campaign-content': 'Use to differentiate ads',
            'campaign-id': 'For your reference to identify the campaign'
        };

        document.querySelectorAll('[data-utm-tooltip]').forEach(trigger => {
            const tooltipType = trigger.getAttribute('data-utm-tooltip');
            const tooltipText = tooltips[tooltipType];

            if (tooltipText) {
                trigger.title = tooltipText;
            }
        });
    }

    formatURL(url) {
        if (!url) return '';

        switch (this.currentUrlFormat) {
            case 'https':
                return url.replace(/^http:\/\//, 'https://');
            case 'http':
                return url.replace(/^https:\/\//, 'http://');
            case 'preserve':
                return url;
            case 'auto':
            default:
                return url.includes('://') ? url : `https://${url}`;
        }
    }

    validateURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    generateURL() {
        const inputs = this.form.querySelectorAll('[data-utm-input]');
        const params = new URLSearchParams();
        let baseUrl = '';
        let hasError = false;

        inputs.forEach(input => {
            const param = input.getAttribute('data-utm-input');
            const value = input.value.trim();
            const errorElement = document.querySelector(`[data-utm-error="${param}"]`);

            if (param === 'website-url') {
                if (value) {
                    baseUrl = this.formatURL(value);
                    if (!this.validateURL(baseUrl)) {
                        if (errorElement) {
                            errorElement.textContent = 'Please enter a valid URL';
                        }
                        hasError = true;
                    } else if (errorElement) {
                        errorElement.textContent = '';
                    }
                }
            } else if (value) {
                params.append(`utm_${param}`, value);
            }
        });

        if (!baseUrl || hasError) {
            this.outputField.value = '';
            return;
        }

        try {
            const url = new URL(baseUrl);
            params.forEach((value, key) => {
                url.searchParams.append(key, value);
            });

            const finalUrl = url.toString();
            this.outputField.value = finalUrl;
            this.addToHistory(finalUrl);
        } catch (error) {
            console.error('Error generating URL:', error);
            this.outputField.value = '';
        }
    }

    copyToClipboard() {
        if (!this.outputField.value) return;

        navigator.clipboard.writeText(this.outputField.value)
            .then(() => {
                const copyButton = document.querySelector('[data-utm-action="copy"]');
                const originalText = copyButton.textContent;
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = originalText;
                }, 2000);
            })
            .catch(err => console.error('Failed to copy:', err));
    }

    addToHistory(url) {
        if (!url) return;

        let history = this.getHistory();
        history.unshift(url);
        history = [...new Set(history)].slice(0, 10); // Keep only unique URLs, limit to 10
        localStorage.setItem('utm_history', JSON.stringify(history));
        this.displayHistory();
    }

    getHistory() {
        try {
            return JSON.parse(localStorage.getItem('utm_history')) || [];
        } catch {
            return [];
        }
    }

    loadHistory() {
        this.displayHistory();
    }

    displayHistory() {
        const history = this.getHistory();
        this.historyList.innerHTML = history.map(url => `
            <div class="history-item">
                <a href="${url}" target="_blank">${url}</a>
            </div>
        `).join('');
    }

    clearHistory() {
        localStorage.removeItem('utm_history');
        this.displayHistory();
    }

    clearSession() {
        this.form.reset();
        this.outputField.value = '';
        document.querySelectorAll('[data-utm-error]').forEach(error => {
            error.textContent = '';
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new UTMGenerator();
});
