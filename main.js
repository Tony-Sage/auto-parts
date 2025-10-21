
import { typeWriterEffect, typeWriterPlaceholder} from './typewriter.js';
import { autoParts } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Run typing animation for on-page spans
  document.querySelectorAll('.typing, .typing-alt').forEach(span => {
    const words = JSON.parse(span.getAttribute('data-words'));
    typeWriterEffect(span, words);
  });

  // Typing animation for placeholder
  const searchInput = document.getElementById('searchInput');
  const placeholderWords = ["name (eg: brake pads)", "street name (eg: iron pipe)", "use (eg: used in brakes)", "keywords (eg: brakes)"];
  typeWriterPlaceholder(searchInput, placeholderWords);

  console.log('Auto parts loaded:', autoParts.length);
});