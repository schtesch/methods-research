(() => {
  "use strict";

  const relationships = {
    A1: ["P6", "P9"],
    A2: ["P6", "P7", "P8", "P9"],
    A3: ["P8", "P9"],
    A4: ["P7", "P8", "P11"],
    A5: ["P8"],
    A6: ["P4", "P5", "P13"],
    A7: ["P4", "P7", "P9", "P13"],
    A8: ["P5", "P9", "P10", "P11"],
    A9: ["P1", "P4", "P5", "P7", "P9", "P10", "P11", "P13"],
    A10: ["P8"],
    A11: ["P1", "P2", "P9", "P10", "P11"],
    A12: ["P3", "P9"],
    A13: ["P3"],
    A14: ["P7"],
    A15: ["P3", "P6", "P9", "P12"]
  };

  const typePages = {
    A1: "approaches/1theory.html",
    A2: "approaches/2simulation.html",
    A3: "approaches/3real-datasets.html",
    A4: "approaches/4reliability.html",
    A5: "approaches/5randomized.html",
    A6: "approaches/6survey.html",
    A7: "approaches/7qualitative.html",
    A8: "approaches/8consensus.html",
    A9: "approaches/9review-applied.html",
    A10: "approaches/10meta-epi.html",
    A11: "approaches/11scoping-review.html",
    A12: "approaches/12qualitative-synthesis.html",
    A13: "approaches/13quantitative-synthesis.html",
    A14: "approaches/14case-report.html",
    A15: "approaches/15informal.html",
    P1: "purposes/1identify-methods.html",
    P2: "purposes/2identify-mr.html",
    P3: "purposes/3summarize-mr.html",
    P4: "purposes/4assess-practice.html",
    P5: "purposes/5assess-needs-priorities.html",
    P6: "purposes/6propose-method.html",
    P7: "purposes/7evaluate-method.html",
    P8: "purposes/8compare-methods.html",
    P9: "purposes/9guidance-applying.html",
    P10: "purposes/10guidance-reporting.html",
    P11: "purposes/11guidance-assessing.html",
    P12: "purposes/12software-code.html",
    P13: "purposes/13implementation.html"
  };

  const map = document.querySelector("#type-map");
  if (!map) return;

  const svg = map.querySelector(".type-map__lines");
  const detailCard = document.createElement("aside");
  detailCard.className = "type-map__card";
  detailCard.hidden = true;
  detailCard.setAttribute("aria-live", "polite");
  detailCard.innerHTML = `
    <a class="type-map__card-link">View type details</a>
  `;
  map.append(detailCard);

  const cardLink = detailCard.querySelector(".type-map__card-link");
  const items = new Map(
    [...map.querySelectorAll("[data-type-id]")].map((item) => [
      item.dataset.typeId,
      item
    ])
  );
  const paths = new Map();
  let drawFrame;
  let selectedItem = null;

  function createPaths() {
    const fragment = document.createDocumentFragment();

    Object.entries(relationships).forEach(([approach, purposes]) => {
      purposes.forEach((purpose) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.classList.add("type-map__path");
        path.dataset.approach = approach;
        path.dataset.purpose = purpose;
        fragment.append(path);
        paths.set(`${approach}-${purpose}`, path);
      });
    });

    svg.replaceChildren(fragment);
  }

  function drawPaths() {
    const mapRect = map.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${mapRect.width} ${mapRect.height}`);

    paths.forEach((path) => {
      const approach = items.get(path.dataset.approach).getBoundingClientRect();
      const purpose = items.get(path.dataset.purpose).getBoundingClientRect();
      const x1 = approach.right - mapRect.left;
      const y1 = approach.top + approach.height / 2 - mapRect.top;
      const x2 = purpose.left - mapRect.left;
      const y2 = purpose.top + purpose.height / 2 - mapRect.top;
      const bend = Math.max((x2 - x1) * 0.46, 40);

      path.setAttribute(
        "d",
        `M ${x1} ${y1} C ${x1 + bend} ${y1}, ${x2 - bend} ${y2}, ${x2} ${y2}`
      );
    });
  }

  function scheduleDraw() {
    cancelAnimationFrame(drawFrame);
    drawFrame = requestAnimationFrame(() => {
      drawPaths();
      if (selectedItem) positionCard(selectedItem);
    });
  }

  function connectedIds(id) {
    if (id.startsWith("A")) return new Set(relationships[id]);

    return new Set(
      Object.entries(relationships)
        .filter(([, purposes]) => purposes.includes(id))
        .map(([approach]) => approach)
    );
  }

  function activate(id) {
    const related = connectedIds(id);
    const sameColumnPrefix = id[0];
    map.classList.add("is-interacting");

    items.forEach((item, itemId) => {
      item.classList.toggle("is-focus", itemId === id);
      item.classList.toggle("is-related", related.has(itemId));
      item.classList.toggle(
        "is-muted",
        itemId !== id && !related.has(itemId) && itemId[0] !== sameColumnPrefix
      );

      if (itemId[0] === sameColumnPrefix && itemId !== id) {
        item.classList.add("is-muted");
      }
    });

    paths.forEach((path) => {
      const active =
        path.dataset.approach === id ||
        path.dataset.purpose === id;
      path.classList.toggle("is-active", active);
      path.classList.toggle("is-muted", !active);
    });
  }

  function reset() {
    map.classList.remove("is-interacting");
    items.forEach((item) => {
      item.classList.remove("is-focus", "is-related", "is-muted");
    });
    paths.forEach((path) => {
      path.classList.remove("is-active", "is-muted");
    });
  }

  function positionCard(item) {
    const mapRect = map.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const cardRect = detailCard.getBoundingClientRect();
    const gap = 18;
    const isApproach = item.dataset.typeId.startsWith("A");
    const preferredLeft = isApproach
      ? itemRect.right - mapRect.left + gap
      : itemRect.left - mapRect.left - cardRect.width - gap;
    const maxLeft = mapRect.width - cardRect.width - gap;
    const maxTop = mapRect.height - cardRect.height - gap;

    detailCard.style.left = `${Math.min(Math.max(preferredLeft, gap), maxLeft)}px`;
    detailCard.style.top = `${Math.min(
      Math.max(itemRect.top - mapRect.top + itemRect.height / 2 - cardRect.height / 2, gap),
      maxTop
    )}px`;
  }

  function closeCard({ restoreFocus = false } = {}) {
    if (!selectedItem) return;

    const itemToFocus = selectedItem;
    selectedItem.classList.remove("is-selected");
    selectedItem.setAttribute("aria-expanded", "false");
    selectedItem = null;
    detailCard.hidden = true;

    if (restoreFocus) itemToFocus.focus();
  }

  function openCard(item, id) {
    if (selectedItem && selectedItem !== item) {
      selectedItem.classList.remove("is-selected");
      selectedItem.setAttribute("aria-expanded", "false");
    }

    selectedItem = item;
    item.classList.add("is-selected");
    item.setAttribute("aria-expanded", "true");
    cardLink.href = typePages[id];
    cardLink.setAttribute(
      "aria-label",
      `View details for ${item.textContent.trim().replace(/\s+/g, " ")}`
    );
    detailCard.hidden = false;
    positionCard(item);
  }

  items.forEach((item, id) => {
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-haspopup", "true");
    item.setAttribute("aria-expanded", "false");
    item.addEventListener("pointerenter", () => activate(id));
    item.addEventListener("focus", () => activate(id));
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      if (selectedItem === item) {
        closeCard();
      } else {
        openCard(item, id);
      }
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        item.click();
      }
    });
  });
  map.addEventListener("pointerleave", reset);
  detailCard.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", () => closeCard());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCard({ restoreFocus: true });
  });

  createPaths();
  scheduleDraw();

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleDraw);
  }

  new ResizeObserver(scheduleDraw).observe(map);
})();
