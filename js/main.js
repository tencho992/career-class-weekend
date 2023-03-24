document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if (day==='monday'){
    document.querySelector('#placeToSee').innerText= "Career Day!"
  }
  else if (day==='tuesday'||day==='wednesday'||day==='thursday'||day==='thursday'||day==='friday'){
    document.querySelector('#placeToSee').innerText= "Time for Class!"
  }
  else if(day==='saturday'||day==='sunday'){
    document.querySelector('#placeToSee').innerText= "Its the WEEKEND"
  }
  else {
    document.querySelector('#placeToBe').innerText= "Schedule Not Found"
  }

}
