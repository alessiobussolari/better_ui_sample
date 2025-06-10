# Better UI Sample - Applicazione Demo

Un'applicazione Rails moderna che serve come demo interattiva e ambiente di testing per i componenti dell'ecosystem Better UI.

## 🎯 Scopo del Progetto

Better UI Sample è l'applicazione dimostrativa ufficiale che showcasa tutti i componenti della libreria Better UI in azione. Fornisce:

- **🎨 Demo Live** - Esempi reali di utilizzo dei 26 componenti Better UI
- **🧪 Ambiente di Testing** - Sandbox per testare nuovi componenti e features
- **📖 Documentazione Interattiva** - Integrazione completa con Lookbook
- **💡 Esempi Pratici** - Pattern di implementazione e best practices
- **🔧 Reference Implementation** - Come integrare Better UI in una app Rails moderna

## 🏗️ Stack Tecnologico

- **Rails 8.0.2** - Framework backend con le ultime features
- **Better UI Gemma** - Libreria componenti locale (`../better_ui`)
- **Lookbook 2.3** - Documentazione interattiva componenti
- **Tailwind CSS 4.1.8** - Styling utility-first
- **Hotwire Stack** - Turbo + Stimulus per interazioni dinamiche
- **SQLite** - Database semplice per demo
- **Solid Suite** - Queue, Cache e Cable per performance moderne
- **ESBuild** - Build tool JavaScript veloce

## 🚀 Quick Start

### Prerequisiti

- Ruby 3.2+
- Node.js 18+
- Yarn o npm

### Installazione

```bash
cd better_ui_sample

# Installa dipendenze Ruby
bundle install

# Installa dipendenze JavaScript
yarn install

# Setup database
bin/rails db:create db:migrate

# Build assets iniziale
yarn build
yarn build:css

# Avvia il server
bin/dev
```

### Accesso alle Demo

Una volta avviato, visita:

- **App Demo**: `http://localhost:3000` - Pagine demo con componenti
- **Lookbook**: `http://localhost:3000/lookbook` - Documentazione interattiva
- **Better UI Engine**: `http://localhost:3000/better_ui` - Routes interne gemma

## 📱 Funzionalità Demo

### Pagine Demo Incluse

- **Home Page** - Overview e quick start
- **Components Showcase** - Galleria completa componenti
- **Form Examples** - Esempi form completi con validazione
- **Layout Patterns** - Pattern layout responsive
- **Theme Showcase** - Tutti i 9 temi disponibili
- **Interactive Elements** - Componenti con JavaScript

### Esempi Pratici

```erb
<!-- Esempi tratti dalle pagine demo -->

<!-- Form completo con Better UI -->
<%= form_with model: @user do |form| %>
  <%= bui_field 'Nome', required: true do %>
    <%= bui_input_text(name: 'name', form: form, theme: :blue) %>
  <% end %>
  
  <%= bui_field 'Email' do %>
    <%= bui_input_text(name: 'email', type: :email, form: form) %>
  <% end %>
  
  <%= bui_button('Salva', type: :submit, theme: :green, size: :lg) %>
<% end %>

<!-- Layout applicativo -->
<%= bui_main do %>
  <%= bui_card(title: 'Dashboard', theme: :white) do %>
    <p>Contenuto dashboard qui...</p>
  <% end %>
<% end %>

<!-- Componenti di feedback -->
<%= bui_alert('Operazione completata!', theme: :green, dismissible: true) %>
<%= bui_progress(value: 75, theme: :blue) %>
```

## 🛠️ Development Workflow

### Testare Nuovi Componenti

1. **Sviluppa** il componente in `../better_ui`
2. **Restart** il server Better UI Sample
3. **Aggiungi** esempi nelle pagine demo
4. **Testa** l'integrazione e il comportamento
5. **Documenta** con Lookbook

### Hot Reloading

```bash
# In terminali separati

# 1. Server Rails con auto-reload
bin/dev

# 2. Watch mode per CSS (se modifichi Tailwind)
yarn build:css --watch

# 3. Watch mode per JS (se modifichi JavaScript) 
yarn build --watch
```

### Struttura Demo Pages

```
app/
├── controllers/
│   ├── static_pages_controller.rb    # Demo pages controller
│   └── home_controller.rb            # Homepage controller
├── views/
│   ├── static_pages/                 # Demo pages views
│   │   ├── components.html.erb       # Components showcase
│   │   ├── forms.html.erb            # Form examples
│   │   └── themes.html.erb           # Theme showcase
│   ├── home/
│   │   └── index.html.erb            # Homepage
│   └── layouts/
│       └── application.html.erb      # Main layout
```

## 🎨 Customizzazione

### Aggiungere Nuove Demo

1. **Controller Action**:
```ruby
# app/controllers/static_pages_controller.rb
def nuovo_esempio
  # Setup dati per demo
end
```

2. **View Template**:
```erb
<!-- app/views/static_pages/nuovo_esempio.html.erb -->
<%= bui_main do %>
  <% # Esempi componenti qui %>
<% end %>
```

3. **Route**:
```ruby
# config/routes.rb
get 'nuovo_esempio', to: 'static_pages#nuovo_esempio'
```

### Modificare Temi

Modifica le configurazioni Tailwind in:
- `app/assets/stylesheets/application.tailwind.css`
- `tailwind.config.js` (se presente)

## 🧪 Testing

```bash
# Test dell'applicazione demo
bin/rails test

# Linting codice
bin/rubocop

# Security check
bin/brakeman
```

## 📦 Build e Deploy

### Build Assets

```bash
# Build JavaScript
yarn build

# Build CSS
yarn build:css

# Build tutto insieme
bin/rails assets:precompile
```

### Deploy su Heroku

```bash
# Aggiungi buildpacks
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/ruby

# Deploy
git push heroku main
```

## 🔗 Integrazione con Better UI

Better UI Sample mostra diversi pattern di integrazione:

### 1. Gemma Locale (Development)
```ruby
# Gemfile
gem 'better_ui', path: '../better_ui'
```

### 2. Gemma Published (Production)
```ruby
# Gemfile  
gem 'better_ui', '~> 1.0'
```

### 3. Assets Locali (con yarn link)
```bash
# Setup assets development
cd ../better_ui_assets
yarn link

cd ../better_ui_sample  
yarn link "better-ui"
```

## 🐛 Troubleshooting

### Asset Build Issues

```bash
# Pulisci cache
bin/rails tmp:clear

# Rebuild assets
rm -rf app/assets/builds
yarn build && yarn build:css
```

### Database Issues

```bash
# Reset database completo
bin/rails db:drop db:create db:migrate db:seed
```

### Lookbook Non Carica

1. Verifica mount in `config/routes.rb`
2. Restart server
3. Controlla log per errori

## 📖 Documentazione

- **[Better UI Gemma](../better_ui/README.md)** - Documentazione componenti
- **[Better UI Assets](../better_ui_assets/README.md)** - Build tools e JavaScript
- **[Ecosystem](../README.md)** - Overview completa dell'ecosystem

## 🤝 Contributing

1. Aggiungi nuove demo per componenti creati
2. Migliora esempi esistenti
3. Documenta pattern di utilizzo
4. Testa integrazione con app reali

### Guidelines Demo

- **Una pagina per categoria** di componenti
- **Esempi pratici e realistici** non solo showcase
- **Codice commentato** per learning
- **Responsive design** su tutti i dispositivi
- **Accessibilità** come priorità

## 📄 License

Questo progetto demo è disponibile come open source sotto i termini della [MIT License](https://opensource.org/licenses/MIT).

---

**Better UI Sample** - Dove i componenti prendono vita ✨

*Parte dell'ecosystem [Better UI](../README.md)*


PROMPT:

Facciamo refactor di: Progress.

riscrivi la parte delle validazioni e dei getter per usare il nuovo formato:

[
          { constant: :PANEL_THEME_CLASSES, var: :@theme, default: :white, method: :get_theme_class }
        ].each do |config|
          define_method config[:method] do
            constant_hash = self.class.const_get(config[:constant])
            value = instance_variable_get(config[:var])
            constant_hash[value] || constant_hash[config[:default]]
          end
        end

        def validate_params
          validate_theme
        end

        [
          { values: PANEL_THEME_CLASSES.keys, method: :validate_theme, param: 'theme', var: :@theme }
        ].each do |validation|
          define_method validation[:method] do
            value = instance_variable_get(validation[:var])
            unless validation[:values].include?(value)
              raise ArgumentError, "#{self.class.name} - parametro '#{validation[:param]}' con valore '#{value}' non è valido. Deve essere uno tra: #{validation[:values].join(', ')}"
            end
          end
        end

In più controlla helper e preview per essere sicuti che vengano utilizzati i nuovi nomi standard per size e simili come MEDIUM -> nuovo MD

Una volta fatto questo aggiungi un metodo printfull e costruisci il componente direttamente con le classi ruby/rails dentro al metodo e fai il render del metodo dentro al file html