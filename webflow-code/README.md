# UTM Generator Assets

This repository contains the static assets (CSS, JavaScript) for the UTM Generator Webflow project.

## Project Structure

```
utm-generator/
├── assets/
│   ├── css/
│   │   └── utm-generator.css    # Main stylesheet
│   ├── js/
│   │   └── utm-generator.js     # Main JavaScript file
│   └── i18n/                    # Translations (if needed)
└── example/
    └── index.html              # Example implementation
```

## Usage with Webflow

### 1. CSS Integration

Add the following code in the "Before </head>" section of your Webflow page settings:

```html
<link
  rel="stylesheet"
  href="https://raw.githubusercontent.com/YOUR_USERNAME/utm-generator/main/assets/css/utm-generator.css"
/>
```

### 2. JavaScript Integration

Add the following code in the "Before </body>" section of your Webflow page settings:

```html
<script src="https://raw.githubusercontent.com/YOUR_USERNAME/utm-generator/main/assets/js/utm-generator.js"></script>
```

### 3. HTML Structure

The HTML structure from `example/index.html` should be replicated in your Webflow page using the same class names and data attributes.

## Important Notes

- Replace `YOUR_USERNAME` in the URLs with your actual GitHub username
- Make sure to enable CORS on your GitHub pages or hosting service
- The CSS and JavaScript files are designed to work with the specific HTML structure provided in the example

## Driver.js Integration in Webflow

The UTM Generator includes a guided tour powered by Driver.js. To ensure it works properly in Webflow:

1. Make sure to add the Driver.js script and CSS in the Header section of your Webflow project:

```html
<!-- Driver.js dependencies -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/driver.js@0.9.8/dist/driver.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/driver.js@0.9.8/dist/driver.min.js"></script>
```

2. If you're experiencing issues with Driver.js not initializing:

   - Add this code at the end of your custom code, after the UTM Generator script:

   ```html
   <script>
     // Ensure dependencies are loaded properly
     setTimeout(function () {
       if (window.verifyUtmGeneratorDependencies) {
         window.verifyUtmGeneratorDependencies();
       }
     }, 1500);
   </script>
   ```

3. Make sure your HTML includes the tour button and tutorial modal elements as shown in the example HTML file.

## Features

- URL parameter generation
- History tracking with localStorage
- Copy to clipboard functionality
- URL format options
- Responsive design
- Form validation
- Tooltip support
