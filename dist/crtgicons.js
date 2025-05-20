const CRTG = (() => {
  const state = {
    currentTheme: 'dark',
    icons: ["accessory", "activity", "adjustments-horizontal-2", "adjustments-horizontal", "adjustments-vertical-2", "adjustments-vertical", "airbnb", "airplay", "alarm-minus", "alarm-on", "alarm-plus", "alarm", "alert-circle", "alert-octagon", "alert-triangle", "align-bottom", "align-center", "align-justify", "align-left", "align-right", "align-top", "anchor", "android", "aperture", "archive", "arrow-bar-left", "arrow-down-circle", "arrow-down-left-circle", "arrow-down-left-square", "arrow-down-left", "arrow-down-right-circle", "arrow-down-right-square", "arrow-down-right", "arrow-down-square", "arrow-down", "arrow-left-circle", "arrow-left-square", "arrow-left", "arrow-right-circle", "arrow-right-square", "arrow-right", "arrow-up-circle", "arrow-up-left-circle", "arrow-up-left-square", "arrow-up-left", "arrow-up-right-circle", "arrow-up-right-square", "arrow-up-square", "arrow-up", "arrows-join", "arrows-join2", "arrows-mazimize", "arrows-minimize", "arrows-split", "arrows-split2", "artist", "asana", "at-sign", "award-2", "award", "bank-2", "bank", "bar-chart-2", "bar-chart", "battery-2", "battery-3", "battery-4", "battery-charging", "battery", "bell-2", "bell-3", "bell-off", "bell", "block", "bluetooth-connected", "bluetooth-off", "bluetooth", "bold", "book-2", "book-open", "book", "bookmark-minus", "bookmark-plus", "bookmark", "bootstrap", "border-bottom", "border-clear", "border-horizontal", "border-inner", "border-left", "border-outer", "border-right", "border-top", "border-vertical", "bottom-drawer", "bottom-navigation", "box", "braces-dots", "braces-minus", "braces-plus", "braces-x", "braces", "brackets-contain", "brackets", "briefcase-1", "briefcase-2", "briefcase-3", "briefcase-4", "brush-2", "brush-3", "brush-4", "brush", "bug-2", "bug", "building-2", "building-3", "building-4", "building", "bulb", "calculator", "calendar-2", "calendar-check", "calendar-event-1", "calendar-event-2", "calendar-minus", "calendar-plus", "calendar-search", "calendar-time", "calendar-view-day", "calendar", "camera-ai", "camera-check-2", "camera-check", "camera-minus", "camera-off", "camera-plus", "camera", "car-2", "car", "cash1", "cash2", "cast", "chat-1", "chat-2", "chat-3", "chat-4", "chat-check-2", "chat-check", "chat-delete", "chat-down", "chat-forward", "chat-history", "chat-minus", "chat-plus", "chat-report", "chat-smile-1", "chat-smile-2", "chat-up", "check-circle-2", "check-circle", "check-square", "check", "chevron-down-circle", "chevron-down", "chevron-left-circle", "chevron-left", "chevron-right-circle", "chevron-right", "chevron-up-circle", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard-check", "clipboard-delete", "clipboard-plus", "clipboard-text", "clipboard-typography", "clipboard", "clock-check", "clock-edit", "clock-hour-1", "clock-hour-10", "clock-hour-11", "clock-hour-12", "clock-hour-2", "clock-hour-3", "clock-hour-4", "clock-hour-5", "clock-hour-6", "clock-hour-7", "clock-hour-8", "clock-hour-9", "clock-minus", "clock-plus", "clock-snooze", "close-circle", "close-octagon", "close-square", "close", "cloud-2", "cloud-fog-2", "cloud-fog", "cloud-lightning-2", "cloud-lightning", "cloud-off", "cloud-rain-2", "cloud-rain-3", "cloud-rain-4", "cloud-rain", "cloud-snow-2", "cloud-snow", "cloud", "code-2", "code-box-2", "code-box", "code-circle-2", "code-circle", "code", "codesandbox", "coffee", "coin-hand", "coin", "coins1", "coins2", "color-2", "color", "colordroper", "columns", "command", "community-2", "community", "compass-2", "compass-navigation", "compass", "copy-2", "copy", "copyright", "corner-down-left", "corner-left-up", "corner-right-down", "corner-up-right", "cpu", "credit-card-add", "credit-card-edit", "credit-card-minus", "credit-card1", "credit-card2", "crop", "crosshair", "currency-bitcoin-circle", "currency-bitcoin", "currency-dollar-circle", "currency-dollar1", "currency-dollar2", "currency-ethereum-circle", "currency-ethereum", "currency-euro-circle", "currency-euro", "currency-franc-circle", "currency-franc", "currency-pound-circle", "currency-pound", "currency-ruble-circle", "currency-ruble", "currency-rupee-circle", "currency-rupee", "currency-yen-circle", "currency-yen", "dashboard-customize", "dashboard", "data-table", "database", "date-range", "deezer", "delete", "diagnosis", "direction", "disc-2", "disc", "discount-check", "discount", "discount2", "distance", "divide", "doc-to-left", "doc-to-right", "download-cloud", "download", "droplet-2", "droplet-minus", "droplet-percent", "droplet-plus", "droplet", "earbuds-2", "earbuds", "edit-2", "edit", "eraser", "event-note", "evernote", "external-link", "eye-off", "eye", "facebook", "factory", "fast-forward", "figma", "file-ai", "file-check", "file-code", "file-copy-2", "file-copy", "file-delete-2", "file-delete", "file-download", "file-edit-2", "file-edit", "file-excel", "file-history", "file-list-2", "file-list", "file-lock-2", "file-lock", "file-minus-2", "file-minus", "file-pdf", "file-plus-2", "file-plus", "file-ppt", "file-search-2", "file-search", "file-shield-2", "file-shield", "file-text", "file-transfer", "file-upload", "file-word", "file", "film-2", "film", "filter", "fingerprint", "flag-2", "flag", "flow", "folder-2", "folder-ai", "folder-check", "folder-copy", "folder-download", "folder-lock-2", "folder-lock", "folder-minus", "folder-open", "folder-plus", "folder-shield", "folder-transfer", "folder-upload", "folder-zip", "folder", "format-image-left", "format-image-right", "forms", "framer", "frown", "gaming-remote", "gender-female", "gender-male", "gift-2", "gift-card", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid-on", "grid", "half-star", "hard-drive", "hash", "headphones", "headset", "heart-ai", "heart", "help-circle", "hexagon", "history", "hom-3", "home-2", "home-4", "home-eco", "home-heart", "home-location", "home-lock", "home-search", "home-setting", "home-shield", "home-smile", "home-user", "home", "hospital", "hourglass-1", "hourglass-2", "hourglass-high", "hourglass-low", "image-2", "image-ai-02", "image-ai", "image-check", "image-edit", "image-minus", "image-plus", "image-search", "image", "inbox", "indent-decrease", "indent-increase", "info", "instagram", "italic", "key", "landscape", "laptop", "layers-1", "layers-2", "layout-2", "layout-3", "layout-kanban-1", "layout-kanban-2", "layout-kanban-3", "layout", "link-2", "link", "linkedin", "list-check-2", "list-check", "list", "loader-2", "loader-3", "loader", "location", "lock-2", "lock-3", "lock", "log-in-2", "log-in", "log-out", "mail-ai", "mail-check", "mail-minus", "mail-open", "mail-plus", "mail", "map-2", "map-pin-2", "map-pin-check", "map-pin-minus", "map-pin-plus", "map-pin", "map", "maximize", "meh", "menu-2", "menu-3", "menu-4", "menu-5", "menu-ai", "menu-search-2", "menu-search", "menu", "message-1", "message-2", "mic-2", "mic-off", "mic", "minimize", "minus-circle", "minus-square", "minus", "monitor-ai", "monitor", "moon-stars", "moon", "more-horizontal", "more-vertical", "mouse-pointer", "move", "movie", "mug", "music-2", "music-ai", "music", "navigation", "no-money", "note1", "note2", "note3", "note4", "notes", "notpad", "octagon", "package", "paint", "paperclip-2", "paperclip", "parentheses", "pause-circle", "pause-square-2", "pause-square", "pause", "paypal", "pen-2", "pen-tool-2", "pen-tool", "pen", "pencil-2", "pencil-3", "pencil-4", "pencil-ai", "pencil", "pendrive", "pentagon", "percent", "phone-call", "phone-incoming", "phone-off", "phone-outgoing", "phone", "pie-chart", "play-circle", "play-square-2", "play-square", "play", "playlist", "plus-circle", "plus-square", "plus", "pocket", "portrait", "power", "printer", "qr-code-scan", "qr-code", "radio", "rainbow", "receipt", "rectangle", "refresh-ccw", "refresh-cw", "report", "resize", "responsive", "rewind", "rotate-ccw", "rotate-cw", "rotate-left", "rotate-right", "route", "rss", "ruler-2", "ruler-3", "ruler", "safari", "save", "scan", "school", "scissors-2", "scissors-3", "scissors-cut", "scissors", "search-2", "search-3", "search-ai", "search", "send-1", "send-2", "server", "setting-3", "setting-4", "setting-ai", "setting", "shapes-2", "shapes", "share-2", "share", "shield-off", "shield", "shining-2", "shining", "shopping-bag1", "shopping-bag2", "shopping-bag3", "shopping-bag4", "shopping-bag5", "shopping-basket1", "shopping-basket2", "shopping-cart1", "shopping-cart2", "shopping-cart3", "shopping-cart4", "shuffle", "skip-back", "skip-forward", "slack", "smartphone", "smartwatch", "smile", "snapchat", "snooze", "snowflake", "sort-asc", "sort-desc", "soundcloud", "source-code", "sparkles-2", "sparkles-3", "sparkles", "speaker", "square", "star", "stars", "startup-2", "startup", "sticky-note-2", "sticky-note-plus", "sticky-note", "stop-circle", "stop-square-2", "stop-square", "stop", "store-2", "store", "sun-cloud", "sun", "sunrise", "sunset-2", "sunset", "swap-horizontal", "swap-verticle", "table-rows", "table", "tablet", "tabs", "tag-2", "tag", "target", "temprature-2", "temprature-3", "temprature", "tent-2", "tent", "terminal-2", "terminal", "text-ad", "text-resize", "text-size", "thumbs-down", "thumbs-up", "ticket-2", "ticket-3", "ticket", "toast", "toggle-left", "toggle-right", "tool", "toolbar", "trash-2", "trash-3", "trash", "trending-down", "trending-up", "triangle", "truck", "tv", "twitter", "type", "umbrella-2", "umbrella", "underline", "unlock-2", "unlock-3", "unlock", "uno", "upload-cloud", "upload", "user-2", "user-ai", "user-check", "user-circle", "user-delete", "user-down", "user-edit", "user-heart", "user-location", "user-lock", "user-minus", "user-plus", "user-receive", "user-search", "user-share", "user-shield", "user-square", "user-star", "user-up", "user", "users-plus", "users", "vector-2", "vector-3", "vector", "video-2", "video-download", "video-live", "video-minus", "video-off", "video-plus", "video-upload", "video", "view-agenda-horizontal", "view-agenda-vertical", "visual-search", "voicemail", "volume-2", "volume-vibrate", "volume-x", "volume", "wallet1", "wallet2", "wand-2", "wand-sparkles", "wand", "watch", "wave", "wifi-off", "wifi", "wind", "window-maximize", "window-minimize", "write-1", "write-2", "youtube", "zap-off", "zap", "zoom-in", "zoom-out"],
    activeAnimations: new Map()
  };

  // Sistema de temas
  const toggleTheme = () => {
    state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    localStorage.setItem('crtg-theme', state.currentTheme);
  };

  // Sistema de búsqueda
  const initSearch = () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.card').forEach(card => {
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(term) ? 'grid' : 'none';
      });
    });
  };

  // Sistema de animaciones
  const createAnimation = (element, type) => {
    const animations = {
      spin: () => gsap.to(element, { 
        rotation: 360, 
        duration: 1.5, 
        repeat: -1, 
        ease: "none" 
      }),
      pulse: () => gsap.to(element, {
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)"
      }),
      float: () => gsap.to(element, {
        y: -10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    };
    return animations[type]?.();
  };

  // Inicialización
  const init = () => {
    // Cargar tema
    const savedTheme = localStorage.getItem('crtg-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    state.currentTheme = savedTheme;

    // Inicializar componentes
    initSearch();
    
    // Configurar botón de tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  };

  return { init };
})();

// Inicialización automática
document.addEventListener('DOMContentLoaded', CRTG.init);
