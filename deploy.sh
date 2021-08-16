rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master
git remote add origin git@github.com:wbs99/good-ui-website.git
git push -f -u origin master &&
cd ..
echo https://wbs99.github.io/good-ui-website/#/