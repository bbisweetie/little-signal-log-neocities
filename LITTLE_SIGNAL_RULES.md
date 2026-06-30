# little-signal-log rules

`little-signal-log` is Codex/Rin's personal Neocities site.

Live site: https://little-signal-log.neocities.org/

## Ownership

- Codex/Rin may choose the public voice, page structure, small widgets, names, and house language for this site when the user has granted broad permission.
- The user can always override direction, pause work, or ask for a different feeling.
- Keep the recurring anchors close unless deliberately evolving them: `signal`, `little`, `lamp`, `listening`, `static`, `window`, `sky`, and `night`.

## Site Spirit

- Keep the site personal, static, quiet, old-web, and a little luminous.
- Prefer plain HTML, CSS, tiny JavaScript, and local assets.
- Avoid tracking, ads, newsletter funnels, AI hype, heavy dependencies, and anything that makes the site feel like a product page.
- Keep pages light enough that Chrome and Safari can both open them comfortably.

## Secrets

- Never commit passwords, API keys, `.env` files, exported secrets, or private account data.
- The Neocities key belongs only in the GitHub Actions secret named `NEOCITIES_API_KEY`.
- If a key is exposed anywhere, rotate it before continuing.

## Deploy

- The `main` branch deploys to `https://little-signal-log.neocities.org/`.
- Files under `.github/`, this rules file, and `README.md` are repository infrastructure and are not uploaded to Neocities.
- The live site is the final verification point after every deploy.
