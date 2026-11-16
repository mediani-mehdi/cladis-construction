import assert from 'node:assert/strict';
const base=process.argv[2]||'http://localhost:3100';
const fetchPage=async path=>{const r=await fetch(base+path,{redirect:'manual'});assert.equal(r.status,200,path);return r.text()};
const home=await fetchPage('/');
for(const text of ['Une solide expérience','Nos points forts','sur le terrain.','Études et travaux'])assert.ok(home.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').includes(text),text);
for(const removed of ['v2-project-invitation','Ingénierie virtuelle','id="configurateur"','id="devis"'])assert.ok(!home.includes(removed),'Removed home block: '+removed);
assert.ok(home.includes('v2-frame-sequence'),'Version 2 animated hero');
assert.ok(home.includes('v2-glass'),'Version 2 glass navigation');
assert.ok(home.includes('v2-footer-redesign'),'Version 2 footer');
const trades=['bardage-metallique','couverture-metallique','etancheite-toiture-terrasse','charpente-metallique'];
const index=await fetchPage('/metiers');for(const slug of trades)assert.ok(index.includes('/metiers/'+slug));
for(const slug of trades){const html=await fetchPage('/metiers/'+slug);assert.ok(html.includes('canonical'));assert.ok(html.includes('Notre méthode en quatre étapes'));assert.ok(html.includes('Découvrez aussi nos autres métiers'));for(const removed of ['Spécifications et performances','Foire aux questions','Chiffrer ce lot','<form'])assert.ok(!html.includes(removed),slug+': '+removed)}
const contact=await fetchPage('/contact');for(const id of ['catalogue','configurateur','devis'])assert.ok(contact.includes('id="'+id+'"'));assert.ok(contact.includes('multipart')===false);assert.ok(contact.includes('Confidentialité')||contact.includes('confidentialité'));
const sitemap=await fetchPage('/sitemap.xml');const locations=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>new URL(m[1]).pathname);for(const route of locations)await fetchPage(route);
for(const [old,destination] of Object.entries({'/methodologie':'/etudes-et-travaux','/alliance':'/etudes-et-travaux','/metiers/couverture-etancheite':'/metiers/couverture-metallique','/metiers/bardage-specifique':'/metiers/bardage-metallique','/metiers/isolation-thermique':'/metiers/bardage-metallique','/metiers/toiture-vegetalisee-solaire':'/metiers/etancheite-toiture-terrasse','/devis':'/contact#devis'})){const r=await fetch(base+old,{redirect:'manual'});assert.equal(r.status,308,old);assert.equal(new URL(r.headers.get('location'),base).pathname+new URL(r.headers.get('location'),base).hash,destination)}
const pdf=await fetch(base+'/catalogue-cladis-2026.pdf');assert.equal(pdf.status,200);assert.ok(pdf.headers.get('content-type')?.includes('pdf'));assert.equal(new TextDecoder().decode((await pdf.arrayBuffer()).slice(0,5)),'%PDF-');
const project={operation:'Rénovation',building:'Industriel',town:'Chambéry',postcode:'73000',trades:['Bardage et façades','Couverture métallique'],surface:'Bardage 800 m²',system:'Acier',calendar:'2027'};
const data=()=>{const d=new FormData();d.set('name','Test local');d.set('email','test@example.invalid');d.set('description','Vérification locale uniquement.');d.set('project',JSON.stringify(project));return d};
let r=await fetch(base+'/api/contact',{method:'POST',body:new FormData()});assert.equal(r.status,400);
r=await fetch(base+'/api/contact',{method:'POST',body:data(),headers:{Origin:'https://unrelated.invalid'}});assert.equal(r.status,403);
let d=data();d.set('files',new File(['bad'],'program.exe'));r=await fetch(base+'/api/contact',{method:'POST',body:d});assert.equal(r.status,413);
r=await fetch(base+'/api/contact',{method:'POST',body:data()});assert.equal(r.status,503,'Unconfigured delivery must not claim success');
console.log('PASS: '+locations.length+' sitemap routes; four trade pages; homepage removals; seven redirects; catalogue PDF; contact validation, origin rejection, file rejection and honest unconfigured-delivery response.');
