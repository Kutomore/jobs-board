class CreateSearches < ActiveRecord::Migration[6.1]
  def change
    create_table :searches, id: :uuid do |t|
      t.string :description
      t.string :location
      t.string :ip

      t.timestamps
    end
  end
end
