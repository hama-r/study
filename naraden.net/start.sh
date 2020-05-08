confile=VUE_CLI_SERVICE_CONFIG_PATH=$PWD/config/$1/vue.config.js
domain=VUE_APP_DOMAIN=$1
# echo $test $dom
# echo $2
if [ "$2" = "serve" ]; then
  cross-env $confile $domain vue-cli-service serve
elif [ "$2" = "build" ]; then
  cross-env $confile $domain vue-cli-service build --no-clean
  
  if [ ! -e $PWD/templates/$1/ ]; then
    mkdir $PWD/templates/$1/
  fi
  for f in $PWD/webroot/$1/*.html; do
      echo $f
      basename $f
      dirname $f
      test=${f%.*}
      fname=${test##*/}
      mv -f $f $PWD/templates/$1/$fname.php
  done
fi
# cross-env VUE_CLI_SERVICE_CONFIG_PATH=$PWD/config/$1/vue.config.js VUE_APP_DOMAIN=$1 vue-cli-service serve


