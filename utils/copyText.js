/**
 * Copies the value of an element.
 *
 * @param {Element} e - Any valid HTML element.
 */
export default function copyEmail(text) {
  console.log(text);
  navigator.clipboard
    .writeText(text)
    .then(() => console.log("Email copied to clipboard"))
    .catch((err) => console.log("Failed to copy: ", err));
}
