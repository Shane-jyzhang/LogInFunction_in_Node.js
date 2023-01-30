var value

function getData(input){
    var str = input
    $.ajax({
        type: "GET",
        url: " http://localhost:3000/getData?search="+ input,
        dataType: "json",
        success: function (response) {
          response = Object.values(response)
          value = response.map(d => d.consumption)
          localStorage.setItem(str, value)
          console.log(value)
        }
    });
}
items();
setInterval(function(){
    items();
}, 5000);

$('#options').change(function(){ 
    var value = $(this).val();
    if(value == 'tv'){
        $('.air_conditioner').hide();
        $('.washing_machine').hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".tv").show();
    }

    if(value == 'air_conditioner'){
        $('.tv').hide();
        $('.washing_machine').hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".air_conditioner").show();
    }

    if(value == 'washing_machine'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".washing_machine").show();
    }

    if(value == 'refrigerator'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".refrigerator").show();
    }
    
    if(value == 'dryer'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".refrigerator").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".dryer").show();
    }

    if(value == 'vacuum_cleaner'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".vacuum_cleaner").show();
    }

    if(value == 'induction_cooker'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".microwave").hide();
        $(".oven").hide();
        $(".induction_cooker").show();
    }

    if(value == 'microwave'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".oven").hide();
        $(".microwave").show();
    }

    if(value == 'oven'){
        $('.tv').hide();
        $('.air_conditioner').hide();
        $(".washing_machine").hide();
        $(".refrigerator").hide();
        $(".dryer").hide();
        $(".vacuum_cleaner").hide();
        $(".induction_cooker").hide();
        $(".microwave").hide();
        $(".oven").show();
    }
});

$("#signout").click(function (e) { 
    window.location.replace("http://localhost:3000/");
  });
async function items() {
    getData('tv'); 
    getData('air_conditioner'); 
    getData('washing_machine'); 
    getData('refrigerator'); 
    getData('dryer'); 
    getData('vacuum_cleaner'); 
    getData('induction_cooker'); 
    getData('microwave'); 
    getData('oven'); 

    let options = {
        startAngle: -1.55,
        size: 150,
        value: localStorage.getItem('tv'),
        fill: {gradient: ['#ffffff', '#9a9597']}
      }
    $(".circle .bar").circleProgress(options).on('circle-animation-progress',
    function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2)) + "%");
    });
    $(".tv .bar").circleProgress({
        value: localStorage.getItem('tv')
      });
    $(".air_conditioner .bar").circleProgress({
        value: localStorage.getItem('air_conditioner'),
      });
    $(".washing_machine .bar").circleProgress({
        value: localStorage.getItem('washing_machine')
      });
    $(".refrigerator .bar").circleProgress({
        value: localStorage.getItem('refrigerator')
      }); 
    $(".dryer .bar").circleProgress({
        value: localStorage.getItem('dryer')
      }); 
    $(".vacuum_cleaner .bar").circleProgress({
        value: localStorage.getItem('vacuum_cleaner')
      }); 
    $(".induction_cooker .bar").circleProgress({
        value: localStorage.getItem('induction_cooker')
      });
    $(".microwave .bar").circleProgress({
        value: localStorage.getItem('microwave')
      });
    $(".oven .bar").circleProgress({
        value: localStorage.getItem('oven')
      });
}