1.

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

2. 执行一下代码

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

3. nvm -v
