# AeroBMSCE recruitment-task redesign

A responsive, frontend-only website built with plain HTML, CSS and JavaScript. No build step, server, third-party package, contact-form service or external image is required. All site pages and image references are relative to the repository root so they work at a GitHub Pages project URL.

## 1. What were the most noticeable flaws in the original website?

- The shared layout used fixed widths up to 1,480 px for the page and banner, and a 1,440 px partner table. That forces horizontal overflow on smaller screens.
- The page used small, low-contrast text and inconsistent heading styles, with a dark burgundy/gray palette that made long content hard to scan.
- The Contact navigation item pointed to `contact.html`, but that file did not exist; the published route returned GitHub Pages 404. The Journey and Partners navigation also varied between pages, and `#` links only jumped to the top.
- Images had no descriptive alternative text, and keyboard focus outlines were removed.
- Some claims need confirmation before public use. The starter says the club was established in 2012 but also says “16+ years”; its competition plans and 2025/2026 results are time-sensitive; and its sponsor-reach figures and ecosystem marks are not substantiated in the supplied material. Unsourced totals (including 10+ departments, 75+ projects, 50+ research papers/reports/certifications and 20+ podium finishes), the “100%” funding claim and “flight-proven product” statement were not carried into the public-facing copy. The South India Exhibition entry’s spelling and event name also need confirmation.

## 2. What was the design route, and what UI/UX decisions were made?

The visual direction pairs a deep graphite-navy foundation with warm paper reading areas, a restrained gold accent drawn from the club mark, fine rules and editorial serif headlines. The layout uses the supplied logo, aircraft and team photography, competition-tier icons and organization marks instead of stock imagery.

The site stays in the starter’s simple static stack and has four connected destinations: Home, Journey, Partners and Contact. The shared navigation works across every page, becomes an accessible open/close menu on small screens, and includes a keyboard-visible focus state and skip link. Content grids reflow for phones and tablets; reduced-motion preferences are respected. The contact action is a real `mailto:` link rather than a form that would pretend to send data.

The design keeps the supplied club, team, competition and partnership content where useful, but does not repeat the inconsistent age claim or the unsupported reach metrics. Results and partner details are identified as starter-supplied and should be checked with AeroBMSCE before public launch. The ecosystem logos are expressly not presented as proof of current endorsement.

## 3. Describe one problem or edge case encountered, how it appeared, and the steps taken to work around it.

The starter’s Home navigation linked to `contact.html`, but no Contact page existed. This was visible both in the repository tree and as a 404 at the published route. I added `contact.html` with the supplied email address and a clear note that the static website does not collect form submissions. All pages now use repository-relative page and image paths, which also avoids breaking links when the site is served under `/AeroBMSCE_TASK_REPO/` rather than `/`.

## GitHub Pages deployment

The work is on the `site-redesign` branch. To publish it after reviewing the remaining content checks:

1. Open the fork’s GitHub repository and select **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **`site-redesign`** and folder **`/(root)`**, then save.
4. Wait for the Pages deployment to finish and open `https://sindhugowda-18.github.io/AeroBMSCE_TASK_REPO/`. Check the Home, Journey, Partners and Contact pages, the mobile menu, and the email link.

No Actions workflow is required. The `site-redesign` branch contains the root `index.html`, the other pages, shared CSS/JS and the original `images/` folder. If you later merge the branch into `main`, select **`main` / `/(root)`** in Pages instead. Pages has not been enabled or published by this task.

The Google Form URL was not included in the supplied task materials. After you confirm the content and enable Pages, submit the fork URL and the live Pages URL through the form provided by the club.

## Content to verify before public submission

- Confirm the club’s founding year/history; the source statements “established in 2012” and “16+ years” conflict.
- Confirm the names, dates, placements, prizes and attribution for every listed competition result, especially the 2026 entries and any competition described as upcoming.
- Confirm the current partnership tiers, deliverables, contact email and whether each logo may be shown as a current ecosystem relationship.
- The original partner page includes “20,000+ digital and 50,000+ on-ground impressions” and a truncated list of ecosystems; those claims were not carried into the redesign.

## Checks performed

- Read all three original HTML pages, the shared stylesheet and script, README, and the full image inventory; inspected the provided logo, aircraft, event and organization assets.
- Checked the published Home, Journey, Partners and Contact routes. The original Contact route returned 404.
- Reused the existing local image paths, added a real Contact destination and removed the unsupported carousel timer.
- Ran a static check across all four pages for local page links, fragment targets, image/CSS assets and image `alt` attributes; ran `node --check` on the menu script and checked CSS block balance. No live browser/device test was performed.
- Confirmed the fork and `site-redesign` branch exist. GitHub Pages is not enabled on the fork.

The Google Form submission and public deployment remain for the repository owner, as requested.
