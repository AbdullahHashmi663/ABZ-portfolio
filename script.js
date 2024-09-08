//----------NavBar Effect/Responsiveness
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    // Function to handle button visibility and functionality
    function setupButton() {
        // Remove existing button if it exists
        const existingButton = document.querySelector('.nav-toggle-button');
        if (existingButton) {
            existingButton.remove();
        }

        // Only show the button if the screen width is <= 720px
        if (window.innerWidth <= 720) {
            const button = document.createElement('button');
            const icon = document.createElement('i');
            
            header.style.opacity = '0.8';
            let text2 = document.querySelector('.text-content2');
            text2.style.fontSize='30px';
            // Initial icon setup
            icon.className = 'fa fa-bars'; // Set initial icon to 'bars'
            icon.style.color = '#014f86'; // Set icon color
            button.appendChild(icon);

            // Button styling
            button.className = 'nav-toggle-button'; // Add class for easier removal later
            button.style.position = 'fixed';
            button.style.top = '10px';
            button.style.left = '10px';
            button.style.zIndex = '100000';
            button.style.padding = '10px 20px';
            button.style.backgroundColor = '#89c2d9';
            button.style.border = '1px solid rgb(0, 183, 255)';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            const existingButton2 = document.querySelector('#about-me');
            existingButton2.style.filter = 'blur(0.3px)';
            body.appendChild(button);

            // Set initial styles for the header
            header.style.display = 'none'; // Start with the header hidden
            
            button.onclick = () => {
                if (header.style.display === 'none') {
                    header.style.display = ''; // Show the header
                    icon.className = 'fa fa-times'; // Change icon to 'times'
                } else {
                    header.style.display = 'none'; // Hide the header
                    icon.className = 'fa fa-bars'; // Change icon to 'bars'
                }
            };
        } else if(window.innerWidth > 720){
            // Remove the button if the screen width is > 720px
            const existingButton = document.querySelector('.nav-toggle-button');
            if (existingButton) {
                existingButton.remove();
            }
            header.style.display = ''; // Ensure the header is visible
            let text2 = document.querySelector('.text-content2');
            text2.style.fontSize='40px';
        }
    }

    // Setup button on DOMContentLoaded
    setupButton();

    // Add event listener to handle resizing
    window.addEventListener('resize', setupButton);
});

//-------------------------------------------------------------------------------
//Type Writter Effect
// function applyTypewriterGradientAnimation() {
//     const elements = document.querySelectorAll('.text-content2');

//     // Gradient animation CSS as a string
//     const gradientAnimationCSS = `
//         @keyframes gradientAnimation {
//             0% { background-position: 0% 0%; }
//             100% { background-position: 100% 100%; }
//         }
//         @keyframes typewriter {
//             from { width: 0; }
//             to { width: 100%; }
//         }
//         .text-content2 {
//             display: inline-block;
//             white-space: nowrap;
//             overflow: hidden;
//             border-right: 2px solid #2c7da0; /* Typewriter cursor effect */
//             box-shadow: #012a4a 2px ;
//             font-weight: bold;
//             color: transparent;
//             background: linear-gradient(45deg, #2c7da0, #89c2d9, #014f86, #012a4a);
//             background-size: 400% 400%;
//             -webkit-background-clip: text;
//             background-clip: text;
//             -webkit-text-fill-color: transparent;
//             animation: gradientAnimation 5s ease infinite, typewriter 4s steps(40, end) infinite;
//         }
//     `;

//     // Create a style element for the gradient animation and typewriter effect
//     const style = document.createElement('style');
//     document.head.appendChild(style);
//     style.textContent = gradientAnimationCSS;

//     elements.forEach(element => {
//         const text = element.textContent;  // Get the content of the element
//         element.innerHTML = "";  // Clear the element's content

//         // Function to handle typewriter effect
//         function typeWriter(element, text, index) {
//             if (index < text.length) {
//                 element.innerHTML = text.substring(0, index + 1);
//                 setTimeout(() => typeWriter(element, text, index + 1), 100); // Adjust typing speed
//             } else {
//                 // Restart typewriter effect with a delay
//                 setTimeout(() => {
//                     element.innerHTML = "";  // Clear the element's content
//                     typeWriter(element, text, 0);  // Restart the typewriter effect
//                 }, 2000); // Delay before restarting (adjust as needed)
//             }
//         }

//         // Start the typewriter effect
//         typeWriter(element, text, 0);
//     });
// }
function applyTypewriterGradientAnimation() {
    const elements = document.querySelectorAll('.text-content2');

    // Gradient animation CSS as a string
    const gradientAnimationCSS = `
        @keyframes gradientAnimation {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }
        @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
        }
        .text-content2 {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            border-right: 2px solid #2c7da0; /* Typewriter cursor effect */
            box-shadow: #012a4a 2px;
            font-weight: bold;
            color: transparent;
            background: linear-gradient(45deg, #2c7da0, #89c2d9, #014f86, #012a4a);
            background-size: 400% 400%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientAnimation 5s ease infinite;
        }
    `;

    // Create a style element for the gradient animation and typewriter effect
    const style = document.createElement('style');
    document.head.appendChild(style);
    style.textContent = gradientAnimationCSS;

    // Texts to display in sequence
    const texts = ["Abdullah Bin Zubair", "QT Developer", "Front-End Developer","Open-Source Head @YOTA"];

    elements.forEach(element => {
        let currentTextIndex = 0; // Start with the first text

        // Function to handle typewriter effect
        function typeWriter(element, text, index) {
            if (index < text.length) {
                element.innerHTML = text.substring(0, index + 1);
                setTimeout(() => typeWriter(element, text, index + 1), 100); // Adjust typing speed
            } else {
                // Wait before starting the next text
                setTimeout(() => {
                    currentTextIndex = (currentTextIndex + 1) % texts.length; // Move to next text
                    element.innerHTML = ""; // Clear the element's content
                    typeWriter(element, texts[currentTextIndex], 0); // Restart with the next text
                }, 2000); // Delay before switching to the next text (adjust as needed)
            }
        }

        // Start the typewriter effect with the first text
        typeWriter(element, texts[currentTextIndex], 0);
    });
}


// Execute the function on DOMContentLoaded
document.addEventListener('DOMContentLoaded', applyTypewriterGradientAnimation);


//-------------education



document.addEventListener('DOMContentLoaded', function() {
    // Select the experience section by its ID
    experienceSection = document.querySelector('#education');
  
    const handleScroll = () => {
      // Get the position of the section relative to the viewport
      const sectionTop = experienceSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      // Add the 'visible' class if the section is within view
      if (sectionTop < windowHeight - 100) {
        experienceSection.classList.add('visible');
      }
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger the handleScroll function on page load in case the section is already in view
    handleScroll();
});

// JavaScript for Fade-in Effect
document.addEventListener('DOMContentLoaded', function() {
    const experienceSection = document.querySelector('.experience-section');
  
    const handleScroll = () => {
      const sectionTop = experienceSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        experienceSection.classList.add('visible');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on page load in case it's already in view
  });
  


  //--------------------------------------------------------------------

 
