class Api::EmailsController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
      dbEmails = Email.all
        render json: {emails: dbEmails}
  end

  def create
      new_email = Email.create( email_params )
      render json: new_email
      # redirect_to "http://localhost:3000/api/emails/show"
      # redirect_to email_path(new_email)
  end

  def new
    new_email = Email.new
  end

  def show
    new_email = Email.find(params[:id])
  end

  def update
      email = Email.find(params[:id])
      email.update(email_params)
      redirect_to "http://localhost:3000/api/emails"
  end

  def destroy
      Email.delete(params[:id])
      redirect_to root_path
  end

  private

    def email_params
        params.require(:email).permit(:name, :id)
    end

end
