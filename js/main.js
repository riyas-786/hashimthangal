(function(){
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
  function slug(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
  $('ben').innerHTML=B.map(function(b){return '<dt>'+b[0]+'</dt><dd>'+b[1]+'</dd>'}).join('');
  $('sgrid').innerHTML=A.map(function(a){return '<article class="sc"><img loading="lazy" src="'+a[2]+'" alt="'+a[3]+'"><div><h3><small>'+a[0]+'</small>'+a[1]+'</h3><ul>'+a[4].map(function(s){return '<li>'+s+'</li>'}).join('')+'</ul></div></article>'}).join('');
  $('adv').innerHTML=V.map(function(v){return '<div><b>'+v[0]+'</b><span>'+v[1]+'</span></div>'}).join('');
  $('cols').innerHTML=C.map(function(c){return '<div class="col"><i style="background:'+c[1]+'"></i>'+c[0]+'</div>'}).join('');
  $('ugrid').innerHTML=U.map(function(u){return '<article class="sc"><img loading="lazy" src="'+u[1]+'" alt="'+u[2]+'"><div><h3>'+u[0]+'</h3></div></article>'}).join('');

  // sharing: a shared link opens this website at that product
  function pageUrl(){return location.href.split('#')[0]}
  function share(src,title,id){
    var text=title+' – Conifer Decore LLP\n'+pageUrl()+'#'+id;
    fetch(src).then(function(r){return r.blob()}).then(function(bl){
      var f=new File([bl],'conifer-decore.jpg',{type:bl.type||'image/jpeg'});
      if(navigator.canShare&&navigator.canShare({files:[f]}))return navigator.share({files:[f],title:title,text:text});
      throw 0;
    }).catch(function(e){
      if(e&&e.name==='AbortError')return;
      window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank','noopener');
    });
  }
  function copyLink(id,btn){
    var v=pageUrl()+'#'+id,old=btn.textContent;
    var done=function(){btn.textContent='Copied';setTimeout(function(){btn.textContent=old},1500)};
    if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(v).then(done,function(){prompt('Copy this link',v)});
    else prompt('Copy this link',v);
  }
  document.querySelectorAll('.sc').forEach(function(c){
    var h3=c.querySelector('h3'),sm=h3.querySelector('small'),t=((sm?sm.textContent+' ':'')+h3.lastChild.textContent).trim();
    c.id='s-'+slug(t);
    var row=document.createElement('div');row.className='acts';
    var s=document.createElement('button');s.className='sh';s.textContent='Share';
    s.addEventListener('click',function(){share(c.querySelector('img').src,t,c.id)});
    var l=document.createElement('button');l.className='sh';l.textContent='Copy link';
    l.addEventListener('click',function(){copyLink(c.id,l)});
    row.appendChild(s);row.appendChild(l);c.lastElementChild.appendChild(row);
  });

  // buttons that scroll to a section, back-to-top, and opening a shared product link
  document.querySelectorAll('.go').forEach(function(b){b.addEventListener('click',function(){$(b.dataset.t).scrollIntoView({behavior:'smooth'})})});
  $('up').addEventListener('click',function(e){e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})});
  function openHash(){
    var h=location.hash.slice(1),el=h?$(h):null;if(!el)return;
    el.scrollIntoView({block:h.indexOf('s-')===0?'center':'start'});
    if(h.indexOf('s-')===0){el.classList.add('hl');setTimeout(function(){el.classList.remove('hl')},2500)}
  }
  window.addEventListener('hashchange',openHash);openHash();

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
})();
