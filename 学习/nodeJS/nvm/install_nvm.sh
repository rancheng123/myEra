#!/bin/bash

{
  nvm_has() {
    type "$1" > /dev/null 2>&1
  }

  nvm_download() {
    if nvm_has "curl"; then
      curl -q $*
    elif nvm_has "wget"; then
      # Emulate curl with wget
      ARGS=$(echo "$*" | command sed -e 's/--progress-bar /--progress=bar /' \
                             -e 's/-L //' \
                             -e 's/-I /--server-response /' \
                             -e 's/-s /-q /' \
                             -e 's/-o /-O /' \
                             -e 's/-C - /-c /')
      wget $ARGS
    fi
  }

  nvm_detect_profile() {
    if [ -n "$PROFILE" -a -f "$PROFILE" ]; then
      echo "$PROFILE"
      return
    fi

    local DETECTED_PROFILE
    DETECTED_PROFILE=''
    local SHELLTYPE
    SHELLTYPE="$(basename /$SHELL)"

    if [ $SHELLTYPE = "bash" ]; then
      if [ -f "$HOME/.bashrc" ]; then
        DETECTED_PROFILE="$HOME/.bashrc"
      elif [ -f "$HOME/.bash_profile" ]; then
        DETECTED_PROFILE="$HOME/.bash_profile"
      fi
    elif [ $SHELLTYPE = "zsh" ]; then
      DETECTED_PROFILE="$HOME/.zshrc"
    fi

    if [ -z "$DETECTED_PROFILE" ]; then
      if [ -f "$HOME/.profile" ]; then
        DETECTED_PROFILE="$HOME/.profile"
      elif [ -f "$HOME/.bashrc" ]; then
        DETECTED_PROFILE="$HOME/.bashrc"
      elif [ -f "$HOME/.bash_profile" ]; then
        DETECTED_PROFILE="$HOME/.bash_profile"
      elif [ -f "$HOME/.zshrc" ]; then
        DETECTED_PROFILE="$HOME/.zshrc"
      fi
    fi

    if [ ! -z "$DETECTED_PROFILE" ]; then
      echo "$DETECTED_PROFILE"
    fi
  }

  nvm_reset() {
    unset -f nvm_has nvm_download nvm_detect_profile nvm_reset nvm_install
  }

  if [ -z "$NVM_DIR" ]; then
    NVM_DIR="$HOME/.nvm"
  fi

  nvm_install() {

    local LATEST_VERSION
    LATEST_VERSION="nvm-0.33.9"
    local NVM_PACKAGE_SOURCE
    NVM_PACKAGE_SOURCE="http://msstest-corp.sankuai.com/v1/mss_8bRwWktb50SCeRnoImr9GA==/nvm/$LATEST_VERSION.zip"
    local SOURCE_STR
    SOURCE_STR="\nexport NVM_DIR=\"$NVM_DIR\"\n[ -s \"\$NVM_DIR/nvm.sh\" ] && . \"\$NVM_DIR/nvm.sh\"  # This loads nvm"

    if [ -f "$HOME/$LATEST_VERSION.zip" ]; then
      echo "nvm package $LATEST_VERSION.zip already exist"
    else
      echo "Downloading $LATEST_VERSION.zip..."
      nvm_download  -s "$NVM_PACKAGE_SOURCE" -o "$HOME/$LATEST_VERSION.zip" || {
        echo >&2 "Failed to download '$LATEST_VERSION.zip'"
        return 1
      }
    fi

    if [ -d "$HOME/$LATEST_VERSION" ]; then
      rm -rf "$HOME/$LATEST_VERSION"
    fi
    unzip -q "$HOME/$LATEST_VERSION.zip" -d "$HOME"

    if [ -d "$NVM_DIR" ]; then
      rm -rf "$NVM_DIR"
    fi

    mv "$HOME/$LATEST_VERSION" "$NVM_DIR"
    rm "$HOME/$LATEST_VERSION.zip"

    . "$NVM_DIR/nvm.sh"
    NVM_NODEJS_ORG_MIRROR=http://npm.sankuai.com/mirrors/node

    local NVM_PROFILE
    NVM_PROFILE=$(nvm_detect_profile)
    local SOURCE_STR
    SOURCE_STR="\nexport NVM_DIR=\"$NVM_DIR\"\n[ -s \"\$NVM_DIR/nvm.sh\" ] && . \"\$NVM_DIR/nvm.sh\"  # This loads nvm"
    local EXPORT_STR
    EXPORT_STR="\nexport NVM_NODEJS_ORG_MIRROR=http://npm.sankuai.com/mirrors/node"

    if [ -z "$NVM_PROFILE" ] ; then
      echo "=> Profile not found. Tried $NVM_PROFILE (as defined in \$PROFILE), ~/.bashrc, ~/.bash_profile, ~/.zshrc, and ~/.profile."
      echo "=> Create one of them and run this script again"
      echo "=> Create it (touch $NVM_PROFILE) and run this script again"
      echo "   OR"
      echo "=> Append the following lines to the correct file yourself:"
      printf "$SOURCE_STR"
      echo
    else
      if ! command grep -qc '/nvm.sh' "$NVM_PROFILE"; then
        echo "=> Appending source string to $NVM_PROFILE"
        printf "$SOURCE_STR\n" >> "$NVM_PROFILE"
      else
        echo "=> Source string already in $NVM_PROFILE"
      fi
      if ! command grep -qc 'NVM_NODEJS_ORG_MIRROR' "$NVM_PROFILE"; then
        echo "=> Appending nvm mirrors string to $NVM_PROFILE"
        printf "$EXPORT_STR\n" >> "$NVM_PROFILE"
      else
        echo "=> nvm mirrors string already in $NVM_PROFILE"
      fi
    fi

    echo "=> Close and reopen your terminal to start using nvm"

    nvm_reset
  }

  nvm_install
}
