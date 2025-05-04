source "https://rubygems.org"

# --- Framework principale ---
# Base Rails e componenti core
gem "rails", "~> 8.0.2"
gem "pg", "~> 1.1"                   # Database PostgreSQL
gem "puma", ">= 5.0"                 # Server web
gem "bootsnap", require: false       # Accelera i tempi di avvio tramite caching

# --- Asset pipeline e frontend ---
gem "propshaft"                      # Pipeline di asset moderna per Rails
gem "vite_rails"                     # Integrazione con Vite.js per frontend
gem "tailwindcss-rails"              # Framework CSS utility-first
gem "better_ui", path: "..//better_ui" # DSL per interfacce utente con sintassi Ruby idiomatica

# --- API e formato dati ---
gem "jbuilder"                       # Costruttore JSON per API

# --- Background processing e cache ---
gem "solid_cache"                    # Cache su database
gem "solid_queue"                    # Code di lavoro su database
gem "solid_cable"                    # Action Cable adattatore su database

# --- Deployment e performance ---
gem "kamal", require: false          # Deployment con container Docker
gem "thruster", require: false       # HTTP caching/compressione e X-Sendfile per Puma

# --- Funzionalità opzionali (commentate) ---
# gem "bcrypt", "~> 3.1.7"           # Gestione password sicura
# gem "image_processing", "~> 1.2"   # Trasformazione immagini per Active Storage

# --- Compatibilità piattaforma ---
gem "tzinfo-data", platforms: %i[ windows jruby ]  # File zoneinfo per Windows/JRuby

# --- Ambiente di sviluppo e test ---
group :development, :test do
  gem "debug", platforms: %i[ mri windows ], require: "debug/prelude"  # Tool di debug
  gem "brakeman", require: false                                       # Analisi statica per vulnerabilità
  gem "rubocop-rails-omakase", require: false                          # Stile Ruby standard Rails
end

# --- Solo sviluppo ---
group :development do
  gem "web-console"                  # Console su pagine di eccezioni
end

# --- Solo test ---
group :test do
  gem "capybara"                     # Test di sistema
  gem "selenium-webdriver"           # Driver browser per test di sistema
end
