# How to run application

1) Download ruby and rails with pg driver.
2) Set up Postgres DB:
   > 1) Change 2 variables in 'config/database.yml'.
   Change password and username, optionally change database (default back_production)
   > 2) Run ```rails db:migrate```. This command will generate tables in DB.
3) Run application `rails server --binding=127.0.0.1` and then it will be worked with this url 'http://localhost:3000/'

____

# Useful Notes
1) DB nodes:
   > `rails db:migrate` - runs (single) migrations that have not run yet. 
   
   > `rails db:create`- creates the database 

   > `rails db:drop` - deletes the database

   > `rails db:schema:load` - creates tables and columns within the existing database following schema.rb. This will delete existing data. 

   > `rails db:setup` - does db:create, db:schema:load, db:seed 

   > `rails db:reset` - does db:drop, db:setup 

   > `rails db:migrate:reset` - does db:drop, db:create, db:migrate

   > `rails generate migration add_column_name_to_table_name field_name:type` - add column to exists table

2) Others notes:
   > rails g controller API::`someName` - create controller

