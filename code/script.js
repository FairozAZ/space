// background color in header on scroll
window.addEventListener('scroll', function(){
    let header = document.querySelector('#Header');
    header.classList.toggle('sticky', window.scrollY > 20);
});

// destination section
function showPlanet(evt, planetName){
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(planetName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


// crew section
function showDot(evt, crewName){
    let i, crewcontent, dotlinks;
    crewcontent = document.getElementsByClassName("crewcontent");
    for(i = 0; i < crewcontent.length; i++){
        crewcontent[i].style.display = "none";
    }

    dotlinks = document.getElementsByClassName("dotlinks");
    for(i = 0; i < dotlinks.length; i++){
        dotlinks[i].className = dotlinks[i].className.replace(" activeDot", "");
    }

    document.getElementById(crewName).style.display = "flex";
    evt.currentTarget.className += " activeDot";
}

document.getElementById("defaultDot").click();


// technology section
function showTech(evt, techName){
    let i, techcontent, circleLinks;
    techcontent = document.getElementsByClassName("techcontent");
    for(i = 0; i < techcontent.length; i++){
        techcontent[i].style.display = "none";
    }

    circleLinks = document.getElementsByClassName("circle-links");
    for(i = 0; i < circleLinks.length; i++){
        circleLinks[i].className = circleLinks[i].className.replace(" activeCircle", "");
    }

    document.getElementById(techName).style.display = "flex";
    evt.currentTarget.className += " activeCircle";
}

document.getElementById("defaultCircle").click();

