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
  /** A tick: done, included. */
  check: "M5 12.5l4.5 4.5L19 7.5",
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
  /** A page with a tick: approved, signed. */
  "document-check": "M14 3H6v18h12V7l-4-4Z M14 3v4h4 M9 14.5l2 2 4-4",
  /** The euro sign: a payment. */
  euro: "M17.5 6.6A7 7 0 1 0 17.5 17.4 M4 10h9.5 M4 14h9.5",
  /** A closed box: an order, a delivery to come. */
  package: "M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5Z M3.5 7.5 12 12l8.5-4.5 M12 12v9 M7.8 5.2l8.5 4.6",
  /** A delivery truck. */
  truck:
    "M2.5 6h11v10h-11Z M13.5 9.5h4l3 3V16h-7 M5 18.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z M15 18.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z",
  /** A wrench: work done by hand, an installation. */
  wrench:
    "M14.7 6.3a4.5 4.5 0 0 1 5.6-1.1l-3 3 .4 2.1 2.1.4 3-3a4.5 4.5 0 0 1-6.1 5.8l-7.5 7.5a2.1 2.1 0 0 1-3-3l7.5-7.5a4.5 4.5 0 0 1 1-4.2Z",
  /** A lightning bolt: done on its own, automatically. */
  bolt: "M13 2.5 4.5 13.5H12l-1 8 8.5-11H12l1-8Z",
  /** The mouse pointer (fill it to draw it solid). */
  pointer: "M5.5 3.5v15.5l4.2-4.1 2.7 6 2.6-1.1-2.7-6h5.9Z",
  /** A bell: notifications. */
  bell: "M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15Z M10 20.5a2 2 0 0 0 4 0",
  /** Two overlapping sheets: copy. */
  copy: "M9 9h11v11H9Z M5 15H4V4h11v1",
  /** A pencil: edit. */
  pencil: "M4 20l1-4.5L15.5 5a2.1 2.1 0 0 1 3 3L8 18.5Z M13.5 7l3 3",
  /** A bin: delete. */
  trash: "M4 6.5h16 M9.5 6.5V4h5v2.5 M6 6.5l1 13.5h10l1-13.5 M10 10.5v6 M14 10.5v6",
  /** A plus: add. */
  plus: "M12 5v14M5 12h14",
  /** A minus: take away, fewer. */
  minus: "M5 12h14",
  /** Three lines: open the menu. */
  menu: "M4 7h16 M4 12h16 M4 17h16",
  /** A calendar page: pick a date. */
  calendar: "M5 6h14v14H5Z M5 10h14 M9 4v4 M15 4v4",
  /** A door with an arrow leaving it: sign out. */
  "sign-out": "M10 4H5v16h5 M15 8l4 4-4 4 M19 12H9",
  /** A gear: settings. */
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z M19 12a7 7 0 0 0-.1-1.2l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2-1.2L14.3 3h-4l-.3 2.6a7 7 0 0 0-2 1.2l-2.4-.9-2 3.4 2 1.5a7 7 0 0 0 0 2.4l-2 1.5 2 3.4 2.4-.9a7 7 0 0 0 2 1.2l.3 2.6h4l.3-2.6a7 7 0 0 0 2-1.2l2.3.9 2-3.4-2-1.5c.1-.4.1-.8.1-1.2Z",
  /** A question mark in a circle: a tip. */
  question: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M9.6 9.3a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1.1.9-1.1 1.6v.6 M12 16.8h.01",
  /** A key: a way in, an authenticator. */
  key: "M8.5 15.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 11.5h8.5 M17 11.5v3 M19.5 11.5v2",
  /** A shield: security. */
  shield: "M12 3l7.5 3v5.5c0 4.6-3.2 8-7.5 9.5-4.3-1.5-7.5-4.9-7.5-9.5V6Z",
  /** A phone and a screen: devices. */
  device: "M3 5h13v10H3Z M7 19h5 M9.5 15v4 M17 9h4v11h-4Z",
  /** A clock: activity, time. */
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2",
  /** A gift box with a bow: a birthday. */
  gift: "M4 10h16v10H4Z M3 7h18v3H3Z M12 7v13 M12 7c-1.5-3-5-3.5-5-1.5S10 7 12 7Zm0 0c1.5-3 5-3.5 5-1.5S14 7 12 7Z",
  /** An arrow into a tray: download. */
  download: "M12 4v11 M7.5 10.5 12 15l4.5-4.5 M4.5 19.5h15",
  /** A person: a profile. */
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M4.5 20.5a7.5 7.5 0 0 1 15 0",
  /** Two people: accounts, members. */
  users:
    "M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M2.5 20a6.5 6.5 0 0 1 13 0 M16 4.8a3.5 3.5 0 0 1 0 6.4 M18.5 14.5a6.5 6.5 0 0 1 3 5.5",
  /** A padlock: privacy, locked. */
  lock: "M5.5 11h13v9.5h-13Z M8 11V8a4 4 0 0 1 8 0v3",
  /** A triangle with an exclamation mark: a warning. */
  warning: "M12 3.5 21.5 20h-19Z M12 10v4.5 M12 17.3h.01",
  /** Two arrows turning: switch. */
  switch: "M4 8.5h14 M14.5 5 18 8.5 14.5 12 M20 15.5H6 M9.5 12 6 15.5 9.5 19",
} as const;
