/**
 * Every icon as SVG path data on a 24 by 24 grid, drawn as fine lines (no fills): stroked in the current color by
 * `Icon`. Chevrons are the arrows of every site; there are no text arrows anywhere.
 */
export const ICON_PATHS = {
  "chevron-left": "M15 5l-7 7 7 7",
  "chevron-right": "M9 5l7 7-7 7",
  "chevron-up": "M5 15l7-7 7 7",
  "chevron-down": "M5 9l7 7 7-7",
  close: "M6 6l12 12M18 6L6 18",
  /** Full screen: four corners pulling outwards. */
  expand: "M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7",
  /** A magnifying glass with a plus: look closer. */
  "zoom-in": "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z M15.3 15.3 20 20 M10.5 7.8v5.4 M7.8 10.5h5.4",
  call: "M5 4h3.2l1.6 4-2 1.3a11 11 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z",
  sms: "M4 5.5h16v10H10l-4.5 3.5V15.5H4Z M8 10.5h.01 M12 10.5h.01 M16 10.5h.01",
  whatsapp:
    "M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z M9 8.4c.2-.4.6-.4.9-.4l.6 1.4-.6.8a5.6 5.6 0 0 0 2.9 2.9l.8-.6 1.4.6c0 .3 0 .7-.4.9-.6.4-1.5.6-2.4.2a7.6 7.6 0 0 1-3.4-3.4c-.4-.9-.2-1.8.2-2.4Z",
  email: "M3.5 6h17v12h-17Z M3.5 6.5 12 13l8.5-6.5",
  /** A map pin: where to go. */
  directions:
    "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  /** A sun with eight rays. */
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1",
  /** A cookie with a bite and three crumbs (the cookie panel). */
  cookie:
    "M20.5 12.6A8.5 8.5 0 1 1 11.4 3.5a3 3 0 0 0 3.6 3.6 3 3 0 0 0 3.4 3.4 3 3 0 0 0 2.1 2.1Z M8.6 10h.01 M13 14.6h.01 M8.8 15.6h.01",
} as const;
