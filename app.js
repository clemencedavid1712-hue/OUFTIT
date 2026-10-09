(function () {
  'use strict';

  var OCCASIONS = ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Sport', 'Soirée', 'Week-end'];
  var SEASONS = ['Automne', 'Hiver', 'Printemps', 'Été'];
  var CATS = ['Haut', 'Bas', 'Robe / combinaison', 'Veste & manteau', 'Chaussures', 'Accessoire'];

  // id, titre, occasion, saisons ([] = toute l'année), pièces, palette, conseil
  var IDEAS = [
    { id: 'q1', t: 'Jean droit et pull maille', o: 'Quotidien', s: ['Automne', 'Hiver'],
      p: ['Jean droit brut', 'Pull en maille côtelée écru', 'Baskets blanches', 'Tote bag en toile'],
      c: ['#2F4A6B', '#E9E2D2', '#F4F4F0'], tip: 'Remonte les manches du pull pour casser la silhouette.' },
    { id: 'q2', t: 'Total look tons terre', o: 'Quotidien', s: ['Automne'],
      p: ['Pantalon large camel', 'Col roulé brun', 'Mocassins', 'Ceinture en cuir'],
      c: ['#B08A5B', '#6B4A33', '#D8C3A0'], tip: 'Reste dans deux nuances proches, le contraste vient de la matière.' },
    { id: 'q3', t: 'Trench et baskets', o: 'Quotidien', s: ['Automne', 'Printemps'],
      p: ['Trench beige', 'T-shirt blanc', 'Jean noir', 'Baskets en cuir'],
      c: ['#C9B28A', '#F4F4F0', '#1E1E1E'], tip: 'Laisse le trench ouvert pour garder de la légèreté.' },
    { id: 'q4', t: 'Robe en jean et collants', o: 'Quotidien', s: ['Printemps', 'Automne'],
      p: ['Robe chemise en jean', 'Collants opaques noirs', 'Bottines plates', 'Petit sac bandoulière'],
      c: ['#4C6A8C', '#1E1E1E', '#B9774B'], tip: 'Une ceinture fine marque la taille sans alourdir.' },
    { id: 'q5', t: 'Short en lin et top blanc', o: 'Quotidien', s: ['Été'],
      p: ['Short en lin sable', 'Top en coton blanc', 'Sandales plates', 'Lunettes de soleil'],
      c: ['#D8C8A4', '#F6F4EE', '#7A5A3A'], tip: 'Le lin se froisse, assume-le et choisis une coupe ample.' },
    { id: 'w1', t: 'Blazer et pantalon de tailleur', o: 'Travail & alternance', s: [],
      p: ['Blazer droit gris chiné', 'Pantalon de tailleur assorti', 'Chemisier blanc', 'Derbies ou mocassins'],
      c: ['#6B7280', '#F4F4F0', '#2B2B2B'], tip: 'Un blazer bien coupé suffit à rendre un jean présentable au bureau.' },
    { id: 'w2', t: 'Chemise, gilet et pantalon cigarette', o: 'Travail & alternance', s: ['Automne', 'Hiver', 'Printemps'],
      p: ['Chemise vert sauge', 'Gilet fin beige', 'Pantalon cigarette noir', 'Ballerines ou mocassins'],
      c: ['#8FA58D', '#D9CBB2', '#222222'], tip: 'Un gilet fin se garde toute la journée, même dans une salle chauffée.' },
    { id: 'w3', t: 'Robe midi et blazer', o: 'Travail & alternance', s: ['Printemps', 'Automne'],
      p: ['Robe midi unie', 'Blazer court', 'Bottines à petit talon', 'Boucles d\'oreilles discrètes'],
      c: ['#3E5C4A', '#C8B79A', '#1E1E1E'], tip: 'Pour une réunion client, garde un seul accessoire visible.' },
    { id: 'w4', t: 'Pull fin et jupe plissée', o: 'Travail & alternance', s: ['Automne', 'Hiver'],
      p: ['Jupe plissée midi', 'Pull fin col rond', 'Collants', 'Chaussures plates vernies'],
      c: ['#7B3F2E', '#E6DCCB', '#2B2B2B'], tip: 'Une jupe plissée bouge bien quand tu marches entre deux bureaux.' },
    { id: 'w5', t: 'Casual du vendredi', o: 'Travail & alternance', s: [],
      p: ['Jean noir', 'Chemise oversize', 'Veste en jean', 'Baskets minimalistes'],
      c: ['#1E1E1E', '#F4F4F0', '#3E5E82'], tip: 'Chemise oversize rentrée à l\'avant seulement, pour structurer.' },
    { id: 's1', t: 'Tenue d\'ambassadrice', o: 'Salon & événementiel', s: [],
      p: ['Blazer aux couleurs de l\'école ou neutre', 'Pantalon droit foncé', 'Top uni', 'Chaussures confortables', 'Badge bien visible'],
      c: ['#2B2B2B', '#9C4B34', '#F4F4F0'], tip: 'Tu restes debout des heures : le confort des chaussures passe avant tout.' },
    { id: 's2', t: 'Polo brodé et jean', o: 'Salon & événementiel', s: ['Printemps', 'Été', 'Automne'],
      p: ['Polo ou t-shirt de l\'école', 'Jean brut', 'Baskets propres', 'Sac léger pour les flyers'],
      c: ['#4B6B4F', '#2F4A6B', '#F4F4F0'], tip: 'Prévois une petite veste en plus, les halls d\'exposition sont frais.' },
    { id: 's3', t: 'Look « stand » en couches', o: 'Salon & événementiel', s: ['Automne', 'Hiver'],
      p: ['T-shirt blanc', 'Chemise ouverte', 'Gilet sans manches', 'Pantalon souple', 'Bottines plates'],
      c: ['#F4F4F0', '#6F7F5C', '#3B3B3B'], tip: 'Trois couches fines se retirent facilement quand la salle se remplit.' },
    { id: 's4', t: 'Pantalon fluide et top satiné', o: 'Salon & événementiel', s: ['Printemps', 'Été'],
      p: ['Pantalon fluide noir', 'Top satiné champagne', 'Sandales à talon bloc', 'Veste légère'],
      c: ['#E3CFA4', '#1E1E1E', '#B9774B'], tip: 'Le satiné fait habillé sans rendre la tenue rigide.' },
    { id: 'sp1', t: 'Course à pied par temps frais', o: 'Sport', s: ['Automne', 'Printemps'],
      p: ['Legging 7/8', 'Coupe-vent léger', 'T-shirt technique', 'Bandeau ou casquette'],
      c: ['#4B6B4F', '#1E1E1E', '#D98F73'], tip: 'Pars un peu frileuse : tu te réchauffes après deux kilomètres.' },
    { id: 'sp2', t: 'Course par temps froid', o: 'Sport', s: ['Hiver'],
      p: ['Collant thermique', 'Manches longues respirantes', 'Gilet sans manches', 'Gants fins', 'Tour de cou'],
      c: ['#2F3B52', '#8FA58D', '#E3DACB'], tip: 'Les extrémités d\'abord : gants et tour de cou changent tout.' },
    { id: 'sp3', t: 'Foot : entraînement', o: 'Sport', s: [],
      p: ['Short ou legging', 'Maillot respirant', 'Chaussettes hautes', 'Sweat à zip pour l\'échauffement'],
      c: ['#9C4B34', '#1E1E1E', '#F4F4F0'], tip: 'Un sweat à zip se retire sans passer par la tête, pratique à l\'échauffement.' },
    { id: 'sp4', t: 'Sortie sportive stylée', o: 'Sport', s: ['Printemps', 'Été'],
      p: ['Brassière de sport', 'Short cycliste', 'Veste de jogging oversize', 'Baskets de running'],
      c: ['#C7B7D6', '#2B2B2B', '#F4F4F0'], tip: 'Une veste oversize par-dessus transforme le sport en tenue de ville.' },
    { id: 'so1', t: 'Petite robe noire revisitée', o: 'Soirée', s: [],
      p: ['Robe noire courte', 'Veste en cuir', 'Bottines', 'Boucles d\'oreilles marquées'],
      c: ['#1A1A1A', '#7B3F2E', '#C8A24A'], tip: 'Le cuir donne du caractère, garde les bijoux pour un seul endroit.' },
    { id: 'so2', t: 'Ensemble satin vert', o: 'Soirée', s: ['Automne', 'Hiver', 'Printemps'],
      p: ['Chemise en satin vert bouteille', 'Jupe longue fendue', 'Sandales fines', 'Pochette'],
      c: ['#2F5240', '#1E1E1E', '#C8A24A'], tip: 'Vert foncé et or : une base de couleurs qui marche sous toutes les lumières.' },
    { id: 'so3', t: 'Jean, bustier et blazer', o: 'Soirée', s: ['Été', 'Printemps'],
      p: ['Jean taille haute', 'Haut bustier', 'Blazer léger', 'Talons ou sandales plates'],
      c: ['#F2E6D8', '#3E5E82', '#9C4B34'], tip: 'Le blazer sur les épaules suffit, pas besoin de l\'enfiler.' },
    { id: 'so4', t: 'Tout en velours côtelé', o: 'Soirée', s: ['Automne', 'Hiver'],
      p: ['Pantalon en velours bordeaux', 'Body noir', 'Manteau long', 'Bottes'],
      c: ['#6B2335', '#1E1E1E', '#B9A38A'], tip: 'Une seule matière chaude, le reste en noir pour équilibrer.' },
    { id: 'we1', t: 'Sweat et legging', o: 'Week-end', s: ['Automne', 'Hiver'],
      p: ['Sweat à capuche gris', 'Legging épais', 'Baskets montantes', 'Bonnet'],
      c: ['#9AA0A6', '#2B2B2B', '#9C4B34'], tip: 'Mélange deux gris différents pour que le look ait du relief.' },
    { id: 'we2', t: 'Salopette et marinière', o: 'Week-end', s: ['Printemps', 'Été'],
      p: ['Salopette en jean', 'Marinière', 'Espadrilles', 'Chapeau de paille'],
      c: ['#3E5E82', '#F4F4F0', '#C9B28A'], tip: 'Une manche retroussée et une bretelle lâche, c\'est le détail qui compte.' },
    { id: 'we3', t: 'Balade en forêt', o: 'Week-end', s: ['Automne'],
      p: ['Pantalon cargo kaki', 'Polaire', 'Chaussures de marche', 'Sac à dos léger'],
      c: ['#6F7F5C', '#B9774B', '#3B3B3B'], tip: 'Garde la polaire à portée de main, la température chute vite à l\'ombre.' },
    { id: 'we4', t: 'Robe d\'été et veste en jean', o: 'Week-end', s: ['Été', 'Printemps'],
      p: ['Robe fleurie', 'Veste en jean courte', 'Sandales', 'Panier tressé'],
      c: ['#E3B7A0', '#4C6A8C', '#8FA58D'], tip: 'La veste en jean se noue autour de la taille quand il fait chaud.' }
  ];

  // Mes tenues : photos de Clémence (mine: true) et inspirations (mine: false)
  var OUTFITS = [
    { id: 'o1', t: 'Casquette NY et jupe fleurie', o: 'Quotidien', s: ['Printemps', 'Été', 'Automne'], mine: true,
      img: 'tenue-1.jpg',
      p: ['T-shirt blanc', 'Jupe longue fleurie rose', 'Casquette NY marine', 'Sac noir à œillets et franges', 'Tote bag écru'],
      c: ['#F4F4F0', '#C2478A', '#1F2A44'],
      vary: 'Remplace la jupe par un jean droit et garde le sac noir : la casquette fait le reste.' },
    { id: 'o2', t: 'Top à pois et pantalon noir', o: 'Soirée', s: ['Printemps', 'Été', 'Automne'], mine: true,
      img: 'tenue-2.jpg',
      p: ['Top drapé à pois noir et blanc', 'Pantalon noir taille haute', 'Ceinture western argentée', 'Bracelet et bagues argentés'],
      c: ['#F4F4F0', '#1E1E1E', '#B8B8B8'],
      vary: 'Pour le bureau, ajoute un blazer noir. Pour sortir, passe à des sandales à talon.' },
    { id: 'o3', t: 'Barcelone : crop noir et jupe blanche', o: 'Week-end', s: ['Été', 'Printemps'], mine: true,
      img: 'tenue-3.jpg',
      p: ['Top côtelé noir court', 'Longue jupe blanche en gaze', 'Sac noir à œillets', 'Lunettes noires', 'Fleur rose en accroche'],
      c: ['#1E1E1E', '#F4F4F0', '#E04A6E'],
      vary: 'Essaie la jupe blanche avec le top à pois : même base, ambiance plus graphique.' },
    { id: 'o4', t: 'Blouse brodée et jean foncé', o: 'Travail & alternance', s: ['Printemps', 'Automne'], mine: true,
      img: 'tenue-4.jpg',
      p: ['Blouse blanche à broderie anglaise', 'Jean large taille haute bleu foncé', 'Sac noir à œillets', 'Lunettes sur la tête'],
      c: ['#F4F4F0', '#1F3556', '#1E1E1E'],
      vary: 'Une ceinture fine et des mocassins la rendent plus habillée pour un rendez-vous client.' },
    { id: 'o5', t: 'Pantalon rose et débardeur blanc', o: 'Week-end', s: ['Été', 'Printemps'], mine: true,
      img: 'tenue-5.jpg',
      p: ['Débardeur blanc court', 'Pantalon large en gaze de coton rose', 'Casquette NY', 'Lunettes noires'],
      c: ['#E0307A', '#F4F4F0', '#1F2A44'],
      vary: 'Le pantalon rose va très bien avec la blouse brodée : un look plus doux pour une sortie.' },
    { id: 'o6', t: 'Haut noir et short à pois', o: 'Soirée', s: ['Été', 'Printemps'], mine: false,
      img: 'tenue-6.jpg',
      p: ['Haut noir col montant, dos nu', 'Short taille haute à pois', 'Collier long doré', 'Bracelets fins dorés'],
      c: ['#1E1E1E', '#F4F4F0', '#C8A24A'],
      vary: 'Tu as déjà un top à pois : essaie-le avec un short noir uni pour retrouver cet esprit.' },
    { id: 'o7', t: 'Blazer noir et jean gris', o: 'Travail & alternance', s: ['Automne', 'Hiver', 'Printemps'], mine: true,
      img: 'tenue-7.jpg',
      p: ['Blazer noir oversize', 'Top noir manches longues court', 'Jean gris large taille haute', 'Ceinture noire à boucle western', 'Bracelet argenté'],
      c: ['#1E1E1E', '#9AA3AD', '#C0C0C0'],
      vary: 'Passe au pantalon noir pour un look plus formel, ou glisse le top à pois sous le blazer.' },
    { id: 'o8', t: 'Top noir et jean gris à ceinture', o: 'Quotidien', s: ['Automne', 'Printemps'], mine: true,
      img: 'tenue-8.jpg',
      p: ['Top noir manches longues court', 'Jean gris large taille haute', 'Ceinture noire à boucle western', 'Bracelet et bague argentés'],
      c: ['#1E1E1E', '#A9B1BA', '#C0C0C0'],
      vary: 'Ajoute le blazer pour aller au bureau, ou le sac noir à œillets pour sortir.' },
    { id: 'o9', t: 'Blazer noir et top à pois', o: 'Travail & alternance', s: ['Automne', 'Hiver', 'Printemps'], mine: true,
      img: 'tenue-9.jpg',
      p: ['Blazer noir oversize', 'Top à pois noir et blanc', 'Pantalon clair', 'Ceinture noire'],
      c: ['#1E1E1E', '#F4F4F0', '#D9D4C7'],
      vary: 'Remplace le pantalon clair par ton jean foncé pour un rendu plus strict en rendez-vous.' },
    { id: 'o10', t: 'Haut noir à manches dentelle et jean brut', o: 'Soirée', s: ['Automne', 'Hiver'], mine: false,
      img: 'tenue-10.jpg',
      p: ['Haut noir en maille, manches en dentelle', 'Jean brut foncé taille haute', 'Long collier doré en cœur', 'Bracelets dorés'],
      c: ['#2B2B2B', '#1F2A44', '#C8A24A'],
      vary: 'Tu as déjà le jean bleu foncé : essaie-le avec un haut noir aux manches travaillées.' },
    { id: 'o11', t: 'Top bustier orange et pantalon blanc', o: 'Soirée', s: ['Été', 'Printemps'], mine: false,
      img: 'tenue-11.jpg',
      p: ['Top bandeau bouffant orange', 'Pantalon large blanc fluide', 'Bracelet doré', 'Montre dorée'],
      c: ['#D9732A', '#F4F4F0', '#C8A24A'],
      vary: 'Avec ta longue jupe blanche en gaze, un top orange donnerait un look très estival.' },
    { id: 'o12', t: 'Pull jaune pâle et jean foncé', o: 'Quotidien', s: ['Printemps', 'Automne'], mine: false,
      img: 'tenue-12.jpg',
      p: ['Pull court en maille jaune pâle, manches courtes', 'Jean foncé', 'Longs colliers dorés', 'Bracelet fin'],
      c: ['#F1E4A0', '#1F2A44', '#C8A24A'],
      vary: 'Essaie-le avec ton jean large bleu foncé : le jaune pâle ressort bien sur du denim brut.' }
  ];

  // Tout ce que tu portes, repéré sur tes photos. Sert au générateur.
  var ALL = ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Soirée', 'Week-end'];
  var ALLS = ['Automne', 'Hiver', 'Printemps', 'Été'];
  var CLOTHES = [
    { id: 'h_tshirt', slot: 'haut', name: 'T-shirt blanc', sw: '#F4F4F0', occ: ['Quotidien', 'Week-end', 'Salon & événementiel'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'h_pois', slot: 'haut', name: 'Top drapé à pois noir et blanc', sw: '#F4F4F0', motif: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Soirée'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'h_crop', slot: 'haut', name: 'Top côtelé noir court', sw: '#1E1E1E', occ: ['Quotidien', 'Week-end', 'Soirée'], s: ['Printemps', 'Été'] },
    { id: 'h_ml', slot: 'haut', name: 'Top noir manches longues court', sw: '#2B2B2B', occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Soirée'], s: ['Automne', 'Hiver', 'Printemps'] },
    { id: 'h_blouse', slot: 'haut', name: 'Blouse blanche à broderie anglaise', sw: '#F4F4F0', dressy: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Week-end'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'h_deb', slot: 'haut', name: 'Débardeur blanc court', sw: '#EDEBE4', occ: ['Quotidien', 'Week-end'], s: ['Été', 'Printemps'] },
    { id: 'b_fleurie', slot: 'bas', name: 'Jupe longue fleurie rose', sw: '#C2478A', motif: true, skirt: true, occ: ['Quotidien', 'Week-end', 'Soirée'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'b_noir', slot: 'bas', name: 'Pantalon noir taille haute', sw: '#1E1E1E', pants: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Soirée'], s: ALLS },
    { id: 'b_blanche', slot: 'bas', name: 'Longue jupe blanche en gaze', sw: '#F4F4F0', skirt: true, occ: ['Quotidien', 'Week-end', 'Soirée'], s: ['Été', 'Printemps'] },
    { id: 'b_denim', slot: 'bas', name: 'Jean large bleu foncé', sw: '#1F3556', pants: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Week-end'], s: ALLS },
    { id: 'b_rose', slot: 'bas', name: 'Pantalon large en gaze rose', sw: '#E0307A', pants: true, occ: ['Quotidien', 'Week-end'], s: ['Été', 'Printemps'] },
    { id: 'b_gris', slot: 'bas', name: 'Jean gris large taille haute', sw: '#A9B1BA', pants: true, occ: ['Quotidien', 'Travail & alternance', 'Week-end', 'Salon & événementiel'], s: ALLS },
    { id: 'v_blazer', slot: 'veste', name: 'Blazer noir oversize', sw: '#1E1E1E', dressy: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Soirée'], s: ['Automne', 'Hiver', 'Printemps'] },
    { id: 's_noir', slot: 'sac', name: 'Sac noir à œillets et franges', sw: '#1E1E1E', occ: ALL, s: ALLS },
    { id: 's_tote', slot: 'sac', name: 'Tote bag écru', sw: '#E6DCCB', occ: ['Quotidien', 'Week-end', 'Salon & événementiel'], s: ALLS },
    { id: 'e_casq', slot: 'extra', name: 'Casquette NY marine', sw: '#1F2A44', cap: true, occ: ['Quotidien', 'Week-end'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'e_lun', slot: 'extra', name: 'Lunettes noires', sw: '#1E1E1E', occ: ['Quotidien', 'Week-end', 'Salon & événementiel'], s: ['Printemps', 'Été', 'Automne'] },
    { id: 'e_ceint', slot: 'extra', name: 'Ceinture noire à boucle western', sw: '#2B2B2B', belt: true, occ: ['Quotidien', 'Travail & alternance', 'Salon & événementiel', 'Week-end'], s: ALLS },
    { id: 'e_bij', slot: 'extra', name: 'Bracelet et bagues argentés', sw: '#C0C0C0', occ: ALL, s: ALLS }
  ];
  // Pièces de chaque tenue photographiée (sert à repérer les combinaisons déjà portées)
  var OUTFIT_IDS = {
    o1: ['h_tshirt', 'b_fleurie', 'e_casq', 's_noir', 's_tote'], o2: ['h_pois', 'b_noir', 'e_ceint', 'e_bij'],
    o3: ['h_crop', 'b_blanche', 's_noir', 'e_lun'], o4: ['h_blouse', 'b_denim', 's_noir', 'e_lun'],
    o5: ['h_deb', 'b_rose', 'e_casq', 'e_lun'], o7: ['v_blazer', 'h_ml', 'b_gris', 'e_ceint', 'e_bij'],
    o8: ['h_ml', 'b_gris', 'e_ceint', 'e_bij'], o9: ['v_blazer', 'h_pois', 'e_ceint']
  };
  OUTFITS.forEach(function (o) { o.ids = OUTFIT_IDS[o.id] || []; });
  CLOTHES.forEach(function (c) { c.img = 'item-' + c.id + '.jpg'; });

  var KEY = 'ouftit_v1';
  var state = { favs: [], wardrobe: [], looks: [], saved: [], wish: [] };
  var ui = { occ: 'Toutes', sea: 'Toutes', cat: 'Toutes', src: 'Toutes', gocc: 'Toutes', gsea: 'Toutes', kind: 'Toutes', shopq: '', gen: null, locks: {}, pick: [], spot: null, confirm: null };

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var d = JSON.parse(raw);
        state.favs = d.favs || [];
        state.wardrobe = d.wardrobe || [];
        state.looks = d.looks || [];
        state.saved = d.saved || [];
state.wish = d.wish || [];
      }
    } catch (e) {}
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); return true; }
    catch (e) { toast('Mémoire pleine : supprime quelques photos pour continuer.'); return false; }
  }

  var $ = function (id) { return document.getElementById(id); };
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var toastTimer;
  function toast(msg) {
    var el = $('toast');
    el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 2600);
  }

  /* ---------- Onglets ---------- */
  function showTab(name, scroll) {
    ['ideas', 'generator', 'outfits', 'wardrobe', 'shop', 'looks', 'favs'].forEach(function (n) {
      var on = n === name;
      $('p-' + n).hidden = !on;
      $('t-' + n).setAttribute('aria-selected', on ? 'true' : 'false');
    });
    try { sessionStorage.setItem('ouftit_tab', name); } catch (e) {}
    if (scroll) $('panels').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelector('.tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab');
    if (b) showTab(b.getAttribute('data-tab'), true);
  });
  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (g) showTab(g.getAttribute('data-go'), true);
  });

  /* ---------- Chips ---------- */
  function chips(container, values, current, key) {
    var all = ['Toutes'].concat(values);
    container.innerHTML = all.map(function (v) {
      return '<button type="button" class="chip" data-k="' + key + '" data-v="' + esc(v) + '" aria-pressed="' + (v === current) + '">' + esc(v) + '</button>';
    }).join('');
  }
  document.addEventListener('click', function (e) {
    var c = e.target.closest('.chip');
    if (!c || !c.hasAttribute('data-k')) return;
    ui[c.getAttribute('data-k')] = c.getAttribute('data-v');
    ui.spot = null;
    if (c.getAttribute('data-k').charAt(0) === 'g') { ui.gen = null; ui.locks = {}; }
    renderAll();
  });

  /* ---------- Idées ---------- */
  function filtered() {
    return IDEAS.filter(function (i) {
      var okO = ui.occ === 'Toutes' || i.o === ui.occ;
      var okS = ui.sea === 'Toutes' || i.s.length === 0 || i.s.indexOf(ui.sea) !== -1;
      return okO && okS;
    });
  }
  function ideaCard(i) {
    var fav = state.favs.indexOf(i.id) !== -1;
    var seasons = i.s.length ? i.s.join(' · ') : 'Toute l\'année';
    return '<article class="idea">' +
      '<div class="palette" aria-hidden="true">' + i.c.map(function (h) { return '<span style="background:' + h + '"></span>'; }).join('') + '</div>' +
      '<div class="idea-body">' +
      '<div class="idea-top"><h3>' + esc(i.t) + '</h3>' +
      '<button class="heart" type="button" data-fav="' + i.id + '" aria-pressed="' + fav + '" aria-label="' + (fav ? 'Retirer des favoris' : 'Ajouter aux favoris') + '"><svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5.5 6.2 5.5c2 0 3.2 1 3.8 2 .6-1 1.8-2 3.8-2 3.200 0 5 3.100 3.700 6.300C19.500 16.400 12 21 12 21z"/></svg></button></div>' +
      '<div class="tags"><span class="tag">' + esc(i.o) + '</span><span class="tag">' + esc(seasons) + '</span></div>' +
      '<ul class="pieces">' + i.p.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      '<div class="tip">' + esc(i.tip) + '</div>' +
      '</div></article>';
  }
  function renderIdeas() {
    chips($('f-occ'), OCCASIONS, ui.occ, 'occ');
    chips($('f-sea'), SEASONS, ui.sea, 'sea');
    var list = filtered();
    var spot = ui.spot ? IDEAS.filter(function (i) { return i.id === ui.spot; })[0] : null;
    $('spotlight').innerHTML = spot
      ? '<div class="spotlight"><div class="spotlight-label">Pour toi aujourd\'hui</div>' + ideaCard(spot) + '</div>' : '';
    $('ideas').innerHTML = list.length
      ? list.map(ideaCard).join('')
      : '<div class="empty"><strong>Aucune idée pour cette combinaison</strong>Essaie une autre saison ou remets l\'occasion sur « Toutes ».</div>';
    $('stat-ideas').textContent = IDEAS.length;
  }
  function doSurprise() {
    showTab('ideas');
    var list = filtered();
    if (!list.length) { toast('Aucune idée avec ces filtres.'); return; }
    var pick;
    do { pick = list[Math.floor(Math.random() * list.length)]; } while (list.length > 1 && pick.id === ui.spot);
    ui.spot = pick.id;
    renderIdeas();
    $('spotlight').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  Array.prototype.forEach.call(document.querySelectorAll('.js-surprise'), function (b) {
    b.addEventListener('click', doSurprise);
  });
  document.addEventListener('click', function (e) {
    var h = e.target.closest('[data-fav]');
    if (!h) return;
    var id = h.getAttribute('data-fav');
    var ix = state.favs.indexOf(id);
    if (ix === -1) state.favs.push(id); else state.favs.splice(ix, 1);
    save();
    renderIdeas(); renderOutfits(); renderFavs();
  });

  /* ---------- Mes tenues ---------- */
  function outfitCard(o) {
    var fav = state.favs.indexOf(o.id) !== -1;
    var seasons = o.s.length ? o.s.join(' · ') : 'Toute l\'année';
    return '<article class="idea outfit">' +
      '<div class="outfit-photo"><img src="' + o.img + '" alt="' + esc(o.t) + '" loading="lazy"></div>' +
      '<div class="idea-body">' +
      '<div class="idea-top"><h3>' + esc(o.t) + '</h3>' +
      '<button class="heart" type="button" data-fav="' + o.id + '" aria-pressed="' + fav + '" aria-label="' + (fav ? 'Retirer des favoris' : 'Ajouter aux favoris') + '"><svg viewBox="0 0 24 24"><path d="M12 21s-7.500-4.600-9.500-9.200C1.200 8.600 3 5.500 6.200 5.500c2 0 3.200 1 3.800 2 .6-1 1.800-2 3.800-2 3.200 0 5 3.100 3.700 6.300C19.500 16.400 12 21 12 21z"/></svg></button></div>' +
      '<div class="tags"><span class="tag">' + esc(o.o) + '</span><span class="tag">' + esc(seasons) + '</span>' + (o.mine ? '' : '<span class="tag pink">Inspiration</span>') + '</div>' +
      '<div class="palette small" aria-hidden="true">' + o.c.map(function (h) { return '<span style="background:' + h + '"></span>'; }).join('') + '</div>' +
      '<ul class="pieces">' + o.p.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' +
      '<div class="tip"><strong>Pour varier :</strong> ' + esc(o.vary) + '</div>' +
      '</div></article>';
  }
  function renderOutfits() {
    chips($('f-src'), ['Mes tenues', 'Inspirations'], ui.src, 'src');
    var list = OUTFITS.filter(function (o) { return ui.src === 'Toutes' || (ui.src === 'Mes tenues') === o.mine; });
    $('outfits').innerHTML = list.map(outfitCard).join('');
  }

  /* ---------- Générateur ---------- */
  var SLOTS = ['haut', 'bas', 'veste', 'sac', 'extra', 'chaussures'];
  var SLOT_LABEL = { haut: 'Haut', bas: 'Bas', veste: 'Veste', sac: 'Sac', extra: 'Accessoire', chaussures: 'Chaussures' };
  var CAT_SLOT = { 'Haut': 'haut', 'Bas': 'bas', 'Robe / combinaison': 'robe', 'Veste & manteau': 'veste', 'Chaussures': 'chaussures', 'Accessoire': 'extra' };

  function genPool(slot) {
    var res = CLOTHES.filter(function (c) {
      return c.slot === slot && (ui.gocc === 'Toutes' || c.occ.indexOf(ui.gocc) !== -1) && (ui.gsea === 'Toutes' || c.s.indexOf(ui.gsea) !== -1);
    });
    state.wardrobe.forEach(function (p) {
      var sl = CAT_SLOT[p.cat];
      if (sl === slot || (slot === 'haut' && sl === 'robe')) res.push({ id: p.id, slot: slot, name: p.name, img: p.img, up: true, dress: sl === 'robe' });
    });
    return res;
  }
  function compat(a, b) {
    if (!a || !b) return true;
    if (a.motif && b.motif) return false;
    if ((a.belt && b.skirt) || (b.belt && a.skirt)) return false;
    if ((a.cap && b.dressy) || (b.cap && a.dressy)) return false;
    return true;
  }
  function okWith(it, g) { return SLOTS.every(function (s) { return compat(it, g[s]); }); }
  function rnd(a) { return a[Math.floor(Math.random() * a.length)]; }
  function knownOutfit(g) {
    if (!g.haut || !g.bas) return null;
    return OUTFITS.filter(function (o) { return o.mine && o.ids.indexOf(g.haut.id) !== -1 && o.ids.indexOf(g.bas.id) !== -1; })[0] || null;
  }
  function genKey(g) { return SLOTS.map(function (s) { return g[s] ? g[s].id : '-'; }).join('|'); }
  function buildOne(old) {
    var g = {}, locks = ui.locks;
    function free(slot, fn) { if (locks[slot]) g[slot] = old[slot] || null; else g[slot] = fn(); }
    free('haut', function () { var p = genPool('haut'); return p.length ? rnd(p) : null; });
    free('bas', function () {
      if (g.haut && g.haut.dress) return null;
      var p = genPool('bas').filter(function (x) { return okWith(x, g); });
      return p.length ? rnd(p) : null;
    });
    var pv = (ui.gocc === 'Travail & alternance' || ui.gocc === 'Salon & événementiel') ? 0.85 : ui.gocc === 'Soirée' ? 0.5 : (ui.gsea === 'Automne' || ui.gsea === 'Hiver') ? 0.6 : 0.2;
    free('veste', function () {
      var p = genPool('veste').filter(function (x) { return okWith(x, g); });
      return p.length && Math.random() < pv ? rnd(p) : null;
    });
    free('sac', function () {
      var p = genPool('sac').filter(function (x) { return okWith(x, g); });
      return p.length && Math.random() < 0.85 ? rnd(p) : null;
    });
    free('extra', function () {
      var p = genPool('extra').filter(function (x) { return okWith(x, g); });
      return p.length && Math.random() < 0.8 ? rnd(p) : null;
    });
    free('chaussures', function () { var p = genPool('chaussures'); return p.length ? rnd(p) : null; });
    return g;
  }
  function generate() {
    var old = ui.gen || {}, oldKey = ui.gen ? genKey(ui.gen) : '', best = null;
    for (var t = 0; t < 40; t++) {
      var g = buildOne(old);
      if (genKey(g) === oldKey && t < 30) continue;
      if (!knownOutfit(g)) { best = g; break; }
      if (!best) best = g;
    }
    ui.gen = best || buildOne(old);
  }
  var LOCK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  function genCard(slot, it) {
    var locked = !!ui.locks[slot];
    var tile = it.img
      ? '<div class="gtile"><img src="' + it.img + '" alt=""></div>'
      : '<div class="gtile"><span class="dot" style="background:' + it.sw + '"></span></div>';
    return '<div class="gcard">' + tile +
      '<div class="gmeta"><span class="cat">' + SLOT_LABEL[slot] + '</span><span class="name">' + esc(it.name) + '</span></div>' +
      '<button class="lock" type="button" data-lock="' + slot + '" aria-pressed="' + locked + '" aria-label="' + (locked ? 'Déverrouiller' : 'Garder') + ' : ' + esc(it.name) + '">' + LOCK_SVG + '</button></div>';
  }
  function renderGen() {
    chips($('g-occ'), ALL, ui.gocc, 'gocc');
    chips($('g-sea'), ALLS, ui.gsea, 'gsea');
    if (!ui.gen) generate();
    var g = ui.gen;
    var filled = SLOTS.filter(function (s) { return g[s]; });
    $('gen-result').innerHTML = filled.length
      ? filled.map(function (s) { return genCard(s, g[s]); }).join('')
      : '<div class="empty" style="grid-column:1/-1"><strong>Aucune pièce pour ce choix</strong>Essaie une autre occasion ou remets la saison sur « Toutes ».</div>';
    var k = knownOutfit(g);
    $('gen-status').innerHTML = !filled.length ? '' : (!g.haut || !g.bas) && !(g.haut && g.haut.dress)
      ? '<span class="pill">Il te manque une pièce</span> Rien dans tes vêtements pour ' + (g.haut ? 'le bas' : 'le haut') + ' avec ce choix. Ajoute-en dans ta garde-robe.' : k
      ? '<span class="pill">Déjà portée</span> Ce haut et ce bas sont dans « ' + esc(k.t) + ' ».'
      : '<span class="pill new">Nouvelle combinaison</span> Ce haut et ce bas ne sont pas encore ensemble sur tes photos.';
    $('btn-save-gen').disabled = !filled.length;
    $('gen-saved').innerHTML = state.saved.length
      ? state.saved.map(function (s) {
          var armed = ui.confirm === s.id;
          return '<article class="look"><div class="look-head"><div><h3>' + esc(s.occ) + (s.sea !== 'Toutes' ? ' · ' + esc(s.sea) : '') + '</h3></div>' +
            '<button class="btn small' + (armed ? ' danger' : '') + '" type="button" data-delgen="' + s.id + '">' + (armed ? 'Confirmer' : 'Supprimer') + '</button></div>' +
            '<ul class="pieces">' + s.names.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul></article>';
        }).join('')
      : '<div class="empty"><strong>Rien de gardé pour l\'instant</strong>Quand une tenue te plaît, touche « Garder cette tenue ».</div>';
  }
  Array.prototype.forEach.call(document.querySelectorAll('.js-gen'), function (b) {
    b.addEventListener('click', function () { generate(); renderGen(); });
  });
  $('btn-save-gen').addEventListener('click', function () {
    var g = ui.gen; if (!g) return;
    var names = SLOTS.filter(function (s) { return g[s]; }).map(function (s) { return g[s].name; });
    if (!names.length) return;
    state.saved.unshift({ id: 'g' + Date.now(), names: names, occ: ui.gocc === 'Toutes' ? 'Toutes occasions' : ui.gocc, sea: ui.gsea });
    if (save()) toast('Tenue gardée.'); else state.saved.shift();
    renderGen();
  });
  document.addEventListener('click', function (e) {
    var l = e.target.closest('[data-lock]');
    if (l) { var s = l.getAttribute('data-lock'); ui.locks[s] = !ui.locks[s]; renderGen(); return; }
    var d = e.target.closest('[data-delgen]');
    if (d) {
      var id = d.getAttribute('data-delgen');
      if (ui.confirm !== id) { ui.confirm = id; renderGen(); return; }
      ui.confirm = null;
      state.saved = state.saved.filter(function (x) { return x.id !== id; });
      save(); renderGen();
    }
  });

  /* ---------- Favoris ---------- */
  function renderFavs() {
    var list = IDEAS.filter(function (i) { return state.favs.indexOf(i.id) !== -1; });
    var favO = OUTFITS.filter(function (o) { return state.favs.indexOf(o.id) !== -1; });
    $('stat-favs').textContent = list.length + favO.length;
    $('favs').innerHTML = (list.length || favO.length)
      ? favO.map(outfitCard).join('') + list.map(ideaCard).join('')
      : '<div class="empty" style="grid-column:1/-1"><strong>Aucun favori pour l\'instant</strong>Touche le cœur d\'une idée dans l\'onglet Idées pour la retrouver ici.</div>';
  }

  /* ---------- Garde-robe ---------- */
  function pieceById(id) { return state.wardrobe.filter(function (p) { return p.id === id; })[0]; }
  function renderWardrobe() {
    chips($('f-cat'), CATS, ui.cat, 'cat');
    var list = state.wardrobe.filter(function (p) { return ui.cat === 'Toutes' || p.cat === ui.cat; });
    $('wardrobe').innerHTML = list.length
      ? '<div class="grid">' + list.map(function (p) {
          var armed = ui.confirm === p.id;
          return '<div class="piece"><div class="ph"><img src="' + p.img + '" alt="' + esc(p.name) + '"></div>' +
            '<div class="meta"><span class="name">' + esc(p.name) + '</span><span class="cat">' + esc(p.cat) + '</span></div>' +
            '<button class="btn small' + (armed ? ' clay' : '') + ' del" type="button" data-del="' + p.id + '">' + (armed ? 'Confirmer' : 'Supprimer') + '</button></div>';
        }).join('') + '</div>'
      : '<div class="empty"><strong>' + (state.wardrobe.length ? 'Rien dans cette catégorie' : 'Ta garde-robe est vide') + '</strong>' +
        (state.wardrobe.length ? 'Choisis une autre catégorie.' : 'Ajoute une première photo avec le formulaire ci-dessus.') + '</div>';
    $('stat-pieces').textContent = state.wardrobe.length;
    var hp = $('hero-photo');
    hp.innerHTML = '<img src="' + OUTFITS[4].img + '" alt="">';
    hp.hidden = false;
  }
  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-del]');
    if (!d) return;
    var id = d.getAttribute('data-del');
    if (ui.confirm !== id) { ui.confirm = id; renderWardrobe(); return; }
    ui.confirm = null;
    state.wardrobe = state.wardrobe.filter(function (p) { return p.id !== id; });
    state.looks.forEach(function (l) { l.items = l.items.filter(function (x) { return x !== id; }); });
    ui.pick = ui.pick.filter(function (x) { return x !== id; });
    save(); renderWardrobe(); renderLooks();
  });

  function shrink(file) {
    return new Promise(function (resolve, reject) {
      var fr = new FileReader();
      fr.onerror = reject;
      fr.onload = function () {
        var img = new Image();
        img.onerror = reject;
        img.onload = function () {
          var max = 560, r = Math.min(1, max / Math.max(img.width, img.height));
          var c = document.createElement('canvas');
          c.width = Math.round(img.width * r); c.height = Math.round(img.height * r);
          c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
          resolve(c.toDataURL('image/jpeg', 0.72));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  $('add-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var files = Array.prototype.slice.call($('piece-file').files);
    if (!files.length) { toast('Choisis au moins une photo.'); return; }
    var name = $('piece-name').value.trim();
    var cat = $('piece-cat').value;
    Promise.all(files.map(shrink)).then(function (imgs) {
      imgs.forEach(function (img, i) {
        state.wardrobe.unshift({
          id: 'p' + Date.now() + '_' + i,
          cat: cat,
          name: name ? (imgs.length > 1 ? name + ' ' + (i + 1) : name) : 'Pièce sans nom',
          img: img
        });
      });
      if (save()) {
        $('add-form').reset();
        toast(imgs.length > 1 ? imgs.length + ' pièces ajoutées.' : 'Pièce ajoutée.');
      } else {
        state.wardrobe.splice(0, imgs.length);
      }
      renderWardrobe(); renderLooks();
    }).catch(function () { toast('Cette photo n\'a pas pu être lue.'); });
  });

  
/* ---------- Shopping ---------- */
var SITES = [
{ n: 'Vinted', k: 'Seconde main', u: 'https://www.vinted.fr/catalog?search_text=' },
{ n: 'Vestiaire Collective', k: 'Seconde main', u: 'https://fr.vestiairecollective.com/search/?q=' },
{ n: 'Depop', k: 'Seconde main', u: 'https://www.depop.com/fr/search/?q=' },
{ n: 'Zalando', k: 'Neuf', u: 'https://www.zalando.fr/catalogue/?q=' },
{ n: 'Zara', k: 'Neuf', u: 'https://www.zara.com/fr/fr/search?searchTerm=' },
{ n: 'H&M', k: 'Neuf', u: 'https://www2.hm.com/fr_fr/search-results.html?q=' },
{ n: 'Shein', k: 'Neuf', u: 'https://fr.shein.com/pdsearch/' },
{ n: 'Google Shopping', k: 'Comparer', u: 'https://www.google.com/search?tbm=shop&q=' },
{ n: 'Pinterest', k: 'Comparer', u: 'https://www.pinterest.fr/search/pins/?q=' }
];
var SIZES = ['Taille (optionnel)', 'XS', 'S', 'M', 'L', 'XL', '34', '36', '38', '40', '42', '36 chaussures', '37 chaussures', '38 chaussures', '39 chaussures'];
var SHOP_IDEAS = ['baskets blanches femme', 'mocassins noirs femme', 'bottines noires', 'sandales plates', 'jean droit bleu', 'pull maille écru', 'robe noire courte', 'veste en cuir noire', 'trench beige', 'pantalon de tailleur', 'short à pois taille haute', 'haut noir manches dentelle', 'top bandeau orange', 'pull jaune pâle femme', 'pantalon blanc fluide', 'collier long doré', 'sac bandoulière noir'];
function shopQuery() {
var q = $('shop-q').value.trim(), s = $('shop-size').value;
if (q && $('shop-size').selectedIndex > 0) q += ' ' + s.replace(' chaussures', '');
return q;
}
function shopUrl(site, q) {
var e = encodeURIComponent(q);
return site.n === 'Shein' ? site.u + e + '.html' : site.u + e;
}
function renderShopLinks(q) {
var el = $('shop-links');
if (!q) { el.innerHTML = ''; return; }
var list = SITES.filter(function (s) { return ui.kind === 'Toutes' || s.k === ui.kind; });
el.innerHTML = '<p class="shopq">Recherche : <b>' + esc(q) + '</b></p><div class="shoplinks">' + list.map(function (s) {
return '<a class="shoplink" href="' + esc(shopUrl(s, q)) + '" target="_blank" rel="noopener noreferrer"><strong>' + esc(s.n) + '</strong><span>' + esc(s.k) + ' · ouvre le site</span></a>';
}).join('') + '</div>';
}
function renderShop() {
chips($('shop-kind'), ['Seconde main', 'Neuf', 'Comparer'], ui.kind, 'kind');
if (!$('shop-size').options.length) $('shop-size').innerHTML = SIZES.map(function (s) { return '<option>' + esc(s) + '</option>'; }).join('');
$('shop-ideas').innerHTML = SHOP_IDEAS.map(function (s) { return '<button type="button" class="chip" data-sidea="' + esc(s) + '" aria-pressed="false">' + esc(s) + '</button>'; }).join('');
renderShopLinks(ui.shopq);
$('shop-wishes').innerHTML = state.wish.length
? state.wish.map(function (w) {
var armed = ui.confirm === 'w' + w.id;
return '<article class="look"><div class="look-head"><div><h3>' + esc(w.q) + '</h3></div>' +
'<button class="btn small' + (armed ? ' danger' : '') + '" type="button" data-delwish="' + w.id + '">' + (armed ? 'Confirmer' : 'Supprimer') + '</button></div>' +
'<div class="tags">' + SITES.slice(0, 4).map(function (s) { return '<a class="tag pink" href="' + esc(shopUrl(s, w.q)) + '" target="_blank" rel="noopener noreferrer">' + esc(s.n) + '</a>'; }).join('') + '</div></article>';
}).join('')
: '<div class="empty"><strong>Aucune envie pour l\'instant</strong>Cherche une pièce puis touche « Ajouter à mes envies » pour la retrouver ici.</div>';
}
$('shop-form').addEventListener('submit', function (e) {
e.preventDefault();
var q = shopQuery();
if (!q) { toast('Écris ce que tu cherches.'); return; }
ui.shopq = q; renderShopLinks(q);
});
$('shop-wish').addEventListener('click', function () {
var q = shopQuery();
if (!q) { toast('Écris ce que tu cherches.'); return; }
if (state.wish.some(function (w) { return w.q === q; })) { toast('Déjà dans tes envies.'); return; }
state.wish.unshift({ id: String(Date.now()), q: q });
if (save()) toast('Ajouté à tes envies.'); else state.wish.shift();
ui.shopq = q; renderShop();
});
document.addEventListener('click', function (e) {
var i = e.target.closest('[data-sidea]');
if (i) { $('shop-q').value = i.getAttribute('data-sidea'); ui.shopq = shopQuery(); renderShopLinks(ui.shopq); $('shop-links').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); return; }
var d = e.target.closest('[data-delwish]');
if (d) {
var id = d.getAttribute('data-delwish');
if (ui.confirm !== 'w' + id) { ui.confirm = 'w' + id; renderShop(); return; }
ui.confirm = null;
state.wish = state.wish.filter(function (w) { return w.id !== id; });
save(); renderShop();
}
});

/* ---------- Looks ---------- */
  function renderLooks() {
    var picker = $('look-picker');
    picker.innerHTML = state.wardrobe.length
      ? '<p class="hint" style="margin-bottom:.5rem">Touche les pièces à inclure (' + ui.pick.length + ' choisie' + (ui.pick.length > 1 ? 's' : '') + ').</p><div class="grid">' +
        state.wardrobe.map(function (p) {
          return '<button type="button" class="piece selectable" data-pick="' + p.id + '" aria-pressed="' + (ui.pick.indexOf(p.id) !== -1) + '">' +
            '<div class="ph"><img src="' + p.img + '" alt=""></div><div class="meta"><span class="name">' + esc(p.name) + '</span><span class="cat">' + esc(p.cat) + '</span></div></button>';
        }).join('') + '</div>'
      : '<div class="empty"><strong>Pas encore de pièces</strong>Ajoute d\'abord des photos dans « Ma garde-robe » pour composer un look.</div>';

    $('looks').innerHTML = state.looks.length
      ? state.looks.map(function (l) {
          var armed = ui.confirm === l.id;
          var items = l.items.map(pieceById).filter(Boolean);
          return '<article class="look"><div class="look-head"><div><h3>' + esc(l.name) + '</h3><div class="tags" style="margin-top:.3rem"><span class="tag">' + esc(l.occ) + '</span><span class="tag">' + items.length + ' pièce' + (items.length > 1 ? 's' : '') + '</span></div></div>' +
            '<button class="btn small' + (armed ? ' clay' : '') + '" type="button" data-dellook="' + l.id + '">' + (armed ? 'Confirmer' : 'Supprimer') + '</button></div>' +
            '<div class="look-pieces">' + items.map(function (p) { return '<div class="ph"><img src="' + p.img + '" alt="' + esc(p.name) + '"></div>'; }).join('') + '</div></article>';
        }).join('')
      : '';
    $('stat-looks').textContent = state.looks.length;
  }
  document.addEventListener('click', function (e) {
    var p = e.target.closest('[data-pick]');
    if (p) {
      var id = p.getAttribute('data-pick'), ix = ui.pick.indexOf(id);
      if (ix === -1) ui.pick.push(id); else ui.pick.splice(ix, 1);
      renderLooks(); return;
    }
    var d = e.target.closest('[data-dellook]');
    if (d) {
      var lid = d.getAttribute('data-dellook');
      if (ui.confirm !== lid) { ui.confirm = lid; renderLooks(); return; }
      ui.confirm = null;
      state.looks = state.looks.filter(function (l) { return l.id !== lid; });
      save(); renderLooks();
    }
  });
  $('look-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!ui.pick.length) { toast('Choisis au moins une pièce.'); return; }
    var name = $('look-name').value.trim() || 'Look sans nom';
    state.looks.unshift({ id: 'l' + Date.now(), name: name, occ: $('look-occ').value, items: ui.pick.slice() });
    if (save()) {
      ui.pick = []; $('look-name').value = '';
      toast('Look enregistré.');
    } else { state.looks.shift(); }
    renderLooks();
  });

  /* ---------- Démarrage ---------- */
  function renderAll() { renderIdeas(); renderGen(); renderOutfits(); renderFavs(); renderWardrobe(); renderLooks(); renderShop(); }
  function init() {
    load();
    $('piece-cat').innerHTML = CATS.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
    $('look-occ').innerHTML = OCCASIONS.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
    renderAll();
    var t = 'ideas';
    try { t = sessionStorage.getItem('ouftit_tab') || 'ideas'; } catch (e) {}
    showTab(t);
  }
  init();
})();
