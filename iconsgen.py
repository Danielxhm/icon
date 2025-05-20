import os
import json
from datetime import datetime

# Configuración mejorada
ICON_FOLDER = "icons"
DIST_FOLDER = "dist"
CSS_FILE = f"{DIST_FOLDER}/crtgicons.css"
HTML_FILE = f"{DIST_FOLDER}/index.html"
JS_FILE = f"{DIST_FOLDER}/crtgicons.js"
LIB_NAME = "crtgicons"
VERSION = "1.0.0"
CDN_URL = f"https://cdn.jsdelivr.net/gh/Danielxhm/icon@v1.0.0"

# Configuración de diseño
THEME_COLORS = {
    "primary": "#2A2F4D",
    "secondary": "#5F6CAF",
    "accent": "#FF6B6B",
    "success": "#4CAF50",
    "warning": "#FFC107",
    "danger": "#F44336",
    "background": "#0A0A0A",
    "surface": "#1A1A1A",
    "text-primary": "#FFFFFF",
    "text-secondary": "#A0A0A0"
}

# Crear estructura de directorios
os.makedirs(DIST_FOLDER, exist_ok=True)
os.makedirs(ICON_FOLDER, exist_ok=True)

# Procesar íconos
icon_files = [f for f in os.listdir(ICON_FOLDER) if f.endswith(".svg")]
icon_names = [os.path.splitext(f)[0] for f in icon_files]

# Generar CSS moderno
css_content = f""":root {{
  /* Theme Colors */
  --crtg-primary: {THEME_COLORS['primary']};
  --crtg-secondary: {THEME_COLORS['secondary']};
  --crtg-accent: {THEME_COLORS['accent']};
  --crtg-success: {THEME_COLORS['success']};
  --crtg-warning: {THEME_COLORS['warning']};
  --crtg-danger: {THEME_COLORS['danger']};
  --crtg-background: {THEME_COLORS['background']};
  --crtg-surface: {THEME_COLORS['surface']};
  --crtg-text-primary: {THEME_COLORS['text-primary']};
  --crtg-text-secondary: {THEME_COLORS['text-secondary']};
  
  /* Sizing */
  --crtg-size-base: 1em;
  --crtg-size-multiplier: 0.25;
}}

[data-theme="light"] {{
  --crtg-background: #FFFFFF;
  --crtg-surface: #F8F9FF;
  --crtg-text-primary: #0A0A0A;
  --crtg-text-secondary: #4A4A4A;
}}

.crtg {{
  display: inline-flex;
  position: relative;
  width: var(--crtg-size-base);
  height: var(--crtg-size-base);
  min-width: 1em;
  min-height: 1em;
  background-color: currentColor;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
}}

/* Íconos individuales */
"""

for icon in icon_names:
    css_content += f""".crtg-{icon} {{
  mask-image: url('{CDN_URL}/icons/{icon}.svg');
}}
"""

with open(CSS_FILE, "w") as f:
    f.write(css_content)

# Generar JavaScript mejorado
js_content = f"""const CRTG = (() => {{
  const state = {{
    currentTheme: 'dark',
    icons: {json.dumps(icon_names)},
    activeAnimations: new Map()
  }};

  // Sistema de temas
  const toggleTheme = () => {{
    state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    localStorage.setItem('crtg-theme', state.currentTheme);
  }};

  // Sistema de búsqueda
  const initSearch = () => {{
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {{
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.card').forEach(card => {{
        const name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(term) ? 'grid' : 'none';
      }});
    }});
  }};

  // Sistema de animaciones
  const createAnimation = (element, type) => {{
    const animations = {{
      spin: () => gsap.to(element, {{ 
        rotation: 360, 
        duration: 1.5, 
        repeat: -1, 
        ease: "none" 
      }}),
      pulse: () => gsap.to(element, {{
        scale: 1.2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "elastic.out(1, 0.3)"
      }}),
      float: () => gsap.to(element, {{
        y: -10,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      }})
    }};
    return animations[type]?.();
  }};

  // Inicialización
  const init = () => {{
    // Cargar tema
    const savedTheme = localStorage.getItem('crtg-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    state.currentTheme = savedTheme;

    // Inicializar componentes
    initSearch();
    
    // Configurar botón de tema
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  }};

  return {{ init }};
}})();

// Inicialización automática
document.addEventListener('DOMContentLoaded', CRTG.init);
"""

with open(JS_FILE, "w") as f:
    f.write(js_content)

# Generar HTML interactivo premium
html_content = f"""<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{LIB_NAME} {VERSION}</title>
  <link rel="stylesheet" href="{CSS_FILE}">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="{JS_FILE}"></script>
  <style>
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      background: var(--crtg-background);
      color: var(--crtg-text-primary);
      font-family: 'Inter', system-ui;
      min-height: 100vh;
      padding: 2rem;
      transition: background 0.3s ease;
    }}

    .container {{
      max-width: 1440px;
      margin: 0 auto;
    }}

    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }}

    .search-container {{
      position: relative;
      flex-grow: 1;
      max-width: 500px;
      margin: 0 2rem;
    }}

    .search-input {{
      width: 100%;
      padding: 0.8rem 2.5rem;
      background: var(--crtg-surface);
      border: 2px solid var(--crtg-text-secondary);
      border-radius: 50px;
      color: var(--crtg-text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
    }}

    .search-input:focus {{
      outline: none;
      border-color: var(--crtg-accent);
      box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
    }}

    .theme-toggle {{
      background: var(--crtg-surface);
      border: none;
      padding: 0.8rem;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
    }}

    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 1.5rem;
      padding: 2rem 0;
    }}

    .card {{
      background: var(--crtg-surface);
      border-radius: 12px;
      padding: 1.5rem;
      transition: all 0.3s ease;
      display: grid;
      place-items: center;
      gap: 1rem;
      cursor: pointer;
      border: 1px solid transparent;
    }}

    .card:hover {{
      transform: translateY(-5px);
      border-color: var(--crtg-accent);
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    }}

    .icon-container {{
      width: 100%;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
    }}

    .icon-name {{
      color: var(--crtg-text-secondary);
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
      word-break: break-word;
    }}

    .editor-overlay {{
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(10px);
      display: none;
      z-index: 1000;
    }}

    .editor {{
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--crtg-surface);
      border-radius: 16px;
      padding: 2rem;
      width: min(90%, 500px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.3);
    }}
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <h1>{LIB_NAME}</h1>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Buscar íconos..." id="searchInput">
      </div>
      <button class="theme-toggle" id="themeToggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z"/>
        </svg>
      </button>
    </header>

    <div class="grid">
      {''.join(f'''
      <div class="card" data-name="{name.lower()}">
        <div class="icon-container">
          <i class="crtg crtg-{name}" style="--crtg-size-multiplier: 2"></i>
        </div>
        <span class="icon-name">{name}</span>
      </div>
      ''' for name in icon_names)}
    </div>
  </div>

  <script>
    // Controlador del editor
    document.querySelectorAll('.card').forEach(card => {{
      card.addEventListener('click', () => {{
        const iconName = card.dataset.name;
        // Lógica del editor aquí
      }});
    }});
  </script>
</body>
</html>
"""

with open(HTML_FILE, "w") as f:
    f.write(html_content)

print(f"Build completado: {len(icon_names)} íconos procesados")