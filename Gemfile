source "https://rubygems.org"

# One Jekyll line only
gem "jekyll", "~> 4.3"

# Theme
gem "minima", "~> 2.5"

group :jekyll_plugins do
  # allow newer feed (or just drop the version pin)
  gem "jekyll-feed", ">= 0.12", "< 1.0"
  gem "jekyll-redirect-from"
end

# Ruby 3 local serve helpers
gem "webrick", "~> 1.8"
gem "listen", ">= 3.8"
gem "public_suffix", ">= 5.0"

# Windows-only bits
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
