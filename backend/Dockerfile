FROM ruby:3.0.1
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir -p /jobs-board/backend
WORKDIR /jobs-board/backend
COPY Gemfile /jobs-board/backend/Gemfile
COPY Gemfile.lock /jobs-board/backend/Gemfile.lock
RUN bundle install
COPY . /jobs-board/backend

EXPOSE 3001

CMD rails s -p 3001 -b '0.0.0.0'
