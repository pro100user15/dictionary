# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_12_183942) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contents", force: :cascade do |t|
    t.string "content"
    t.string "translate"
    t.bigint "dictionary_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dictionary_id"], name: "index_contents_on_dictionary_id"
  end

  create_table "dictionaries", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_dictionaries_on_user_id"
  end

  create_table "tag_contents", force: :cascade do |t|
    t.bigint "tag_id", null: false
    t.bigint "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_tag_contents_on_content_id"
    t.index ["tag_id"], name: "index_tag_contents_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.bigint "dictionary_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dictionary_id"], name: "index_tags_on_dictionary_id"
  end

  create_table "theme_contents", force: :cascade do |t|
    t.bigint "theme_id", null: false
    t.bigint "content_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["content_id"], name: "index_theme_contents_on_content_id"
    t.index ["theme_id"], name: "index_theme_contents_on_theme_id"
  end

  create_table "themes", force: :cascade do |t|
    t.string "name"
    t.bigint "dictionary_id", null: false
    t.bigint "theme_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dictionary_id"], name: "index_themes_on_dictionary_id"
    t.index ["theme_id"], name: "index_themes_on_theme_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "contents", "dictionaries"
  add_foreign_key "dictionaries", "users"
  add_foreign_key "tag_contents", "contents"
  add_foreign_key "tag_contents", "tags"
  add_foreign_key "tags", "dictionaries"
  add_foreign_key "theme_contents", "contents"
  add_foreign_key "theme_contents", "themes"
  add_foreign_key "themes", "dictionaries"
  add_foreign_key "themes", "themes"
end
