(function(){
  // hero: glass panes slide open once
  var fr=document.getElementById('frame');
  setTimeout(function(){fr.classList.add('open')},300);

  // gallery filter
  var tabs=document.querySelectorAll('.tabs button'),cards=document.querySelectorAll('.card');
  tabs.forEach(function(b){b.addEventListener('click',function(){
    tabs.forEach(function(x){x.setAttribute('aria-pressed',x===b)});
    cards.forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.cat.split(' ').indexOf(b.dataset.f)>-1)});
  })});

  // lightbox
  var lb=document.getElementById('lb'),lbi=lb.querySelector('img'),lbt=document.getElementById('lbt');
  cards.forEach(function(c){c.addEventListener('click',function(){
    lbi.src=c.dataset.img;lbi.alt=c.querySelector('img').alt;lbt.textContent=c.querySelector('h3').textContent;lb.showModal();
  })});
  document.getElementById('lbx').onclick=function(){lb.close()};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});

  // finish picker
  var pv=document.getElementById('preview'),sws=document.querySelectorAll('.sw'),fn=document.getElementById('fname');
  sws.forEach(function(s){s.addEventListener('click',function(){
    sws.forEach(function(x){x.setAttribute('aria-checked',x===s)});
    pv.style.setProperty('--frame',s.dataset.c);fn.textContent=s.dataset.n;
  })});
  var sb=document.getElementById('slide');
  sb.addEventListener('click',function(){
    var o=pv.classList.toggle('slid');sb.textContent=o?'Slide window closed':'Slide window open';
  });

  // quote form
  var f=document.getElementById('form');
  f.addEventListener('submit',function(e){
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
  // sharing: sends the image itself (phones) or a WhatsApp message with the image link and site link
  function pageUrl(){return location.href.split('#')[0]}
  function absImg(src){return src.indexOf('data:')===0?'':new URL(src,location.href).href}
  function share(src,title){
    var img=absImg(src),text=title+' – Conifer Decore LLP'+(img?'\n'+img:'')+'\n'+pageUrl();
    fetch(src).then(function(r){return r.blob()}).then(function(bl){
      var f=new File([bl],'conifer-decore.jpg',{type:bl.type||'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]}))return navigator.share({files:[f],title:title,text:text});
      throw 0;
    }).catch(function(e){
      if(e&&e.name==='AbortError')return;
      window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank','noopener');
    });
  }
  function copyLink(src,btn){
    var v=absImg(src)||pageUrl(),old=btn.textContent;
    var done=function(){btn.textContent='Copied';setTimeout(function(){btn.textContent=old},1500)};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(done,function(){prompt('Copy this link',v)});
    else prompt('Copy this link',v);
  }
  document.getElementById('lbs').onclick=function(){share(lbi.src,lbt.textContent)};
  document.getElementById('lbc').onclick=function(){copyLink(lbi.src,this)};

  // systems page
  var A=[
   ['27 mm','High-end window',"images/profile-27mm.jpg",'Aluminium sliding window profile',['Max window height 2135 mm (7 ft)','Sash 65.5 × 27 mm, slim 20 mm interlock','Single glass 5–8 mm, 2 or 3 track']],
   ['30 mm','Window series',"images/house-30mm.jpg",'Modern house with large windows',['European design, glazing 5–22 mm','Automatic, concealed and multipoint locks','Insect screen provision, burglar-proof']],
   ['40 mm','Casement window',"images/casement-profiles.jpg",'Casement window profiles in several finishes',['Fixed windows','Side-opening windows','Top-hung windows']],
   ['50 mm','Door and window',"images/profile-50mm.jpg",'Black aluminium corner profile with glass',['Glazing 5–38 mm, tilt and turn compatible','Corner and T-joints for strength','Single-point to multipoint locking']],
   ['50 mm','Door series',"images/door-50mm.jpg",'Large black-framed glazing with a garden view',['Internal and external opening','Glazed from inside for security','Made for big openings and high wind load']],
   ['65 mm','Heavy door',"images/heavy-door-65mm.jpg",'Black double doors with glass panels',['Heavy-duty doors for wide, tall entrances']],
   ['Slim','Sliding and folding',"images/folding-doors.jpg",'Folding glass doors opening to a lake view',['Slim frames, wide glass views','Sliding and folding doors']],
   ['Glass','Railing',"images/glass-railing-deck.jpg",'Glass balcony railing on a modern house deck',['Clear glass balustrades for balconies, decks and terraces']],
   ['Slim','Framed partitions',"images/partitions.jpg",'Slim black-framed glass partitions in a living room',['Glass partitions for homes and offices']],
   ['P-027','27 mm series',"images/series-p027.jpg",'Sliding glass doors in a bedroom',['Non thermal, space efficient','Max leaf 900 × 2100 mm','Alloy 6063-T6, low maintenance']],
   ['P-030','30 mm series',"images/series-p030.jpg",'Sliding window with a garden view',['Maximum glass area, slim 22.5 mm interlock','Max leaf 1500 × 3000 mm','Reinforced interlocking system']]];
  var B=[['Sound insulation','Noise-cancelling doors and windows can cut noise pollution at home by as much as half.'],['Wind load','Strong, with a long performance life compared with other window materials.'],['Water tightness','Profiles resist water and do not corrode.'],['Air permeability','Strong enough to hold the heavy glass of today’s high-rise buildings.'],['Impact resistance','Light in weight but stronger than wood or plastic, and better at absorbing unusual impacts.']];
  var V=[['Thermal insulation','Multi-chamber profiles reduce heat loss.'],['Water tightness','Absorbs less than 0.1% water.'],['Sound insulation','Welded corners and tight seals.'],['Termite proof','Unaffected by termites.'],['Strength and security','Profiles reinforced with steel.'],['Weather resistance','Does not rot, corrode or warp.'],['Maintenance free','Wipe clean with mild detergent.'],['Eco-friendly','Lead-free and fully recyclable.'],['Corrosion resistant','Free from attack by acids, alkalis and salts.'],['Fire resistance','Hard to ignite, does not feed fires.'],['Electrical insulation','High electrical insulation.'],['Pollution resistance','Stable material, unaffected by pollution.']];
  var C=[['White','#F2F2F0'],['Brown','#5A3A28'],['Grey','#6B7075'],['Black','#1C1C1C'],['Golden oak','url(images/swatch-golden-oak.jpg)'],['Walnut','url(images/swatch-walnut.jpg)'],['Dark oak','url(images/swatch-dark-oak.jpg)'],['Cherry','url(images/swatch-cherry.jpg)']];
  var U=[['2-track sliding door',"images/upvc-2track.jpg",'White uPVC two-track sliding window'],['3-track sliding door',"images/upvc-3track.jpg",'White sliding window in a living room'],['2-track, 4-shutter sliding door',"images/upvc-4shutter.jpg",'Four-shutter sliding door to a garden'],['Open door',"images/upvc-open-door.jpg",'White double doors opening onto a patio'],['Fixed door',"images/upvc-fixed.jpg",'Fixed glass panel with a forest view'],['Top-hung door',"images/upvc-top-hung.jpg",'Top-hung window beside an entrance']];
  var $=function(i){return document.getElementById(i)};
  $('ben').innerHTML=B.map(function(b){return '<dt>'+b[0]+'</dt><dd>'+b[1]+'</dd>'}).join('');
  $('sgrid').innerHTML=A.map(function(a){return '<article class="sc"><img loading="lazy" src="'+a[2]+'" alt="'+a[3]+'"><div><h3><small>'+a[0]+'</small>'+a[1]+'</h3><ul>'+a[4].map(function(s){return '<li>'+s+'</li>'}).join('')+'</ul></div></article>'}).join('');
  $('adv').innerHTML=V.map(function(v){return '<div><b>'+v[0]+'</b><span>'+v[1]+'</span></div>'}).join('');
  $('cols').innerHTML=C.map(function(c){return '<div class="col"><i style="background:'+c[1]+(c[1][0]=='u'?'':'')+'"></i>'+c[0]+'</div>'}).join('');
  $('ugrid').innerHTML=U.map(function(u){return '<article class="sc"><img loading="lazy" src="'+u[1]+'" alt="'+u[2]+'"><div><h3>'+u[0]+'</h3></div></article>'}).join('');
  document.querySelectorAll('.sc').forEach(function(c){var b=document.createElement('button');b.className='sh';b.textContent='Share';b.addEventListener('click',function(){share(c.querySelector('img').src,c.querySelector('h3').innerText.replace(/\s+/g,' ').trim())});c.lastElementChild.appendChild(b)});
  document.querySelectorAll('.go').forEach(function(b){b.addEventListener('click',function(){$(b.dataset.t).scrollIntoView({behavior:'smooth'})})});

  // simple router: #systems shows the systems page, anything else shows home
  var home=$('top'),sys=$('systems'),t0=document.title;
  function route(){
    var h=location.hash.slice(1),s=h===''||h==='systems';
    sys.hidden=!s;home.hidden=s;
    document.title='Conifer Decore LLP';
    var el=h&&!s?document.getElementById(h):null;
    if(el)el.scrollIntoView();else window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',route);route();
  $('up').addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
})();
