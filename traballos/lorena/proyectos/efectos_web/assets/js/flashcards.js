/**
 * Invoked when a flashcard element has been clicked on.
 * @param {HTMLElement} flashcard The div.flashcard element that was clicked on
 */
function flip(flashcard) {
  flashcard.classList.toggle('flashcard-flipped');
}