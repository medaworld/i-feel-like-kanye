const button = document.querySelector('button');
const quote = document.body.querySelector('h2');

button.addEventListener('click', function () {
  if (document.body.className === 'pablo') {
    document.body.className = 'collegedropout';
  } else if (document.body.className === 'collegedropout') {
    document.body.className = 'lateregistration';
  } else if (document.body.className === 'lateregistration') {
    document.body.className = 'graduation';
  } else if (document.body.className === 'graduation') {
    document.body.className = 'heartbreak';
  } else if (document.body.className === 'heartbreak') {
    document.body.className = 'mbdtf';
  } else if (document.body.className === 'mbdtf') {
    document.body.className = 'yeezus';
  } else if (document.body.className === 'yeezus') {
    document.body.className = 'pablo';
  }
  getKanyeQuote();
});

const getKanyeQuote = async () => {
  try {
    const res = await axios.post('https://api.kanye.rest');
    quote.textContent = res.data.quote;
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

getKanyeQuote();
