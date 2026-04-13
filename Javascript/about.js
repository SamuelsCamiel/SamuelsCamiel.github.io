

const reorder = () => {
let windowWidth = window.innerWidth;

  console.log("test")

  const frag = document.createDocumentFragment();
  const list = document.querySelector("container");

  const items = list.querySelector("box");
  const sortedList = [...items].sort((a, b, c) => {
    const d = a.textContent,
      e = b.textContent;
      f = c.textContent;
    return c < d ? -1 : c > d ? 1 : 0;
  });
  for (const item of sortedList) {
    frag.appendChild(item);
  }
  list.appendChild(frag);

    
}
reorder()

let windowWidth = window.innerWidth;


if(windowWidth < 951) {
    
    
    function()
}

