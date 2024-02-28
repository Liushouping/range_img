
range.oninput = () =>
  {
    document.body.style.setProperty('--pos', range.value + '%');
    console.log(range.value)
  }
