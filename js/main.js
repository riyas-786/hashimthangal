(function(){
  var A=[
   ['27 mm','High-end window',"images/profile-27mm.jpg",'Aluminium sliding window profile',['Max window height 2135 mm (7 ft)','Sash 65.5 × 27 mm, slim 20 mm interlock','Single glass 5–8 mm, 2 or 3 track']],
   ['30 mm','Window series',"images/house-30mm.jpg",'Modern house with large windows',['European design, glazing 5–22 mm','Automatic, concealed and multipoint locks','Insect screen provision, burglar-proof']],
   ['40 mm','Casement window',"images/casement-profiles.jpg",'Casement window profiles in several finishes',['Fixed windows','Side-opening windows','Top-hung windows']],
   ['50 mm','Door and window',"images/profile-50mm.jpg",'Black aluminium corner profile with glass',['Glazing 5–38 mm, tilt and turn compatible','Corner and T-joints for strength','Single-point to multipoint locking']],
   ['50 mm','Door series',"images/door-50mm.jpg",'Large black-framed glazing with a garden view',['Internal and external opening','Glazed from inside for security','Made for big openings and high wind load']],
   ['','Heavy door',"images/heavy-door.jpg",'Black double doors with glass panels',['Heavy-duty doors for wide, tall entrances']],
   ['Slim','Sliding and folding',"images/folding-doors.jpg",'Folding glass doors opening to a lake view',['Slim frames, wide glass views','Sliding and folding doors']],
   ['Glass','Railing',"images/glass-railing-deck.jpg",'Glass balcony railing on a modern house deck',['Clear glass balustrades for balconies, decks and terraces']],
   ['Slim','Framed partitions',"images/partitions.jpg",'Slim black-framed glass partitions in a living room',['Glass partitions for homes and offices']],
   ['P-027','27 mm series',"images/series-p027.jpg",'Sliding glass doors in a bedroom',['Non thermal, space efficient','Max leaf 900 × 2100 mm','Alloy 6063-T6, low maintenance']],
   ['P-030','30 mm series',"images/series-p030.jpg",'Sliding window with a garden view',['Maximum glass area, slim 22.5 mm interlock','Max leaf 1500 × 3000 mm','Reinforced interlocking system']]];
  var B=[['Sound insulation','Noise-cancelling doors and windows can cut noise pollution at home by as much as half.'],['Wind load','Strong, with a long performance life compared with other window materials.'],['Water tightness','Profiles resist water and do not corrode.'],['Air permeability','Strong enough to hold the heavy glass of today’s high-rise buildings.'],['Impact resistance','Light in weight but stronger than wood or plastic, and better at absorbing unusual impacts.']];
  var V=[['Thermal insulation','Multi-chamber profiles reduce heat loss.'],['Water tightness','Absorbs less than 0.1% water.'],['Sound insulation','Welded corners and tight seals.'],['Termite proof','Unaffected by termites.'],['Strength and security','Profiles reinforced with steel.'],['Weather resistance','Does not rot, corrode or warp.'],['Maintenance free','Wipe clean with mild detergent.'],['Eco-friendly','Lead-free and fully recyclable.'],['Corrosion resistant','Free from attack by acids, alkalis and salts.'],['Fire resistance','Hard to ignite, does not feed fires.'],['Electrical insulation','High electrical insulation.'],['Pollution resistance','Stable material, unaffected by pollution.']];
  var C=[['White','#F2F2F0'],['Brown','#5A3A28'],['Grey','#6B7075'],['Black','#1C1C1C'],['Golden oak','url(images/swatch-golden-oak.jpg)'],['Walnut','url(images/swatch-walnut.jpg)'],['Dark oak','url(images/swatch-dark-oak.jpg)'],['Cherry','url(images/swatch-cherry.jpg)']];
  var U=[['2-track sliding door',"images/upvc-2track.jpg",'White uPVC two-track sliding window'],['3-track sliding door',"images/upvc-3track.jpg",'White sliding window in a living room'],['2-track, 4-shutter sliding door',"images/upvc-4shutter.jpg",'Four-shutter sliding door to a garden'],['Open door',"images/upvc-open-door.jpg",'White double doors opening onto a patio'],['Door',"images/upvc-fixed.jpg",'Glazed panel with a forest view'],['Top-hung door',"images/upvc-top-hung.jpg",'Top-hung window beside an entrance']];
  var G=[
   ['images/hero-timber-door.jpg','Timber-finish pivot door','alu','Timber-finish pivot entrance door with glazed side panels'],
   ['images/building-dusk.jpg','Glass-fronted building','alu','Modern glass-fronted building lit at dusk'],
   ['images/glass-double-doors.jpg','Glass double doors','alu','Glass double doors with bar handles'],
   ['images/casement-door-windows.jpg','Casement door and windows','alu','White aluminium casement door with opening windows'],
   ['images/sliding-window.jpg','Sliding window','alu','Black-framed sliding window'],
   ['images/casement-window-black.jpg','Casement window','alu','Black aluminium casement window'],
   ['images/corner-folding-lake.jpg','Corner folding doors','alu','Folding glass corner doors with a lake view'],
   ['images/sliding-pool-terrace.jpg','Sliding doors to a terrace','alu','Black sliding doors opening to a pool terrace'],
   ['images/folding-doors.jpg','Slim folding doors','alu','Slim black folding doors in a living room'],
   ['images/heavy-door.jpg','Black double doors','alu','Black double doors with glass panels'],
   ['images/door-50mm.jpg','Large glazed door','alu','Large black-framed glazing with a garden view'],
   ['images/house-30mm.jpg','Modern house windows','alu','Modern house with large windows at dusk'],
   ['images/stairwell.jpg','Bright stairwell','alu','Stairwell with large glazed windows'],
   ['images/series-p027.jpg','Bedroom sliding doors','alu','Sliding glass doors in a bedroom'],
   ['images/glass-railing-deck.jpg','Glass railing','alu','Glass balcony railing on a house deck'],
   ['images/partitions.jpg','Slim framed partitions','alu','Slim black-framed glass partitions'],
   ['images/boardroom-partition.jpg','Glass boardroom partition','alu','Glass-framed boardroom'],
   ['images/upvc-2track.jpg','uPVC 2-track sliding','upvc','White uPVC two-track sliding window'],
   ['images/upvc-3track.jpg','uPVC 3-track sliding','upvc','White uPVC sliding window in a living room'],
   ['images/upvc-4shutter.jpg','uPVC 4-shutter sliding','upvc','Four-shutter uPVC sliding door to a garden'],
   ['images/upvc-open-door.jpg','uPVC open door','upvc','White uPVC double doors opening onto a patio'],
   ['images/upvc-fixed.jpg','uPVC window','upvc','uPVC panel with a forest view'],
   ['images/upvc-top-hung.jpg','uPVC top-hung window','upvc','Top-hung uPVC window beside an entrance']];
  var LAB={alu:'Pengeluar aluminium',upvc:'Conifer uPVC'};
  var $=function(i){return document.getElementById(i)};
  var Q=function(s){return document.querySelectorAll(s)};
  function slug(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
  function fill(id,html){var e=$(id);if(e)e.innerHTML=html}

  // services page content
  fill('ben',B.map(function(b){return '<dt>'+b[0]+'</dt><dd>'+b[1]+'</dd>'}).join(''));
  fill('sgrid',A.map(function(a){return '<article class="sc"><img loading="lazy" src="'+a[2]+'" alt="'+a[3]+'"><div><h3>'+(a[0]?'<small>'+a[0]+'</small>':'')+a[1]+'</h3><ul>'+a[4].map(function(s){return '<li>'+s+'</li>'}).join('')+'</ul></div></article>'}).join(''));
  fill('adv',V.map(function(v){return '<div><b>'+v[0]+'</b><span>'+v[1]+'</span></div>'}).join(''));
  fill('cols',C.map(function(c){return '<div class="col"><i style="background:'+c[1]+'"></i>'+c[0]+'</div>'}).join(''));
  fill('ugrid',U.map(function(u){return '<article class="sc"><img loading="lazy" src="'+u[1]+'" alt="'+u[2]+'"><div><h3>'+u[0]+'</h3></div></article>'}).join(''));

  // gallery page content
  fill('ggrid',G.map(function(g){return '<button class="card" data-cat="'+g[2]+'" data-img="'+g[0]+'"><div class="ph"><img loading="lazy" src="'+g[0]+'" alt="'+g[3]+'"></div><div class="cap"><small>'+LAB[g[2]]+'</small><h3>'+g[1]+'</h3></div></button>'}).join(''));

  // menu button
  var mb=$('menubtn'),mn=$('menu');
  function closeMenu(){mn.classList.remove('open');mb.setAttribute('aria-expanded','false')}
  mb.addEventListener('click',function(e){e.stopPropagation();var o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
  document.addEventListener('click',function(e){if(!mn.contains(e.target))closeMenu()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu()});
  mn.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu()});

  // sharing: a shared link opens this website at that item
  function pageUrl(){return location.href.split('#')[0]}
  function share(src,title,id){
    var text=title+' – Conifer Decore LLP\n'+pageUrl()+'#'+id;
    fetch(src).then(function(r){return r.blob()}).then(function(bl){
      var f=new File([bl],'conifer-decore.jpg',{type:bl.type||'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]}))return navigator.share({files:[f],title:title,text:text});
      throw 0;
    }).catch(function(e){if(e&&e.name==='AbortError')return;window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank','noopener')});
  }
  function copyLink(id,btn){
    var v=pageUrl()+'#'+id,old=btn.textContent;
    var done=function(){btn.textContent='Copied';setTimeout(function(){btn.textContent=old},1500)};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(done,function(){prompt('Copy this link',v)});
    else prompt('Copy this link',v);
  }
  Q('.sc').forEach(function(c){
    var h3=c.querySelector('h3'),sm=h3.querySelector('small'),t=((sm?sm.textContent+' ':'')+h3.lastChild.textContent).trim();
    c.id='s-'+slug(t);
    var row=document.createElement('div');row.className='acts';
    var s=document.createElement('button');s.className='sh';s.textContent='Share';
    s.addEventListener('click',function(){share(c.querySelector('img').src,t,c.id)});
    var l=document.createElement('button');l.className='sh';l.textContent='Copy link';
    l.addEventListener('click',function(){copyLink(c.id,l)});
    row.appendChild(s);row.appendChild(l);c.lastElementChild.appendChild(row);
  });

  // gallery: filter + lightbox
  var cards=Q('.card'),lb=$('lb'),curId='';
  cards.forEach(function(c){c.id='g-'+slug(c.querySelector('h3').textContent)});
  Q('.tabs button').forEach(function(b,i,all){b.addEventListener('click',function(){
    all.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    cards.forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.cat===b.dataset.f)});
  })});
  if(lb){
    var lbi=lb.querySelector('img'),lbt=$('lbt');
    cards.forEach(function(c){c.addEventListener('click',function(){
      curId=c.id;lbi.src=c.dataset.img;lbi.alt=c.querySelector('img').alt;lbt.textContent=c.querySelector('h3').textContent;lb.showModal();
    })});
    $('lbx').onclick=function(){lb.close()};
    lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
    $('lbs').onclick=function(){share(lbi.src,lbt.textContent,curId)};
    $('lbc').onclick=function(){copyLink(curId,this)};
  }

  // pages: separate files normally; one file with #home #about ... when all pages are in one document
  var pages=Q('main[data-page]'),links=Q('.menu a');
  function pageOf(h){
    if(h==='about'||h==='services'||h==='gallery'||h==='contact')return h;
    if(h==='upvc'||h==='alu'||h.indexOf('s-')===0)return 'services';
    if(h.indexOf('g-')===0)return 'gallery';
    if(h==='quote')return 'contact';
    return 'home';
  }
  function route(){
    var h=location.hash.slice(1);
    if(pages.length>1){
      var cur=pageOf(h);
      pages.forEach(function(p){p.hidden=p.dataset.page!==cur});
      links.forEach(function(a){if(a.dataset.p===cur)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
    }
    var el=h?$(h):null;
    if(!el||el.matches('main')){if(h||pages.length>1)window.scrollTo(0,0);return}
    el.scrollIntoView({block:h.indexOf('s-')===0?'center':'start'});
    if(h.indexOf('s-')===0){el.classList.add('hl');setTimeout(function(){el.classList.remove('hl')},2500)}
    if(h.indexOf('g-')===0&&lb&&!lb.open)el.click();
  }
  window.addEventListener('hashchange',route);route();
  $('up').addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});

  // hero slider (5 photos) + gentle reveal on scroll
  var sl=$('slider');
  if(sl){
    var sls=sl.querySelectorAll('.slide'),dots=sl.querySelectorAll('.dots button'),si=0,st,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    var show=function(n,dir){
      var nx=(n+sls.length)%sls.length;if(nx===si)return;
      dir=dir||1;var cur=sls[si],inc=sls[nx];
      sls.forEach(function(s){if(s!==cur&&s!==inc){s.classList.add('noanim');s.classList.remove('active','before','leave')}});
      inc.classList.add('noanim');inc.classList.remove('active','before','leave');if(dir<0)inc.classList.add('before');
      void inc.offsetWidth;
      sls.forEach(function(s){s.classList.remove('noanim')});
      cur.classList.remove('active');cur.classList.add('leave');if(dir>0)cur.classList.add('before');
      inc.classList.remove('before');inc.classList.add('active');
      si=nx;dots.forEach(function(d,i){d.setAttribute('aria-current',i===si)});
    };
    var stop=function(){clearInterval(st)};
    var play=function(){stop();if(!reduce)st=setInterval(function(){show(si+1)},5500)};
    dots.forEach(function(d,i){d.addEventListener('click',function(){show(i,i>si?1:-1);play()})});
    sl.addEventListener('mouseenter',stop);sl.addEventListener('mouseleave',play);
    var x0=null;
    sl.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
    sl.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40){show(si+(dx<0?1:-1),dx<0?1:-1);play()}x0=null});
    document.addEventListener('visibilitychange',function(){if(document.hidden)stop();else play()});
    play();
  }
  if('IntersectionObserver' in window){
    document.documentElement.classList.add('js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    Q('.brand,.feat a,.sc,.card,.steps li,.two>div,.adv div,.leader').forEach(function(el){el.classList.add('rv');io.observe(el)});
  }

  // quote form
  var f=document.getElementById('form');
  if(f)f.addEventListener('submit',function(e){
    e.preventDefault();var ok=true;
    [['name','Enter your name.'],['contact','Enter a phone number or email so we can reply.']].forEach(function(p){
      var el=f.elements[p[0]],msg=f.querySelector('[data-for="'+p[0]+'"]');
      var bad=!el.value.trim();msg.textContent=bad?p[1]:'';if(bad)ok=false;
    });
    if(!ok)return;
    var v=function(k){return f.elements[k].value.trim()};
    var text='New quotation request\nName: '+v('name')+'\nContact: '+v('contact')+'\nLooking for: '+v('type')+'\nDetails: '+(v('msg')||'-');
    var wa='https://wa.me/919961707498?text='+encodeURIComponent(text);
    var mail='mailto:coniferdecore@gmail.com?subject='+encodeURIComponent('Quotation request from '+v('name'))+'&body='+encodeURIComponent(text);
    document.getElementById('formbox').innerHTML='<div class="ok" role="status"><h3>Your request is ready</h3><p style="margin-top:.5rem">Choose how to send it. Your details are already filled in.</p><div class="row"><a class="btn" target="_blank" rel="noopener" href="'+wa+'">Send on WhatsApp</a><a class="btn alt" href="'+mail+'">Send by email</a></div></div>';
  });
})();
