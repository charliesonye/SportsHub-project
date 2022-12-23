class AddColumnToComps < ActiveRecord::Migration[6.1]
  def change
    add_column :competitions, :user_id, :integer
  end
end
