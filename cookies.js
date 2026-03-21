(function(){
  if(localStorage.getItem('hp_cookies'))return;
  var lang='en';
  var p=window.location.pathname;
  if(p.startsWith('/uk'))lang='uk';
  else if(p.startsWith('/ru'))lang='ru';
  var T={
    en:{t:'We use cookies',d:'We use essential cookies to make the site work and analytics cookies to understand how you use it. You can accept all or only essential cookies.',acc:'Accept all',ess:'Essential only',more:'Privacy Policy'},
    uk:{t:'Ми використовуємо cookies',d:'Ми використовуємо необхідні cookies для роботи сайту та аналітичні cookies, щоб розуміти як ви ним користуєтесь. Ви можете прийняти всі або лише необхідні.',acc:'Прийняти всі',ess:'Лише необхідні',more:'Конфіденційність'},
    ru:{t:'Мы используем cookies',d:'Мы используем необходимые cookies для работы сайта и аналитические cookies, чтобы понимать как вы им пользуетесь. Вы можете принять все или только необходимые.',acc:'Принять все',ess:'Только необходимые',more:'Конфиденциальность'},
  };
  var L=T[lang];
  var privHref=lang==='uk'?'/uk/privacy.html':lang==='ru'?'/ru/privacy.html':'/privacy.html';
  var el=document.createElement('div');
  el.id='hp-cookie-banner';
  el.innerHTML='<div style="max-width:680px"><p style="font-family:Syne,sans-serif;font-size:16px;font-weight:700;margin-bottom:8px;color:#F0F4FF">'+L.t+'</p><p style="font-size:13px;color:rgba(240,244,255,.55);line-height:1.6;font-weight:300">'+L.d+' <a href="'+privHref+'" style="color:#60A5FA;text-decoration:none">'+L.more+'</a></p></div><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:0"><button id="hp-acc-all" style="background:linear-gradient(135deg,#3B82F6,#8B5CF6);border:none;color:#fff;padding:10px 22px;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;font-family:DM Sans,sans-serif;white-space:nowrap">'+L.acc+'</button><button id="hp-acc-ess" style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);color:rgba(240,244,255,.7);padding:10px 22px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:DM Sans,sans-serif;white-space:nowrap">'+L.ess+'</button></div>';
  el.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;background:rgba(10,15,30,.97);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:24px 28px;max-width:780px;width:calc(100% - 48px);display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;box-shadow:0 8px 40px rgba(0,0,0,.5);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);animation:slideUp .4s ease';
  var style=document.createElement('style');
  style.textContent='@import url(https://fonts.googleapis.com/css2?family=Syne:wght@700&family=DM+Sans:wght@300;400;600&display=swap);@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
  document.head.appendChild(style);
  document.body.appendChild(el);
  function dismiss(val){localStorage.setItem('hp_cookies',val);el.style.animation='slideDown .3s ease forwards';el.style.cssText+=';animation:slideDown .3s ease forwards';setTimeout(function(){el.remove();},300);var s2=document.createElement('style');s2.textContent='@keyframes slideDown{to{opacity:0;transform:translateX(-50%) translateY(20px)}}';document.head.appendChild(s2);}
  document.getElementById('hp-acc-all').onclick=function(){dismiss('all');};
  document.getElementById('hp-acc-ess').onclick=function(){dismiss('essential');};
})();