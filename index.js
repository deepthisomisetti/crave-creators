// Carousel behavior for testimonials
let current = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle("active", i === index);
  });
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

// Optional: Auto-rotate carousel every 6 seconds
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 6000);
