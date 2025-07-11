document.getElementById("enableNextBtn").addEventListener("click", () => {
  window.parent.postMessage({
    subject: "lti.next",
    data: { text: "Enable the Next button now!" }
  }, "*");
});