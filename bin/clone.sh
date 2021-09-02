#!/usr/env/bash

declare -a REPOS=(
  "geolonia/embed"
  "geolonia/app.geolonia.com"
  "geolonia/api.geolonia.com"
  "geolonia/api.app.geolonia.com"
)

mkdir -p repos
pushd repos

for REPO in ${REPOS[@]}; do
  FOLDER=${REPO//[\/]/__}
  if [ ! -d "$FOLDER" ] ; then
    git clone --depth 1 "git@github.com:$REPO.git" "$FOLDER"
  else
    pushd $FOLDER
    git pull
    popd
  fi
  pushd "$FOLDER"
  yarn
  npm link @geolonia/eslint-config
  popd
done

popd
