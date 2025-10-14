## For Ubuntu

```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
```

if you see this kind of error when used `bundle install`

```
(base) mashud@Mashud-Ubuntu:~/Documents/GitHub/anmmashud.github.io$ bundle install Fetching https://github.com/RobertoJBeltran/jekyll-terser.git There was an error while trying to write to /var/lib/gems/3.2.0/cache/bundler/git. It is likely that you need to grant write permissions for that path.
```

then try:
```bash
gem install bundler --user-install
bundle config set --local path 'vendor/bundle'
bundle install
bundle update
```

after completeing the installation, start the server:

```bash
bundle exec jekyll serve
```
or, to livereload

```bash
bundle exec jekyll serve livereload
```

if it stucks on
```
Populating LSI...
Rebuilding index...
```

then your device might not have `imagemagick`

```bash
sudo apt update
sudo apt install imagemagick

```

To see the template running, open your browser and go to `http://localhost:4000`.


