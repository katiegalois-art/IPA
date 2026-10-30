/* Jeux de cartes IPA — application de jeu et de gestion
   Vanilla JS, sans dépendance. Données : data/decks.js (window.DECKS).
   Les jeux importés et la progression sont conservés dans le navigateur (localStorage). */
(function () {
  "use strict";

  // ---------- utilitaires ----------
  const app = document.getElementById("app");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} },
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const VALORDER = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R", "A"];
  const VALNAME = { V: "Valet", D: "Dame", R: "Roi", A: "As" };
  function toast(msg) {
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
    setTimeout(() => t.remove(), 2400);
  }
  function download(name, text) {
    const blob = new Blob([text], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  // ---------- données ----------
  const builtin = (window.DECKS || []).map((d) => ({ ...d, builtin: true }));
  const customDecks = () => store.get("ipa_custom_decks", []);
  const allDecks = () => [...builtin, ...customDecks()];
  const deckById = (id) => allDecks().find((d) => d.id === id);
  const suitOf = (deck, key) => deck.couleurs.find((c) => c.cle === key);
  function cardsOf(deck) {
    const out = [];
    deck.situations.forEach((s) => deck.couleurs.forEach((c) => {
      const carte = s.cartes[c.cle]; if (carte) out.push({ id: s.valeur + "-" + c.cle, sit: s, coul: c, carte });
    }));
    return out;
  }
  const progressKey = (deck) => "ipa_progress_" + deck.id;

  function validateDeck(d) {
    const errs = [];
    if (!d || typeof d !== "object") return ["Le fichier ne contient pas un jeu valide."];
    if (!d.id) errs.push("Champ « id » manquant.");
    if (!d.titre) errs.push("Champ « titre » manquant.");
    if (!Array.isArray(d.couleurs) || d.couleurs.length !== 4) errs.push("« couleurs » doit contenir 4 éléments.");
    if (!Array.isArray(d.situations) || !d.situations.length) errs.push("« situations » doit contenir au moins une situation.");
    (d.situations || []).forEach((s, i) => {
      if (!s.valeur || !s.titre) errs.push(`Situation ${i + 1} : « valeur » et « titre » requis.`);
      (d.couleurs || []).forEach((c) => {
        const k = s.cartes && s.cartes[c.cle];
        if (!k || !k.question || !Array.isArray(k.reperes)) errs.push(`Situation ${i + 1}, couleur ${c.cle} : carte incomplète.`);
      });
    });
    return errs.slice(0, 8);
  }

  // ---------- composants ----------
  function cardHTML(deck, sit, coul, { open = false, status = "" } = {}) {
    const c = sit.cartes[coul.cle];
    const first = deck.couleurs[0].cle;
    const sitLine = deck.rappel && coul.cle !== first && sit.cartes[first]
      ? `<p class="sit"><b>Situation :</b> ${esc(sit.cartes[first].vignette)}</p>` : "";
    const badge = status === "ok" ? '<span class="badge ok">Réussie</span>' : status === "revoir" ? '<span class="badge ko">À revoir</span>' : "";
    return `<article class="card" style="--c:${esc(coul.col)}">
      <div class="hd">
        <div class="idx"><div class="v">${esc(sit.valeur)}</div><div class="s">${esc(coul.sym)}</div></div>
        <div style="flex:1">
          <div class="step">${esc(coul.sym)} ${esc(coul.nom)} · ${esc(coul.etape)}</div>
          <h3>${esc(sit.titre)}</h3>
          ${sit.sous_titre ? `<div class="sub">${esc(sit.sous_titre)}</div>` : ""}
          ${coul.comp ? `<div class="comp">Compétences IPA : ${esc(coul.comp)}</div>` : ""}
        </div>${badge}
      </div>
      <div class="bd">
        ${sitLine}
        <p class="vig">${esc(c.vignette)}</p>
        <p class="q">${esc(c.question)}</p>
        <details ${open ? "open" : ""}><summary><span class="cl">Afficher les repères attendus</span><span class="op">Repères attendus</span></summary>
          <ul>${c.reperes.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></details>
      </div></article>`;
  }
  function jokerHTML(j, n) {
    return `<article class="card joker"><div class="jl">JOKER ${n}</div><div class="ji">${esc(j.icone || "★")}</div>
      <h3>${esc(j.titre)}</h3><p>${esc(j.texte)}</p><div class="jr">${esc(j.regle || "")}</div></article>`;
  }
  function deckShell(deck, tab, inner) {
    const tabs = [["", "Jouer"], ["cartes", "Cartes"], ["regles", "Règles"]];
    document.documentElement.style.setProperty("--dc", deck.couleur || "#1B2A4A");
    return `<div style="--dc:${esc(deck.couleur)}">
      <section class="deck-head"><div class="kicker" style="color:var(--gold)">${esc(deck.code || "")} · ${deck.situations.length * 4} cartes</div>
        <h1>${esc(deck.titre)}</h1></section>
      <nav class="tabs">${tabs.map(([k, l]) => `<a href="#/jeu/${esc(deck.id)}${k ? "/" + k : ""}" class="${tab === k ? "on" : ""}">${l}</a>`).join("")}
        <a href="#/jeu/${esc(deck.id)}/eclair" class="${tab === "eclair" ? "on" : ""}">Tirage éclair</a>
        <a href="#/jeu/${esc(deck.id)}/filrouge" class="${tab === "filrouge" ? "on" : ""}">Fil rouge</a>
        <a href="#/jeu/${esc(deck.id)}/qcm" class="${tab === "qcm" ? "on" : ""}">QCM</a>
        <a href="#/jeu/${esc(deck.id)}/oral" class="${tab === "oral" ? "on" : ""}">Oral</a>
        <a href="#/jeu/${esc(deck.id)}/carre" class="${tab === "carre" ? "on" : ""}">Carré clinique</a></nav>
      ${inner}</div>`;
  }

  // ---------- minuteur ----------
  let timerHandle = null;
  function stopTimer() { if (timerHandle) { clearInterval(timerHandle); timerHandle = null; } }
  function startTimer(el, seconds, onEnd) {
    stopTimer(); let left = seconds;
    const draw = () => { el.textContent = Math.floor(left / 60) + ":" + String(left % 60).padStart(2, "0"); el.classList.toggle("low", left <= 10); };
    draw();
    timerHandle = setInterval(() => { left--; draw(); if (left <= 0) { stopTimer(); if (navigator.vibrate) try { navigator.vibrate(200); } catch (e) {} onEnd && onEnd(); } }, 1000);
  }

  // ---------- vues ----------
  function viewHome() {
    document.documentElement.style.setProperty("--dc", "#1B2A4A");
    const decks = allDecks();
    app.innerHTML = `
      <div class="kicker">Formation des infirmiers en pratique avancée</div>
      <h1>Jeux de cartes de raisonnement clinique</h1>
      <p class="lead">Chaque couleur correspond à une étape du raisonnement, chaque valeur à une situation clinique suivie à travers un même patient. Choisissez un jeu pour consulter les cartes ou lancer une partie.</p>
      <div class="decks">${decks.map((d) => {
        const prog = store.get(progressKey(d), {}); const n = d.situations.length * 4;
        const ok = Object.values(prog).filter((v) => v === "ok").length;
        return `<a class="deck-tile" href="#/jeu/${esc(d.id)}" style="--dc:${esc(d.couleur)}">
          <div class="band"><div class="code">${esc(d.code || "PERSO")}</div><h3>${esc(d.court || d.titre)}</h3><div class="suits">♥♦♣♠</div></div>
          <div class="body">${esc(d.description || "")}</div>
          <div class="meta"><span>${n} cartes${d.builtin ? "" : ' · <span class="tag">importé</span>'}</span><span>${ok ? ok + " réussies" : ""}</span></div></a>`;
      }).join("")}</div>`;
  }

  function viewDeck(deck) {
    const prog = store.get(progressKey(deck), {});
    const n = deck.situations.length * 4;
    const ok = Object.values(prog).filter((v) => v === "ok").length;
    const ko = Object.values(prog).filter((v) => v === "revoir").length;
    app.innerHTML = deckShell(deck, "", `
      <p class="lead">${esc(deck.intro || deck.description || "")}</p>
      <div class="modes">
        <a class="mode" href="#/jeu/${esc(deck.id)}/eclair"><div class="ico">⚡</div><h3>Tirage éclair</h3><p>Révision seul ou en binôme : une carte au hasard, une minute pour répondre, puis les repères.</p></a>
        <a class="mode" href="#/jeu/${esc(deck.id)}/filrouge"><div class="ico">➜</div><h3>Fil rouge</h3><p>Étude de cas en groupe : les 4 cartes d'une situation révélées dans l'ordre ♥ ♦ ♣ ♠.</p></a>
        <a class="mode" href="#/jeu/${esc(deck.id)}/qcm"><div class="ico">☑</div><h3>QCM</h3><p>Sans écrire : cocher les repères attendus, retrouver la situation ou l'étape du raisonnement.</p></a>
        <a class="mode" href="#/jeu/${esc(deck.id)}/oral"><div class="ico">🎙</div><h3>Oral</h3><p>Répondez à voix haute : l'application écoute et vérifie les repères cités. Seul, sans rien écrire.</p></a>
        <a class="mode" href="#/jeu/${esc(deck.id)}/carre"><div class="ico">◆</div><h3>Carré clinique</h3><p>Partie en table avec les cartes imprimées : tableau des scores et minuteur de synthèse.</p></a>
        <a class="mode" href="#/jeu/${esc(deck.id)}/cartes"><div class="ico">▤</div><h3>Consulter les cartes</h3><p>Toutes les cartes, filtrables par couleur, avec recherche.</p></a>
      </div>
      <h2>Ma progression</h2>
      <div class="panel row"><div><div class="big-stat">${ok}<span class="muted small"> / ${n}</span></div><div class="small muted">cartes réussies</div></div>
        <div class="spacer"></div><div><div class="big-stat" style="color:#8a4b00">${ko}</div><div class="small muted">à revoir</div></div>
        <div class="spacer"></div>${ko ? `<a class="btn primary" href="#/jeu/${esc(deck.id)}/eclair?revoir=1">Réviser les cartes à revoir</a>` : ""}</div>`);
  }

  function viewCards(deck, params) {
    const st = { coul: params.get("c") || "", q: params.get("q") || "" };
    const prog = store.get(progressKey(deck), {});
    const render = () => {
      const q = st.q.trim().toLowerCase();
      const groups = deck.situations.map((s) => {
        const cards = deck.couleurs.filter((c) => !st.coul || c.cle === st.coul).filter((c) => {
          if (!q) return true; const k = s.cartes[c.cle];
          return [s.titre, s.sous_titre, k.vignette, k.question, ...k.reperes].join(" ").toLowerCase().includes(q);
        });
        if (!cards.length) return "";
        return `<section class="sit-group"><h3><span class="v">${esc(s.valeur)}</span>${esc(s.titre)}</h3>
          <div class="card-grid">${cards.map((c) => cardHTML(deck, s, c, { status: prog[s.valeur + "-" + c.cle] })).join("")}</div></section>`;
      }).join("");
      document.getElementById("cardlist").innerHTML = groups || '<div class="empty">Aucune carte ne correspond.</div>';
    };
    app.innerHTML = deckShell(deck, "cartes", `
      <div class="filters">
        <button class="chip ${!st.coul ? "on" : ""}" data-c="">Toutes</button>
        ${deck.couleurs.map((c) => `<button class="chip ${st.coul === c.cle ? "on" : ""}" data-c="${esc(c.cle)}"><span style="color:${esc(c.col)}">${esc(c.sym)}</span> ${esc(c.etape)}</button>`).join("")}
        <input class="search" type="search" placeholder="Rechercher (ex. : HbA1c, chute, Peplau…)" value="${esc(st.q)}">
        <button class="btn sm" id="openall">Tout déplier</button>
      </div>
      <div id="cardlist"></div>
      <h2>Jokers</h2><div class="card-grid">${(deck.jokers || []).map((j, i) => jokerHTML(j, i + 1)).join("")}</div>`);
    app.querySelectorAll(".chip").forEach((b) => b.onclick = () => {
      st.coul = b.dataset.c; app.querySelectorAll(".chip").forEach((x) => x.classList.toggle("on", x === b)); render();
    });
    app.querySelector(".search").oninput = (e) => { st.q = e.target.value; render(); };
    let opened = false;
    document.getElementById("openall").onclick = (e) => { opened = !opened; app.querySelectorAll("#cardlist details").forEach((d) => d.open = opened); e.target.textContent = opened ? "Tout replier" : "Tout déplier"; };
    render();
  }

  function viewEclair(deck, params) {
    const all = cardsOf(deck);
    const prog = store.get(progressKey(deck), {});
    const s = { suits: new Set(deck.couleurs.map((c) => c.cle)), sits: new Set(deck.situations.map((x) => x.valeur)), seconds: 60,
      onlyRevoir: params.get("revoir") === "1", order: [], i: 0, res: {} };
    function setup() {
      stopTimer();
      app.innerHTML = deckShell(deck, "eclair", `
        <div class="panel">
          <h2>Tirage éclair</h2>
          <p class="muted small">Tirez une carte, lisez la vignette et la question à voix haute ; la personne interrogée répond avant de dévoiler les repères.</p>
          <h3 class="small">Couleurs</h3>
          <div class="checks">${deck.couleurs.map((c) => `<label><input type="checkbox" data-suit="${esc(c.cle)}" checked> <span style="color:${esc(c.col)}">${esc(c.sym)}</span> ${esc(c.etape)}</label>`).join("")}</div>
          <h3 class="small">Situations</h3>
          <div class="row" style="margin-bottom:8px"><button class="btn sm" id="allsit">Toutes</button><button class="btn sm" id="nosit">Aucune</button></div>
          <div class="checks">${deck.situations.map((x) => `<label><input type="checkbox" data-sit="${esc(x.valeur)}" checked> <b>${esc(x.valeur)}</b> ${esc(x.titre)}</label>`).join("")}</div>
          <h3 class="small">Options</h3>
          <div class="checks">
            <label>Temps de réponse <select id="secs"><option value="0">sans minuteur</option><option value="30">30 s</option><option value="60" selected>1 min</option><option value="120">2 min</option></select></label>
            <label><input type="checkbox" id="onlyrev" ${s.onlyRevoir ? "checked" : ""}> Seulement mes cartes « à revoir »</label>
          </div>
          <div class="row" style="margin-top:14px"><button class="btn primary" id="go">Commencer</button><span class="muted small" id="count"></span></div>
        </div>`);
      const upd = () => {
        s.suits = new Set([...app.querySelectorAll("[data-suit]:checked")].map((x) => x.dataset.suit));
        s.sits = new Set([...app.querySelectorAll("[data-sit]:checked")].map((x) => x.dataset.sit));
        s.onlyRevoir = document.getElementById("onlyrev").checked;
        const n = pool().length; document.getElementById("count").textContent = n + " carte" + (n > 1 ? "s" : "");
        document.getElementById("go").disabled = !n;
      };
      app.querySelectorAll("input").forEach((x) => x.onchange = upd);
      document.getElementById("allsit").onclick = () => { app.querySelectorAll("[data-sit]").forEach((x) => x.checked = true); upd(); };
      document.getElementById("nosit").onclick = () => { app.querySelectorAll("[data-sit]").forEach((x) => x.checked = false); upd(); };
      document.getElementById("go").onclick = () => { s.seconds = +document.getElementById("secs").value; s.order = shuffle(pool()); s.i = 0; s.res = {}; play(); };
      upd();
    }
    const pool = () => all.filter((c) => s.suits.has(c.coul.cle) && s.sits.has(c.sit.valeur) && (!s.onlyRevoir || prog[c.id] === "revoir"));
    function play() {
      if (s.i >= s.order.length) return summary();
      const c = s.order[s.i];
      app.innerHTML = deckShell(deck, "eclair", `
        <div class="play">
          <div class="bar"><b>${s.i + 1} / ${s.order.length}</b><div class="progress"><i style="width:${(s.i / s.order.length) * 100}%"></i></div>
            ${s.seconds ? `<span class="timer" id="tm"></span><button class="btn sm" id="restart">↻</button>` : ""}
            <button class="btn sm" id="stop">Terminer</button></div>
          ${cardHTML(deck, c.sit, c.coul)}
          <div class="row" style="justify-content:center">
            <button class="btn ko" id="ko">↺ À revoir</button>
            <button class="btn ok" id="ok">✓ Réussie</button>
            <button class="btn" id="skip">Passer</button>
          </div>
        </div>`);
      const tm = document.getElementById("tm");
      const go = () => tm && startTimer(tm, s.seconds, () => { const d = app.querySelector(".card details"); if (d) d.open = true; });
      go(); if (tm) document.getElementById("restart").onclick = go;
      const mark = (v) => { stopTimer(); if (v) { s.res[c.id] = v; prog[c.id] = v; store.set(progressKey(deck), prog); } s.i++; play(); window.scrollTo(0, 0); };
      document.getElementById("ok").onclick = () => mark("ok");
      document.getElementById("ko").onclick = () => mark("revoir");
      document.getElementById("skip").onclick = () => mark(null);
      document.getElementById("stop").onclick = () => { stopTimer(); summary(); };
    }
    function summary() {
      stopTimer();
      const ok = Object.values(s.res).filter((v) => v === "ok").length;
      const ko = Object.entries(s.res).filter(([, v]) => v === "revoir");
      app.innerHTML = deckShell(deck, "eclair", `
        <div class="panel"><h2>Bilan de la série</h2>
          <div class="row"><div><div class="big-stat" style="color:#1F6E43">${ok}</div><div class="small muted">réussies</div></div><div class="spacer"></div>
          <div><div class="big-stat" style="color:#8a4b00">${ko.length}</div><div class="small muted">à revoir</div></div><div class="spacer"></div></div>
          ${ko.length ? `<h3 class="small">À revoir</h3><div class="list">${ko.map(([id]) => { const c = all.find((x) => x.id === id);
            return `<div class="li" style="display:flex;gap:10px;padding:8px 10px;border:1px solid var(--line);border-radius:10px"><span class="v" style="color:${esc(c.coul.col)}">${esc(c.sit.valeur)}${esc(c.coul.sym)}</span>${esc(c.sit.titre)} · ${esc(c.coul.etape)}</div>`; }).join("")}</div>` : ""}
          <div class="row" style="margin-top:14px">${ko.length ? '<button class="btn primary" id="again">Rejouer les cartes à revoir</button>' : ""}<button class="btn" id="new">Nouvelle série</button></div>
        </div>`);
      const again = document.getElementById("again");
      if (again) again.onclick = () => { s.order = shuffle(ko.map(([id]) => all.find((x) => x.id === id))); s.i = 0; s.res = {}; play(); };
      document.getElementById("new").onclick = setup;
    }
    setup();
  }

  function viewFilRouge(deck, params) {
    const v = params.get("s");
    const sit = deck.situations.find((x) => x.valeur === v);
    if (!sit) {
      app.innerHTML = deckShell(deck, "filrouge", `<div class="panel"><h2>Fil rouge</h2>
        <p class="muted small">Choisissez une situation : ses 4 cartes seront révélées une à une. Avant chaque révélation, le groupe anticipe ce qu'il s'attend à découvrir.</p>
        <div class="list">${deck.situations.map((x) => `<a href="#/jeu/${esc(deck.id)}/filrouge?s=${encodeURIComponent(x.valeur)}"><span class="v">${esc(x.valeur)}</span><span>${esc(x.titre)}${x.sous_titre ? `<br><span class="muted small">${esc(x.sous_titre)}</span>` : ""}</span></a>`).join("")}
          <button class="li" id="rnd"><span class="v">?</span>Situation au hasard</button></div></div>`);
      document.getElementById("rnd").onclick = () => { location.hash = `#/jeu/${deck.id}/filrouge?s=${encodeURIComponent(shuffle(deck.situations)[0].valeur)}`; };
      return;
    }
    let step = 0;
    const draw = () => {
      app.innerHTML = deckShell(deck, "filrouge", `<div class="play">
        <div class="bar"><b>${esc(sit.valeur)} · ${esc(sit.titre)}</b><div class="spacer"></div><a class="btn sm" href="#/jeu/${esc(deck.id)}/filrouge">Changer</a></div>
        <div class="steps">${deck.couleurs.map((c, i) => `<span class="${i <= step ? "on" : ""}" style="${i <= step ? "background:" + c.col : ""}">${esc(c.sym)} ${esc(c.etape)}</span>`).join("")}</div>
        ${deck.couleurs.slice(0, step + 1).map((c) => cardHTML(deck, sit, c)).join("")}
        <div class="row" style="justify-content:center">
          ${step < deck.couleurs.length - 1 ? `<button class="btn primary" id="next">Révéler l'étape suivante : ${esc(deck.couleurs[step + 1].sym)} ${esc(deck.couleurs[step + 1].etape)}</button>`
            : `<div class="notice">Synthèse : un étudiant reformule le raisonnement complet, du recueil des données au suivi. Le groupe vérifie la cohérence de chaque étape.</div>`}
        </div></div>`);
      const n = document.getElementById("next");
      if (n) n.onclick = () => { step++; draw(); const cards = app.querySelectorAll(".card"); cards[cards.length - 1].scrollIntoView({ behavior: "smooth", block: "start" }); };
    };
    draw();
  }

  function viewCarre(deck) {
    const key = "ipa_scores_" + deck.id;
    let players = store.get(key, []);
    const save = () => store.set(key, players);
    const draw = () => {
      app.innerHTML = deckShell(deck, "carre", `<div class="play">
        <div class="panel"><h2>Carré clinique · tableau des scores</h2>
          <p class="muted small">Jouez avec les cartes imprimées. Un carré complet présenté en synthèse orale rapporte 4 points ; un lien pertinent avec une autre situation, 1 point de plus.</p>
          ${players.length ? `<table class="score-table">${players.map((p, i) => `<tr><td><b>${esc(p.nom)}</b><br><span class="muted small">${p.carres} carré${p.carres > 1 ? "s" : ""}</span></td>
            <td class="pts">${p.pts}</td>
            <td style="text-align:right"><div class="row" style="justify-content:flex-end">
              <button class="btn sm primary" data-a="carre" data-i="${i}">+4 carré</button>
              <button class="btn sm" data-a="lien" data-i="${i}">+1 lien</button>
              <button class="btn sm" data-a="moins" data-i="${i}">−1</button>
              <button class="btn sm danger" data-a="del" data-i="${i}" aria-label="Retirer">✕</button></div></td></tr>`).join("")}</table>` : '<div class="empty">Ajoutez les joueurs ou les équipes.</div>'}
          <div class="row" style="margin-top:12px"><input type="text" id="nom" placeholder="Nom du joueur ou de l'équipe" style="flex:1;min-width:180px"><button class="btn" id="add">Ajouter</button></div>
          ${players.length ? '<div class="row" style="margin-top:10px"><button class="btn sm" id="reset0">Remettre les scores à zéro</button><button class="btn sm danger" id="clear">Vider la table</button></div>' : ""}
        </div>
        <div class="panel"><h2>Minuteur de synthèse</h2>
          <div class="row"><span class="timer" id="tm" style="font-size:34px">2:00</span><div class="spacer"></div>
          <button class="btn primary" id="t2">Synthèse · 2 min</button><button class="btn" id="t1">Réponse · 1 min</button><button class="btn" id="tstop">Stop</button></div></div>
        <div class="panel"><h2>Rappel des règles</h2><ol class="small" style="line-height:1.55;padding-left:18px">
          <li>Distribuez ${deck.situations.length > 8 ? 6 : 5} cartes par joueur ; le reste forme la pioche.</li>
          <li>À son tour, un joueur demande à un autre une carte précise pour avancer un carré.</li>
          <li>Si l'autre la possède, il lit la vignette et la question ; le demandeur répond. Réponse validée → il prend la carte et rejoue ; sinon, il pioche.</li>
          <li>Carré complet : synthèse orale de 2 minutes (recueil → hypothèses → vérification → action).</li>
          <li>La partie s'arrête quand la pioche est vide.</li></ol></div>
      </div>`);
      const nom = document.getElementById("nom");
      const add = () => { const v = nom.value.trim(); if (!v) return; players.push({ nom: v, pts: 0, carres: 0 }); save(); draw(); document.getElementById("nom").focus(); };
      document.getElementById("add").onclick = add; nom.onkeydown = (e) => { if (e.key === "Enter") add(); };
      app.querySelectorAll("[data-a]").forEach((b) => b.onclick = () => {
        const p = players[+b.dataset.i]; const a = b.dataset.a;
        if (a === "carre") { p.pts += 4; p.carres++; } else if (a === "lien") p.pts += 1; else if (a === "moins") p.pts = Math.max(0, p.pts - 1); else if (a === "del") players.splice(+b.dataset.i, 1);
        save(); draw();
      });
      const r0 = document.getElementById("reset0"); if (r0) r0.onclick = () => { players.forEach((p) => { p.pts = 0; p.carres = 0; }); save(); draw(); };
      const cl = document.getElementById("clear"); if (cl) cl.onclick = () => { if (confirmInline(cl, "Confirmer ?")) { players = []; save(); draw(); } };
      const tm = document.getElementById("tm");
      document.getElementById("t2").onclick = () => startTimer(tm, 120);
      document.getElementById("t1").onclick = () => startTimer(tm, 60);
      document.getElementById("tstop").onclick = stopTimer;
    };
    draw();
  }
  // confirmation sans boîte de dialogue : premier clic arme le bouton, second clic confirme
  function confirmInline(btn, label) {
    if (btn.dataset.armed) return true;
    btn.dataset.armed = "1"; const old = btn.textContent; btn.textContent = label;
    setTimeout(() => { if (btn.isConnected) { delete btn.dataset.armed; btn.textContent = old; } }, 3000);
    return false;
  }

  // ---------- QCM (généré à partir des cartes) ----------
  const words = (t) => new Set(String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").split(/[^a-z0-9]+/).filter((w) => w.length > 3));
  function overlap(a, b) { const A = words(a), B = words(b); if (!A.size || !B.size) return 0; let n = 0; A.forEach((w) => { if (B.has(w)) n++; }); return n / Math.min(A.size, B.size); }
  function buildQ(type, card, all, deck) {
    if (type === "reperes") {
      const good = shuffle(card.carte.reperes).slice(0, Math.min(3, card.carte.reperes.length));
      const pool = shuffle(all.filter((c) => c.coul.cle === card.coul.cle && c.sit.valeur !== card.sit.valeur).flatMap((c) => c.carte.reperes))
        .filter((r) => card.carte.reperes.every((g) => overlap(r, g) < 0.35));
      const bad = []; for (const r of pool) { if (bad.length >= 6 - good.length) break; if (bad.every((b) => overlap(r, b) < 0.5)) bad.push(r); }
      return { type, card, multi: true, stem: card.carte.question,
        options: shuffle([...good.map((t) => ({ t, ok: true })), ...bad.map((t) => ({ t, ok: false }))]) };
    }
    if (type === "situation") {
      const rep = card.carte.reperes.slice().sort((a, b) => b.length - a.length)[0];
      const others = shuffle(deck.situations.filter((s) => s.valeur !== card.sit.valeur)).slice(0, 3);
      return { type, card, multi: false, stem: `« ${rep} »`, ask: "À quelle situation appartient ce repère ?",
        options: shuffle([{ t: card.sit.titre, ok: true }, ...others.map((s) => ({ t: s.titre, ok: false }))]) };
    }
    const rep = shuffle(card.carte.reperes)[0];
    return { type: "etape", card, multi: false, stem: `« ${rep} »`, ask: `Situation « ${card.sit.titre} » : à quelle étape du raisonnement correspond ce repère ?`,
      options: deck.couleurs.map((c) => ({ t: `${c.sym} ${c.etape}`, ok: c.cle === card.coul.cle })) };
  }
  function viewQCM(deck) {
    const all = cardsOf(deck);
    const s = { types: new Set(["reperes", "situation", "etape"]), n: 10, qs: [], i: 0, score: 0, log: [] };
    const LABEL = { reperes: "Repères pertinents", situation: "Quelle situation ?", etape: "Quelle étape ?" };
    function setup() {
      app.innerHTML = deckShell(deck, "qcm", `<div class="panel"><h2>QCM</h2>
        <p class="muted small">Questions générées à partir des cartes du jeu. On répond en touchant les propositions : rien à écrire.</p>
        <div class="checks">
          <label><input type="checkbox" data-t="reperes" checked> <b>Repères pertinents</b> · cocher les éléments attendus pour la carte (plusieurs réponses)</label>
          <label><input type="checkbox" data-t="situation" checked> <b>Quelle situation ?</b> · retrouver la situation d'un repère</label>
          <label><input type="checkbox" data-t="etape" checked> <b>Quelle étape ?</b> · associer un repère à l'étape ♥ ♦ ♣ ♠</label>
        </div>
        <div class="checks" style="margin-top:10px"><label>Nombre de questions <select id="nq"><option>5</option><option selected>10</option><option>20</option></select></label></div>
        <div class="row" style="margin-top:14px"><button class="btn primary" id="go">Commencer</button></div>
        <p class="muted small" style="margin-top:10px">Les propositions fausses sont tirées d'autres cartes du même jeu : une discussion est parfois utile pour trancher.</p></div>`);
      document.getElementById("go").onclick = () => {
        s.types = new Set([...app.querySelectorAll("[data-t]:checked")].map((x) => x.dataset.t));
        if (!s.types.size) return toast("Choisissez au moins un type de question");
        s.n = +document.getElementById("nq").value; const types = [...s.types];
        s.qs = shuffle(all).slice(0, s.n).map((c, k) => buildQ(types[k % types.length], c, all, deck));
        s.i = 0; s.score = 0; s.log = []; ask();
      };
    }
    function ask() {
      if (s.i >= s.qs.length) return end();
      const q = s.qs[s.i], c = q.card;
      app.innerHTML = deckShell(deck, "qcm", `<div class="play">
        <div class="bar"><b>${s.i + 1} / ${s.qs.length}</b><div class="progress"><i style="width:${(s.i / s.qs.length) * 100}%"></i></div><span class="tag">${LABEL[q.type]}</span><b>${s.score} pt</b></div>
        <article class="card" style="--c:${esc(c.coul.col)}">
          <div class="hd"><div class="idx"><div class="v">${q.type === "situation" ? "?" : esc(c.sit.valeur)}</div><div class="s">${q.type === "etape" ? "?" : esc(c.coul.sym)}</div></div>
            <div style="flex:1"><div class="step">${q.type === "etape" ? "Étape à trouver" : esc(c.coul.sym) + " " + esc(c.coul.nom) + " · " + esc(c.coul.etape)}</div>
            <h3>${q.type === "situation" ? "Situation à trouver" : esc(c.sit.titre)}</h3></div></div>
          <div class="bd">
            ${q.type === "reperes" ? `<p class="vig">${esc(c.carte.vignette)}</p><p class="q">${esc(q.stem)}</p><p class="muted small">Plusieurs réponses possibles : sélectionnez tous les éléments attendus.</p>`
              : `<p class="vig">${esc(q.stem)}</p><p class="q">${esc(q.ask)}</p>`}
            <div class="opts">${q.options.map((o, k) => `<button class="opt" data-k="${k}">${esc(o.t)}</button>`).join("")}</div>
            <div class="row" style="margin-top:12px" id="act">${q.multi ? '<button class="btn primary" id="val">Valider</button>' : ""}</div>
            <div id="fb"></div>
          </div></article></div>`);
      const btns = [...app.querySelectorAll(".opt")]; let done = false;
      const correct = (picked) => {
        done = true;
        btns.forEach((b) => { const o = q.options[+b.dataset.k]; b.disabled = true; b.classList.add(o.ok ? "good" : picked.has(+b.dataset.k) ? "bad" : "dim"); });
        const goodPicked = q.options.filter((o, k) => o.ok && picked.has(k)).length, nGood = q.options.filter((o) => o.ok).length;
        const wrongPicked = q.options.filter((o, k) => !o.ok && picked.has(k)).length;
        const pts = q.multi ? Math.max(0, goodPicked - wrongPicked) / nGood : (goodPicked ? 1 : 0);
        s.score = Math.round((s.score + pts) * 10) / 10; s.log.push({ q, pts });
        document.getElementById("fb").innerHTML = `<div class="notice" style="margin-top:12px"><b>${pts === 1 ? "Exact." : pts > 0 ? "Partiellement juste." : "Pas tout à fait."}</b>
          ${q.type === "reperes" ? `Repères attendus de la carte :<ul>${c.carte.reperes.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : `Réponse : <b>${esc(q.type === "situation" ? c.sit.titre : c.coul.sym + " " + c.coul.etape)}</b> (carte ${esc(c.sit.valeur)}${esc(c.coul.sym)}).`}</div>`;
        document.getElementById("act").innerHTML = `<button class="btn primary" id="nx">${s.i + 1 < s.qs.length ? "Question suivante" : "Voir le bilan"}</button>`;
        document.getElementById("nx").onclick = () => { s.i++; ask(); window.scrollTo(0, 0); };
      };
      if (q.multi) {
        const sel = new Set();
        btns.forEach((b) => b.onclick = () => { if (done) return; const k = +b.dataset.k; sel.has(k) ? sel.delete(k) : sel.add(k); b.classList.toggle("sel"); });
        document.getElementById("val").onclick = () => correct(sel);
      } else btns.forEach((b) => b.onclick = () => { if (!done) correct(new Set([+b.dataset.k])); });
    }
    function end() {
      const pct = Math.round((s.score / s.qs.length) * 100);
      app.innerHTML = deckShell(deck, "qcm", `<div class="panel"><h2>Bilan du QCM</h2>
        <div class="row"><div><div class="big-stat">${s.score}<span class="muted small"> / ${s.qs.length}</span></div><div class="small muted">${pct} %</div></div></div>
        <h3 class="small">Questions les moins réussies</h3><div class="list">${s.log.filter((l) => l.pts < 1).map((l) => `<a href="#/jeu/${esc(deck.id)}/cartes?q=${encodeURIComponent(l.q.card.sit.titre)}"><span class="v" style="color:${esc(l.q.card.coul.col)}">${esc(l.q.card.sit.valeur)}${esc(l.q.card.coul.sym)}</span>${esc(l.q.card.sit.titre)} · ${LABEL[l.q.type]}</a>`).join("") || '<div class="muted small">Aucune : bravo !</div>'}</div>
        <div class="row" style="margin-top:14px"><button class="btn primary" id="again">Nouveau QCM</button></div></div>`);
      document.getElementById("again").onclick = setup;
    }
    setup();
  }

  // ---------- Oral : l'application écoute et juge (reconnaissance vocale) ----------
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const STOP = new Set("avec pour dans sans plus moins entre chez leur leurs etre avoir faire cette ces sont tout tous toute toutes comme apres avant depuis sous vers dont quand ainsi aussi tres bien selon elle elles ils nous vous mais donc encore deja jamais toujours votre notre quel quelle quels quelles autre autres meme cela ceci celle celui ceux fois chaque peut doit etc".split(" "));
  const normTxt = (t) => String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/[’']/g, " ");
  function stems(t) {
    const out = new Set();
    String(t).replace(/[’']/g, " ").split(/[^A-Za-zÀ-ÿœŒ0-9₂]+/).forEach((w) => {
      if (!w) return;
      const n = normTxt(w);
      const acronym = w.length >= 2 && w === w.toUpperCase() && /[A-Z]/.test(w);
      if (/^\d/.test(n) || acronym || (n.length >= 4 && !STOP.has(n))) out.add(n.slice(0, 6));
    });
    return out;
  }
  function detect(reperes, transcript) {
    const T = stems(transcript);
    return reperes.map((r) => {
      const K = [...stems(r)]; if (!K.length) return false;
      const hits = K.filter((k) => T.has(k) || [...T].some((t) => t.length >= 5 && k.length >= 5 && (t.startsWith(k.slice(0, 5)) || k.startsWith(t.slice(0, 5))))).length;
      const need = K.length <= 2 ? 1 : K.length <= 5 ? 2 : 3;
      return hits >= need;
    });
  }
  function viewOral(deck) {
    const all = cardsOf(deck);
    const s = { mode: "solo", secs: 60, order: [], i: 0, total: 0, max: 0, voice: !!SR };
    let rec = null, listening = false;
    const stopRec = () => { listening = false; if (rec) { try { rec.stop(); } catch (e) {} } };
    window.__stopRec = stopRec;
    function setup() {
      stopTimer(); stopRec();
      app.innerHTML = deckShell(deck, "oral", `<div class="panel"><h2>Oral : l'application écoute</h2>
        <p class="muted small">Lisez la carte, appuyez sur le micro et répondez à voix haute. L'application reconnaît votre réponse et vérifie quels repères attendus vous avez cités. On joue seul, sans rien écrire.</p>
        ${SR ? "" : '<div class="notice">La reconnaissance vocale n\'est pas disponible sur ce navigateur. Utilisez Chrome, Edge (ordinateur, Android) ou Safari (iPhone, Mac). En attendant, vous pourrez vous auto-évaluer en touchant les repères que vous avez cités.</div>'}
        <div class="checks" style="margin-top:10px">
          <label><input type="radio" name="m" value="solo" checked> <b>Réponse argumentée</b> · 1 minute par carte</label>
          <label><input type="radio" name="m" value="chrono"> <b>30 secondes chrono</b> · citer un maximum de repères</label>
        </div>
        <div class="checks" style="margin-top:10px"><label>Couleur <select id="suit"><option value="">toutes</option>${deck.couleurs.map((c) => `<option value="${esc(c.cle)}">${esc(c.sym)} ${esc(c.etape)}</option>`).join("")}</select></label>
          <label>Situation <select id="sit"><option value="">toutes</option>${deck.situations.map((x) => `<option value="${esc(x.valeur)}">${esc(x.valeur)} · ${esc(x.titre)}</option>`).join("")}</select></label></div>
        <div class="row" style="margin-top:14px"><button class="btn primary" id="go">Commencer</button></div>
        <p class="muted small" style="margin-top:10px">Le micro est demandé au premier essai. La transcription est réalisée par le service vocal du navigateur (Google ou Apple) ; rien n'est conservé par l'application. Le jugement automatique repose sur les mots-clés : vous pouvez le corriger d'un toucher.</p></div>`);
      document.getElementById("go").onclick = () => {
        s.mode = app.querySelector("[name=m]:checked").value; s.secs = s.mode === "chrono" ? 30 : 60;
        const suit = document.getElementById("suit").value, sit = document.getElementById("sit").value;
        s.order = shuffle(all.filter((c) => (!suit || c.coul.cle === suit) && (!sit || c.sit.valeur === sit))); s.i = 0; s.total = 0; s.max = 0; card();
      };
    }
    function card() {
      stopTimer(); stopRec();
      if (s.i >= s.order.length) return end();
      const c = s.order[s.i]; const first = deck.couleurs[0].cle; const n = c.carte.reperes.length;
      const sitLine = deck.rappel && c.coul.cle !== first ? `<p class="sit"><b>Situation :</b> ${esc(c.sit.cartes[first].vignette)}</p>` : "";
      app.innerHTML = deckShell(deck, "oral", `<div class="play">
        <div class="bar"><b>Carte ${s.i + 1} / ${s.order.length}</b><div class="spacer"></div><span class="timer" id="tm">${s.secs}s</span>
          ${s.max ? `<b>${Math.round((s.total / s.max) * 100)} %</b>` : ""}<button class="btn sm" id="stop">Terminer</button></div>
        <article class="card" style="--c:${esc(c.coul.col)}">
          <div class="hd"><div class="idx"><div class="v">${esc(c.sit.valeur)}</div><div class="s">${esc(c.coul.sym)}</div></div>
            <div style="flex:1"><div class="step">${esc(c.coul.sym)} ${esc(c.coul.nom)} · ${esc(c.coul.etape)}</div><h3>${esc(c.sit.titre)}</h3></div></div>
          <div class="bd">${sitLine}<p class="vig">${esc(c.carte.vignette)}</p><p class="q">${esc(c.carte.question)}</p>
            <div class="slots" id="slots">${c.carte.reperes.map(() => '<span class="slot"></span>').join("")}</div>
            <p class="muted small" id="slotlbl">${n} repères attendus · ils s'allument quand vous les citez</p>
            <div class="mic-zone"><button class="mic" id="mic" aria-label="Parler">🎙</button>
              <div id="micst" class="small muted">${s.voice ? "Touchez le micro et répondez à voix haute" : "Répondez à voix haute, puis touchez « J'ai terminé »"}</div></div>
            <p class="transcript" id="tr"></p>
            <div class="row" style="justify-content:center"><button class="btn" id="done">J'ai terminé</button></div>
            <div id="res"></div>
          </div></article></div>`);
      document.getElementById("stop").onclick = end;
      const slots = [...app.querySelectorAll(".slot")];
      let finalTxt = "", interim = "", started = false, finished = false;
      const refresh = () => {
        const txt = finalTxt + " " + interim;
        document.getElementById("tr").textContent = txt.trim() ? "« " + txt.trim() + " »" : "";
        const d = detect(c.carte.reperes, txt); slots.forEach((el, k) => el.classList.toggle("on", d[k]));
        document.getElementById("slotlbl").textContent = `${d.filter(Boolean).length} / ${n} repères reconnus`;
      };
      const finish = () => {
        if (finished) return; finished = true; stopTimer(); stopRec();
        const mic = document.getElementById("mic"); if (mic) mic.classList.remove("live");
        const det = s.voice ? detect(c.carte.reperes, finalTxt + " " + interim) : c.carte.reperes.map(() => false);
        const got = new Set(det.map((v, k) => (v ? k : -1)).filter((k) => k >= 0));
        const drawRes = () => {
          document.getElementById("res").innerHTML = `<div class="kicker" style="color:var(--c);margin:14px 0 6px">${s.voice ? "Verdict de l'application" : "Auto-évaluation"} · ${got.size} / ${n}</div>
            <div class="opts">${c.carte.reperes.map((r, k) => `<button class="opt ${got.has(k) ? "good" : "miss"}" data-k="${k}">${got.has(k) ? "✓ " : "✗ "}${esc(r)}</button>`).join("")}</div>
            <p class="muted small" style="margin-top:6px">${s.voice ? "Erreur de reconnaissance ? Touchez un repère pour corriger le verdict." : "Touchez les repères que vous avez cités."}</p>
            <div class="row" style="margin-top:10px"><button class="btn primary" id="nx">${s.i + 1 < s.order.length ? "Carte suivante" : "Voir le bilan"}</button>
            <button class="btn" id="retry">Réessayer cette carte</button></div>`;
          document.querySelectorAll("#res .opt").forEach((b) => b.onclick = () => { const k = +b.dataset.k; got.has(k) ? got.delete(k) : got.add(k); drawRes(); });
          document.getElementById("nx").onclick = () => { s.total += got.size; s.max += n; s.i++; card(); window.scrollTo(0, 0); };
          document.getElementById("retry").onclick = card;
        };
        document.getElementById("done").style.display = "none";
        document.getElementById("micst").textContent = s.voice ? "Écoute terminée" : "";
        drawRes();
      };
      document.getElementById("done").onclick = finish;
      const startListen = () => {
        if (started || finished) return; started = true;
        const tm = document.getElementById("tm"); startTimer(tm, s.secs, finish);
        if (!s.voice) return;
        rec = new SR(); rec.lang = "fr-FR"; rec.continuous = true; rec.interimResults = true; listening = true;
        document.getElementById("mic").classList.add("live"); document.getElementById("micst").textContent = "Je vous écoute… parlez librement";
        rec.onresult = (e) => {
          interim = "";
          for (let k = e.resultIndex; k < e.results.length; k++) { const t = e.results[k][0].transcript; if (e.results[k].isFinal) finalTxt += " " + t; else interim += " " + t; }
          refresh();
        };
        rec.onerror = (e) => {
          if (e.error === "not-allowed" || e.error === "service-not-allowed" || e.error === "audio-capture") {
            s.voice = false; listening = false; document.getElementById("mic").classList.remove("live");
            document.getElementById("micst").textContent = "Micro indisponible : répondez à voix haute, puis touchez « J'ai terminé » pour vous auto-évaluer.";
          }
        };
        rec.onend = () => { if (listening && !finished) { try { rec.start(); } catch (e) {} } };
        try { rec.start(); } catch (e) { s.voice = false; }
      };
      document.getElementById("mic").onclick = () => { if (!started) startListen(); else finish(); };
    }
    function end() {
      stopTimer(); stopRec();
      const pct = s.max ? Math.round((s.total / s.max) * 100) : 0;
      app.innerHTML = deckShell(deck, "oral", `<div class="panel"><h2>Bilan de l'oral</h2>
        <div class="big-stat">${pct} %</div><div class="small muted">${s.total} repères cités sur ${s.max}, en ${s.i} carte${s.i > 1 ? "s" : ""}</div>
        <div class="row" style="margin-top:14px"><button class="btn primary" id="again">Nouvelle série</button></div></div>`);
      document.getElementById("again").onclick = setup;
    }
    setup();
  }

  function viewRules(deck) {
    const pdf = deck.builtin ? `jeu_${deck.id}.pdf` : null;
    app.innerHTML = deckShell(deck, "regles", `
      <div class="panel"><h2>Principe</h2><p class="lead">${esc(deck.intro || "")}</p>
        <table class="simple"><tr><th>Couleur</th><th>Étape</th><th>Contenu</th></tr>
        ${deck.couleurs.map((c) => `<tr><td style="color:${esc(c.col)};font-size:20px">${esc(c.sym)}</td><td><b>${esc(c.etape)}</b></td><td class="muted">${esc(c.sous || "")}${c.comp ? ` · <b>${esc(c.comp)}</b>` : ""}</td></tr>`).join("")}</table>
        ${pdf ? `<div class="row" style="margin-top:12px"><a class="btn primary" href="${pdf}" target="_blank" rel="noopener">Télécharger le jeu imprimable (PDF A4)</a></div>` : ""}
      </div>
      ${deck.competences ? `<div class="panel" style="margin-top:12px"><h2>Compétences IPA</h2><table class="simple">${deck.competences.map(([c, l, o]) => `<tr><td><b>${esc(c)}</b></td><td>${esc(l)}</td><td class="muted small">${esc(o)}</td></tr>`).join("")}</table></div>` : ""}
      <div class="panel" style="margin-top:12px"><h2>Les ${deck.situations.length} situations</h2><table class="simple">
        ${deck.situations.map((s) => `<tr><td><b style="color:var(--dc)">${esc(s.valeur)}</b></td><td><b>${esc(s.titre)}</b>${s.sous_titre ? ` · <span class="muted">${esc(s.sous_titre)}</span>` : ""}<br><span class="muted small">${esc(s.cartes[deck.couleurs[0].cle].vignette)}</span></td></tr>`).join("")}</table></div>
      <div class="panel" style="margin-top:12px"><h2>Modes de jeu</h2>
        <p><b>Carré clinique</b> (3 à 6 joueurs, 45 à 60 min) : réunir les 4 cartes d'une valeur en répondant aux questions, puis présenter une synthèse orale de 2 minutes. 4 points par carré, +1 pour un lien avec une autre situation.</p>
        <p><b>Fil rouge</b> (TD, 20 min par cas) : les 4 cartes d'une situation sont révélées dans l'ordre ; le groupe raisonne à voix haute avant chaque révélation.</p>
        <p><b>Tirage éclair</b> (binôme, 10 à 15 min) : une carte au hasard, une minute pour répondre, comparaison avec les repères.</p>
        <p class="muted small">Les repères ne sont pas exhaustifs : une argumentation pertinente non listée est à valoriser.</p></div>
      <h2>Jokers</h2><div class="card-grid">${(deck.jokers || []).map((j, i) => jokerHTML(j, i + 1)).join("")}</div>`);
  }

  function viewManage() {
    document.documentElement.style.setProperty("--dc", "#1B2A4A");
    const decks = allDecks();
    app.innerHTML = `
      <h1>Gérer les jeux</h1>
      <p class="lead">Exportez un jeu pour le modifier, importez un jeu créé ou adapté par votre équipe, ou réinitialisez la progression. Les jeux importés restent enregistrés dans ce navigateur.</p>
      <div class="panel"><h2>Jeux disponibles</h2><table class="simple">
        ${decks.map((d) => `<tr><td><span class="tag" style="background:${esc(d.couleur)};color:#fff">${esc(d.code || "PERSO")}</span></td>
          <td><b>${esc(d.court || d.titre)}</b><br><span class="muted small">${d.situations.length * 4} cartes · ${d.builtin ? "jeu fourni" : "jeu importé"}</span></td>
          <td style="text-align:right"><div class="row" style="justify-content:flex-end">
            <button class="btn sm" data-exp="${esc(d.id)}">Exporter (JSON)</button>
            <button class="btn sm" data-reset="${esc(d.id)}">Effacer la progression</button>
            ${d.builtin ? "" : `<button class="btn sm danger" data-del="${esc(d.id)}">Supprimer</button>`}</div></td></tr>`).join("")}
      </table></div>
      <div class="panel" style="margin-top:12px"><h2>Importer un jeu</h2>
        <p class="small muted">Fichier JSON au même format que l'export. Si l'identifiant existe déjà parmi vos jeux importés, il est remplacé.</p>
        <div class="row"><input type="file" id="file" accept=".json,application/json"><button class="btn" id="tpl">Télécharger un modèle vierge</button></div>
        <div id="imperr" class="small" style="color:#B3261E;margin-top:8px"></div></div>
      <div class="panel" style="margin-top:12px"><h2>Créer un jeu</h2>
        <ol class="small" style="line-height:1.6;padding-left:18px">
          <li>Téléchargez le modèle vierge ou exportez un jeu existant.</li>
          <li>Modifiez le fichier dans un éditeur de texte : un identifiant unique (« id »), un titre, 4 couleurs, et pour chaque situation les 4 cartes (vignette, question, repères).</li>
          <li>Importez le fichier ici. Pour l'intégrer durablement au site, ajoutez-le dans <code>data/decks.js</code> sur GitHub (voir le README).</li></ol></div>`;
    app.querySelectorAll("[data-exp]").forEach((b) => b.onclick = () => {
      const d = { ...deckById(b.dataset.exp) }; delete d.builtin; download(`jeu_${d.id}.json`, JSON.stringify(d, null, 2));
    });
    app.querySelectorAll("[data-reset]").forEach((b) => b.onclick = () => { if (confirmInline(b, "Confirmer ?")) { store.del("ipa_progress_" + b.dataset.reset); toast("Progression effacée"); viewManage(); } });
    app.querySelectorAll("[data-del]").forEach((b) => b.onclick = () => { if (confirmInline(b, "Confirmer ?")) { store.set("ipa_custom_decks", customDecks().filter((d) => d.id !== b.dataset.del)); toast("Jeu supprimé"); viewManage(); } });
    document.getElementById("tpl").onclick = () => download("modele_jeu.json", JSON.stringify(template(), null, 2));
    document.getElementById("file").onchange = (e) => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        let d; try { d = JSON.parse(rd.result); } catch (err) { document.getElementById("imperr").textContent = "Fichier JSON illisible."; return; }
        const errs = validateDeck(d);
        if (errs.length) { document.getElementById("imperr").innerHTML = errs.map(esc).join("<br>"); return; }
        if (builtin.some((x) => x.id === d.id)) d.id = d.id + "-perso";
        d.couleur = d.couleur || "#1B2A4A"; d.jokers = d.jokers || [];
        store.set("ipa_custom_decks", [...customDecks().filter((x) => x.id !== d.id), d]);
        toast("Jeu importé"); location.hash = "#/jeu/" + d.id;
      };
      rd.readAsText(f);
    };
  }
  function template() {
    const base = builtin[0];
    return {
      id: "mon-jeu", titre: "Titre de mon jeu", court: "Mon jeu", code: "PERSO", couleur: "#1F4E46",
      description: "Description courte affichée sur l'accueil.", intro: "Présentation du jeu.", rappel: true,
      couleurs: base.couleurs,
      situations: [{ valeur: "2", titre: "Titre de la situation", sous_titre: "",
        cartes: Object.fromEntries(base.couleurs.map((c) => [c.cle, { vignette: "Vignette clinique…", question: "Question posée…", reperes: ["Repère 1", "Repère 2", "Repère 3"] }])) }],
      jokers: base.jokers,
    };
  }

  function viewHelp() {
    document.documentElement.style.setProperty("--dc", "#1B2A4A");
    app.innerHTML = `<h1>Aide et à propos</h1>
      <div class="panel"><h2>Utiliser l'application</h2><ul class="small" style="line-height:1.6">
        <li><b>Tirage éclair</b> : révision individuelle ou en binôme ; marquez chaque carte « réussie » ou « à revoir » pour suivre votre progression.</li>
        <li><b>Fil rouge</b> : à projeter en TD, pour dérouler une situation étape par étape.</li>
        <li><b>Carré clinique</b> : accompagne une partie avec les cartes imprimées (scores, minuteur).</li>
        <li><b>Cartes</b> : consultation, filtres par couleur et recherche plein texte.</li>
        <li>Sur téléphone, ajoutez l'application à l'écran d'accueil depuis le menu du navigateur.</li></ul></div>
      <div class="panel" style="margin-top:12px"><h2>Vos données</h2><p class="small">La progression, les scores et les jeux importés sont enregistrés uniquement dans ce navigateur. Rien n'est envoyé à un serveur.</p></div>
      <div class="panel" style="margin-top:12px"><h2>Avertissement</h2><p class="small">Outil pédagogique destiné à la formation des infirmiers en pratique avancée. Les contenus s'appuient sur des recommandations connues en octobre 2026 et doivent être relus et actualisés par l'équipe pédagogique. Les conduites thérapeutiques s'entendent dans le cadre des protocoles et de la réglementation en vigueur.</p></div>`;
  }

  // ---------- routeur ----------
  function route() {
    stopTimer(); try { window.__stopRec && window.__stopRec(); } catch (e) {}
    const raw = location.hash.replace(/^#/, "") || "/";
    const [path, qs] = raw.split("?");
    const params = new URLSearchParams(qs || "");
    const parts = path.split("/").filter(Boolean);
    document.querySelectorAll(".topnav a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#/" + (parts[0] === "gerer" || parts[0] === "aide" ? parts[0] : "")));
    if (parts[0] === "jeu" && parts[1]) {
      const deck = deckById(decodeURIComponent(parts[1]));
      if (!deck) { app.innerHTML = '<div class="empty">Jeu introuvable. <a href="#/">Retour à l\'accueil</a></div>'; return; }
      const v = { "": viewDeck, cartes: viewCards, eclair: viewEclair, filrouge: viewFilRouge, carre: viewCarre, regles: viewRules, qcm: viewQCM, oral: viewOral }[parts[2] || ""] || viewDeck;
      v(deck, params);
    } else if (parts[0] === "gerer") viewManage();
    else if (parts[0] === "aide") viewHelp();
    else viewHome();
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
  route();

  // hors connexion (GitHub Pages en HTTPS)
  if ("serviceWorker" in navigator && location.protocol === "https:" && window.top === window.self) {
    try { navigator.serviceWorker.register("sw.js").catch(() => {}); } catch (e) {}
  }
})();
