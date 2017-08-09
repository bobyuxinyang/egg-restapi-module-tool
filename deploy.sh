#!/bin/sh
daoUsername='bobyuxinyang'
daoPassword='3NzWxp[hKATfv'
repoName='ezland-data-analysis'

branch=$(git symbolic-ref --short -q HEAD)
date="$(date +%Y%m%d%H%M%S)"
tagName=$(git describe --tags)
image='daocloud.io/weimar/'${repoName}':'${branch}'-'${tagName}'-'${date}

docker login daocloud.io -p ${daoPassword} -u ${daoUsername}

docker build . -t ${image}

docker push ${image}

