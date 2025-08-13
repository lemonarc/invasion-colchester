source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", ">= 0.12", "< 1.0"
  gem "jekyll-redirect-from"
  gem "jekyll-seo-tag"        # <- REQUIRED (in your _config.yml)
end

gem "webrick", "~> 1.8"
gem "listen", ">= 3.8"
gem "public_suffix", ">= 5.0"

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
