
/*
 * crtgicons JavaScript Library
 * Version: 1.0.0
 * Generated: 2025-05-20 20:59:30
 */

// Define SVG icons for theme toggle
const SUN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

const CRTG = (() => {
  const state = {
    currentTheme: 'dark',
    icons: ["3d-glasses", "Aligh arrow down", "Align arrow left", "Align arrow right", "Align arrow up", "Align block", "Ellipse 59", "Ellipse 60", "Ellipse 61", "Ellipse 62", "Ellipse 63", "Ellipse 64", "Ellipse 65", "Ellipse 67", "Ellipse 69", "Ellipse 70", "Ellipse 71", "Ellipse 72", "Ellipse 73", "Ellipse 74", "Ellipse 76", "Ellipse 77", "Ellipse 78", "Ellipse 80", "Ellipse 81", "Ellipse 82", "Expand arrow", "Icon", "Line 3", "Line 4", "Navigation arrow down", "Navigation arrow left", "Navigation arrow right", "Navigation arrow up", "Polygon 1", "Polygon 2", "Polygon 3", "Polygon 4", "Polygon 5", "Polygon 6", "Polygon 7", "Star 1", "Triangle arrow down", "Triangle arrow left", "Triangle arrow right", "Triangle arrow up", "Vector 1", "Vector 2", "Vector 3", "Vector 4", "Vector 5", "Vector 6", "Vector 71", "Vector 72", "abacus", "accessory", "activity", "adjustments-horizontal", "adjustments-horizontal-2", "adjustments-vertical", "adjustments-vertical-2", "after-shave", "airbnb", "airplane", "airplane-window", "airplay", "alarm", "alarm-check", "alarm-minus", "alarm-on", "alarm-plus", "alarm-remove", "alarm-ringing", "alarm-subtract", "alert-circle", "alert-octagon", "alert-triangle", "align-bottom", "align-center", "align-justify", "align-left", "align-right", "align-top", "amazon", "ambulance", "american-football", "anchor", "android", "aperture", "apple", "apple-store", "archive", "arrow bottom left", "arrow bottom right", "arrow down", "arrow left", "arrow right", "arrow top left", "arrow top right", "arrow up", "arrow-bar-left", "arrow-down", "arrow-down-circle", "arrow-down-left", "arrow-down-left-circle", "arrow-down-left-square", "arrow-down-right", "arrow-down-right-circle", "arrow-down-right-square", "arrow-down-square", "arrow-left", "arrow-left-circle", "arrow-left-square", "arrow-right", "arrow-right-circle", "arrow-right-square", "arrow-up", "arrow-up-circle", "arrow-up-left", "arrow-up-left-circle", "arrow-up-left-square", "arrow-up-right-circle", "arrow-up-right-square", "arrow-up-square", "arrows-join", "arrows-join2", "arrows-mazimize", "arrows-minimize", "arrows-split", "arrows-split2", "artist", "asana", "at-sign", "atm-machine", "atom", "aurora-borealis", "avocado", "award", "award-2", "baby-bed-crib", "baby-bib", "baby-bottle", "baby-boy", "baby-car-seat", "baby-chair", "baby-clothes", "baby-girl", "baby-piano-toy", "baby-sippy-cup", "baby-sling", "backpack", "bacon-strips", "bag", "bag-plant", "baguette", "balance", "balloons", "bandage", "bank", "bank-2", "bank-check", "bar-average", "bar-chart", "bar-chart-2", "bar-code", "bar-down", "bar-up", "barber-razor", "baseball", "basket", "basketball", "bath-tub", "bathroom", "battery", "battery-2", "battery-3", "battery-4", "battery-charging", "battery-empty", "battery-full", "battery-half", "beach", "beaker", "bed", "beer-bottle", "beer-mug", "beer-weizenbier", "behance", "bell", "bell-2", "bell-3", "bell-off", "bezier-curve", "bicycle", "binoculars", "birthday-cake", "bitcoin", "bitcoin-symbol", "blade", "block", "bluetooth", "bluetooth-connected", "bluetooth-off", "boat", "bold", "bone-folder", "book", "book-2", "book-case", "book-open", "bookmark", "bookmark-minus", "bookmark-plus", "boot", "bootstrap", "border-bottom", "border-clear", "border-horizontal", "border-inner", "border-left", "border-outer", "border-right", "border-top", "border-vertical", "bottom-drawer", "bottom-navigation", "bowling", "box", "boxing", "braces", "braces-dots", "braces-minus", "braces-plus", "braces-x", "brackets", "brackets-contain", "brain", "brandi", "bread", "bricks-toy", "briefcase-1", "briefcase-2", "briefcase-3", "briefcase-4", "brush", "brush-2", "brush-3", "brush-4", "brush-pencil", "bubble-race", "bug", "bug-2", "bug-virus", "building", "building-2", "building-3", "building-4", "bulb", "bunk-bed", "bunsen-burner", "burger", "burrito", "bus", "cabin", "cabinet", "cake-slice", "calculator", "calendar", "calendar-2", "calendar-add", "calendar-check", "calendar-day", "calendar-event-1", "calendar-event-2", "calendar-minus", "calendar-page", "calendar-plus", "calendar-remove", "calendar-schedule", "calendar-search", "calendar-subtract", "calendar-time", "calendar-view-day", "camera", "camera-ai", "camera-check", "camera-check-2", "camera-minus", "camera-off", "camera-plus", "camp-fire", "camper", "candidate", "candy", "candy-cane", "canyon", "capsule-pill", "car", "car-2", "card-holder", "cards", "cargo-truck", "carrot", "cash-register", "cash1", "cash2", "cast", "cd-rom", "celsius", "centrifuge", "chair", "chalkboard", "champagne", "charging-point", "chart-maximum", "chart-minimum", "chat-1", "chat-2", "chat-3", "chat-4", "chat-bubble", "chat-check", "chat-check-2", "chat-delete", "chat-down", "chat-forward", "chat-history", "chat-minus", "chat-plus", "chat-report", "chat-smile-1", "chat-smile-2", "chat-up", "chatbot", "check", "check-circle", "check-circle-2", "check-square", "chef-apron", "chef-hat", "chemical-reaction", "chess", "chevron-down", "chevron-down-circle", "chevron-left", "chevron-left-circle", "chevron-right", "chevron-right-circle", "chevron-up", "chevron-up-circle", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chicken", "chinese-new-year", "christmas-sock", "christmas-tree", "chroma", "chrome", "cinema", "circle", "circuit-board", "circular", "civil-right", "clapperboard", "classroom", "clinking-glasses", "clipboard", "clipboard-check", "clipboard-delete", "clipboard-plus", "clipboard-text", "clipboard-typography", "clock", "clock-check", "clock-edit", "clock-hour-1", "clock-hour-10", "clock-hour-11", "clock-hour-12", "clock-hour-2", "clock-hour-3", "clock-hour-4", "clock-hour-5", "clock-hour-6", "clock-hour-7", "clock-hour-8", "clock-hour-9", "clock-minus", "clock-plus", "clock-snooze", "close", "close-circle", "close-octagon", "close-square", "closed-envelope", "closet", "cloud", "cloud-2", "cloud-download", "cloud-fog", "cloud-fog-2", "cloud-hail-2", "cloud-lighting", "cloud-lightning", "cloud-lightning-2", "cloud-off", "cloud-rain", "cloud-rain-2", "cloud-rain-3", "cloud-rain-4", "cloud-snow", "cloud-snow-2", "cloud-sun", "cloud-upload", "coat-hanger", "coat-rack", "code", "code-2", "code-box", "code-box-2", "code-circle", "code-circle-2", "codesandbox", "coffee", "coffee-cup", "coffee-jar", "coin", "coin-hand", "coins1", "coins2", "color", "color-2", "colordroper", "column-average", "column-down", "column-up", "columns", "comb", "command", "community", "community-2", "compass", "compass-2", "compass-navigation", "conversation-bubble", "convertible-car", "cookie", "copy", "copy-2", "copyright", "coral-reef", "corner-down-left", "corner-left-up", "corner-right-down", "corner-up-right", "couch", "courthouse", "cpu", "crayons", "cream-jar", "credit-card", "credit-card-add", "credit-card-edit", "credit-card-minus", "credit-card1", "credit-card2", "croissant", "crop", "crosshair", "cruise-ship", "cupcake", "currency-bitcoin", "currency-bitcoin-circle", "currency-dollar-circle", "currency-dollar1", "currency-dollar2", "currency-ethereum", "currency-ethereum-circle", "currency-euro", "currency-euro-circle", "currency-franc", "currency-franc-circle", "currency-pound", "currency-pound-circle", "currency-ruble", "currency-ruble-circle", "currency-rupee", "currency-rupee-circle", "currency-yen", "currency-yen-circle", "curtain", "cutlery", "cutting-mat", "dashboard", "dashboard-customize", "data-table", "database", "date-range", "debate", "decorations", "deezer", "delete", "delivery", "desert", "desk", "desktop-computer", "diagnosis", "diamond", "dice", "digital-alarm", "digital-document", "diploma-02", "dipploma-01", "direction", "directions", "director-chair", "disc", "disc-2", "discount", "discount-check", "discount2", "dish-dome", "diskette", "distance", "divide", "diwali", "dna-double-helix", "doc-to-left", "doc-to-right", "doctors-coat", "document", "document-file-sharing", "dollar-bill", "dollar-coin", "dollar-symbol", "donut", "donut-1", "donut-2", "door", "double arrow down", "double arrow left", "double arrow right", "double arrow up", "download", "download-cloud", "dress", "dressing-room", "dribbble", "drop-water", "droplet", "droplet-2", "droplet-minus", "droplet-percent", "droplet-plus", "dropper", "drops", "dvd", "earbuds", "earbuds-2", "easter", "eco-bag", "eco-factory", "ecosystem", "edit", "edit-2", "egg", "electric-car", "energy-drink", "environmental-care", "eraser", "erlenmeyer-flask", "ethereum-symbol", "euro-symbol", "event-note", "evernote", "exit", "export", "external-hard-drive", "external-link", "eye", "eye-off", "eye-scan", "eyelashes", "face-id", "face-id-square", "facebook", "factory", "farenheit", "fast-forward", "fax", "female-couple", "female-couple-symbol", "female-male-couple", "female-male-couple-symbol", "female-symbol", "female-talk", "female-teaching", "ferry", "figma", "file", "file-ai", "file-check", "file-code", "file-copy", "file-copy-2", "file-delete", "file-delete-2", "file-download", "file-edit", "file-edit-2", "file-excel", "file-history", "file-list", "file-list-2", "file-lock", "file-lock-01", "file-lock-02", "file-lock-03", "file-lock-2", "file-minus", "file-minus-2", "file-pdf", "file-plus", "file-plus-2", "file-ppt", "file-search", "file-search-2", "file-shield", "file-shield-01", "file-shield-02", "file-shield-03", "file-shield-2", "file-text", "file-transfer", "file-upload", "file-word", "film", "film-2", "film-camera", "film-roll", "film-strip", "filter", "fingerprint", "fingerprint-01", "fingerprint-02", "fingerprint-03", "fingerprint-04", "fireworks", "first-aid-kit", "fishing-hook", "fitness-tracker", "flag", "flag-2", "flip-flops", "flood", "flow", "flower", "fog", "folder", "folder-2", "folder-ai", "folder-check", "folder-copy", "folder-download", "folder-lock", "folder-lock-2", "folder-minus", "folder-open", "folder-plus", "folder-shield", "folder-transfer", "folder-upload", "folder-zip", "food-bowl", "footprint", "format-image-left", "format-image-right", "forms", "framer", "frown", "funnel", "fuse", "gamepad", "gaming-remote", "garden-hose", "gender-female", "gender-male", "gift", "gift-2", "gift-card", "gingerbread-man", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "glacier", "glass-house", "globe", "glue", "gold-bars", "golf-ball", "golf-field", "golf-stick", "gondola", "google-chrome", "graduated-cylinder", "graduation-hat", "graphic-tablet", "green-house", "grid", "grid-on", "hair-brush", "hair-cutting-machine", "hair-dryer", "half-star", "halloween-ghost", "halloween-pumpkin", "hammer", "handcuff", "hard-drive", "hash", "hashtag", "headphones", "headset", "heart", "heart-ai", "heartbeat", "heavy-rain", "heel-shoe", "helicopter", "help-circle", "hexagon", "history", "hollywood-star", "hom-3", "home", "home-2", "home-4", "home-eco", "home-heart", "home-location", "home-lock", "home-search", "home-setting", "home-shield", "home-smile", "home-user", "hoodie", "hospital", "hospital-building", "hot-air-balloon", "hotel", "hourglass", "hourglass-1", "hourglass-2", "hourglass-high", "hourglass-low", "house", "ice-cream", "ice-skating", "iced-tea", "id-card", "image", "image-2", "image-ai", "image-ai-02", "image-check", "image-edit", "image-minus", "image-plus", "image-search", "imessage", "import", "inbox", "inbox check", "inbox lock", "incognito-intruder", "indent-decrease", "indent-increase", "independence-day", "info", "info outkine", "infusion", "inhaler", "instagram", "insurance", "intersex-symbol", "invoice", "invoice-tip", "island", "italic", "jail", "judge", "judge-pen", "juice-box", "juice-jar", "justice-scale", "kayak", "ketchup", "key", "key-01", "key-02", "keyboard", "keyframes", "knife", "lab-coat", "lab-goggles", "lake", "lamp-1", "lamp-2", "landscape", "language", "lantern", "laptop", "layers-1", "layers-2", "layout", "layout-2", "layout-3", "layout-kanban-1", "layout-kanban-2", "layout-kanban-3", "leaf", "legal-document", "legal-document-envelope", "legal-studies", "lemon-slice", "lighting", "line-down", "line-up", "link", "link-2", "linkedin", "linux", "lipstick", "list", "list-check", "list-check-2", "loader", "loader-2", "loader-3", "location", "lock", "lock-01", "lock-02", "lock-03", "lock-05", "lock-2", "lock-3", "lock-keyhole-circle", "lock-keyhole-square", "lock-unlocked-01", "lock-unlocked-02", "lock-unlocked-03", "lock-unlocked-04", "locker", "log-in", "log-in-2", "log-out", "login", "long-drink", "magnet", "mail", "mail-ai", "mail-check", "mail-minus", "mail-open", "mail-plus", "mailbox", "makeup-brush", "male-couple", "male-couple-symbol", "male-female-symbol", "male-symbol", "male-talk", "male-teaching", "man-protester", "map", "map-2", "map-pin", "map-pin-2", "map-pin-check", "map-pin-minus", "map-pin-plus", "map-pointer", "marshmallow", "martini", "mascara", "math", "maximize", "mechanical-pencil", "medal", "medical-ID-bracelet", "medical-location", "medical-mask", "medical-report", "medicine-bottle", "megaphone", "meh", "men-perfume", "menu", "menu-2", "menu-3", "menu-4", "menu-5", "menu-ai", "menu-board", "menu-search", "menu-search-2", "message-1", "message-2", "meta", "metro-front", "metro-side", "metro-station", "mic", "mic-2", "mic-off", "microchip", "microorganism", "microphone", "microscope", "milk-bottle", "milk-box", "milkshake", "minimize", "minus", "minus-circle", "minus-square", "mirror", "mist", "mistletoe", "molecule", "money-bag", "monitor", "monitor-ai", "moon", "moon-stars", "more-horizontal", "more-vertical", "motor-snow", "motorcycle", "mountains", "mouse", "mouse-pointer", "move", "movie", "movie-theater", "movie-ticket", "mug", "music", "music-2", "music-ai", "nail", "nail-polish", "napkin-holder", "nappy", "nature-energy", "navigation", "neutral-emoticon", "new-years-eve", "no-money", "note1", "note2", "note3", "note4", "notes", "notification-bell", "notpad", "ocean", "octagon", "ofender", "office-chair", "online-learning", "open-book", "open-diploma", "open-envelope", "opposition", "oscar", "oven", "oven-mitt", "pacifier", "package", "packages", "paint", "paintbrush", "pan", "pantone-swatch", "pants", "paper-airplane", "paperclip", "paperclip-2", "parentheses", "passcode", "passcode-lock", "passport", "patient-bed", "pause", "pause-circle", "pause-square", "pause-square-2", "paypal", "pen", "pen-2", "pen-tool", "pen-tool-2", "pencil", "pencil-2", "pencil-3", "pencil-4", "pencil-ai", "pencil-edit", "pendrive", "pentagon", "percent", "petri-dish", "phone", "phone-call", "phone-incoming", "phone-off", "phone-outgoing", "pickup", "pie-1", "pie-2", "pie-3", "pie-chart", "piggy-bank", "pingpong", "pinterest", "pizza-slice", "planet", "plant", "plate", "play", "play-circle", "play-square", "play-square-2", "play-store", "playlist", "plus", "plus-circle", "plus-square", "pocket", "police", "popcorn", "portrait", "postcard", "pound-sterling-symbol", "powder", "power", "printer", "prison", "projector", "protractor", "pulse-monitor", "puzzle-piece", "qr-code", "qr-code-scan", "radio", "radio-nanny", "rain", "rainbow", "rainbow-with-cloud", "raindrop", "raining", "rattle-01", "rattle-02", "rattle-03", "rattle-04", "receipt", "recicle-bin", "rectangle", "recycle", "reforestation", "refresh-ccw", "refresh-cw", "reindeer", "reminder", "remote-control", "remove", "report", "reservation-book", "resize", "responsive", "restaurant-shop", "retro-tv", "reuse-plastic", "reuse-water", "rewind", "rickshaw", "river", "road", "robot", "rocket", "rocks", "roll-skating", "rotate-ccw", "rotate-cw", "rotate-left", "rotate-right", "route", "router-modem", "rss", "rubber-stamp", "ruler", "ruler-2", "ruler-3", "sad-emoticon", "safari", "safe-box", "safety-razor", "salt-pepper", "santa-claus-hat", "santas-sleigh", "satellite", "sauce", "sausage", "save", "save-earth", "save-water", "scan", "scanner", "scarf", "school", "school-bell", "school-building", "school-bus", "schoolbag", "scissors", "scissors-2", "scissors-3", "scissors-cut", "scooter", "screen", "sd-card", "search", "search-2", "search-3", "search-ai", "secure-network", "security-camera-01", "security-camera-02", "segway", "send-1", "send-2", "server", "setting", "setting-3", "setting-4", "setting-ai", "settings", "shapes", "shapes-2", "share", "share-2", "shaving-cream", "shelf", "sheriff-badge", "shield", "shield-01", "shield-02", "shield-check", "shield-dollar", "shield-off", "shield-plus", "shield-tick", "shield-zap", "shining", "shining-2", "shirt", "shop", "shopping-bag1", "shopping-bag2", "shopping-bag3", "shopping-bag4", "shopping-bag5", "shopping-basket1", "shopping-basket2", "shopping-cart", "shopping-cart-add", "shopping-cart-cancel", "shopping-cart-checkout", "shopping-cart-remove", "shopping-cart1", "shopping-cart2", "shopping-cart3", "shopping-cart4", "shuffle", "sign", "single-bed", "sink", "skate", "sketchbook", "skip-back", "skip-forward", "slack", "sleep-napping", "smartphone", "smartwatch", "smile", "smiley-emoticon", "snapchat", "sneakers-shoe", "snooze", "snow-capped-mountains", "snow-globe", "snowfall", "snowflake", "snowman", "soap-dispenser", "soccer", "sock", "soda", "soda-can", "sofa", "solar-panel", "sort-asc", "sort-desc", "soundcloud", "source-code", "sparkles", "sparkles-2", "sparkles-3", "speaker", "spotlight", "spray", "squad-ruler", "square", "st-patricks-day", "stacked-bar-down", "stacked-bar-up", "stacking-ring", "staked-column-average", "staked-column-down", "staked-column-up", "star", "stars", "startup", "startup-2", "steak", "stethoscope", "sticky-note", "sticky-note-2", "sticky-note-plus", "stop", "stop-circle", "stop-square", "stop-square-2", "stopwatch", "store", "store-2", "stretcher", "stripe", "stroller", "structure", "study-notes", "suitcase", "sun", "sun-cloud", "sunglasses", "sunny-side-down-eggs", "sunrise", "sunset", "sunset-2", "sunshower", "super-man", "super-woman", "support", "surf", "sushi-roll", "sustainable-energy", "swap-horizontal", "swap-verticle", "swimming", "swimming-shorts", "syringe", "table", "table-bell", "table-rows", "table-setting", "tablecloth", "tablet", "tabs", "taco", "tag", "tag-2", "tape", "target", "taxi", "tea", "tea-pot", "teddy-bear", "telegram", "telephone", "telephone-directory", "telescope", "televison-set", "temperature-cold", "temperature-hot", "temprature", "temprature-2", "temprature-3", "tennis", "tent", "tent-2", "terminal", "terminal-2", "test", "test-tube", "text-ad", "text-resize", "text-size", "thanksgiving", "theater-masks", "theater-seat", "thermometer", "thumbs-down", "thumbs-up", "thunder", "tick-tock-clock", "ticket", "ticket-2", "ticket-3", "ticket-office", "tiktok", "timer", "to-do-list", "toast", "toggle-left", "toggle-right", "toilet-paper", "tool", "toolbar", "tooth", "tooth-brushes", "toothpaste", "top-whirling", "tornado", "towel", "tractor", "transgender-symbol", "trash", "trash-2", "trash-3", "tray", "tree", "trending-down", "trending-up", "triangle", "trolley", "trophy", "truck", "tsunami", "tv", "twister", "twitch", "twitter", "type", "umbrella", "umbrella-2", "umbrella-drink", "underline", "underwear", "unlock", "unlock-2", "unlock-3", "uno", "upload", "upload-cloud", "user", "user-2", "user-add", "user-ai", "user-cancel", "user-check", "user-circle", "user-delete", "user-down", "user-edit", "user-heart", "user-location", "user-lock", "user-minus", "user-plus", "user-receive", "user-remove", "user-search", "user-security", "user-share", "user-shield", "user-square", "user-star", "user-talk", "user-target", "user-up", "users", "users-plus", "valentines-day", "van", "vector", "vector(1)", "vector-2", "vector-3", "vhs", "video", "video-2", "video-call-camera", "video-camera", "video-download", "video-live", "video-minus", "video-off", "video-plus", "video-upload", "view-agenda-horizontal", "view-agenda-vertical", "virus", "visual-search", "vitamin-jar", "voicemail", "volcano", "volleyball", "volume", "volume-2", "volume-vibrate", "volume-x", "vote", "waiter", "waiting", "waitress", "walkie-talkie", "wall", "wallet", "wallet1", "wallet2", "wand", "wand-2", "wand-sparkles", "washing-machine", "watch", "water-bottle", "waterfall", "waterfall-average", "waterfall-down", "waterfall-up", "wave", "web-lock", "web-security", "webcam", "weight-fitness", "whatsapp", "wheelchair", "whisk", "whiskey-glass", "wifi", "wifi-off", "wind", "wind-energy", "wind-signs", "window-maximize", "window-minimize", "windows", "wine", "wine-bottle", "woman-perfume", "woman-protester", "working-hours", "wristwatch", "write-1", "write-2", "x-acto-knife ", "yen-symbol", "youtube", "zap", "zap-off", "zoom-in", "zoom-out"], // Python variable injected directly here
    activeAnimations: new Map(),
    currentPanelIconName: null
  };

  const elements = {
    themeToggle: document.getElementById('themeToggle'),
    searchInput: document.getElementById('searchInput'),
    iconGrid: document.querySelector('.grid'),
    iconPanel: document.getElementById('iconPanel'),
    closePanelBtn: document.getElementById('closePanelBtn'),
    panelIconPreview: document.getElementById('panelIconPreview'),
    colorPicker: document.getElementById('colorPicker'),
    sizeSlider: document.getElementById('sizeSlider'),
    sizeValue: document.getElementById('sizeValue'),
    animationSelect: document.getElementById('animationSelect'),
    htmlSnippet: document.getElementById('htmlSnippet'),
    jsSnippet: document.getElementById('jsSnippet'),
    cdnLinkSnippet: document.getElementById('cdnLinkSnippet'),
    copyButtons: document.querySelectorAll('.copy-btn')
  };

  const THEME_STORAGE_KEY = 'crtg-theme';

  const toggleTheme = () => {
    state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, state.currentTheme);
    // Update theme toggle icon
    elements.themeToggle.innerHTML = state.currentTheme === 'dark' ? MOON_ICON : SUN_ICON;
  };

  const initSearch = () => {
    elements.searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(term) ? 'grid' : 'none';
      });
    });
  };

  const animationConfigs = {
    none: () => { return {}; },
    spin: () => {
      return {
        rotation: 360,
        duration: 2,
        repeat: -1,
        ease: "none"
      };
    },
    pulse: () => {
      return {
        scale: 1.1,
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      };
    },
    bounce: () => {
      return {
        y: -15, // Moves up
        duration: 0.4,
        ease: "power1.out", // Ease out going up
        yoyo: true, // Go back to original position
        repeat: -1, // Repeat indefinitely
      };
    },
    shake: () => {
      return {
        x: 8,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      };
    },
    
    float: () => {
      return {
        y: -10,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      };
    }
  };

  

  const stopCurrentAnimation = (target) => {
    if (state.activeAnimations.has(target)) {
      state.activeAnimations.get(target).kill();
      state.activeAnimations.delete(target);
      gsap.set(target, { clearProps: "all" }); // Clear any GSAP properties
    }
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    state.currentTheme = savedTheme;

    // Actualizar ícono del botón
    elements.themeToggle.innerHTML = savedTheme === 'dark'
        ? MOON_ICON
        : SUN_ICON;
  };

  const applyAnimation = (animationName, target) => {
    stopCurrentAnimation(target);
    if (animationConfigs[animationName] && animationName !== 'none') {
      const config = animationConfigs[animationName]();
      const tween = gsap.to(target, config);
      state.activeAnimations.set(target, tween);
    }
  };

  const generateHtmlSnippet = (iconName, color, sizeMultiplier) => {
    // Corrected template literal syntax from \${{...}} to ${...}
    return `<i class="crtg crtg-${iconName}" style="color: ${color}; --crtg-size-multiplier: ${sizeMultiplier};"></i>`;
  };

  const generateJsSnippet = (iconName, animationName) => {
    if (animationName === 'none') {
      return "// No JavaScript animation selected.";
    }

    const config = animationConfigs[animationName]();
    let configString = JSON.stringify(config, null, 2);

    // Remove quotes from keys for cleaner JS snippet
    configString = configString.replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');

    // Special handling for bounce to include the onComplete function as a string literal
    if (animationName === 'bounce') {
      const onCompleteFuncSnippet = `
    onComplete: function() {
        // After each cycle, a small bounce on landing.
        // Note: For a continuous physical bounce, a GSAP Timeline is often more suitable.
        gsap.to(this.targets()[0], { y: 0, duration: 0.3, ease: "bounce.out", delay: 0.05 });
    }`;

      // Insert the onComplete function string into the config string
      // This is a common way to insert function code into generated snippets.
      const lastBraceIndex = configString.lastIndexOf('}');
      if (lastBraceIndex !== -1) {
          const basePart = configString.substring(0, lastBraceIndex).trim();
          if (basePart.length > 1) { // If there are existing properties, add a comma
              configString = basePart + ',' + onCompleteFuncSnippet + '\n}';
          } else { // If only an empty object was left before onComplete
              configString = '{' + onCompleteFuncSnippet + '\n}';
          }
      }
    }

    // Corrected template literal syntax from \${{...}} to ${...}
    return `// Make sure to include GSAP in your project:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

// You can give your icon an ID or a class to select it:
// <i id="myCoolIcon" class="crtg crtg-${iconName}"></i>

// Then, in your JavaScript:
const myIconElement = document.getElementById('myCoolIcon'); // Or document.querySelector('.my-icon-class');

if (myIconElement) {
  gsap.to(myIconElement, ${configString});
}`;
  };

  const updatePanelContent = () => {
    const iconName = state.currentPanelIconName;
    if (!iconName) return;

    const color = elements.colorPicker.value;
    const size = parseFloat(elements.sizeSlider.value);
    const animationName = elements.animationSelect.value;

    // Corrected template literal syntax from \${{...}} to ${...}
    elements.panelIconPreview.className = `crtg crtg-${iconName}`;
    elements.panelIconPreview.style.color = color;
    elements.panelIconPreview.style.setProperty('--crtg-size-multiplier', size);
    elements.sizeValue.textContent = size;

    applyAnimation(animationName, elements.panelIconPreview);

    elements.htmlSnippet.textContent = generateHtmlSnippet(iconName, color, size);
    elements.jsSnippet.textContent = generateJsSnippet(iconName, animationName);
  };

  const openIconPanel = (iconName) => {
    state.currentPanelIconName = iconName;

    // Reset default values when opening the panel
    elements.colorPicker.value = "#FF6B6B"; // Default color
    elements.sizeSlider.value = 3;
    elements.animationSelect.value = 'none';

    updatePanelContent();

    elements.iconPanel.classList.add('open');
  };

  const closeIconPanel = () => {
    elements.iconPanel.classList.remove('open');
    stopCurrentAnimation(elements.panelIconPreview);
    state.currentPanelIconName = null;
  };

  const copyToClipboard = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const textToCopy = targetElement.textContent || targetElement.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
      // Corrected template literal syntax from \${{...}} to ${...}
      const button = document.querySelector(`.copy-btn[data-target="${targetId}"]`);
      if (button) {
        const originalText = button.textContent;
        button.textContent = '¡Copiado!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      }
    }).catch(err => {
      console.error('Error al copiar: ', err);
      alert('Error al copiar al portapapeles. Por favor, copie manualmente.');
    });
  };

  const init = () => {
    // Initialize theme first to ensure elements are updated correctly
    initTheme();

    initSearch();

    elements.themeToggle.addEventListener('click', toggleTheme);
    // Corrected typo: closePanelBtn should call closeIconPanel
    elements.closePanelBtn.addEventListener('click', closeIconPanel);
    elements.iconPanel.addEventListener('click', (e) => {
      if (e.target === elements.iconPanel) {
        closeIconPanel();
      }
    });

    elements.iconGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (card) {
        const iconName = card.dataset.name;
        openIconPanel(iconName);
      }
    });

    elements.colorPicker.addEventListener('input', updatePanelContent);
    elements.sizeSlider.addEventListener('input', updatePanelContent);
    elements.animationSelect.addEventListener('change', updatePanelContent);

    elements.copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        copyToClipboard(button.dataset.target);
      });
    });

    // This is a fixed string, no need for template literal syntax
    elements.cdnLinkSnippet.textContent = 'https://cdn.jsdelivr.net/gh/Danielxhm/icon@1.0.0/dist/crtgicons.css';
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', CRTG.init);
