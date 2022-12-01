/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//event listener keydown
document.addEventListener('keydown', function(event) {
    if (event.key == "ArrowDown") {
        alert("ArrowDown was pressed");
    }
    if (event.key == "ArrowUp") {
        alert("ArrowUp was pressed");
    }
    if (event.key == "ArrowLeft") {
        alert("ArrowLeft was pressed");
    }
    if (event.key == "ArrowRight") {
        alert("ArrowRight was pressed");
    }
    if (event.key == "Enter") {
        alert("Enter was pressed");
    }
    if (event.key == "h") {
        //open a pop up window
        
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
