json.extract! todo, :id, :name, :user_id, :description, :created_at, :updated_at
json.url todo_url(todo, format: :json)
