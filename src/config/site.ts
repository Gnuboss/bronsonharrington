// Site-wide tracking and verification IDs.
// Leave a value empty ('') and nothing for it is added to the page.

// Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'
// (Analytics > Admin > Data streams > your web stream)
export const GA_MEASUREMENT_ID = 'G-V0QEXZ6792';

// Google Search Console HTML-tag verification: only the content="..." value
// of <meta name="google-site-verification" content="...">
// Not needed if the property was verified by DNS (a Domain property).
export const GSC_VERIFICATION = '6X6pKZ4SCxv77600U6g9PajhZNeYByqJrNRTOQ7tQrM';

// Contact details shown in the top bar (and used in schema)
export const CONTACT = {
  descriptor: 'Growth Architect Costa Rica',
  email: 'im@bronson.co.za',
  phoneDisplay: '+506 6182 5718',
  phoneHref: 'tel:+50661825718',
};

// Page background.
//   'grid'     ultrafine pixel grid (paper texture) with the roving spotlight
//   'snowfall' festive glyph snowfall with the same spotlight
//   'auto'     snowfall during the festive season below, grid the rest of the year
// Preview either one on any page with ?bg=grid or ?bg=snowfall
export const BACKGROUND = {
  mode: 'auto' as 'auto' | 'grid' | 'snowfall',
  season: { from: '11-01', to: '01-06' }, // MM-DD, inclusive; may wrap the new year
};
