Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # Change '*' to a specific origin if desired

    resource '*',
             headers: :any,
             methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
