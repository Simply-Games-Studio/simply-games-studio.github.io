proxyurl = ""//"https://cors-anywhere.herokuapp.com/"
fetch(proxyurl + "https://sgs-website-server.pouekdev.repl.co")
.then(res => res.json()).then(body => {
        if(!body) {
            console.log("Error");
        }
        else{
            document.getElementById("importantnewstext").innerHTML = body.news;
            document.getElementById("importantnewsimage").src = body.newsicon;
            document.getElementById("newestgametext").innerHTML = body.newgametext;
            document.getElementById("newestgameimg").src = body.newgameimg;
            document.getElementById("newestgameimg").setAttribute('onclick',"window.location.href='" + body.newgamelink + "'")
            document.getElementById("yttitle").innerHTML = body.youtubetext;
            document.getElementById("ytvideo").src = body.ytvideolink;
            document.getElementById("done").style.display = "none";
            document.getElementById("donee").style.display = "none";
            document.getElementById("doneee").style.display = "none";
        }
    })