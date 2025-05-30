// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";

import { registerBetterUiComponents } from "@pandev-srl/better_ui";

registerBetterUiComponents(window.Stimulus);
