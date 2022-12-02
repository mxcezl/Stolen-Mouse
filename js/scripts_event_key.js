/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//event listener keydown
selections_list = document.getElementsByClassName("selectable")
//for loop to add id to each selectable
for (i = 0; i < selections_list.length; i++) {
    selections_list[i].id = i;
}
actual_selection = selections_list[0]
circle(actual_selection)

//console actual_selection
document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowDown") {
        i = 0;
        while(parseInt(actual_selection.id) + i != selections_list.length - 1 && selections_list[parseInt(actual_selection.id) + i].getBoundingClientRect().y == actual_selection.getBoundingClientRect().y){
            i++
        }
        actual_selection = selections_list[parseInt(actual_selection.id) + i]
    }
    if (event.key == "ArrowUp") {
        i = 0;
        while(parseInt(actual_selection.id) - i != 0 && selections_list[parseInt(actual_selection.id) - i].getBoundingClientRect().y == actual_selection.getBoundingClientRect().y){
            i++
        }
        actual_selection = selections_list[parseInt(actual_selection.id) - i]
    }
    if (event.key == "ArrowLeft") {
        //check if actual id in last in selection list
        if (actual_selection.id != 0) {
            actual_selection = selections_list[parseInt(actual_selection.id) - 1]
        }

    }
    if (event.key == "ArrowRight") {
        if (actual_selection.id != selections_list.length - 1) {
            actual_selection = selections_list[parseInt(actual_selection.id) + 1]
        }
    }
    circle(actual_selection)
    console.log(actual_selection)
    if (event.key == "Enter") {
        window.location = selections_list[actual_selection.id].href
    }
    if (event.key == "h") {
        w=open("",'popup','width=600,height=400,toolbar=no,scrollbars=no,resizable=yes');	
        w.document.write("<title>Help</title>");
        w.document.write("<h1>Vous avez ouvert l'aide</h1><br/><br/>")
        w.document.write("<body><img src='assets/arrow_up.png' width='20' height='20'> : permet de passer de l'élément courant à l'élément du dessus<br/>")
        w.document.write("<img src='assets/arrow_down.png' width='20' height='20'> : permet de passer de l'élément courant à l'élément du dessous<br/>")
        w.document.write("<img src='assets/arrow_left.png' width='20' height='20'> : permet de passer de l'élément courant à l'élément de gauche<br/>")
        w.document.write("<img src='assets/arrow_right.png' width='20' height='20'> : permet de passer de l'élément courant à l'élément de droite<br/>")
        w.document.write("<img src='assets/enter_key.png' width='20' height='20'> : permet d'accéder à l'élément courant<br/>")
        w.document.write("<img src='assets/h_key.png' width='20' height='20'> : permet d'afficher l'aide<br/>")
        w.document.write("</body>");
        w.document.close();
    }
})
function circle(selection){
    //delete circle if exist
    if (document.getElementById("circle") != null) {
        document.getElementById("circle").remove()
    }
    //draw circle around actual_selection
    temp_inner = selection.innerHTML
    selection.innerHTML = '<canvas id="circle"></canvas>' + temp_inner
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "#c82124"; //red
    ctx.arc(10, 10, 5, 0, 2 * Math.PI);
    ctx.fill()
    ctx.stroke();
    console.log(document.getElementById("circle"))
}
