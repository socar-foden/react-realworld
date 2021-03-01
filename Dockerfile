FROM node:14.15.1

WORKDIR /home/node/app

CMD [ "npm", "start" ]

# 빌드 명령어
# docker build -t realworld-f-img .

# 이미지 실행 명령어
# docker run --name realworld-f-con -v $(pwd):/home/node/app -p 80:80 realworld-f-img