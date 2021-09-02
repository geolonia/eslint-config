#!/usr/env/bash

 find -d repos -depth 1 | \
    xargs -I {} \
      bash -c 'pushd "{}" && npm run lint && popd'
