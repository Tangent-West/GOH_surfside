(() => {
  "use strict";
  const palette = { ink: "#111411", lime: "#CFED31", white: "#FFFFFF", paper: "#F3F1E6", forest: "#242D22", muted: "#D6DBCB", dim: "#555F4E" };
  const { ink, lime, white, paper, forest, muted, dim } = palette;
  const action = "https://takeaction.io/nationalhempassociation/tell-congress-support-the-goodness-of-hemp/";
  const credit = "Paid for by National Hemp Association";
  const shares = [
    { id: "launch", folder: "01-nov-10-launch", date: "2026-11-10", title: "30 days to speak up", alt: "A tractor beside tall hemp plants. 30 days to speak up. 30+ years to shape. Tell Congress before December 11." },
    { id: "farm", folder: "02-nov-17-farmers", date: "2026-11-17", title: "Planting starts with a plan", alt: "Rows of young plants under greenhouse hoops. Planting starts with a plan. Tell Congress." },
    { id: "people", folder: "03-nov-24-coalition", date: "2026-11-24", title: "The businesses behind hemp", alt: "Hands tending a tall hemp crop. The businesses behind hemp. Some hemp businesses could be forced to close. Tell Congress before December 11." },
    { id: "final", folder: "04-dec-10-final", date: "2026-12-10", title: "Tell Congress today", alt: "Tell Congress today. Federal deadline December 11. Today is the last day of the campaign push." }
  ];
  const alternates = [
    { id: "beverage", group: "people", date: "2026-11-24", title: "The jobs behind the can", alt: "Silver cans on a beverage production line. The jobs behind the can. New federal rules could take many hemp drinks off shelves. Tell Congress now, before December 11." },
    { id: "gummy", group: "people", date: "2026-11-24", title: "Small dose. Big stakes.", alt: "An adult holds a gummy and its package. Small dose. Big stakes. Many low-dose hemp gummies could lose federal hemp status. Tell Congress now, before December 11." }
  ];
  const slides = [
    { id: "farm-02", group: "farm", n: 2, total: 4, photo: "crop", theme: "paper", kicker: "THE FARM", lines: ["Before the seed", "goes in the ground."], body: "Farmers have to order seed, commit acreage and line up buyers months in advance.", alt: "A field of green hemp plants. Before the seed goes in the ground, farmers order seed, commit acreage and line up buyers." },
    { id: "farm-03", group: "farm", n: 3, total: 4, photo: "grain", theme: "dark", kicker: "THE MARKET", lines: ["A crop needs", "a buyer."], body: "Growers, processors and manufacturers make decisions together. Uncertain rules can put those plans on hold.", alt: "Harvesters in a broad field. A crop needs a buyer. Uncertain rules can put farm and manufacturing plans on hold." },
    { id: "farm-04", group: "farm", n: 4, total: 4, theme: "lime", kicker: "THE ASK", lines: ["Give farmers", "time to plan."], body: "Ask Congress to include proposed hemp certainty language in the next federal funding bill.", alt: "Give farmers time to plan. Ask Congress to include proposed hemp certainty language in the next federal funding bill." },
    { id: "people-02", group: "people", n: 2, total: 3, photo: "worker", theme: "dark", kicker: "THE PEOPLE", lines: ["A crop.", "A paycheck.", "A business built here."], body: "For businesses affected by the new rules, the decisions are real. Can we keep our products, pay our people and stay open?", alt: "A worker’s hands tending hemp. A crop. A paycheck. A business built here. The new rules put real decisions in front of affected businesses." },
    { id: "people-03", group: "people", n: 3, total: 3, theme: "lime", kicker: "THE ASK", lines: ["Make sure", "Congress hears", "from us."], body: "Tell your representative what a workable plan for hemp would mean in your community.", alt: "Make sure Congress hears from us. Tell your representative what a workable plan for hemp would mean in your community." }
  ];
  const countdowns = [
    { id: "dec-08", date: "2026-12-08", day: "DECEMBER 08", tag: "01 / SEND YOUR MESSAGE", lines: ["Here’s how", "to speak up."], body: ["Open Tell Congress.", "Enter your address.", "Review and send your message."], alt: "December 8. Here’s how to speak up. Open Tell Congress, enter your address, review and send your message." },
    { id: "dec-09", date: "2026-12-09", day: "DECEMBER 09", tag: "02 / BRING ONE MORE VOICE", lines: ["Bring one", "more voice."], body: ["Already contacted Congress?", "Send the link to one person", "who can speak up for hemp."], alt: "December 9. Bring one more voice. If you already contacted Congress, share the link with one person." },
    { id: "dec-10", date: "2026-12-10", day: "DECEMBER 10", tag: "03 / FINAL CAMPAIGN PUSH", lines: ["Tell Congress", "today."], body: ["Federal deadline tomorrow.", "Your representative can still", "hear from you today."], alt: "December 10. Tell Congress today. Federal deadline tomorrow. Your representative can still hear from you." }
  ];
  const images = new Map();
  let loading;

  function imageFrom(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("Could not read that image."));
      image.src = url;
    });
  }

  function ready() {
    if (loading) return loading;
    const media = window.GOH_MEDIA;
    const font = new FontFace("GOH Montserrat", "url(" + media.font + ")", { weight: "100 900" });
    document.fonts.add(font);
    loading = Promise.all([
      font.load(),
      ...Object.entries(media).filter(([key]) => key !== "font").map(async ([key, data]) => images.set(key, await imageFrom(data)))
    ]);
    return loading;
  }

  function rect(ctx, x, y, w, h, color, radius = 0) {
    ctx.fillStyle = color;
    if (!radius) return ctx.fillRect(x, y, w, h);
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
  }

  function setType(ctx, size, weight, color, align = "left", spacing = 0) {
    ctx.font = weight + " " + size + "px 'GOH Montserrat', Arial, sans-serif";
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = "top";
    ctx.letterSpacing = spacing + "px";
  }

  function write(ctx, value, x, y, size, weight, color, options = {}) {
    const { align = "left", spacing = 0, max = 1000 } = options;
    setType(ctx, size, weight, color, align, spacing);
    if (ctx.measureText(value).width > max) throw new Error("Text does not fit: " + value);
    ctx.fillText(value, x, y);
  }

  function headline(ctx, values, x, y, size, color, max = 936, lead = 0.96) {
    const weight = 850;
    let actual = size;
    do {
      setType(ctx, actual, weight, color, "left", -actual * 0.055);
      if (values.every((value) => ctx.measureText(value).width <= max)) break;
      actual--;
    } while (actual > 24);
    values.forEach((value, index) => write(ctx, value, x, y + index * actual * lead, actual, weight, color, { spacing: -actual * .055, max }));
    return y + values.length * actual * lead;
  }

  function wrap(ctx, value, max, size, weight, color) {
    setType(ctx, size, weight, color);
    const lines = [];
    for (const paragraph of value.split("\n")) {
      let row = "";
      for (const word of paragraph.trim().split(/\s+/).filter(Boolean)) {
        const candidate = row ? row + " " + word : word;
        if (ctx.measureText(candidate).width > max && row) {
          lines.push(row);
          row = word;
        } else {
          row = candidate;
        }
      }
      if (row) lines.push(row);
    }
    return lines;
  }

  function paragraph(ctx, value, x, y, max, size, weight, color, maxLines) {
    let lines;
    while (size > 20) {
      lines = wrap(ctx, value, max, size, weight, color);
      if (lines.length <= maxLines && lines.every((line) => ctx.measureText(line).width <= max)) break;
      size--;
    }
    if (!lines || lines.length > maxLines) throw new Error("Shorten the copy to fit the card.");
    lines.forEach((line, i) => write(ctx, line, x, y + i * size * 1.24, size, weight, color, { max }));
    return y + lines.length * size * 1.24;
  }

  function fitImage(ctx, image, x, y, w, h) {
    const factor = Math.min(w / image.width, h / image.height);
    const dw = image.width * factor, dh = image.height * factor;
    ctx.drawImage(image, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
  }

  function photo(ctx, image, x, y, w, h, fx = .5, fy = .5) {
    if (typeof image === "string") image = images.get(image);
    const factor = Math.max(w / image.width, h / image.height);
    const sw = Math.min(image.width, w / factor), sh = Math.min(image.height, h / factor);
    const sx = (image.width - sw) * fx, sy = (image.height - sh) * fy;
    ctx.drawImage(image, sx, sy, sw, sh, x, y, w, h);
  }

  function header(ctx, y, light, kicker, partner) {
    const text = light ? ink : white;
    const subtle = light ? "#B5B9A8" : "#596450";
    const logo = images.get(light ? "logo-black" : "logo-white");
    fitImage(ctx, logo, 70, y, 148, 78);
    if (partner) {
      write(ctx, "×", 234, y + 21, 29, 500, text);
      rect(ctx, 274, y + 2, 174, 74, "#FFFFFF", 8);
      fitImage(ctx, partner, 284, y + 10, 154, 58);
    }
    write(ctx, "PLAN. DON’T BAN.", 1008, y + 7, 26, 800, text, { align: "right", spacing: 1.2 });
    write(ctx, kicker, 1008, y + 43, 19, 650, light ? dim : muted, { align: "right", spacing: 1.9 });
    rect(ctx, 72, y + 106, 936, 2, subtle);
  }

  function button(ctx, y, light, label) {
    const color = light ? ink : lime;
    const labelColor = light ? white : ink;
    rect(ctx, 72, y, 936, 82, color, 41);
    write(ctx, label, 110, y + 20, 35, 800, labelColor);
    write(ctx, "→", 966, y + 15, 44, 650, labelColor, { align: "right" });
  }

  function footer(ctx, h, light, label = "TELL CONGRESS") {
    const story = h === 1920;
    const y = story ? 1444 : 1106;
    button(ctx, y, light, label);
    const foot = light ? dim : muted;
    write(ctx, "THEGOODNESSOFHEMP.ORG", 73, story ? 1660 : 1250, 21, 750, foot, { spacing: 0.75 });
    write(ctx, credit, 1007, story ? 1659 : 1249, 23, 550, foot, { align: "right" });
  }

  function cover(ctx, h, id, partner) {
    const story = h === 1920;
    const start = story ? 232 : 65;
    const light = id === "farm" || id === "people";
    rect(ctx, 0, 0, 1080, h, light ? paper : ink);
    header(ctx, start, light, "COALITION CAMPAIGN", partner);
    const y = story ? 382 : 215;
    if (id === "launch") {
      write(ctx, "NOVEMBER 10 – DECEMBER 10", 73, y, 27, 750, muted, { spacing: 2.3 });
      headline(ctx, ["30"], 69, y + 35, 180, white, 440);
      headline(ctx, ["30+"], 551, y + 35, 180, lime, 440);
      write(ctx, "DAYS TO SPEAK UP", 76, y + 210, 33, 820, white, { spacing: .2 });
      write(ctx, "YEARS TO SHAPE", 560, y + 210, 33, 820, lime, { spacing: .2 });
      rect(ctx, 524, y + 54, 2, 178, "#626955");
      const phY = story ? 681 : 500;
      photo(ctx, "harvest", 0, phY, 1080, story ? 595 : 480, .64, .54);
      rect(ctx, 0, phY + (story ? 593 : 478), 1080, 2, "#575F4E");
      write(ctx, "Speak up before December 11.", 73, story ? 1310 : 1007, 39, 760, white);
      footer(ctx, h, false);
      return;
    }
    if (id === "beverage" || id === "gummy") {
      const isGummy = id === "gummy";
      const kicker = isGummy ? "ADULT HEMP PRODUCTS" : "HEMP BEVERAGES";
      write(ctx, kicker + "  /  FEDERAL DEADLINE DECEMBER 11", 73, y, 24, 790, lime, { spacing: .75 });
      const heading = isGummy ? ["Small dose.", "Big stakes."] : ["The jobs behind", "the can."];
      headline(ctx, heading, 66, y + 50, 120, white, 940, .94);
      const py = story ? 702 : 507;
      photo(ctx, isGummy ? "gummy-choice" : "beverage-line", 0, py, 1080, story ? 545 : 418, .5, isGummy ? .58 : .78);
      const message = isGummy
        ? "Many low-dose hemp gummies could lose federal hemp status. Congress can still act."
        : "New federal rules could take many hemp drinks off shelves. Congress can still act.";
      paragraph(ctx, message, 72, story ? 1290 : 957, 935, 40, 720, white, 2);
      footer(ctx, h, false, "TELL CONGRESS NOW");
      return;
    }
    if (id === "final") {
      write(ctx, "FINAL CAMPAIGN PUSH", 74, y, 28, 750, muted, { spacing: 2.1 });
      headline(ctx, ["Tell Congress", "today."], 67, y + 50, 136, white, 947, .93);
      const dy = story ? 767 : 568;
      rect(ctx, 72, dy, 936, story ? 410 : 364, lime, 18);
      write(ctx, "FEDERAL DEADLINE", 112, dy + 33, 27, 850, ink, { spacing: 2.4 });
      headline(ctx, ["DEC 11"], 106, dy + 78, 188, ink, 866, 1);
      rect(ctx, 110, dy + (story ? 312 : 272), 862, 2, "#70821D");
      write(ctx, "CONGRESS CAN STILL ACT.", 112, dy + (story ? 333 : 290), 29, 850, ink, { spacing: 1.0 });
      write(ctx, "Send your message today, December 10.", 73, story ? 1298 : 992, 35, 740, white);
      footer(ctx, h, false, "TELL CONGRESS NOW");
      return;
    }

    const farm = id === "farm";
    write(ctx, farm ? "THE DECISIONS START MONTHS AHEAD" : "AMERICAN HEMP. LOCAL LIVELIHOODS.", 73, y, 25, 770, dim, { spacing: 1.25 });
    headline(ctx, farm ? ["Planting starts", "with a plan."] : ["The businesses", "behind hemp."], 67, y + 46, 110, ink, 944, .96);
    const phY = story ? 679 : 493;
    photo(ctx, farm ? "growing" : "worker", 0, phY, 1080, story ? 565 : 419, farm ? .55 : .50, farm ? .63 : .34);
    const textY = story ? 1281 : 949;
    paragraph(ctx, farm ? "Seed. Acreage. Buyers. The future starts with decisions made today." : "Some hemp businesses could be forced to close. Congress can act before December 11.", 72, textY, 936, 41, 730, ink, 2);
    footer(ctx, h, true);
  }

  function carousel(ctx, spec, partner) {
    const light = spec.theme !== "dark";
    const text = light ? ink : white;
    const bg = spec.theme === "lime" ? lime : (light ? paper : ink);
    rect(ctx, 0, 0, 1080, 1350, bg);
    header(ctx, 65, light, spec.kicker, partner);
    write(ctx, String(spec.n).padStart(2, "0") + " / " + String(spec.total).padStart(2, "0"), 73, 220, 27, 800, light ? dim : muted, { spacing: 2.1 });
    if (spec.photo) {
      const titleBottom = headline(ctx, spec.lines, 67, 273, spec.lines.length > 2 ? 86 : 104, text, 949);
      const y = titleBottom + 29;
      paragraph(ctx, spec.body, 73, y, 925, 37, 580, text, 3);
      const py = spec.lines.length > 2 ? 710 : 650;
      photo(ctx, spec.photo, 0, py, 1080, 1087 - py, .53, spec.photo === "worker" ? .35 : .56);
    } else {
      const y = headline(ctx, spec.lines, 67, 304, 132, ink, 942, .94);
      rect(ctx, 73, y + 32, 934, 2, "#70821D");
      paragraph(ctx, spec.body, 73, y + 79, 909, 45, 670, ink, 3);
    }
    footer(ctx, 1350, light);
  }

  function countdown(ctx, spec, partner) {
    const isFinal = spec.id === "dec-10";
    const bg = spec.id === "dec-09" ? forest : ink;
    rect(ctx, 0, 0, 1080, 1920, bg);
    header(ctx, 232, false, "FINAL THREE DAYS", partner);
    write(ctx, spec.tag, 73, 387, 28, 790, muted, { spacing: 1.2 });
    rect(ctx, 72, 452, 936, 119, lime, 12);
    write(ctx, spec.day, 108, 473, 67, 900, ink, { spacing: -3 });
    headline(ctx, spec.lines, 67, 632, isFinal ? 139 : 131, white, 945, .94);
    rect(ctx, 72, 977, 936, 2, "#607054");
    spec.body.forEach((line, index) => {
      if (spec.id === "dec-08") write(ctx, "0" + (index + 1), 74, 1030 + 75 * index, 29, 850, lime);
      write(ctx, line, spec.id === "dec-08" ? 143 : 73, 1023 + 75 * index, 40, 680, white, { max: spec.id === "dec-08" ? 855 : 935 });
    });
    write(ctx, "FEDERAL DEADLINE  /  DECEMBER 11", 73, 1319, 27, 780, lime, { spacing: .7 });
    footer(ctx, 1920, false, isFinal ? "TELL CONGRESS NOW" : "TELL CONGRESS");
  }

  function quote(ctx, h, options) {
    const story = h === 1920;
    rect(ctx, 0, 0, 1080, h, ink);
    header(ctx, story ? 232 : 65, false, "IN OUR OWN WORDS", options.partner);
    const start = story ? 379 : 212;
    write(ctx, "WHAT DECEMBER 11 COULD MEAN FOR US", 74, start, 25, 800, lime, { spacing: .65 });
    const py = start + 58, ph = story ? 550 : 412;
    if (options.photo) {
      photo(ctx, options.photo, 0, py, 1080, ph, .5, options.focal ?? .5);
    } else {
      rect(ctx, 0, py, 1080, ph, forest);
      write(ctx, "ADD YOUR OWN PHOTO", 540, py + ph / 2 - 22, 33, 760, muted, { align: "center", spacing: 1.4 });
    }
    const qy = py + ph + 36;
    const words = options.quote?.trim() || "Add a short, approved quote in the business owner’s own words.";
    const quoteEnd = paragraph(ctx, "“" + words + "”", 72, qy, 936, story ? 58 : 50, 790, white, 4);
    const who = options.name?.trim() || "Name";
    const place = options.org?.trim() || "Business · City, State";
    paragraph(ctx, who + "  /  " + place, 73, quoteEnd + 13, 934, 26, 680, lime, 2);
    footer(ctx, h, false);
  }

  function reelFrame(canvas, index) {
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d");
    const titles = [
      ["The businesses", "behind hemp."],
      ["A crop.", "A paycheck."],
      ["Some could be", "forced to close."]
    ];
    const notes = [
      "American hemp. Local livelihoods.",
      "People here built these businesses.",
      "Congress can act before December 11."
    ];
    if (index < 3) {
      rect(ctx, 0, 0, 1080, 557, ink);
      rect(ctx, 0, 1280, 1080, 640, ink);
      header(ctx, 232, false, "AMERICAN HEMP", null);
      write(ctx, "THE PEOPLE BEHIND THE CROP", 73, 397, 25, 790, lime, { spacing: 1.05 });
      write(ctx, "DECEMBER 11  /  FEDERAL DEADLINE", 73, 444, 29, 700, white, { spacing: .40 });
      headline(ctx, titles[index], 69, 1326, 93, white, 874, .91);
      paragraph(ctx, notes[index], 73, 1522, 877, 34, 650, muted, 2);
      write(ctx, credit, 73, 1660, 23, 550, muted);
    } else {
      rect(ctx, 0, 0, 1080, 1920, ink);
      header(ctx, 232, false, "THE GOODNESS OF HEMP", null);
      write(ctx, "FEDERAL DEADLINE  /  DECEMBER 11", 73, 436, 26, 800, lime, { spacing: 1 });
      headline(ctx, ["Tell Congress", "before", "December 11."], 68, 519, 127, white, 883, .97);
      paragraph(ctx, "Ask for time to plan and clear rules for American hemp.", 73, 1030, 884, 46, 720, white, 3);
      footer(ctx, 1920, false, "TELL CONGRESS");
    }
    return canvas;
  }

  async function draw(canvas, id, format, options = {}) {
    await ready();
    canvas.width = 1080;
    canvas.height = format === "story" ? 1920 : 1350;
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.imageSmoothingQuality = "high";
    const slide = slides.find((item) => item.id === id);
    const count = countdowns.find((item) => item.id === id);
    if (id === "quote") quote(ctx, canvas.height, options);
    else if (slide) carousel(ctx, slide, options.partner);
    else if (count) countdown(ctx, count, options.partner);
    else if (shares.some((item) => item.id === id) || alternates.some((item) => item.id === id)) cover(ctx, canvas.height, id, options.partner);
    else throw new Error("Unknown artwork: " + id);
    return canvas;
  }

  window.GOH_ART = { action, shares, alternates, slides, countdowns, draw, reelFrame, ready, imageFrom, palette };
})();
