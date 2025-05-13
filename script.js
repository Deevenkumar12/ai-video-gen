document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const loading = document.getElementById("loading");
  loading.style.display = "block";

  const image = document.getElementById("imageInput").files[0];
  const prompt = document.getElementById("promptInput").value;
  const formData = new FormData();
  formData.append("image", image);
  formData.append("prompt", prompt);

  const response = await fetch("https://your-backend-url.onrender.com/generate", {
    method: "POST",
    body: formData
  });

  const result = await response.json();
  loading.style.display = "none";
  document.getElementById("result").innerHTML = `
    <video src="${result.video_url}" controls autoplay loop></video><br>
    <a href="${result.video_url}" download>Download Video</a>
  `;
});
