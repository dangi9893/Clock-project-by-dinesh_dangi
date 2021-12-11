setInterval(() => {
    d=new Date();
    stime = d.getSeconds()/60;
    mtime = (d.getMinutes()+stime)/60;
    htime = (d.getHours()+mtime)/12;

    const hourhand=document.querySelector('[datah]')
    const minutehand=document.querySelector('[datam]')
    const secondhand=document.querySelector('[datas]')

    // hrotation= htime*30+(mtime/2);
    // mrotation = 6*mtime;
    // srotation = 6*stime;

    secondhand.style.setProperty('--rotation',stime*360);
    minutehand.style.setProperty('--rotation',mtime*360);
    hourhand.style.setProperty('--rotation',htime*360);

}, 1000);