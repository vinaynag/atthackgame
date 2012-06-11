var particleSrcs = ['red4.png', 'green.png', 'blue.png', 'yellow.png'];
var particleImgs = [];
var x_iterations = 30;
var x_delay = 11;

for (var i in particleSrcs)
{
    var img = new Image();
    img.src = 'images/' + particleSrcs[i];
    particleImgs.push(img);
}

var particlesStart = function(particles, expl, ex, ey, eid, who, level)
{
    var iterations = x_iterations;
    var it = setInterval(function() {
        for (var i in particles)
        {
            -- particles[i].delay;
            if (expl && particles[i].delay <= - (x_iterations - x_delay))
            {
                particles[i].elem.style.display = 'none';
            }
            else if (particles[i].delay <= 0)
            {
                particles[i].dx += particles[i].ddx;
                particles[i].dy += particles[i].ddy;
                particles[i].x += particles[i].dx;
                particles[i].y += particles[i].dy;
                particles[i].elem.style.left = particles[i].x + 'px';
                particles[i].elem.style.top = particles[i].y + 'px';
                particles[i].elem.style.display = '';
            }
        }
        -- iterations;
        if (iterations <= 0)
        {
            clearTimeout(it);
            for (var i in particles)
            {
                document.body.removeChild(particles[i].elem);
            }
        }
        else if (expl && iterations == x_delay)
        {
            particlesExplode(ex, ey, eid);
            life(who, level);
//________________________
        }
    }, 40);
}

var particlesExplode = function(x, y, id)
{
    var num = 25;

    var particles = [];
    for (var i = 0; i < num; ++ i)
    {
        var particle = {
            'x': x - 24,
            'y': y - 24,
            'dx': Math.random() * 6 - 3,
            'dy': - Math.random()* 5 - 5,
            'ddy': 1,
            'ddx': 0,
            'delay': 0,
            'elem': document.createElement('img')
        };
//        particle.elem.style.background = '-webkit-radial-gradient(50% 50%, ellipse cover, red 0%, rgba(0, 0, 0, 0) 100%)';
        particle.elem.src = particleImgs[id].src;
        particle.elem.style.position = 'absolute';
        particle.elem.style.left = x + 'px';
        particle.elem.style.top = y + 'px';
        particle.elem.style.width = '48px';
        particle.elem.style.height = '48px';
        document.body.appendChild(particle.elem);
        particles.push(particle);
    }
    particlesStart(particles, false);
}

var particlesShoot = function(x1, y1, x2, y2, id, who, level)
{
    var num = 40;
    
    var particles = [];
    for (var i = 0; i < num; ++ i)
    {
        var particle = {
            'x': x1 - 24 + Math.floor(Math.random() * 24 - 12),
            'y': y1 - 24 + Math.floor(Math.random() * 24 - 12),
            'dx': Math.floor((x2 - x1) / (x_iterations - x_delay)),
            'dy': Math.floor((y2 - y1) / (x_iterations - x_delay)),
            'ddy': 0,
            'ddx': 0,
            'delay': Math.floor((num - i) * x_delay / num),
            'elem': document.createElement('img')
        };
//        particle.elem.style.background = '-webkit-radial-gradient(50% 50%, ellipse cover, red 0%, rgba(0, 0, 0, 0) 100%)';
        particle.elem.style.display = 'none';
        particle.elem.src = particleImgs[id].src;
        particle.elem.style.position = 'absolute';
        particle.elem.style.opacity = (i) / num;
        particle.elem.style.left = particle.x + 'px';
        particle.elem.style.top = particle.y + 'px';
        particle.elem.style.width = '48px';
        particle.elem.style.height = '48px';
        document.body.appendChild(particle.elem);
        particles.push(particle);
    }
    particlesStart(particles, true, x2, y2, id, who, level);
}

var shoot = function(who, level)
{
    if (who == 2)
    {
        particlesShoot(410, 20, 700, 440, Math.floor(Math.random() * 4), who, level);
    }
    else
    {
        particlesShoot(410, 20, 100, 440, Math.floor(Math.random() * 4), who, level);
    }
}

var life = function(who, level)
{
    if(who == 1) //me
    {
        var div = 'myDivLive';
        var lf = parseInt(document.getElementById(div).innerHTML);
        lf -= level;
        document.getElementById(div).innerHTML = lf;
        var maxL = 100;
        var procent = parseInt((380 * lf) / 100); 
        var g = 255 * lf / maxL;
        var r = 255 * (maxL - lf) / maxL;
        var w = procent;
        document.getElementById(div).style.backgroundColor = "rgb(" + parseInt(r) + "," + parseInt(g) + ",0)";
        if(lf <= 0)
        {
            document.getElementById(div).style.width = "0px";
            requestFight2("Sorry, you lost");
        }
        else 
        {
            document.getElementById(div).style.width = w + "px";
        }

    }
    else
    {
        var div = 'oppDivLive';
        var lf = parseInt(document.getElementById(div).innerHTML);
        lf -= level;
        var maxL = 100;
        var g = 255 * lf / maxL;
        var r = 255 * (maxL - lf) / maxL;
        document.getElementById(div).style.backgroundColor = "rgb(" + parseInt(r) + "," + parseInt(g) + ",0)";
        var procent = parseInt((380 * lf) / 100);
        var l = 390 - procent;
        var w = procent; 
        document.getElementById(div).innerHTML = lf;
        if(lf <= 0)
        {               
            document.getElementById(div).style.width = "0px";
            document.getElementById(div).style.left = "390px"
            requestFight2("You WON");
        }                               
        else 
        {                 
            document.getElementById(div).style.left = l + "px";
            document.getElementById(div).style.width = w + "px";
        }                     

    }

}

