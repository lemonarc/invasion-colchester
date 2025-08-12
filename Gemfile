source "https://rubygems.org"

# Jekyll compatible with Ruby 3
gem "jekyll", "~> 4.3"

# Theme
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-redirect-from"
end

# Ruby 3 needs this when serving locally
gem "webrick", "~> 1.8"

# Make Bundler pick a Ruby-3 compatible watcher
gem "listen", ">= 3.8"

# Avoid old addressable pulling ancient public_suffix
gem "public_suffix", ">= 5.0"

# Windows-only bits (kept as-is)
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

