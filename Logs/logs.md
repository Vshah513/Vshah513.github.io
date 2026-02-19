# Class Logs

Log what you did each class below. Add a new entry for each session.

---

## Class 1 — [Date]

*What we did:*
- First day — went over the syllabus, what we’ll build (personal/course site, basics of HTML/CSS, maybe a bit of JS later). Talked about tools we’d use: a code editor, browser dev tools, GitHub. No coding yet, just setup and expectations.
- Got the GitHub repo link and cloned it (or created it) so everyone had the same starting point.

*What I learnt:*
- Course is about building a real site step by step, not just theory. We’ll use the repo to hand in work and keep a log.
- Having a single place (the repo) for the course page and logs will keep things organised.

*Notes:* Pretty much intro day. Next class we start actually putting stuff in the repo.

---

## Class 2 — [Date]

*What we did:*
- Created **README.md** — set up the course repo with title "OIM3690 - Web Development," an About Me section (Viraj Shah), course info (time 11:30 AM–1:00 PM, Gerber 103), and a Links section with my portfolio/GitHub link.
- Created **logs.md** — this class log file to record what we do each session. Professor showed the format (what we did / what I learnt / notes) so we can keep a running record.

*What I learnt:*
- How to structure a GitHub repo for a web dev course — README as the main landing page, clear sections for course info and links.
- Using Markdown for documentation (headers, lists, links) and why keeping a log is useful for tracking progress and for grading.

*Notes:* Repo is set up and ready. Next we start on the actual course page and HTML.

---

## Class 3 — [Date]

*What we did:*
- **HTML structure and planning** — went over how to think about a page before writing code: what sections do we need (header, nav, main content, footer), what’s the hierarchy. Looked at a few real sites (including babson.edu) and broke them down into boxes/sections.
- Started **planning our course page** — nav bar, hero area, profile card, assignments section, weekly log, resources, footer. Drew a quick wireframe or list of sections so we knew what we were building.
- Opened **babson.html** (saved from babson.edu) and inspected the markup — saw how they use `<header>`, `<nav>`, `<section>`, divs, etc. to structure the page.

*What I learnt:*
- Planning the structure first makes the HTML way easier. Just diving in leads to messy nesting and hard-to-style layouts.
- Real sites use semantic tags (header, nav, section, footer) not just divs everywhere — helps with readability and accessibility.
- Using a real page (babson) as reference helps you see how pros structure things.

*Notes:* Had a clear picture of what the course page should look like. Next class we build it.

---

## Class 4 — [Date]

*What we did:*
- **Built the course page layout** — added the top nav, hero header, profile card, assignments/projects sections, weekly log area, resources, and footer. Mostly got the HTML in place and basic styling so it looked like a real page.
- **Created an images folder** and added my profile photo; replaced the "VS" placeholder in the profile card with the actual picture so the page feels personal.
- Ran the site **locally** (Python HTTP server on port 8080) so we could preview changes in the browser without deploying every time.

*What I learnt:*
- How to turn the plan from last class into actual HTML/CSS — nav, hero, cards, footer. Keeping sections clear in the code makes styling easier later.
- Organising assets (images folder, naming) and wiring them into the page with `<img>` and correct paths.
- Using a local server to test is way faster than push-to-GitHub every change. Simple but important workflow.

*Notes:* Page started to feel like a real course site. Still pretty plain; next we’ll add more style and interactivity.

---

## Class 5 — [Date]

*What we did:*
- **Dark mode toggle** — added a way to switch the course page between light and dark themes. Used a bit of CSS (variables or extra class) and a small script or checkbox to toggle. Spent some time getting the colours to look good in both modes.
- **Refined the layout** — tweaked spacing, font sizes, and alignment so the nav and sections looked cleaner. Used babson.html again for inspiration on spacing and typography.
- Committed and pushed everything to GitHub so the course page and assets were up to date.

*What I learnt:*
- Switching themes is mostly about changing CSS (e.g. background and text colours) via a class or data attribute. Once the structure is there, toggling is straightforward.
- Small polish (spacing, contrast) makes a big difference in how “finished” a page feels.
- Keeping the repo updated regularly avoids a huge messy commit at the end.

*Notes:* Course page felt much more complete. Next we went deeper into CSS.

---

## Class 6 — [Date]

*What we did:*
- Went over **CSS and how cascading works** — why some styles win over others and how the browser decides what to apply. Looked at specificity (e.g. when a class vs an id vs inline style wins) and the order of rules in the file.
- Did a few **in-class examples** — wrote two rules that targeted the same element and changed the order to see which one won. Then made one rule more specific and saw how that overrides the other.
- Briefly touched on **selectors** — not just tag names but `.class`, `#id`, and combining them to target things more precisely.

*What I learnt:*
- Cascading = the order and “weight” of your CSS rules. The browser uses specificity and source order to pick which style wins when two rules target the same thing.
- Writing CSS is easier when you get this — otherwise you end up with random overrides or !important everywhere. Planning selectors and keeping a rough order in mind helps.
- Little changes (one selector, one property) can affect a lot of the page — powerful but also why things sometimes “break” when you add new CSS.

*Notes:* Good to finally have the cascading idea clear. Next we applied it on our own pages.

---

## Class 7 — [Date]

*What we did:*
- **Practiced selectors and specificity** on the course page and on babson.html — e.g. changing a colour in one place and having it affect multiple elements, or adding a more specific rule to override something without touching the original rule.
- Went over **common selectors** in more detail: descendant (e.g. `nav a`), class + tag, multiple classes. Talked about when to use a class vs an id (ids for one-off things, classes for reuse).
- Did a short exercise: style only the links in the nav differently from links in the footer, using selector specificity instead of extra classes everywhere.

*What I learnt:*
- You can target things really precisely with the right selector, so you don’t have to repeat yourself or add tons of classes. Descendant and combined selectors are super useful.
- Knowing when to use class vs id keeps the HTML cleaner and avoids specificity wars later.
- Practicing on a real page (ours or babson) made the abstract cascading rules click.

*Notes:* Felt way more confident with CSS. Will keep this in mind when styling the portfolio and course page.

---

## Class 8 — [Date]

*What we did:*
- **Responsive / mobile basics** — how to make the course page look okay on smaller screens. Touched on viewport meta tag, and either media queries or flexible layouts (e.g. flexbox) so things don’t break on a phone. Didn’t go super deep, just enough to get the idea.
- **Flexbox intro** — we used flex for the nav or the card section so items lay out in a row and wrap or stack. Quick demo of `display: flex`, `justify-content`, `gap`, and maybe `flex-wrap`.
- **Wrapped up** — reviewed what we’ve done so far (structure, styling, cascading, selectors, a bit of responsive). Talked about what’s next (more pages, forms, or JS) and made sure everyone’s repo and logs were in good shape.

*What I learnt:*
- Sites need to work on different screen sizes. Media queries or flexible layouts (flexbox) help without writing a completely separate mobile site.
- Flexbox is a good first step for simple row/column layouts and spacing — way easier than floating everything.
- The course page and logs are a solid base; we’ve covered the core HTML/CSS ideas we’ll keep using.

*Notes:* Good place to pause. Ready for whatever we do next — more pages, forms, or JS.

---

*Add more entries below as the course continues.*
