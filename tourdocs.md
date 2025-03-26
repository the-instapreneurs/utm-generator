Astro
Introduction
Installation
Basic Usage
Configuration
API Reference
Theming
Migrate to 1.x
Examples
Animated Tour
Static Tour
Styling Popover
Tour Progress
Async Tour
Confirm on Exit
Prevent Tour Exit
Styling Overlay
Popover Position
Popover Buttons
Simple Highlight
Installation
Run one of the following commands to install the package:

# Using npm

npm install driver.js

# Using pnpm

pnpm install driver.js

# Using yarn

yarn add driver.js
Alternatively, you can use CDN and include the script in your HTML file:

<script src="https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css"/>
Start Using
Once installed, you can import the package in your project. The following example shows how to highlight an element:

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver();
driverObj.highlight({
element: "#some-element",
popover: {
title: "Title",
description: "Description"
}
});
Note on CDN
If you are using the CDN, you will have to use the package from the window object:

const driver = window.driver.js.driver;

const driverObj = driver();

driverObj.highlight({
element: "#some-element",
popover: {
title: "Title",
description: "Description"
}
});
Continue reading the Getting Started guide to learn more about the package.

Astro
Introduction
Installation
Basic Usage
Configuration
API Reference
Theming
Migrate to 1.x
Examples
Animated Tour
Static Tour
Styling Popover
Tour Progress
Async Tour
Confirm on Exit
Prevent Tour Exit
Styling Overlay
Popover Position
Popover Buttons
Simple Highlight
Basic Usage
Once installed, you can import and start using the library. There are several different configuration options available to customize the library. You can find more details about the options in the configuration section. Given below are the basic steps to get started.

Here is a simple example of how to create a tour with multiple steps.

Basic Tour Example

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver({
showProgress: true,
steps: [
{ element: '.page-header', popover: { title: 'Title', description: 'Description' } },
{ element: '.top-nav', popover: { title: 'Title', description: 'Description' } },
{ element: '.sidebar', popover: { title: 'Title', description: 'Description' } },
{ element: '.footer', popover: { title: 'Title', description: 'Description' } },
]
});

driverObj.drive();
Show me an Example
You can pass a single step configuration to the highlight method to highlight a single element. Given below is a simple example of how to highlight a single element.

Highlighting a simple Element

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const driverObj = driver();
driverObj.highlight({
element: '#some-element',
popover: {
title: 'Title for the Popover',
description: 'Description for it',
},
});
Show me an Example
The same configuration passed to the highlight method can be used to create a tour. Given below is a simple example of how to create a tour with a single step.

Examples above show the basic usage of the library. Find more details about the configuration options in the configuration section and the examples in the examples section.

Astro
Introduction
Installation
Basic Usage
Configuration
API Reference
Theming
Migrate to 1.x
Examples
Animated Tour
Static Tour
Styling Popover
Tour Progress
Async Tour
Confirm on Exit
Prevent Tour Exit
Styling Overlay
Popover Position
Popover Buttons
Simple Highlight
Configuration
Driver.js is built to be highly configurable. You can configure the driver globally, or per step. You can also configure the driver on the fly, while it’s running.

Driver.js is written in TypeScript. Configuration options are mostly self-explanatory. Also, if you’re using an IDE like WebStorm or VSCode, you’ll get autocomplete and documentation for all the configuration options.

Driver Configuration
You can configure the driver globally by passing the configuration object to the driver call or by using the setConfig method. Given below are some of the available configuration options.

type Config = {
// Array of steps to highlight. You should pass
// this when you want to setup a product tour.
steps?: DriveStep[];

// Whether to animate the product tour. (default: true)
animate?: boolean;
// Overlay color. (default: black)
// This is useful when you have a dark background
// and want to highlight elements with a light
// background color.
overlayColor?: string;
// Whether to smooth scroll to the highlighted element. (default: false)
smoothScroll?: boolean;
// Whether to allow closing the popover by clicking on the backdrop. (default: true)
allowClose?: boolean;
// Opacity of the backdrop. (default: 0.5)
overlayOpacity?: number;
// Distance between the highlighted element and the cutout. (default: 10)
stagePadding?: number;
// Radius of the cutout around the highlighted element. (default: 5)
stageRadius?: number;

// Whether to allow keyboard navigation. (default: true)
allowKeyboardControl?: boolean;

// Whether to disable interaction with the highlighted element. (default: false)
// Can be configured at the step level as well
disableActiveInteraction?: boolean;

// If you want to add custom class to the popover
popoverClass?: string;
// Distance between the popover and the highlighted element. (default: 10)
popoverOffset?: number;
// Array of buttons to show in the popover. Defaults to ["next", "previous", "close"]
// for product tours and [] for single element highlighting.
showButtons?: AllowedButtons[];
// Array of buttons to disable. This is useful when you want to show some of the
// buttons, but disable some of them.
disableButtons?: AllowedButtons[];

// Whether to show the progress text in popover. (default: false)
showProgress?: boolean;
// Template for the progress text. You can use the following placeholders in the template:
// - {{current}}: The current step number
// - {{total}}: Total number of steps
progressText?: string;

// Text to show in the buttons. `doneBtnText`
// is used on the last step of a tour.
nextBtnText?: string;
prevBtnText?: string;
doneBtnText?: string;

// Called after the popover is rendered.
// PopoverDOM is an object with references to
// the popover DOM elements such as buttons
// title, descriptions, body, container etc.
onPopoverRender?: (popover: PopoverDOM, options: { config: Config; state: State, driver: Driver }) => void;

// Hooks to run before and after highlighting
// each step. Each hook receives the following
// parameters:
// - element: The target DOM element of the step
// - step: The step object configured for the step
// - options.config: The current configuration options
// - options.state: The current state of the driver
// - options.driver: Current driver object
onHighlightStarted?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onHighlighted?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onDeselected?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;

// Hooks to run before and after the driver
// is destroyed. Each hook receives
// the following parameters:
// - element: Currently active element
// - step: The step object configured for the currently active
// - options.config: The current configuration options
// - options.state: The current state of the driver
// - options.driver: Current driver object
onDestroyStarted?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onDestroyed?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;

// Hooks to run on button clicks. Each hook receives
// the following parameters:
// - element: The current DOM element of the step
// - step: The step object configured for the step
// - options.config: The current configuration options
// - options.state: The current state of the driver
// - options.driver: Current driver object
onNextClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onPrevClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onCloseClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
};
Note: By overriding onNextClick, and onPrevClick hooks you control the navigation of the driver. This means that user won’t be able to navigate using the buttons and you will have to either call driverObj.moveNext() or driverObj.movePrevious() to navigate to the next/previous step.

You can use this to implement custom logic for navigating between steps. This is also useful when you are dealing with dynamic content and want to highlight the next/previous element based on some logic.

onNextClick and onPrevClick hooks can be configured at the step level as well. When configured at the driver level, you control the navigation for all the steps. When configured at the step level, you control the navigation for that particular step only.

Popover Configuration
The popover is the main UI element of Driver.js. It’s the element that highlights the target element, and shows the step content. You can configure the popover globally, or per step. Given below are some of the available configuration options.

type Popover = {
// Title and descriptions shown in the popover.
// You can use HTML in these. Also, you can
// omit one of these to show only the other.
title?: string;
description?: string;

// The position and alignment of the popover
// relative to the target element.
side?: "top" | "right" | "bottom" | "left";
align?: "start" | "center" | "end";

// Array of buttons to show in the popover.
// When highlighting a single element, there
// are no buttons by default. When showing
// a tour, the default buttons are "next",
// "previous" and "close".
showButtons?: ("next" | "previous" | "close")[];
// An array of buttons to disable. This is
// useful when you want to show some of the
// buttons, but disable some of them.
disableButtons?: ("next" | "previous" | "close")[];

// Text to show in the buttons. `doneBtnText`
// is used on the last step of a tour.
nextBtnText?: string;
prevBtnText?: string;
doneBtnText?: string;

// Whether to show the progress text in popover.
showProgress?: boolean;
// Template for the progress text. You can use
// the following placeholders in the template:
// - {{current}}: The current step number
// - {{total}}: Total number of steps
// Defaults to following if `showProgress` is true:
// - "{{current}} of {{total}}"
progressText?: string;

// Custom class to add to the popover element.
// This can be used to style the popover.
popoverClass?: string;

// Hook to run after the popover is rendered.
// You can modify the popover element here.
// Parameter is an object with references to
// the popover DOM elements such as buttons
// title, descriptions, body, etc.
onPopoverRender?: (popover: PopoverDOM, options: { config: Config; state: State, driver: Driver }) => void;

// Callbacks for button clicks. You can use
// these to add custom behavior to the buttons.
// Each callback receives the following parameters:
// - element: The current DOM element of the step
// - step: The step object configured for the step
// - options.config: The current configuration options
// - options.state: The current state of the driver
// - options.driver: Current driver object
onNextClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void
onPrevClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void
onCloseClick?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void
}
Drive Step Configuration
Drive step is the configuration object passed to the highlight method or the steps array of the drive method. You can configure the popover and the target element for each step. Given below are some of the available configuration options.

type DriveStep = {
// The target element to highlight.
// This can be a DOM element, or a CSS selector.
// If this is a selector, the first matching
// element will be highlighted.
element: Element | string;

// The popover configuration for this step.
// Look at the Popover Configuration section
popover?: Popover;

// Whether to disable interaction with the highlighted element. (default: false)
disableActiveInteraction?: boolean;

// Callback when the current step is deselected,
// about to be highlighted or highlighted.
// Each callback receives the following parameters:
// - element: The current DOM element of the step
// - step: The step object configured for the step
// - options.config: The current configuration options
// - options.state: The current state of the driver
// - options.driver: Current driver object
onDeselected?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onHighlightStarted?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
onHighlighted?: (element?: Element, step: DriveStep, options: { config: Config; state: State, driver: Driver }) => void;
}
State
You can access the current state of the driver by calling the getState method. It’s also passed to the hooks and callbacks.

type State = {
// Whether the driver is currently active or not
isInitialized?: boolean;

// Index of the currently active step if using
// as a product tour and have configured the
// steps array.
activeIndex?: number;
// DOM element of the currently active step
activeElement?: Element;
// Step object of the currently active step
activeStep?: DriveStep;

// DOM element that was previously active
previousElement?: Element;
// Step object of the previously active step
previousStep?: DriveStep;

// DOM elements for the popover i.e. including
// container, title, description, buttons etc.
popover?: PopoverDOM;
}

Astro
Introduction
Installation
Basic Usage
Configuration
API Reference
Theming
Migrate to 1.x
Examples
Animated Tour
Static Tour
Styling Popover
Tour Progress
Async Tour
Confirm on Exit
Prevent Tour Exit
Styling Overlay
Popover Position
Popover Buttons
Simple Highlight
API Reference
Here is the list of methods provided by driver when you initialize it.

Note: We have omitted the configuration options for brevity. Please look at the configuration section for the options. Links are provided in the description below.

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

// Look at the configuration section for the options
// https://driverjs.com/docs/configuration#driver-configuration
const driverObj = driver({ /_ ... _/ });

// --------------------------------------------------
// driverObj is an object with the following methods
// --------------------------------------------------

// Start the tour using `steps` given in the configuration
driverObj.drive(); // Starts at step 0
driverObj.drive(4); // Starts at step 4

driverObj.moveNext(); // Move to the next step
driverObj.movePrevious(); // Move to the previous step
driverObj.moveTo(4); // Move to the step 4
driverObj.hasNextStep(); // Is there a next step
driverObj.hasPreviousStep() // Is there a previous step

driverObj.isFirstStep(); // Is the current step the first step
driverObj.isLastStep(); // Is the current step the last step

driverObj.getActiveIndex(); // Gets the active step index

driverObj.getActiveStep(); // Gets the active step configuration
driverObj.getPreviousStep(); // Gets the previous step configuration
driverObj.getActiveElement(); // Gets the active HTML element
driverObj.getPreviousElement(); // Gets the previous HTML element

// Is the tour or highlight currently active
driverObj.isActive();

// Recalculate and redraw the highlight
driverObj.refresh();

// Look at the configuration section for configuration options
// https://driverjs.com/docs/configuration#driver-configuration
driverObj.getConfig();
driverObj.setConfig({ /_ ... _/ });

driverObj.setSteps([ /* ... */ ]); // Set the steps

// Look at the state section of configuration for format of the state
// https://driverjs.com/docs/configuration#state
driverObj.getState();

// Look at the DriveStep section of configuration for format of the step
// https://driverjs.com/docs/configuration/#drive-step-configuration
driverObj.highlight({ /_ ... _/ }); // Highlight an element

driverObj.destroy(); // Destroy the tour
