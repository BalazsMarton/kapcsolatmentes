class Contact < MailForm::Base

  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :file,      :attachment => true

  attribute :message
  attribute :nickname,  :captcha  => true

	def headers
    {
      :subject => "Kapcsolatfelvétel",
      :to => "info@kapcsolatmentes.hu",
      :from => %("#{name}" <#{email}>)
    }
  end

end