require 'faraday'

class GetGithubJobsService
  def self.perform(params)
    new(params).send :perform
  end

  private

  def initialize(params)
    @params = params
  end

  def perform
    save_search
    JSON.parse(Faraday.get('https://jobs.github.com/positions.json', params.except(:ip)).body)
  end

  def save_search
    Search.create(params)
  end

  attr_accessor :params
end