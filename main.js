let data = []
$( ".target" ).change(function() {
    let name = $('#name').val()
    let score = $('#score').val()
    let   checkScore = (score > 0 && score <= 100 ) ? true : false;
        if(checkScore && name) {
            $('#add').removeAttr("disabled");
        } else {
            $('#add').attr("disabled", true);
        }
  });
function addName() {
    debugger
    let name = $('#name').val()
    let score = $('#score').val()
    let scoreName = { name: name, score:score } 
    data.push(scoreName)
    $('#name').val('');
    $('#score').val('');
    $('#add').attr("disabled", true);
    console.table(data)
}

function showTable() {
    let i = 0;
    let html = '<table border="1" width="100%">';
        html += '<tr> <td>ชื่อ</td><td>เกรด</td> </tr>';
        for(i= 0; i< data.length; i++) {
         html += '<tr> <td>' + data[i].name + '</td>';
         html += '<td>' + calGrade(data[i].score) + '</td></tr>' 
        }
        html += '</table>';
    $('#table').empty();    
    $('#table').append(html);
}

function calGrade(score) {
    if(score < 50 ){
        return 'F';
    } else if(score >= 50 && score < 55){
        return 'D';
    } else if(score > 55 && score < 60){
        return 'D+';
    } else if(score >= 60 && score < 65){
        return 'C';
    } else if(score >= 65 && score <70){
        return 'C+';
    } else if(score >= 70 && score < 75){
        return 'B';
    } else if(score >= 75 && score <= 80){
        return 'B+';
    } else {
        return 'A';
    }
}