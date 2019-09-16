FROM ekwing/node:12.2.0

LABEL maintainer="L-Chris@563303226@qq.com"

USER root

ENV PROJECT_DIR /root/bugtags-api

RUN mkdir -p $PROJECT_DIR

COPY . $PROJECT_DIR

WORKDIR $PROJECT_DIR

RUN yarn \
  yarn build

EXPOSE 80

ENTRYPOINT ["yarn", "start:prod"]
