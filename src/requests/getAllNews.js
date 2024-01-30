export async function getAllNews() {
  let url = `https://api.mediehuset.net/mediesuset/news`;

  try {
    let res = await fetch(url);
    let data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
