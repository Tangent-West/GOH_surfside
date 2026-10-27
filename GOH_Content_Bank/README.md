# Goodness of Hemp Content Bank

[Browse the image library](https://tangent-west.github.io/GOH_surfside/GOH_Content_Bank/) · [Catalog CSV](GOH_Asset_Catalog.csv) · [Catalog JSON](GOH_Asset_Catalog.json)

Imported from GOH_Content_Bank.zip on October 27, 2026. Includes 327 catalog records: 316 image records (including duplicate mappings) and 11 video records. There are 294 distinct photograph/reference files and 305 thumbnails. The default working collection contains 288 records.

## Browse and review

Use the gallery link above, or download this repository, extract it, and open GOH_Content_Bank.html. GitHub's file view does not run HTML galleries. Filter by content type, scene, media type, or planned use; search by asset ID, filename, or topic. Expand Source and context before choosing an image. Export results downloads the filtered selection as CSV.

For team feedback, open a GitHub issue in this repository and include the asset ID (for example GOH-001), your proposed use, and your requested change or selection decision. Feedback is recorded in GitHub issues; the gallery itself does not save shared review decisions.

Photographs and thumbnails are included locally. The 11 video records link to their original ChatGPT Library sources and may require the source account's access; video files were not included in the ZIP. Duplicate records point to a preferred image. Reference-only images and duplicates are hidden from the default view.

## Add images later

1. Save each new full-size image in Originals/ with a new, unused stable ID, starting at GOH-328 (for example Originals/GOH-328.jpg). Keep existing IDs unchanged. Save a JPEG thumbnail as Thumbnails/GOH-328.jpg.
2. Add its record to GOH_Asset_Catalog.json, following an existing image record. Update its original filename, actual file extension/path, dimensions, byte count, SHA-256 checksum, description, source/context, and tags. Remove any copied source account IDs, source links, duplicate mappings, or planned uses that do not apply. Set canonical to the new ID and working_selection to true for an active image. Add new tag labels to GOH_Tag_Taxonomy.json if needed.
3. Run `python3 GOH_Content_Bank/tools/update_catalog.py` from the repository root. This validates IDs, thumbnail paths, local originals, and supplied checksums, then refreshes the gallery, CSV, and SQLite database from JSON. Python 3 uses only its standard library.
4. Open the gallery and check the new image and filters, then commit and push the content-bank folder to GitHub.

GOH_Asset_Catalog.json is the editable source for future updates. The HTML embeds catalog data so the downloaded gallery works without a server. Keep all generated formats together in each update. See BROWSING_GUIDE.txt, CREATIVE_DIRECTION.txt, and Duplicate_Resolution.txt for the supplied editorial guidance.
