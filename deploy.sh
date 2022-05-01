#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
yarn build

# ビルド出力ディレクトリに移動
cd docs

# カスタムドメインにデプロイする場合
echo 'engrowth.com' > CNAME

cd -

git add .
git commit -m 'deploy'
git push
