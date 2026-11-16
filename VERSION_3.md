# Version 3

Based on `version_2`. The pre-existing uncommitted edits are preserved separately in the Git stash named `Preserve pre-version_3 local edits`.

## Changes

- Shorter home page using the client’s six requested sections and supplied copy. The version 2 animated hero, floating glass navigation, blue palette, serif accents, rounded cards and photographic footer are retained following design feedback. No comparison, calculator or quote form on the home page.
- Five primary menu links and a direct catalogue download, with the same navigation throughout the site.
- Four trades with the supplied presentation, solutions, references, applications and four-step method. Other trades use linked photographs and a manual mobile carousel with arrow buttons.
- Combined `/etudes-et-travaux` page; permanent redirects for the former method/alliance pages and merged trade URLs.
- `/contact` uses three section cards (quote, project preparation, catalogue) and a compact contact-details card. One section is shown at a time, fragment links select the matching card, and form values remain mounted when switching sections. Optional quote fields and the project summary use expandable sections. The quotation form retains multiple attachments and editable project transfer.
- Updated internal quotation links, sitemap, robots and trade canonical metadata. Set `NEXT_PUBLIC_SITE_URL` to the production origin when deploying to another domain.

## Contact delivery configuration

The old form simulated success. The new form posts multipart data to `/api/contact`, validates required fields, trades, file count/extensions and size, then forwards it to a server-configured receiver. Success is shown only after that receiver returns a successful HTTP status.

Set these server-side environment variables in the hosting environment:

- `CONTACT_WEBHOOK_URL`: HTTPS receiver that accepts multipart form data and delivers the request and attachments to CLADIS. It must return a 2xx response only after accepting responsibility for delivery. Local HTTP receivers are supported only in development.
- `CONTACT_WEBHOOK_TOKEN`: optional bearer token for the receiver. Keep it server-side.

The receiver gets `name`, `email`, `company`, `phone`, `reference`, `offerDate`, `description`, `downloadUrl`, JSON `project`, and repeated `files` fields. Project JSON contains `operation`, `building`, `town`, `postcode`, `trades`, `surface`, `system` and `calendar`.

Limits: five files, 3 MiB per file, entire multipart request below 4 MiB. Large consultation files should use a download link. PDF, DWG, DXF, ZIP, JPG/JPEG, PNG, WebP, DOC/DOCX and XLS/XLSX extensions are accepted. The endpoint checks same-origin browser submissions and a honeypot, limits streamed request size, does not log submissions or store files, and times out the receiver after 15 seconds. Use the host/receiver’s rate limiting and attachment scanning before accepting public traffic.

Without a receiver, the endpoint returns 503 and the form retains all data and provides the direct email fallback. No delivery service credentials were supplied. A real delivery and inbox receipt test remains necessary after setup.

## Client confirmations and assets still needed

- Confirm contact address, phone, hours, destination mailbox and that the current catalogue is the approved PDF. Existing site information and PDF were retained.
- Confirm publication rights and project names for the existing reference imagery and the scope of workshop fabrication/engineering claims in the supplied copy.
- Supply the requested publishable industrial/logistics drone photograph, close-up roof installation photos and execution-plan/Tekla images paired with the built details. Existing available images are used with descriptive captions; no invented construction drawings or certification badges were added.
- The existing metal-roof photograph illustrates the coverage detail page. The trades index now uses an industrial building rather than the previous residential image; the requested drone replacement is pending.
- Submit the updated sitemap and inspect the final production URLs in the owner’s Search Console after deployment. Account access was not provided.

## Verification

Run `npm.cmd run typecheck`, `npm.cmd run build`, then start with `npm.cmd run start -- --port 3100` and run `node scripts/verify-version3.mjs http://localhost:3100`.

Browser UI automation was unavailable in this session (native pipe connection failure), so desktop/mobile visual and interactive checks must be completed in a browser before production release. HTTP checks passed for all 17 sitemap routes, seven obsolete URL redirects, 29 optimized image URLs and 21 internal links/downloads, the catalogue PDF, home structure, four trades and form validation/unconfigured delivery. The contact receiver forwarding behavior was also tested with an isolated stub receiver using synthetic test data; no customer messages were sent.
