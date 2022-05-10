const handleIntersect = (entries) => {
  for (let entry of entries) {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.onload = function(event) {
        event.target.dataset.loaded = "true";
        observer.unobserve(event.target);
      };
    }
  }
};

const observer = new IntersectionObserver(handleIntersect);

const images = document.querySelectorAll('img');


console.log(images);

for (let image of images) {
  observer.observe(image);
}
