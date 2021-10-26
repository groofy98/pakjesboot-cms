#!/usr/bin/env sh

set -e

vue-cli-service build --mode deploy

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:groofy98/pakjesboot-cms.git master:gh-pages

cd -