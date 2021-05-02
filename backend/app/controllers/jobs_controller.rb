class JobsController < ApplicationController
  def index
    render json: GetGithubJobsService.perform(search_params)
  end

  private

  def search_params
    params.permit(:ip, :description, :location)
  end
end
