function makeChanges() {
  const images = document.getElementsByTagName("img");
  for (let i = 0; i < images.length; i++) {
    console.log(images[i].src);
    images[i].src = "timepass.png";
  }
  const headings = document.getElementsByTagName("h1");
  for (let i = 0; i < headings.length; i++) headings[i].remove();
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++)
    paragraphs[i].innerHTML = "Enough of JavaScript, let’s stop.";
  const h2s = document.getElementsByTagName("h2");
  for (let i = 0; i < h2s.length; i++)
    h2s[i].innerHTML = h2s[i].innerHTML.toUpperCase();
  const div1 = document.getElementById("div1");
  div1.appendChild(document.createElement("h3"));
}