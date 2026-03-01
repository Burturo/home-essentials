// ========== PRODUCT DATA ==========
// IMAGES: copiez vos photos dans images/ avec ces noms :
//   images/produit-1.jpg, images/produit-2.jpg, ... images/produit-23.jpg
// Si l'image n'existe pas encore, l'emoji s'affiche automatiquement.
const products = [
  { id:1, name:"Service de Table Royal", desc:"Set complet 24 pièces en porcelaine", price:"45 000", category:"electromenager", image:"images/produit-1.jpg", emoji:"\u{1F37D}", badge:"new" },
  { id:2, name:"Verres Cristallin", desc:"Lot de 6 verres en cristal élégant", price:"18 000", category:"electromenager", image:"images/produit-2.jpg", emoji:"\u{1F942}", badge:null },
  { id:9, name:"Parure de Lit Satin", desc:"Parure complète 6 pièces satin", price:"38 000", category:"literie", image:"images/produit-9.jpg", emoji:"\u{1F6CF}", badge:"new" },
  { id:10, name:"Couette Premium", desc:"Couette 4 saisons microfibre", price:"25 000", category:"literie", image:"images/produit-10.jpg", emoji:"\u{1F6CB}", badge:null },
  { id:11, name:"Oreillers Mémoire", desc:"Lot de 2 oreillers à mémoire de forme", price:"18 000", category:"literie", image:"images/produit-11.jpg", emoji:"\u{1F4A4}", badge:null },
  { id:12, name:"Drap-Housse Jersey", desc:"Drap-housse extensible 180x200", price:"12 000", category:"literie", image:"images/produit-12.jpg", emoji:"\u{1F9F5}", badge:null },
  { id:13, name:"Couverture Polaire", desc:"Couverture douce 200x240cm", price:"15 000", category:"literie", image:"images/produit-13.jpg", emoji:"\u{1F9F6}", badge:"promo" },
  { id:14, name:"Protège-Matelas", desc:"Protection imperméable premium", price:"10 000", category:"literie", image:"images/produit-14.jpg", emoji:"\u2728", badge:null },
  { id:15, name:"Coussins Décoratifs", desc:"Lot de 4 coussins brodés", price:"14 000", category:"literie", image:"images/produit-15.jpg", emoji:"\u{1FAA1}", badge:"new" },
  { id:16, name:"Mixeur Multifonction", desc:"Blender 1200W + accessoires", price:"55 000", category:"electromenager", image:"images/produit-16.jpg", emoji:"\u{1F50C}", badge:"new" },
  { id:17, name:"Bouilloire Inox", desc:"Bouilloire 1.7L thermostat", price:"18 000", category:"electromenager", image:"images/produit-17.jpg", emoji:"\u{1FAD7}", badge:null },
  { id:18, name:"Robot Cuisine Pro", desc:"Robot pétrin avec bol 5L", price:"85 000", category:"electromenager", image:"images/produit-18.jpg", emoji:"\u{1F916}", badge:"promo" },
  { id:19, name:"Fer à Repasser", desc:"Fer vapeur 2400W semelle céramique", price:"22 000", category:"electromenager", image:"images/produit-19.jpg", emoji:"\u{1F454}", badge:null },
  { id:20, name:"Ventilateur Tour", desc:"Ventilateur colonne télécommandé", price:"35 000", category:"electromenager", image:"images/produit-20.jpg", emoji:"\u{1F300}", badge:null },
  { id:21, name:"Grille-Pain", desc:"Toaster 2 fentes inox brossé", price:"15 000", category:"electromenager", image:"images/produit-21.jpg", emoji:"\u{1F35E}", badge:null },
  { id:22, name:"Machine à Café", desc:"Cafetière filtre programmable", price:"28 000", category:"electromenager", image:"images/produit-22.jpg", emoji:"\u2615", badge:"new" },
  { id:23, name:"Aspirateur Compact", desc:"Aspirateur sans sac 800W", price:"48 000", category:"electromenager", image:"images/produit-23.jpg", emoji:"\u{1F9F9}", badge:null },

  //Catégories vaisselle
  { id:24, name:"Service Dîner 32pcs Élégance", desc:"Service complet 6 personnes, assemblage de couleurs premium", price:"160 000", category:"vaisselle", image:"images/produit-24.jpg", emoji:"\u{1F37D}", badge:"new" },
  { id:25, name:"Service Terre Cuite 16pcs", desc:"Ensemble artisanal en terre cuite", price:"45 000", category:"vaisselle", image:"images/produit-25.jpg", emoji:"\u{1FAD5}", badge:null },
  { id:26, name:"Service Porcelaine Blanc Raffiné", desc:"Service dîner blanc en porcelaine haut de gamme", price:"45 000", category:"vaisselle", image:"images/produit-26.jpg", emoji:"\u{1F963}", badge:null },
  { id:27, name:"Service Dîner 16pcs Classique", desc:"Service complet élégant 16 pièces", price:"45 000", category:"vaisselle", image:"images/produit-27.jpg", emoji:"\u{1F374}", badge:null },
  { id:28, name:"Service 26pcs avec Service à Thé", desc:"Ensemble complet avec service à thé assorti", price:"120 000", category:"vaisselle", image:"images/produit-28.jpg", emoji:"\u2615", badge:"promo" },
  { id:29, name:"Thermos Grande Capacité 6L", desc:"Conservation 24h garantie haute qualité", price:"60 000", category:"vaisselle", image:"images/produit-29.jpg", emoji:"\u{1FAD6}", badge:"new" },
  { id:30, name:"Ensemble Thermos 4 Tasses", desc:"Contenance 3L, 4L, 5L et 6L", price:"0", category:"vaisselle", image:"images/produit-30.jpg", emoji:"\u{1FAD6}", badge:null },
  { id:31, name:"Ensemble Thermos 3pcs Premium", desc:"Disponible noir doré, argenté et doré", price:"160 000", category:"vaisselle", image:"images/produit-31.jpg", emoji:"\u{1FAD6}", badge:"promo" },
  { id:32, name:"Ensemble Thermos 3pcs Élégant", desc:"Thermos repas 3L, 2L et 1L blanc marron ou noir", price:"100 000", category:"vaisselle", image:"images/produit-32.jpg", emoji:"\u{1FAD6}", badge:null },
  { id:33, name:"Chaffing Dish 2pcs 3L", desc:"Contenant porcelaine utilisable en baking dish", price:"65 000", category:"vaisselle", image:"images/produit-33.jpg", emoji:"\u{1F372}", badge:null },
  { id:34, name:"Service Porcelaine 16pcs Premium", desc:"Ensemble élégant en porcelaine", price:"55 000", category:"vaisselle", image:"images/produit-34.jpg", emoji:"\u{1F963}", badge:null },
  { id:35, name:"Service 26pcs Moderne", desc:"Design moderne complet", price:"160 000", category:"vaisselle", image:"images/produit-35.jpg", emoji:"\u{1F37D}", badge:"new" },
  { id:36, name:"Service Dîner + Service à Thé 6 Pers", desc:"Ensemble complet avec théière", price:"120 000", category:"vaisselle", image:"images/produit-36.jpg", emoji:"\u2615", badge:null },
  { id:37, name:"Chaffing Dish 8L Réception", desc:"Idéal pour cérémonies et buffet", price:"50 000", category:"vaisselle", image:"images/produit-37.jpg", emoji:"\u{1F372}", badge:null },
  { id:38, name:"Ensemble Blanc Doré 2pcs", desc:"Design élégant blanc et doré", price:"25 000", category:"vaisselle", image:"images/produit-38.jpg", emoji:"\u2728", badge:null },
  { id:39, name:"Chaffing Dish 5.5L", desc:"Maintien au chaud longue durée", price:"45 000", category:"vaisselle", image:"images/produit-39.jpg", emoji:"\u{1F372}", badge:null },
  { id:40, name:"Nappe de Table + 4 Housses", desc:"Dimensions 2m20 x 1m40", price:"35 000", category:"vaisselle", image:"images/produit-40.jpg", emoji:"\u{1F9F5}", badge:null },
  { id:41, name:"Ronds de Serviette Lot de 6", desc:"Accessoires élégants pour table", price:"12 000", category:"vaisselle", image:"images/produit-41.jpg", emoji:"\u2728", badge:null },
  { id:42, name:"Rond de Serviette Unité", desc:"Vendu à l'unité", price:"3 000", category:"vaisselle", image:"images/produit-42.jpg", emoji:"\u2728", badge:null },
  { id:43, name:"Anneaux Bismillah", desc:"Décoration de table élégante", price:"4 500", category:"vaisselle", image:"images/produit-43.jpg", emoji:"\u2728", badge:"new" },
  { id:44, name:"Rond de Serviette Standard", desc:"Accessoire de table décoratif", price:"2 000", category:"vaisselle", image:"images/produit-44.jpg", emoji:"\u2728", badge:null },
];

// ========== STATE ==========
let currentFilter = 'all';
let currentPage = 1;
let itemsPerPage = 6;

function calcItemsPerPage() {
  const vh = window.innerHeight, vw = window.innerWidth;
  if (vw <= 500) return 4;
  if (vw <= 900) return 6;
  if (vh < 800) return 6;
  return 9;
}

function getFilteredProducts() {
  if (currentFilter === 'all') return products;
  return products.filter(p => p.category === currentFilter);
}

// ========== FILTER ==========
function setFilter(filter) {
  currentFilter = filter;
  currentPage = 1;
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.filter === filter)
  );
  renderProducts();
}

function filterFromCategory(cat) {
  document.getElementById('produits').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => setFilter(cat), 400);
}

// ========== RENDER PRODUCTS ==========
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  const start = (currentPage - 1) * itemsPerPage;
  const pageProducts = filtered.slice(start, start + itemsPerPage);
  const existing = grid.querySelectorAll('.product-card');
  existing.forEach(c => c.classList.add('hiding'));

  setTimeout(() => {
    grid.innerHTML = '';
    if (pageProducts.length === 0) {
      grid.innerHTML = '<div class="no-products"><div class="icon">\u{1F50D}</div><p>Aucun produit trouv\u00e9 dans cette cat\u00e9gorie</p></div>';
      renderPagination(totalPages);
      return;
    }

    pageProducts.forEach((product, i) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.style.transitionDelay = `${i * 0.07}s`;
      const badgeHTML = product.badge
        ? `<div class="product-badge badge-${product.badge}">${product.badge === 'new' ? 'Nouveau' : 'Promo'}</div>`
        : '';
      const msg = encodeURIComponent('Bonjour ! Je suis int\u00e9ress\u00e9(e) par "' + product.name + '" \u00e0 ' + product.price + ' FCFA. Est-il disponible ?');

      // Image: show real photo if exists, fallback to emoji
      const imageHTML = '<img src="' + product.image + '" alt="' + product.name + '" class="product-img" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="img-placeholder" style="display:none">' + product.emoji + '</div>';

      card.innerHTML = '<div class="product-image">' + imageHTML + badgeHTML + '</div>' +
        '<div class="product-info">' +
          '<div class="product-category-tag">' + (product.category === 'electromenager' ? '\u00c9lectrom\u00e9nager' : product.category.charAt(0).toUpperCase() + product.category.slice(1)) + '</div>' +
          '<div class="product-name">' + product.name + '</div>' +
          '<div class="product-desc">' + product.desc + '</div>' +
          '<div class="product-bottom">' +
            '<div class="product-price">' + product.price + ' <small>FCFA</small></div>' +
            '<a href="https://wa.me/22774150303?text=' + msg + '" target="_blank" class="btn-whatsapp" onclick="event.stopPropagation()">' +
              '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>' +
              ' Commander' +
            '</a>' +
          '</div>' +
        '</div>';
      grid.appendChild(card);
      requestAnimationFrame(() => requestAnimationFrame(() => card.classList.add('show')));
    });
    renderPagination(totalPages);
  }, 250);
}

// ========== PAGINATION ==========
function renderPagination(totalPages) {
  const c = document.getElementById('pagination');
  if (totalPages <= 1) { c.innerHTML = ''; return; }
  let h = '<button class="page-btn" onclick="goToPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>\u2039</button>';
  for (let i = 1; i <= totalPages; i++) {
    h += '<button class="page-btn ' + (i === currentPage ? 'active' : '') + '" onclick="goToPage(' + i + ')">' + i + '</button>';
  }
  h += '<button class="page-btn" onclick="goToPage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + '>\u203A</button>';
  c.innerHTML = h;
}

function goToPage(page) {
  const total = Math.ceil(getFilteredProducts().length / itemsPerPage);
  if (page < 1 || page > total) return;
  currentPage = page;
  renderProducts();
  document.getElementById('produits').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ========== TESTIMONIALS ==========
function scrollTestimonials(dir) {
  document.getElementById('testimonialsTrack').scrollBy({ left: dir * 370, behavior: 'smooth' });
}

// ========== FAQ ==========
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ========== COUNTDOWN ==========
function startCountdown() {
  const end = new Date();
  end.setDate(end.getDate() + 7);
  function update() {
    const now = new Date(), diff = end - now;
    if (diff <= 0) return;
    document.getElementById('cd-days').textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// ========== ANIMATED COUNTER ==========
let counterDone = false;
function animateCounters() {
  if (counterDone) return;
  const stats = document.querySelectorAll('.stat-number[data-count]');
  if (!stats[0] || stats[0].getBoundingClientRect().top > window.innerHeight * 0.9) return;
  counterDone = true;
  stats.forEach(stat => {
    const target = parseInt(stat.dataset.count), dur = 2000, start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / dur, 1);
      stat.textContent = Math.floor((1 - Math.pow(1 - progress, 3)) * target) + (target >= 100 ? '+' : '');
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// ========== SCROLL ==========
function handleScroll() {
  const scrollY = window.scrollY;
  document.getElementById('header').classList.toggle('scrolled', scrollY > 50);
  document.getElementById('backToTop').classList.toggle('visible', scrollY > 500);

  document.querySelectorAll('.reveal:not(.visible), .reveal-scale:not(.visible), .category-card:not(.visible)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) el.classList.add('visible');
  });

  const sections = ['accueil', 'categories', 'pourquoi', 'produits', 'temoignages', 'apropos', 'contact'];
  let current = sections[0];
  sections.forEach(id => {
    const s = document.getElementById(id);
    if (s && s.offsetTop - 200 <= scrollY) current = id;
  });
  document.querySelectorAll('nav a').forEach(a =>
    a.classList.toggle('active', a.getAttribute('href') === '#' + current)
  );
  animateCounters();
}

// ========== MOBILE MENU ==========
function closeMobileMenu() {
  document.getElementById('menuBtn').classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('menuBtn').addEventListener('click', function () {
  this.classList.toggle('open');
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

// ========== INIT ==========
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('resize', () => {
  const n = calcItemsPerPage();
  if (n !== itemsPerPage) { itemsPerPage = n; currentPage = 1; renderProducts(); }
});
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    setTimeout(() => document.getElementById('loader').remove(), 800);
  }, 1200);
});

itemsPerPage = calcItemsPerPage();
renderProducts();
handleScroll();
startCountdown();
