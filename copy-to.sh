#!/bin/bash
# Copyright 2017-2020 @polkadot/ui authors & contributors
# SPDX-License-Identifier: Apache-2.0

function copy_folder () {
  SRC="packages/$1/build"
  DST="../$2/node_modules/@polkadot/$1"

  echo "** Copying $SRC to $DST"

  rm -rf $DST
  cp -r $SRC $DST
}

yarn polkadot-dev-build-ts

if [ $# -eq 2 ]
  then
    copy_folder $2 $1
else
  copy_folder "react-identicon" $1
  copy_folder "react-qr" $1
  copy_folder "ui-assets" $1
  copy_folder "ui-keyring" $1
  copy_folder "ui-settings" $1
  copy_folder "ui-shared" $1
fi
