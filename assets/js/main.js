// assets/js/main.js

// --- DOM Element Selection ---
// Get references to all the interactive elements from index.html
const introScreen = document.getElementById('intro-screen');
const presentationContainer = document.getElementById('presentation-container');
const slideContainer = document.getElementById('slide-container');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const slideCounter = document.getElementById('slide-counter');

// --- Slide Deck Configuration ---
// Define the order of all slides. This array is the single source of truth for the presentation flow.
const slides = [
    'slides/00-cover.html',
    'slides/01-crisis-unsolvable-equation.html',
    'slides/02-crisis-designed-for-peak.html',
    'slides/03-crisis-geopolitical-shock.html',
    'slides/04-hurdle-openran-disillusion.html',
    'slides/05-hurdle-cni-limitations.html',
    'slides/06-hurdle-babel-tower.html',
    'slides/07-solution-declarative-shift.html',
    'slides/08-solution-nephio-as-catalyst.html',
    'slides/09-solution-dra-deep-dive.html',
    'slides/10-solution-ai-for-ran.html',
    'slides/11-solution-ai-and-ran.html',
    'slides/12-solution-ai-on-ran.html',
    'slides/13-solution-closed-loop.html',
    'slides/14-insights-paradigm-shifts.html',
    'slides/15-conclusion-software-defined.html',
    'slides/16-conclusion-qna.html'
];

let currentSlideIndex = 0;

// --- Core Functions ---

/**
 * Asynchronously loads the content of a slide into the slide container.
 * @param {number} index - The index of the slide to load from the slides array.
 */
async function loadSlide(index) {
    // Add a fade-out effect for a smooth transition
    slideContainer.classList.add('slide-fade-out');
    
    // Wait for the fade-out animation to complete (should match CSS transition duration)
    await new Promise(resolve => setTimeout(resolve, 250));

    // Boundary checks to prevent going out of slide range
    if (index < 0) index = 0;
    if (index >= slides.length) index = slides.length - 1;
    currentSlideIndex = index;

    const slideFile = slides[index];
    
    try {
        // Use the fetch API to get the HTML content of the slide file.
        // Note: This requires a server environment (like GitHub Pages or a local server) to work due to CORS policy.
        const response = await fetch(slideFile);
        if (!response.ok) {
            throw new Error(`找不到投影片檔案: ${slideFile} (HTTP ${response.status})`);
        }
        const content = await response.text();
        slideContainer.innerHTML = content;
    } catch (error) {
        console.error('載入投影片失敗:', error);
        // Display a user-friendly error message if a slide fails to load
        slideContainer.innerHTML = `<div class="text-center">
            <h2 class="text-2xl font-bold text-red-400 mb-4">錯誤：載入投影片失敗</h2>
            <p>請確認 <code class="bg-gray-700 px-2 py-1 rounded">'${slideFile}'</code> 檔案已建立且路徑正確。</p>
        </div>`;
    }
    
    updateCounter();
    
    // Remove the fade-out class to fade the new content in
    slideContainer.classList.remove('slide-fade-out');
}

/**
 * Updates the slide counter display.
 */
function updateCounter() {
    slideCounter.textContent = `${currentSlideIndex + 1} / ${slides.length}`;
}

/**
 * Navigates to the next slide.
 */
function nextSlide() {
    if (currentSlideIndex < slides.length - 1) {
        loadSlide(currentSlideIndex + 1);
    }
}

/**
 * Navigates to the previous slide.
 */
function prevSlide() {
    if (currentSlideIndex > 0) {
        loadSlide(currentSlideIndex - 1);
    }
}

/**
 * Starts the presentation by fading out the intro screen and loading the first slide.
 */
function startPresentation() {
    introScreen.classList.add('fade-out');
    
    // Listen for the end of the transition to ensure a smooth visual flow
    introScreen.addEventListener('transitionend', () => {
        introScreen.style.display = 'none';
        presentationContainer.classList.add('visible');
        // Load the very first slide (index 0)
        loadSlide(0);
    }, { once: true }); // {once: true} ensures the event listener is removed after it runs
}

// --- Event Listeners ---

// Start the presentation when the intro screen is clicked
introScreen.addEventListener('click', startPresentation);

// Bind navigation functions to button clicks
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Add keyboard navigation (left and right arrow keys)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});
