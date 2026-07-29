set -e

NODE_VERSION=$(node -p -e "require('./package.json').version")
echo "Current version is $NODE_VERSION"
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo  # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "🕙 Releasing $VERSION ..."
  npm version $VERSION --message "[release] $VERSION"
  cd src/caring-utils
  npm version $VERSION --message "[release] $VERSION"

  # git add .
  # git commit -m "[build] $VERSION"  
  git push origin main
  npm publish
fi
echo "🎉 $VERSION version publish success"