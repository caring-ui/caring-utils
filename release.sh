#!/usr/bin/env sh
###
 # @Author: Wanko
 # @Date: 2024-05-29 15:44:23
 # @LastEditors: Wanko
 # @LastEditTime: 2024-05-29 16:52:56
 # @Description: 
### 

set -e

NODE_VERSION=$(node -p -e "require('./package.json').version")
echo "Current version is $NODE_VERSION"
echo "Enter release version: "
read VERSION
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo 
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "🕙 Releasing $VERSION ..."
  
  git ci "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"
  
  git push origin master
  npm publish
fi
echo "🎉 $VERSION version publish success"
