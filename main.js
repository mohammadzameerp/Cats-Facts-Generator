//-------random cat facts generator using api (Application Programming Interface)

let btn = document.querySelector("button");
let par = document.querySelector("#fact");

btn.addEventListener("click", async () => {
  let fact = await getfact();
  par.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getfact(data) {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    return "error";
  }
}