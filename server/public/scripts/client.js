$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-btn').on('click', submit)
  getData();
}

function submit() {
  //target input ids
  const brianGuess = $('#Brian').val()
  const stevenGuess = $('#Steven').val()
  const mahamudGuess = $('#Mahamud').val()

  console.log('w');
  $.ajax({
      method:'POST',
      url: '/guess',
      data: {
        brianGuess: brianGuess,
        mahamudGuess: mahamudGuess,
        stevenGuess: stevenGuess,
      }
  }).then(function(response) {
    getData();
  }).catch(function(error){
    alert('Request Failed)',);
    console.log('There is ', error);
  })

}

function getData() {
  $.ajax({
    method:'GET',
    url:'/guess'
}).then(function(response){
    renderToDom(response)
}).catch(function(error){
    alert('Request Failed');
    console.log('There is ', error)
}) 
}
function renderToDom(response) {
  $('#round').text(`round ${response.length+1}`)
for (let x of response) {
  $('#brianSpan').append(`<div>${x.brianGuess}</div>`)
  $('#stevenSpan').append(`<div>${x.stevenGuess}</div>`)
  $('#mahamudSpan').append(`<div>${x.mahamudGuess}</div>`)


}
  
}
