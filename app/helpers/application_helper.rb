module ApplicationHelper
  # BetterUI General Components
  include BetterUi::General::Components::Icon::IconHelper
  include BetterUi::General::Components::Heading::HeadingHelper
  include BetterUi::General::Components::Field::FieldHelper
  include BetterUi::General::Components::Panel::PanelHelper
  include BetterUi::General::Components::Button::ButtonHelper
  include BetterUi::General::Components::Link::LinkHelper
  include BetterUi::General::Components::Text::TextHelper
  
  # BetterUI Input Components
  include BetterUi::General::Components::Input::Text::TextHelper
  include BetterUi::General::Components::Input::Checkbox::CheckboxHelper
end
